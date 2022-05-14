import React from "react";
import "../SASS/main.scss";
import Footer from "../Sections/Footer/Foter";
import Form from "../Sections/Form/Form";
import Header from "../Sections/Header/Header";
import Moment from "../Sections/Moment/Moment";
import Other from "../Sections/Other/Other";
import Specification from "../Sections/Specification/Specification";

const App = () => {
  return (
    <main className="main">
      <Header />
      <Specification />
      <Moment />
      <Other />
      <Form />
      <Footer />
    </main>
  );
};

export default App;
