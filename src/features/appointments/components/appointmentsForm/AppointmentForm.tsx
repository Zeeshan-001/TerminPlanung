import { useState, type JSX } from "react";
import Input from "src/shared/ui/utils/Input";
import CategorySelector from "./CategorySelector";
import FormActions from "./FormActions";
import { initialAppointment, type AppointmentType } from "@features/appointments/modal/appointments";
import { CATEGORIES } from "./../../modal/categories";
import { useAppointmentForm } from "@features/appointments/hooks/useAppointmentForm";

const AppointmentForm = (): JSX.Element => {
  const { appointment: a, handleChange, handleSelect, setField, handleSubmit, isSubmitting, error, resetForm } = useAppointmentForm(initialAppointment);

  return (
    <div className="modal">
      <h2 className="modal-title">Termin hinzufügen</h2>
      {/****** Title *****/}
      <Input label="Title" placeholder="Arttermin, Meeting..." onChange={handleChange} autoFocus value={a.title} name={"title"} />

      {/****** Categories *****/}
      <CategorySelector onSelect={handleSelect} selectedID={a.category} />

      {/****** Date and Time *****/}
      <div className="form-row">
        <Input type="date" label="Datum" onChange={handleChange} value={a.date} name="date" />
        <Input type="time" label="Time" onChange={handleChange} value={a.time} name="time" />
      </div>

      {/****** Period and Place *****/}
      <div className="form-row">
        <Input type="number" placeholder="30 min" label="Dauer (Min.)" onChange={handleChange} value={a.durationInMinutes} name="durationInMinutes" />
        <Input placeholder="Raum, Adresse..." label="Ort" onChange={handleChange} value={a.location} name="location" />
      </div>

      {/****** Notes *****/}
      <div className="form-group">
        <label className="form-label" htmlFor="eventNotes">
          Notizen
        </label>
        <textarea className="form-textarea" id="eventNotes" placeholder="Zusätzliche Infos..." onChange={handleChange} value={a.note} name="note"></textarea>
      </div>

      <FormActions onReset={resetForm} onSubmit={handleSubmit} />
    </div>
  );
};

export default AppointmentForm;
