import * as React from "react";
import Button from "src/shared/ui/utils/Button";
import Input from "src/shared/ui/utils/Input";

const AppointmentForm = () => {
  return (
    <div className="modal">
      <div className="modal-title">Termin</div>
      <div className="form-group flex flex-col">
        <label htmlFor="form-label">Title</label>
        <input type="text" className="form-input" name="form-label" id="eventTitle" placeholder="Arttermin, Meeting..." />
      </div>

      <div className="form-group">
        <label htmlFor="form-label">Title</label>

        <div className="category-selector">
          <Button type="button" klasses="cat-btn selected-other" data-cat="other">
            Allgemein
          </Button>
          <Button type="button" klasses="cat-btn bg-red" data-cat="arbeit">
            Arbeit
          </Button>
          <Button type="button" klasses="cat-btn" data-cat="gesundheit">
            Gesundheit
          </Button>
          <Button type="button" klasses="cat-btn" data-cat="persönlich">
            Persönlich
          </Button>
        </div>
      </div>

      <div className="form-row">
        <Input type="date" klasses="form-input" label="Datum" />
        <Input type="time" klasses="form-input" label="Time" />
      </div>

      <div className="form-row">
        <Input type="number" klasses="form-input" placeholder="0" label="Dauer" />
        <Input type="text" klasses="form-input" placeholder="Raum, Adresse..." label="Ort" />
      </div>

      <div className="form-group">
        <label className="form-label">Notizen</label>
        <textarea className="form-textarea" id="eventNotes" placeholder="Zusätzliche Infos..."></textarea>
      </div>
    </div>
  );
};

export default AppointmentForm;
