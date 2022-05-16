import SocialBtn from "../../Components/SocialBtn";
import img1 from "../../images/headphones.svg";
import img2 from "../../images/IHAVE_b85acf60-bcdc-44cf-a63c-62852b15a60a-1.png";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="section footer-top">
        <div className="support">
          <h2 className="support__title footer__title">KONTAKT I PODRŠKA</h2>
          <ul className="support__list">
            <li className="support__item footer__item">
              Adresa: Prote Nikole Kostića bb
            </li>
            <li className="support__item footer__item">
              Email: info@simel-bih.com
            </li>
            <li className="support__item footer__item">Skype: simel-bih</li>
          </ul>
          <div className="support__call">
            <img className="support__img" src={img1} alt="img call" />
            <div className="support__call__sub">
              <p className="sub__title ">Pozovite nas!</p>
              <h3 className="sub__number">+387 51 535 560</h3>
            </div>
          </div>
        </div>
        <div className="footer__main">
          <div className="about">
            <h2 className="about__title footer__title">O NAMA</h2>
            <ul className="about__list">
              <li className="about__item footer__item">
                <a className="about__link" href="#">
                  Dostava
                </a>
              </li>
              <li className="about__item footer__item">
                <a className="about__link" href="#">
                  Garancija kvaliteta
                </a>
              </li>
              <li className="about__item footer__item">
                <a className="about__link" href="#">
                  Način plaćanja
                </a>
              </li>
            </ul>
          </div>
          <div className="help">
            <h2 className="help__title footer__title">POMOĆ</h2>
            <ul className="help__list">
              <li className="help__item footer__item">
                <a className="help__link" href="#">
                  Kako se registrovati?
                </a>
              </li>
              <li className="help__item footer__item">
                <a className="help__link" href="#">
                  Često postavljana pitanja
                </a>
              </li>
              <li className="help__item footer__item">
                <a className="help__link" href="#">
                  Uslovi korištenja
                </a>
              </li>
            </ul>
          </div>
          <div className="social">
            <h2 className="social__title footer__title">SOCIJALNE MREŽE</h2>
            <div className="social__btns">
              <SocialBtn addClass="social__btn social__btn--1" />
              <SocialBtn addClass="social__btn social__btn--2" />
              <SocialBtn addClass="social__btn social__btn--3" />
            </div>
            <img className="social__img" src={img2} alt="site logo footer" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="section footer-bottom__inner">
          Copyright &copy;{" "}
          <span className="footer__span">NENASAL d.o.o 2020</span> All Rights
          Reserved. Powered by
          <span className="footer__span"> NENASAL</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
