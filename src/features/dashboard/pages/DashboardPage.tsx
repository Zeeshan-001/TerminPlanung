import type { JSX } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FaRegCalendarPlus } from "react-icons/fa6";
import Button from "src/shared/ui/utils/Button";

interface DashboardProps {
  onAdd: () => void;
}

const Dashboard = ({ onAdd }: DashboardProps): JSX.Element => {
  return (
    <main>
      <header className="view-header">
        <div className="flex flex-row gap-3">
          <Button className="nav-btn" aria-label="Previous Month">
            <FaAngleLeft />
          </Button>
          <div className="view-title" id="viewTitle">
            März 2026
          </div>
          <Button className="nav-btn" aria-label="Next Month">
            <FaAngleRight />
          </Button>
          <Button className="pill">Heute</Button>
        </div>
        <Button className="add-btn flex flex-row gap-2" onClick={onAdd}>
          <FaRegCalendarPlus /> Termin
        </Button>
      </header>
    </main>
  );
};

export default Dashboard;
