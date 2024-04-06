import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Homepage from "./Pages/Homepage.jsx";
import ErrorEl from "./Components/ErrorEl.jsx";
import NewsAll from "./Components/NewsAll.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} errorElement={<ErrorEl />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/news" element={<NewsAll />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
