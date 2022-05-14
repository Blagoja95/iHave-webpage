import React from "react";
import "../SASS/main.scss";
import Header from "../Sections/Header/Header";
import Moment from "../Sections/Moment/Moment";
import Specification from "../Sections/Specification/Specification";

const App = () => {
  return (
    <main className="main">
      <Header />
      <Specification />
      <Moment />
    </main>
  );
};

export default App;
