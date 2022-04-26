import Slider from "../Slider/Slider";
import megafono from "../../img/megafono.jpg";
import virtual from "../../img/virtual.jpg";
import convos from "../../img/convos.jpg";
import redDescentralizada from "../../img/redDescentralizada.jpg";

const LandingMain = () => {
  return (
    <div className="bg-azul-oscuro">
      <Slider
        imageSrc={megafono}
        title={"INformación"}
        subtitle={"Aún con dudas de ingresar al mundo Blockchain?"}
        flipped={true}
      />

      <Slider
        imageSrc={convos}
        title={"INnovación"}
        subtitle={"Aún con dudas de ingresar al mundo Blockchain?"}
      />

      <Slider
        imageSrc={virtual}
        title={"INversión"}
        subtitle={"Aún con dudas de ingresar al mundo Blockchain?"}
        flipped={true}
      />

      <Slider
        imageSrc={redDescentralizada}
        title={"INgresar"}
        subtitle={"Aún con dudas de ingresar al mundo Blockchain?"}
      />
    </div>
  );
};

export default LandingMain;
