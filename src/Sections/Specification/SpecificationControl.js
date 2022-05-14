const SpecCtrl = ({ content, handleClick, id }) => {
  // const control = document.querySelectorAll(".specification__control");

  const setActive = (e) => {
    document
      .querySelectorAll(".specification__control")
      .forEach((el) => el.classList.remove("specification__control--active"));

    e.target.classList.add("specification__control--active");
    handleClick(e.target.id);
  };
  return (
    <button
      onClick={(e) => setActive(e)}
      className={`specification__control ${
        id == 1 ? "specification__control--active" : ""
      }`}
      id={id}
    >
      {content}
    </button>
  );
};

export default SpecCtrl;
