import Slider from "../components/Slider/Slider";
import megafono from "../img/megafono.jpg";
import virtual from "../img/virtual.jpg";
import convos from "../img/convos.jpg";
import redDescentralizada from "../img/redDescentralizada.jpg";

const LandingPage = () => {
  return (
    <div className="App">
      <Slider
        imageSrc={megafono}
        title={"INFORMATE"}
        subtitle={"Aún con dudas de ingresar al mundo Blockchain?"}
        flipped={true}
      />

      <Slider
        imageSrc={virtual}
        title={"INFORMATE"}
        subtitle={"Aún con dudas de ingresar al mundo Blockchain?"}
      />

      <Slider
        imageSrc={convos}
        title={"INFORMATE"}
        subtitle={"Aún con dudas de ingresar al mundo Blockchain?"}
        flipped={true}
      />

      <Slider
        imageSrc={redDescentralizada}
        title={"INFORMATE"}
        subtitle={"Aún con dudas de ingresar al mundo Blockchain?"}
      />
    </div>
  );
};

export default LandingPage;
