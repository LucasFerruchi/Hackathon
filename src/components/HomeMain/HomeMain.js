import { Table, Container } from "react-bootstrap";
import './HomeMain.css';

const HomeMain = () => {
  return (

  <Container>
  <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>TIPO</th>
      <th>Nombre</th>
      <th>Valor Actual</th>
      <th>Otro Dato</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>icono</td>
      <td>Bitcoin</td>
      <td>$xxxxx</td>
      <td>%0.15(icono flecha)</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Bitcoin</td>
      <td>$xxxxx</td>
      <td>%0.15(icono flecha)</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>6</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Bitcoin</td>
      <td>$xxxxx</td>
      <td>%0.15(icono flecha)</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>9</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
    <tr>
      <td>10</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
    </tbody>
</Table>
</Container>
  );
};

export default HomeMain;
