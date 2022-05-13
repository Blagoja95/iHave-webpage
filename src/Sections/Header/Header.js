import React, { useState } from "react";
import NavSections from "./NavSections";
import Headphones from "./HeadphonesShowcase";
import HeadphoneProduct from "./HeadphoneProduct";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  const [item, setItem] = useState(false);
  const addItem = () => setItem(true);

  return (
    <header className="header-section">
      <nav className="nav section">
        <NavSections item={item} />
      </nav>
      <div className="header section">
        <Headphones />
        <HeadphoneProduct handleAddItem={addItem} />
        <HeaderSocial />
      </div>
    </header>
  );
};

export default Header;
