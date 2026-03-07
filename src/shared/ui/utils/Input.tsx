import type { AppointmentType } from "@features/appointments/modal/appointments";
import type { InputHTMLAttributes, JSX } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  containerKlasses?: string;
  klasses?: string;
  label: string;
}

const Input = ({ type = "text", klasses, label, id, containerKlasses, name, ...props }: InputProps): JSX.Element => {
  const inputId = id || `${label.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className={`form-group ${containerKlasses || ""}`}>
      <label className="form-label" htmlFor={inputId}>
        {label}
      </label>
      <input type={type} className={`form-input ${klasses || ""}`} name={name} id={inputId} {...props} />
    </div>
  );
};

export default Input;
