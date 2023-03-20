import React from "react";
import { useParams } from "react-router-dom";
import { getDevTAnterior } from "../data/proyects";
import { Image } from "react-bootstrap";

const DevTAnteriores = () => {
  const params = useParams();
  const dta = getDevTAnterior(String(params.path));

  return (
    <div className="mx-5">
      {dta.title}

      <Image src={dta.img} />
    </div>
  );
};

export default DevTAnteriores;
