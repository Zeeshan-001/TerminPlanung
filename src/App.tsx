import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DayCell from "./calendar/components/DayCell";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DayCell />
    </>
  );
}

export default App;
