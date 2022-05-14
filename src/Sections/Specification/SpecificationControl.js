const SpecCtrl = ({ content, handleClick, id }) => {
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
      className="specification__control"
      id={id}
    >
      {content}
    </button>
  );
};

export default SpecCtrl;
