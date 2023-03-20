import React from "react";
import { Link } from "react-router-dom";
import "./modal.css";

export const Modal = ({ isOpen, closeModal }) => {
  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  };
  
  const proyects = [
    {
      path: "proyect-markdown-web",
      title: "Proyect Markdown Web",
    },
    {
      path: "proyect-portable-link",
      title: "Portable Link",
    },
    {
      path: "facility-finder-utp",
      title: "Facility Finder UTP",
    },
    {
      path: "random-generator",
      title: "Random Generator",
    },
    {
      path: "barber-can",
      title: "Barber Can",
    },
    {
      path: "plugin-minecraft",
      title: "Plugin Minecraft",
    },
    {
      path: "text-encript",
      title: "Text Encript",
    },
    {
      path: "grades-utp",
      title: "Grades Utp",
    },
  ];

  return (
    <div className={`modal ${isOpen && "modal-open"}`} onClick={closeModal}>
      <div className="modal_dialog" onClick={handleModalDialogClick}>
        <div className="head">
          <Link to="/"><div className="title">PROYECTOS DEVTEAM 2023</div></Link>
          <button onClick={closeModal}>X</button>
        </div>
        <div className="modal_container">
          {proyects.map((proyect, i) => (
            <ul key={i}>
              <li>
                <Link to={`/p/${proyect.path}/`}>{proyect.title}</Link>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
