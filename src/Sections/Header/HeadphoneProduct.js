import React, { useState } from "react";
import Btn from "../../Components/Btn";
import ItemStatus from "./HeadphoneItemStatus";

import icon1 from "../../images/user.svg";
import icon2 from "../../images/surface1-1.svg";
const BASE__PRICE = 41.95;

const HeadphoneProduct = ({ handleAddItem }) => {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(BASE__PRICE);

  const clickPlus = () => {
    setPrice(price + BASE__PRICE);
    setQuantity(quantity + 1);
  };

  const clickMinus = () => {
    if (quantity === 1) {
      setPrice(BASE__PRICE);
      return;
    }
    setPrice(price - BASE__PRICE);
    setQuantity(quantity - 1);
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    // to do
    if (e.target.target === "btn--quantity") return;

    handleAddItem();
  };

  return (
    <form
      action="#"
      className="headphone-product"
      onSubmit={(e) => clickSubmit(e)}
    >
      <h1 className="title headphone__title">A18 Wireless headset</h1>
      <p className="paragraph headphone__paragraph">
        Large-size earmuffs that could cover the whole ears, paired with thick,
        soft earmuffscan make it comfortable to immerse in music for a long
        time.
      </p>
      <div className="headphone__price">
        <h2 className="price">{`${price.toFixed(2)} KM`}</h2>
        <div className="quantity">
          <Btn
            content={"+"}
            btnClass={"btn--quantity"}
            handlePrice={clickPlus}
          />
          <span className="quantity__number">{quantity}</span>
          <Btn
            content={"-"}
            btnClass={"btn--quantity"}
            handlePrice={clickMinus}
          />
        </div>
      </div>
      <div className="headphone__btns">
        <Btn content={"Kupi"} btnClass={"btn"} />
        <Btn btnClass={"btn btn--transparent"} content={"Dodaj u korpu"} />
      </div>
      <div className="headphone__status--box">
        <ItemStatus
          src={icon1}
          content={"Trenutno 18 osoba gleda ovaj proizvod"}
        />
        <ItemStatus src={icon2} content={"Proizvod je dostupan na lageru"} />
      </div>
    </form>
  );
};

export default HeadphoneProduct;
