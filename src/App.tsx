import "./App.css";
import AppointmentForm from "@features/appointments/components/appointmentsForm/AppointmentForm";
import { APPOINTMENTS } from "@features/appointments/modal/appointments";
import Dashboard from "@features/dashboard/pages/DashboardPage";
import Header from "@features/header/header";
import { useState, type JSX } from "react";
import type { Appointment } from "./types/appointment";

function App(): JSX.Element {
  const [appointments, setAppointments] = useState<Appointment[]>(APPOINTMENTS);
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

  const openAppointmentForm = () => setIsFormOpen(true);
  const closeAppointmentForm = () => setIsFormOpen(false);

  return (
    <>
      <Header />
      <Dashboard onAdd={openAppointmentForm} />
      {isFormOpen && <AppointmentForm setData={setAppointments} onClose={closeAppointmentForm} />}
    </>
  );
}

export default App;
