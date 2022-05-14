import Item from "./OtherItem";

import item1 from "../../images/Mask Group 8.png";
import item2 from "../../images/Mask Group 9.png";
import item3 from "../../images/Mask Group 10.png";
import item4 from "../../images/Mask Group 11.png";

const Products = () => {
  return (
    <div className="other__products">
      <Item src={item1} title={"Casque Bluetooth DeFunc"} price={"33,99"} />
      <Item src={item2} title={"Inkax HP-07"} price={"50,99"} />
      <Item src={item3} title={"L'avvento (HP07N)"} price={"60,99"} />
      <Item src={item4} title={"Bluetooth inkax HP-05"} price={"41,99"} />
    </div>
  );
};

export default Products;
