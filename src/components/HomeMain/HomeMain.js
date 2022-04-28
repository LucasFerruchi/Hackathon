import { Card, Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./HomeMain.css";

const HomeMain = () => {
  const [datos, setDatos] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // Funcion para traer datos de Covalent
  useEffect(() => {
    fetch(
      "https://api.covalenthq.com/v1/pricing/tickers/?quote-currency=USD&format=JSON&key=ckey_2ece492703d64924bec1968f88e&page-size=12&page-number=0"
    )
      .then((respuesta) => respuesta.json())
      .then((data) => {
        console.log(data.data.items);
        setIsLoading(false);
        // aca en este punto filter
        const filtro = data.data.items.filter(
          (element) => element.contract_name !== null
        );
        // const filtro = data.data.items;
        setDatos(filtro);
      });
  }, []);

  return (
    <Container className="bg_table home-container ">
      <Row>
        <>
          {isLoading
            ? "Cargando"
            : datos.map((element, index) => {
                return (
                  <Col xs={12} md={6} lg={4} key={index}>
                    <Card className="card-container">
                      <img className="card-img" src={element.logo_url} alt="" />
                      <Card.Title className="card-title">
                        {element.contract_name}
                      </Card.Title>
                    </Card>
                  </Col>
                );
              })}
        </>
      </Row>
    </Container>
  );
};

export default HomeMain;
