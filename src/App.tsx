import AppointmentsList from "@features/appointments/components/AppointmentsList";
import "./App.css";
import AppointmentForm from "@features/appointments/components/appointmentsForm/AppointmentForm";

function App() {
  return (
    <div>
      <AppointmentForm />
      <AppointmentsList />
    </div>
  );
}

export default App;
