import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer>
      &copy; Pixell River Financial {new Date().getFullYear()}
    </footer>
  );
};
