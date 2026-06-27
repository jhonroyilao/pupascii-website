export function EventMeta({ icon: Icon, children, light = false }) {
  return (
    <span className={`inline-flex items-center gap-1.5 text-sm font-medium ${light ? "text-white/85" : "text-[#063A80]"}`}>
      <Icon className="h-4 w-4" />
      {children}
    </span>
  );
}