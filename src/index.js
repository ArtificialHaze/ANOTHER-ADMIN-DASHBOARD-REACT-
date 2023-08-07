import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DarkModeContextProvider } from "./darkModeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <DarkModeContextProvider>
    <App />
  </DarkModeContextProvider>
);
