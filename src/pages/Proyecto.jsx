import React from "react";
import { useParams } from "react-router-dom";
import { getProyect } from "../data/proyects";

export const Proyecto = () => {
  const params = useParams();

  const proyec = getProyect(String(params.path));
  console.log(proyec);
  return <div>{proyec.title}</div>;
};

export default Proyecto;
