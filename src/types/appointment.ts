export type AppointmentId = string & { readonly brand: unique symbol };

export interface Appointment {
  id: AppointmentId;
  title: string;
  description?: string;
  start: Date;
  end: Date;
  createdAt: Date;
}
