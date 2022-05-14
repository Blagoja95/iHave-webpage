import Btn from "../../Components/Btn";

const Moment = () => {
  return (
    <section className="moment">
      <div className="moment__inner section">
        <h1 className="title moment__title">
          Iskoristiti momente uživanja, na pravi način
        </h1>
        <p className="paragraph moment__paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="moment__btns">
          <Btn content={"Kupi"} btnClass={"btn"} />
          <Btn btnClass={"btn btn--transparent"} content={"Dodaj u korpu"} />
        </div>
      </div>
    </section>
  );
};

export default Moment;
