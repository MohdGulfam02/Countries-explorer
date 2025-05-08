import React, { useState } from "react";
import Header from "./components/Header";

import "./App.css";
import { Outlet } from "react-router";

export default function App() {
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')));

  return (
    <>
      <Header theme={[isDark, setIsDark]}/>
      <Outlet context={[isDark, setIsDark]}/>
    </>
  );
}
