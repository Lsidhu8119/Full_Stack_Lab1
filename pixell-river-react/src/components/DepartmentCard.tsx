import React from "react";
import type { Department } from "../types";

interface Props {
  department: Department;
}

export const DepartmentCard: React.FC<Props> = ({ department }) => {
  return (
    <div className="department-card">
      <h4>{department.department}</h4>
      <ul>
        {department.employees.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};
