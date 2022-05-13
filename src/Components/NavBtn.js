const NavBtn = ({ iconUrl, item }) => {
  return (
    <a href="#" className={`nav__btn ${item ? "nav--active" : ""}`}>
      <img className="nav__icon" src={iconUrl} alt="nav-icon" />
    </a>
  );
};

export default NavBtn;
