import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  //re-reder code d3 check
  <StrictMode>
    <App />
  </StrictMode>
);
