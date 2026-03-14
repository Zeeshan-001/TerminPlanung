import type { JSX } from "react";
import Button from "src/shared/ui/utils/Button";

interface FormactionProps {
  onReset: () => void;
  onClose: () => void;
}

const FormActions = ({ onReset, onClose }: FormactionProps): JSX.Element => {
  return (
    <div className="modal-actions">
      <Button klasses="btn-ghost btn-danger" onClick={onReset}>
        Reset
      </Button>

      <Button klasses="btn-primary" type="submit">
        Speichern
      </Button>

      <Button klasses="btn-ghost" onClick={onClose}>
        Abbrechnen
      </Button>
    </div>
  );
};

export default FormActions;
