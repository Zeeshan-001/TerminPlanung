import { useRef, useState } from "react";
import "./App.css";

function validatePeriod(start: Date, end: Date): boolean {
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime)) {
    throw new Error("Invalid Date");
  }
  return start.getTime() < end.getTime();
}

function App() {
  return <></>;
}

export default App;
