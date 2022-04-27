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
    <>
      {isLoading
        ? "Cargando"
        : datos.map((element, index) => {
            return (
              <>
              <Container className="bg_table">
  <Table striped bordered hover variant="dark" className="block_table">
  <thead>
    <tr>
      <th>{}</th>
      <th>{}</th>
      <th>{}</th>
      <th>{}</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dai</td>
      <td>$</td>
      <td>%</td>
      <td>%</td>
    </tr>
    <tr>
      <td>Binance USD</td>
      <td>$</td>
      <td>%</td>
      <td>%</td>
    </tr>
    <tr>
      <td>Tron</td>
      <td>$</td>
      <td>%</td>
      <td>%</td>
    </tr>
    <tr>
      <td>Ethereun Classic</td>
      <td>$</td>
      <td>%</td>
      <td>%</td>
    </tr>
    <tr>
      <td>Terra USD</td>
      <td>$</td>
      <td>%</td>
      <td>%</td>
    </tr>
    <tr>
      <td>PancaKeSwap</td>
      <td> $</td>
      <td>%</td>
      <td>%</td>
    </tr>
    <tr>
      <td>Thorn Chain</td>
      <td>$</td>
      <td>%</td>
      <td>%</td>
    </tr>
    <tr>
      <td>Tezos</td>
      <td>$</td>
      <td>%</td>
      <td>%</td>
    </tr>
    <tr>
      <td>Ape Coin</td>
      <td>$</td>
      <td>%</td>
      <td>%</td>
    </tr>
    <tr>
      <td>Unus Sed Leo</td>
      <td>$</td>
      <td>%</td>
      <td>%</td>
    </tr>
    </tbody>
</Table>
</Container>
                {
                  <li key={index}>
                    {element.contract_name}-{element.contract_ticker_symbol}-{index}
                  </li>
                }
              </>
            );
          })}
    </>
  );
};

export default AppCovalent;


//ckey_fa2708fa027e4a1fb6c6eec4980
//https://www.covalenthq.com/platform/#/apikey/ckey_934712c863874f9aa2bd42d2fd6/
// https://api.covalenthq.com/v1/1/block_v2/5000000/ \
//-u ckey_934712c863874f9aa2bd42d2fd6:
//-H 'Content-Type: application/json'