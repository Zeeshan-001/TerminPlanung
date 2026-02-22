import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { lazyLoad } from "../../shared/utils/LazyLoad";

const Dashboard = lazyLoad(() => import("@features/dashboard/pages/DashboardPage"));
const Calendar = lazyLoad(() => import("@features/calendar/pages/CalendarPage"));
const Appointments = lazyLoad(() => import("@features/appointments/pages/AppointmentsPage"));

const RouteFallback = () => {
  return <p>Loading...</p>;
};

const RoutesBase = () => {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesBase;
