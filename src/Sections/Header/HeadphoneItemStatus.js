const ItemStatus = ({ src, content, classItem }) => {
  return (
    <div className={`headphone__status ${classItem ? classItem : ""}`}>
      <img src={src} alt="status icon"></img>
      <p className="headphone__status__icon">{content}</p>
    </div>
  );
};

export default ItemStatus;
