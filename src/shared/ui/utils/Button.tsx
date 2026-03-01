import type { JSX, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  klasses?: string;
}

const Button = ({ klasses, children, ...props }: ButtonProps) => {
  return (
    <button className={klasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
