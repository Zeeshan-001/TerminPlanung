import type { JSX } from "react";
import Button from "src/shared/ui/utils/Button";

interface FormactionProps {
  onReset: () => void;
  onSubmit: () => void;
}

const FormActions = ({ onReset, onSubmit }: FormactionProps): JSX.Element => {
  return (
    <div className="modal-actions">
      <Button klasses="btn-ghost btn-danger" onClick={onReset}>
        Löschen
      </Button>

      <Button klasses="btn-primary" onClick={onSubmit}>
        Speichern
      </Button>

      <Button klasses="btn-ghost" onClick={onReset}>
        Abbrechnen
      </Button>
    </div>
  );
};

export default FormActions;
