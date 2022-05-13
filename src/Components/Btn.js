const Btn = ({ btnClass, content, handlePrice }) => {
  return (
    <button
      className={`${btnClass ? btnClass : ""}`}
      onClick={handlePrice ? () => handlePrice() : () => {}}
    >
      {content}
    </button>
  );
};

export default Btn;
