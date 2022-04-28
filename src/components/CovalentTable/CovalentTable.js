
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
 <Table className="d-flex flex-direction justify-content-center align-items-center"striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>{element.contract_name}</th>
      <th>{element.contract_}</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
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


