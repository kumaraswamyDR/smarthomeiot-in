export default function Button({ children, variant = "primary", href }: any) {
  const styles =
    variant === "primary"
      ? "bg-brand-primary text-white hover:bg-brand-accent hover:text-brand-dark"
      : "border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white";
  return (
    <a
      href={href}
      className={`inline-block rounded-full px-6 py-2.5 font-medium shadow-md hover:shadow-glow transition ${styles}`}
    >
      {children}
    </a>
  );
}
