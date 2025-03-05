// components/ui/Button.jsx
"use client";
export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-md bg-amber-100/10 hover:bg-amber-100/20 text-amber-100 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
