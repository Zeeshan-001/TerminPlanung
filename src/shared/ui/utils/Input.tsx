import type { InputHTMLAttributes, JSX } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  containerKlasses?: string;
  klasses?: string;
  label: string;
}

const Input = ({ klasses, label, id, containerKlasses, name, ...props }: InputProps): JSX.Element => {
  const inputId = id || `input-${label.replace(/\s+/g, "-").toUpperCase()}`;
  return (
    <div className={`form-group ${containerKlasses || ""}`}>
      <label className="form-label" htmlFor={inputId}>
        {label}
      </label>
      <input className={`form-input ${klasses || ""}`} name={name || inputId} id={inputId} {...props} />
    </div>
  );
};

export default Input;
