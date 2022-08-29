import "./index.css";

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { AuthProvider } from "./components/Auth/Auth";
import { DashBoard } from "./pages/Dashboard";
import { Address } from "./pages/Address";
import { Domain } from "./pages/Domain";

const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/domains" element={<DashBoard />} />
        <Route path="/faq" element={<DashBoard />} />
        <Route path="/about" element={<DashBoard />} />
        <Route path="/domain/:name" element={<Domain />} />
        <Route path="/address/:hash" element={<Address />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
