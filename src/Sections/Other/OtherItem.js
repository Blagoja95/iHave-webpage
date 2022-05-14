const Item = ({ src, title, price }) => {
  return (
    <div className="product">
      <img className="product__img" src={src} alt={title} />
      <h2 className="title product__title">{title}</h2>
      <h3 className="price product__price">{`${price} KM`}</h3>
    </div>
  );
};
export default Item;
