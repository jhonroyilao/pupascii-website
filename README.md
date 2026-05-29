# PUP ASCII Website

Official website for the **PUP Association of Students for Computer Intelligence and Integration** - a Computer Science academic organization at the Polytechnic University of the Philippines.

---

## Prerequisites

Before you begin, make sure you have the following installed on your computer:

- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **pnpm** (recommended)

To check if you have Node.js installed, open your terminal and run:

```bash
node --version
```

---

## Installation

### Step 1: Clone the Repository

Open your terminal and run:

```bash
git clone https://github.com/jhonroyilao/pupascii-website.git
```

### Step 2: Navigate to the Project Folder

```bash
cd pupascii-website
```

### Step 3: Install Dependencies

Using npm:

```bash
npm install
```

Or using pnpm (recommended):

```bash
pnpm install
```

---

## Running the Project

### Development Mode

To start the development server with hot-reload:

```bash
npm run dev
```

Or with pnpm:

```bash
pnpm dev
```

The website will be available at: **http://localhost:3000**

### Production Build

To create an optimized production build:

```bash
npm run build
```

Then start the production server:

```bash
npm run start
```

---

## Project Structure

```
pup-ascii-website-prototype/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── committee/         # Committee page
│   ├── members/           # Members page
│   ├── events/            # Events page
│   ├── contacts/          # Contacts page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── navbar.tsx         # Navigation bar
│   ├── footer.tsx         # Footer
│   ├── hero-section.tsx   # Hero section
│   ├── about-preview.tsx  # About preview section
│   ├── faq-section.tsx    # FAQ section
│   └── ui/                # UI components (shadcn/ui)
├── public/                # Static assets
└── package.json           # Project dependencies
```

---

## Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with hero, about preview, and FAQ |
| About | `/about` | Mission, vision, objectives, and history |
| Committee | `/committee` | Executive officers and department heads |
| Members | `/members` | Member directory with search and filters |
| Events | `/events` | Upcoming and past events |
| Contacts | `/contacts` | Contact form and social media links |

---

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui, magic ui, etc.
- **Icons**: Lucide React
- **Font**: San Francisco (System Font)

---

## Troubleshooting

### "Module not found" error

Run the install command again:

```bash
npm install
```

### Port 3000 is already in use

Stop the other process using port 3000, or run on a different port:

```bash
npm run dev -- -p 3001
```

### Styles not loading

Clear the Next.js cache:

```bash
rm -rf .next
npm run dev
```

---

## Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Commit: `git commit -m "Add your feature"`
5. Push: `git push origin feature/your-feature`
6. Open a Pull Request

---

## License

This project is for the PUP ASCII organization.

---
