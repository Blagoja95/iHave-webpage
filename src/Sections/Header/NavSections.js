import NavSec from "../../Components/NavSection";
import NavBtn from "../../Components/NavBtn";

import logoPNG from "../../images/ihave-logo.png";
import searchIcon from "../../images/surface1.svg";
import cartIcon from "../../images/shopping-cart.svg";
import menuIcon from "../../images/Group 11.svg";

const NavSections = ({ item }) => {
  return (
    <div className="nav__inner">
      <img src={logoPNG} alt="logo" className="nav__logo" />

      <div className="nav__sections">
        <NavSec name="Početna" />
        <NavSec name="Proizvodi" />
        <NavSec name="Rasprodaja" />
        <NavSec name="Akcija" />
        <NavSec name="Kontakt" />
      </div>

      <div className="nav__btns">
        <NavBtn iconUrl={searchIcon} />
        <NavBtn iconUrl={cartIcon} item={item} />
        <NavBtn iconUrl={menuIcon} />
      </div>
    </div>
  );
};

export default NavSections;
