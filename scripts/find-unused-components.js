const fs = require('fs')
const path = require('path')

const workspaceRoot = process.cwd()
const componentsDir = path.join(workspaceRoot, 'components')
const scanDirs = ['app', 'components', 'hooks', 'lib']

function walk(dir) {
  let results = []
  const list = fs.readdirSync(dir)
  for (const file of list) {
    const full = path.join(dir, file)
    const stat = fs.statSync(full)
    if (stat && stat.isDirectory()) {
      if (file === '.next' || file === 'node_modules') continue
      results = results.concat(walk(full))
    } else {
      results.push(full)
    }
  }
  return results
}

function rel(p) { return path.relative(workspaceRoot, p).split(path.sep).join('/') }

// gather component files
let componentFiles = []
if (fs.existsSync(componentsDir)) {
  componentFiles = walk(componentsDir).filter(f => /\.(js|jsx|ts|tsx)$/.test(f)).map(rel)
}

// gather source files to scan
let sourceFiles = []
for (const d of scanDirs) {
  const dir = path.join(workspaceRoot, d)
  if (!fs.existsSync(dir)) continue
  sourceFiles = sourceFiles.concat(walk(dir).filter(f=>/\.(js|jsx|ts|tsx)$/.test(f)))
}
sourceFiles = [...new Set(sourceFiles)].map(rel)

// collect import specifiers
const importRegex = /from\s+["'](@\/components\/[^"']+)["']/g
const dynamicImportRegex = /import\(["'](@\/components\/[^"]+)["']\)/g

const imported = new Set()
for (const sf of sourceFiles) {
  const content = fs.readFileSync(path.join(workspaceRoot, sf), 'utf8')
  let m
  while ((m = importRegex.exec(content)) !== null) imported.add(m[1])
  while ((m = dynamicImportRegex.exec(content)) !== null) imported.add(m[1])
}

// helper to normalize component path to import specifier without extension
function toSpecifier(compPath) {
  // compPath like 'components/ui/button.jsx'
  const noPrefix = compPath.replace(/^components\//, '')
  const noExt = noPrefix.replace(/\.(js|jsx|ts|tsx)$/, '')
  return '@/components/' + noExt
}

const unused = []
for (const cf of componentFiles) {
  const spec = toSpecifier(cf)
  if (!imported.has(spec)) unused.push(cf)
}

console.log('Scanned', componentFiles.length, 'component files')
console.log('Scanned', sourceFiles.length, 'source files')
console.log('Found', imported.size, 'unique component import specifiers')
console.log('---')
if (unused.length === 0) {
  console.log('No unused component files detected (fast scan).')
} else {
  console.log('Candidate unused component files (fast scan):')
  for (const u of unused) console.log(u)
}
