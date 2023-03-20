import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, Container, Button } from "react-bootstrap";
import { countArray, numberAleatorio } from "./hooks/Functions";
import { getDevsTAnteriores } from "./data/proyects";
import "./sass/index.scss";

export const LandingPage = () => {
  const devTAnteriores = getDevsTAnteriores();
  const [initalArray, endArray] = countArray(devTAnteriores);
  const random = numberAleatorio(initalArray, endArray);
  const devTARandom = devTAnteriores.filter((d) => d.id === random);

  return (
    <Container fluid>
      <Row className="g-0">
        <Col lg={7} md={6} sm={12} className="p-5 my-auto">
          {devTARandom.map((devTA, d) => (
            <Link to={`/hackaton-utp-el-comercio/${devTA.path}/`} key={d}>
              <button className="btn-rounded">
                {devTA.title} <span className="txt-primary">Leer mas {"->"}</span>
              </button>
            </Link>
          ))}
          <div className="text-start">
            <h1 className="dev-title fw-bold">DEVTEAM - UTP 2023</h1>
            <p className="mb-4 text-muted dev-text">
              La <strong>DEVTEAM</strong> es una competencia en la que se
              plantean diversos proyectos en los cuales cualquier estudiante de
              la universidad de la carrera de Ingieneria de Sistemas puede
              acceder, puede elegir a que grupo pertenecer e incluso pertenecer
              a varios.
            </p>
          </div>

          <Link to="/proyectos">
            <Button variant="primary">Proyectos 2023</Button>
          </Link>
          <Link to="/info/devteam">
            <Button className="mx-3" variant="light">
              Conocer mas {"->"}
            </Button>
          </Link>
        </Col>
        <Col lg={5} md={6} sm={12} className="d-flex justify-content-end">
          <Image
            className="p-0"
            fluid
            src="https://images.ctfassets.net/co0pvta7hzrh/4GiFKoHw6Hk7rf6K1QusCZ/fa2909f28253c87b8724b637029796fb/img_02-700x1049.jpg?fm=webp"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
