import Slider from "../Slider/Slider";
import megafono from "../../img/megafono.jpg";
import virtual from "../../img/virtual.jpg";
import convos from "../../img/convos.jpg";
import redDescentralizada from "../../img/redDescentralizada.jpg";
//import "./LandingMain.css";




const LandingMain = () => {
    return (  

        <div className='bg-azul-oscuro'>
          <Slider
        imageSrc={megafono}
        title={"INFORMATE"}
        subtitle={"Aún con dudas de ingresar al mundo Blockchain?"}
        flipped={true}
            />

      <Slider
        imageSrc={convos}
        title={"INFORMATE"}
        subtitle={"Aún con dudas de ingresar al mundo Blockchain?"}
        />

      <Slider
        imageSrc={virtual}
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
}
 
export default LandingMain;