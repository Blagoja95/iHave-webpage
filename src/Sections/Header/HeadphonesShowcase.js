import Headphone from "./Headphone";

import img1 from "../../images/Group 23.png";
import img2 from "../../images/Mask Group 4.png";
import img3 from "../../images/Mask Group 3.png";
import img4 from "../../images/Mask Group 2.png";
import showcase from "../../images/Mask Group 6.png";

const Headphones = () => {
  return (
    <div className="headpones">
      <div className="headphones__left">
        <Headphone src={img1} />
        <Headphone src={img2} />
        <Headphone src={img3} />
        <Headphone src={img4} />
      </div>
      <div className="headphones__right">
        <Headphone src={showcase} addClass={"showcase"} />
      </div>
    </div>
  );
};

export default Headphones;
