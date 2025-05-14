import React from "react";
import ReactDOM from "react-dom/client";
import emailjs from "@emailjs/browser";

import App from "./App";
import "./index.css";

// Initialize EmailJS with your public key
emailjs.init(import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
