const ItemStatus = ({ src, content }) => {
  return (
    <div className="headphone__status">
      <img src={src} alt="status icon"></img>
      <p className="headphone__status__icon">{content}</p>
    </div>
  );
};

export default ItemStatus;
