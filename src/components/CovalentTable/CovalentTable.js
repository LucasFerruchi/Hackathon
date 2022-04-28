import { useEffect, useState } from "react";
import { Container, Table} from "react-bootstrap"; 
import "./CovalentTable.css";

 

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
        const filtro = data.data.items.filter((element) => element.rank <= 40);
        setDatos(filtro);
      });
  }, []);

  return (
    <Container className="table_cov">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>NOMBRE</th>
            <th>LOGO</th>
            <th>TASA DE COTIZACION</th>
            <th>RANGO</th>
          </tr>
        </thead>
        <>
          {isLoading
            ? "Cargando"
            : datos.map((element, index) => {
                return (
                  <>
                    <tbody key={index}>
                      <tr>
                        <td>{element.contract_name}</td>
                        <td>{element.contract_logo_url}</td>
                        <td>{element.contract_quote_rate}</td>
                        <td>{element.contact_rank}</td>
                      </tr>
                    </tbody>
                  </>
                );
              })};
        </>
      </Table>
    </Container>
  );
};


export default AppCovalent;


