interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
 
  className?: string;
}

export default function Button({ onClick, children, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 font-semibold transition ${className || ""}`}
    >
      {children}
    </button>
  );
}
