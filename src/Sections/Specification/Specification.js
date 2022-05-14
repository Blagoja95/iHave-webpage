import React, { useState } from "react";
import SpecCtrl from "./SpecificationControl";
import SpecPar from "./SpecificationParagraphs";

const Specification = () => {
  const [result, setResult] = useState("1");

  const handleClick = (id) => setResult(id);

  return (
    <section className="specification">
      <div className="section specification__inner">
        <div className="specification__controls">
          <SpecCtrl content={"Opis"} handleClick={handleClick} id="1" />
          <SpecCtrl content={"Secifikacije"} handleClick={handleClick} id="2" />
          <SpecCtrl content={"Ostalo"} handleClick={handleClick} id="3" />
        </div>
        <div className="specification__content">
          <SpecPar id={result} />
        </div>
      </div>
    </section>
  );
};

export default Specification;
