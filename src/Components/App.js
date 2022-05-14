import React from "react";
import "../SASS/main.scss";
import Header from "../Sections/Header/Header";
import Specification from "../Sections/Specification/Specification";

const App = () => {
  return (
    <main className="main">
      <Header />
      <Specification />
    </main>
  );
};

export default App;
