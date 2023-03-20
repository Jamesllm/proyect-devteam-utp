import React from "react";
import { Container } from "react-bootstrap";

import { getProyects } from "../data/proyects";

export const Proyectos = () => {
  const proyectos = getProyects();

  return (
    <div className="mx-5">
      {proyectos.map((proyect) => (
        <p>{proyect.title}</p>
      ))}
    </div>
  );
};

export default Proyectos;
