import type { AppointmentId } from "src/types/appointment";

// Automatisch id generieren
export function createAppointmentId(id: string): AppointmentId {
  const timmed = id.trim();

  if (!timmed) {
    throw new Error("AppointmantID cannot be Empty");
  }

  return `${timmed}--${crypto.randomUUID()}` as AppointmentId;
}

// Validate Date
export function validateDate(date: Date): Date {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
    throw new Error("Date is not Valid");
  }

  return new Date(date.getDate());
}

// Validate Time
export function validateTime(time: string): string {
  if (!time.trim()) {
    throw new Error("Time cannot Empty");
  }

  const timeRegex = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;

  if (!timeRegex.test(time)) {
    throw new Error("Invalid Time Format");
  }

  return time;
}

// Start/End validieren (End > Start)
export function validatePeriod(start: Date, end: Date): boolean {
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime)) {
    throw new Error("Invalid Date");
  }
  return start.getTime() < end.getTime();
}
