import type { JSX } from "react";
import Button from "src/shared/ui/utils/Button";

const FormActions = (): JSX.Element => {
  return (
    <div className="modal-actions">
      <Button klasses="btn-ghost btn-danger" id="deleteBtn" onClick="deleteEvent()">
        Löschen
      </Button>
      <Button klasses="btn-primary" onClick="saveEvent()">
        Speichern
      </Button>
      <Button klasses="btn-ghost" onClick="closeModal()">
        Abbrechnen
      </Button>
    </div>
  );
};

export default FormActions;
