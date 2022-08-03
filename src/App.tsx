import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { AuthProvider } from "./components/Auth/Auth";
import { DashBoard } from "./pages/Dashboard";
import { Address } from "./pages/Address";

const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/address/:hash" element={<Address />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);

ReactDOM.render(<App />, document.getElementById("app"));
