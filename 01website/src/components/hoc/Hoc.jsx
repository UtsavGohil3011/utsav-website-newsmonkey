// Hoc.jsx

import React from "react";
import Header from "../header/Header"; // Importing Header component
import Footer from "../footer/Footer"; // Importing Footer component

function Hoc(Component) {
  function NewComponent() {
    return (
      <>
        <Header />
        <Component />
        <Footer />
      </>
    );
  }
  return NewComponent;
}

export default Hoc;
