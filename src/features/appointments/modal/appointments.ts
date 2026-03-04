import { createAppointmentId } from "./createAppointment";

export type Categories = "Allgemein" | "Arbeit" | "Gesundheit" | "Persönlich";

export type AppointmentType = {
  readonly id: string;
  label: string;
  category: Categories;
  date: string | Date;
  time: string;
  durationInMinutes?: number;
  location?: string;
  note?: string;
};

export const APPOINTMENTS: readonly AppointmentType[] = [
  {
    id: `${createAppointmentId("Gesundheit")}`,
    label: "Arzttermin (Dentist)",
    category: "Gesundheit",
    date: "2026-03-04",
    time: "13:40",
    durationInMinutes: 60,
    location: "Berlin Health Center",
    note: "Bring insurance card",
  },
  {
    id: `${createAppointmentId("Allgemein")}`,
    label: "Advanced Mathematics Lecture",
    category: "Allgemein",
    date: "2026-03-05",
    time: "10:00",
    durationInMinutes: 90,
    location: "Auditorium Maximum",
    note: "Review Chapter 4 beforehand",
  },
  {
    id: `${createAppointmentId("Arbeit")}`,
    label: "Project Sync: Project Alpha",
    category: "Arbeit",
    date: "2026-03-05",
    time: "15:30",
    durationInMinutes: 45,
    location: "Microsoft Teams",
    note: "Prepare weekly progress report",
  },
  {
    id: `${createAppointmentId("Persönlich")}`,
    label: "Gym Session",
    category: "Persönlich",
    date: "2026-03-06",
    time: "07:00",
    durationInMinutes: 60,
    location: "FitX Downtown",
    note: "Leg day",
  },
] as const;
