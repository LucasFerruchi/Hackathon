import { Table, Container } from "react-bootstrap";
import "./HomeMain.css";

const HomeMain = () => {
  return (

  <Container>
  <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>NOMBRE</th>
      <th>PRECIO</th>
      <th>24 hs %</th>
      <th>7 dias %</th>
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
  );
};

export default HomeMain;
