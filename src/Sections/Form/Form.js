import FormElement from "./FormElement";
import Btn from "../../Components/Btn";
import ItemStatus from "../Header/HeadphoneItemStatus";

import img1 from "../../images/Mask Group 12.png";
import icon2 from "../../images/surface1-1.svg";

const Form = () => {
  return (
    <section className="form">
      <div className="section form__inner">
        <div className="title-content form__top">
          <h2 className="title form__title">
            Gdje želite da Vam dostavimo proizvod?!
          </h2>
        </div>
        <div className="form__content">
          <img className="form__img" src={img1} alt="headphone img" />
          <form
            action="#"
            className="form__form-box"
            onSubmit={(e) => e.preventDefault()}
          >
            <FormElement label={"Ime i prezime"} inputClass={"fullName"} />
            <FormElement label={"Ulica i broj"} inputClass={"street"} />
            <FormElement label={"Grad"} inputClass={"town"} />
            <FormElement label={"Email adresa"} inputClass={"email"} />
            <FormElement label={"Broj telefon"} inputClass={"phone"} />
            <FormElement
              label={"Vaša poruka / dodatne informacije"}
              inputClass={"msg"}
            />
            <Btn content={"Kupi"} btnClass={"btn btn--form-btn"} />
            <ItemStatus
              classItem="form__status"
              src={icon2}
              content={"Vaša kupovina je sigurna."}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
