import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";

export default function AppLayout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Navbar toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
      <Dashboard/>
    </>
  );
}