import React from "react";
import { NavBar } from "./components/NavBar";
import { Header } from "./components/header";
import { Footer } from "./components/Footer";
import { DepartmentCard } from "./components/DepartmentCard";
import departmentsData from "./data/employees.json";
import type { Department } from "./types";

import "./index.css";

const App: React.FC = () => {
  const departments: Department[] = departmentsData;

  return (
    <>
      <NavBar />
      <Header />
      <main>
        <h2>Our Staff</h2>
        {departments.map((dept, index) => (
          <DepartmentCard key={index} department={dept} />
        ))}
      </main>
      <Footer />
    </>
  );
};

export default App;
