import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/space-mono";
import "@fontsource/space-mono/700.css";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
