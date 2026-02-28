import type { InputHTMLAttributes, JSX } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  klasses?: string;
  label: string;
}

const Input = ({ klasses, label, id, ...props }: InputProps): JSX.Element => {
  const inputId = id || `input-${label.replace(/\s+/g, "-").toLowerCase()}`;
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={inputId}>
        {label}
      </label>
      <input className={klasses} name={inputId} {...props} />
    </div>
  );
};

export default Input;
