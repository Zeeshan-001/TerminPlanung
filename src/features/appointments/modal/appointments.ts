import type { CATEGORIES } from "./categories";
import { createAppointmentId } from "./createAppointment";

export type AppointmentType = {
  readonly id: string;
  title: string;
  category: (typeof CATEGORIES)[number]["id"];
  date: string;
  time: string;
  durationInMinutes?: number;
  location?: string;
  note?: string;
};

export const initialAppointment: AppointmentType = {
  id: "",
  title: "",
  category: "allgemein",
  date: "",
  time: "",
  durationInMinutes: 0,
  location: "",
  note: "",
};

export const APPOINTMENTS: AppointmentType[] = [
  {
    id: `${createAppointmentId("Gesundheit")}`,
    title: "Arzttermin (Dentist)",
    category: "gesundheit",
    date: "2026-03-04",
    time: "13:40",
    durationInMinutes: 60,
    location: "Berlin Health Center",
    note: "Bring insurance card",
  },
  {
    id: `${createAppointmentId("Allgemein")}`,
    title: "Advanced Mathematics Lecture",
    category: "allgemein",
    date: "2026-03-05",
    time: "10:00",
    durationInMinutes: 90,
    location: "Auditorium Maximum",
    note: "Review Chapter 4 beforehand",
  },
  {
    id: `${createAppointmentId("Arbeit")}`,
    title: "Project Sync: Project Alpha",
    category: "arbeit",
    date: "2026-03-05",
    time: "15:30",
    durationInMinutes: 45,
    location: "Microsoft Teams",
    note: "Prepare weekly progress report",
  },
  {
    id: `${createAppointmentId("Persönlich")}`,
    title: "Gym Session",
    category: "persönlich",
    date: "2026-03-06",
    time: "07:00",
    durationInMinutes: 60,
    location: "FitX Downtown",
    note: "Leg day",
  },
] as const;
