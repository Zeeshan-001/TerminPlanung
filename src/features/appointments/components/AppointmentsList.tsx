import type { JSX } from "react";
import { type AppointmentType } from "./../modal/appointments";

type AppointmentsListProps = {
  data: AppointmentType[];
};

const AppointmentsList = ({ data }: AppointmentsListProps): JSX.Element => {
  return (
    <section aria-labelledby="appointments-title">
      <h2 className="section-title">Nächste Termine</h2>
      <div id="upcomingList" role="list">
        {data.map(({ id, label, category, date, time, durationInMinutes, note }) => (
          <article key={id} className={`event-chip category-${category.toLowerCase()}`} role="listitem">
            <span className="chip-date">{date instanceof Date ? date.toLocaleDateString() : date}</span>
            <h2 className="chip-title">{label}</h2>
            <p className="chip-time">
              {time} - {durationInMinutes} Min
            </p>

            <p className="chip-note">{note}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default AppointmentsList;
