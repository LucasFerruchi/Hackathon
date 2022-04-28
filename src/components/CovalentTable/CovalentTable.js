
import { useEffect, useState } from "react";
import { Container, Table} from "react-bootstrap"; 

 

const AppCovalent = () => {
  const [datos, setDatos] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // traemos los datos de Covalent
  useEffect(() => {
    fetch(
      "https://api.covalenthq.com/v1/pricing/tickers/?quote-currency=USD&format=JSON&key=ckey_2ece492703d64924bec1968f88e"
     
      )
      .then((respuesta) => respuesta.json())
      .then((data) => {
        console.log(data.data.items);
        setIsLoading(false);
        // aca filter
        const filtro = data.data.items.filter((element) => element.rank <= 10);
        setDatos(filtro);
      });
  }, []);

  return (
    <Container className="bg_table ">
  
  
    <>
      {isLoading
        ? "Cargando"
        : datos.map((element, index) => {
            return (

              <>
 <Table striped bordered hover variant="dark">
 <thead>
    <tr>
      <th>NOMBRE</th>
      <th>LOGO</th>
      <th>TASA DE COTIZACION</th>
      <th>RANGO</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{element.contract_name}</td>
      <td>{element.contract_logo_url}</td>
      <td>{element.contract_quote_rate}</td>
      <td>{element.contact_rank5}</td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</Table>
      </>)
})};           
   </>
   </Container>
  );
};

export default AppCovalent;


