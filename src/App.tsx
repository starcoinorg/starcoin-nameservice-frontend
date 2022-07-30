import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { AuthProvider } from "./components/Auth/Auth";

const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);

ReactDOM.render(<App />, document.getElementById("app"));
