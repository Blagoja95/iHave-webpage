import SocialBtn from "../../Components/SocialBtn";

const HeaderSocial = () => {
  return (
    <div className="header-social">
      {/* <div className="header-social__icon header-social__icon--1"></div>
      <div className="header-social__icon header-social__icon--2"></div>
      <div className="header-social__icon header-social__icon--3"></div> */}
      <SocialBtn addClass="header-social__icon header-social__icon--1" />
      <SocialBtn addClass="header-social__icon header-social__icon--2" />
      <SocialBtn addClass="header-social__icon header-social__icon--3" />
    </div>
  );
};

export default HeaderSocial;
