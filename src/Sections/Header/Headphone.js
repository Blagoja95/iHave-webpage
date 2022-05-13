const Headphone = ({ src, addClass }) => {
  return (
    <div className="headphone">
      <img
        className={`headphone__inner ${addClass ? addClass : ""}`}
        src={src}
        alt="img preview"
      ></img>
    </div>
  );
};

export default Headphone;
