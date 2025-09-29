import React from "react";
import AppLayout from "./layouts/AppLayout";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';  
import './index.css';

export default function App() {
  return (
    <>
      <div className="container-fluid">
        <section name="navbar-section">
            <AppLayout />
        </section>
      </div>
    </>
      
  );
}