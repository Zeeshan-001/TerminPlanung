import { useState, useCallback } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { APPOINTMENTS, type AppointmentType } from "../modal/appointments";

export const useAppointmentForm = (initialData: AppointmentType) => {
  const [appointments, setAppointments] = useState<AppointmentType[]>(APPOINTMENTS);
  const [appointment, setAppointment] = useState<AppointmentType>(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // *************************************
  //      Change Input Text
  // *************************************
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.currentTarget;
    setAppointment((prev) => ({ ...prev, [name]: name === "durationInMinutes" ? Number(value) || 0 : value }));
  }, []);

  // **********  Set Fields  *********** \\
  const setField = useCallback(<K extends keyof AppointmentType>(field: K, value: AppointmentType[K]) => {
    setAppointment((prev) => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  // *************************************
  //      Handle Select
  // *************************************
  const handleSelect = useCallback((cat: AppointmentType["category"]) => {
    setAppointment((prev) => ({ ...prev, category: cat }));
  }, []);

  // *************************************
  //      Form Reset
  // *************************************
  const resetForm = useCallback(() => {
    setAppointment(initialData);
    setError(null);
  }, [initialData]);

  // *************************************
  //      Submitt Actions
  // *************************************
  const submitAction = useCallback((newData: AppointmentType): void => {
    console.log("submitted");
    setAppointments((prevList) => [...prevList, newData]);
  }, []);

  // *************************************
  //      Submitt Form
  // *************************************
  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>, onSubmitAction: (data: AppointmentType) => Promise<void>) => {
      e.preventDefault();

      if (isSubmitting) return;

      setIsSubmitting(true);
      setError(null);

      try {
        await onSubmitAction(appointment);
      } catch (err) {
        if (err instanceof Error) {
          setError("Fehler bein Speichern");
        }
      } finally {
        setIsSubmitting(false);
      }
    },
    [isSubmitting, appointment],
  );

  return {
    appointment,
    handleChange,
    setField,
    handleSubmit,
    resetForm,
    handleSelect,
    appointments,
    isSubmitting,
    error,
  };
};
