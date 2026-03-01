import { useState, type JSX } from "react";
import Input from "src/shared/ui/utils/Input";
import CategorySelector from "./CategorySelector";
import FormActions from "./FormActions";

const AppointmentForm = (): JSX.Element => {
  const [categorie, setCategorie] = useState<string>("allgemein");

  const handleCategorieSelect = (cat) => {
    setCategorie(cat);
  };

  return (
    <div className="modal">
      <h2 className="modal-title">Termin hinzufügen</h2>
      {/****** Title *****/}
      <Input type="text" label="Time" id="eventTitle" placeholder="Arttermin, Meeting..." autoFocus />

      {/****** Categories *****/}
      <CategorySelector onSelect={handleCategorieSelect} selectedID={categorie} />

      {/****** Date and Time *****/}
      <div className="form-row">
        <Input type="date" label="Datum" />
        <Input type="time" label="Time" />
      </div>

      {/****** Period and Place *****/}
      <div className="form-row">
        <Input type="number" placeholder="30 min" label="Dauer" />
        <Input type="text" placeholder="Raum, Adresse..." label="Ort" />
      </div>

      {/****** Notes *****/}
      <div className="form-group">
        <label className="form-label" htmlFor="eventNotes">
          Notizen
        </label>
        <textarea className="form-textarea" id="eventNotes" placeholder="Zusätzliche Infos..."></textarea>
      </div>

      <FormActions />
    </div>
  );
};

export default AppointmentForm;
