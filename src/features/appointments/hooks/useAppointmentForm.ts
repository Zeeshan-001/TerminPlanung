import { useState, useCallback } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { type AppointmentType } from "../modal/appointments";

export const useAppointmentForm = (initialData: AppointmentType) => {
  const [appointment, setAppointment] = useState<AppointmentType>(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Generic Field Setter
  const setField = useCallback(<k extends keyof AppointmentType>(field: k, value: AppointmentType[k]) => {
    setAppointment((prev) => ({ ...prev, [field]: value }));
  }, []);

  // Change Input Text
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.currentTarget;
    setAppointment((prev) => ({ ...prev, [name]: name === "durationInMinutes" ? Number(value) || 0 : value }));
  }, []);

  // Category Select
  const handleSelect = useCallback(
    (cat: AppointmentType["category"]) => {
      setField("category", cat);
    },
    [setField],
  );

  // Form Reset
  const resetForm = useCallback(() => {
    setAppointment(initialData);
    setError(null);
  }, [initialData]);

  // Submitt Form
  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>, handleSubmitAction: () => Promise<void>) => {
      e.preventDefault();

      if (isSubmitting) return;

      setIsSubmitting(true);
      setError(null);

      try {
        await handleSubmitAction();
        resetForm();
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
    handleSubmit,
    resetForm,
    handleSelect,
    isSubmitting,
    error,
  };
};
