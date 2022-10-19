import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="text-center py-3 bg-primary text-white">
      <p>copyright JacobfFrye @ {year}</p>
    </footer>
  );
};

export default Footer;
