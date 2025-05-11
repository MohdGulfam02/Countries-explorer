import React, { useState } from "react";
import Header from "./components/Header";

import "./App.css";
import { Outlet } from "react-router";
import { ThemeContext, ThemeProvider } from "./contexts/ThemeContext";

export default function App() {
 

  return (
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
}
