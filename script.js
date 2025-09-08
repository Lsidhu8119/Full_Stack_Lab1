document.addEventListener("DOMContentLoaded", () => {
    // Set current year in footer
    const yearEl = document.getElementById("copyright-year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  
    // Build department sections
    const main = document.getElementById("content");
    if (!main) return;
  
    const section = document.createElement("section");
    section.id = "employees-by-dept";
    section.className = "departments";
  
    departmentsData.forEach(({ department, employees }) => {
      const card = document.createElement("article");
      card.className = "department-card";
  
      const h4 = document.createElement("h4");
      h4.textContent = department;
  
      const ul = document.createElement("ul");
      employees.forEach(name => {
        const li = document.createElement("li");
        li.textContent = name;
        ul.appendChild(li);
      });
  
      card.appendChild(h4);
      card.appendChild(ul);
      section.appendChild(card);
    });
  
    main.appendChild(section);
  });
  