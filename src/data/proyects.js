import primeraE from '../assets/img/primera-edicion.png'
import segundaE from '../assets/img/segunda-edicion.jpg'
import terceraE from '../assets/img/tercera-edicion.png'
import cuartaE from '../assets/img/cuarta-edicion.png'

export const proyects = [
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

export const devTAnteriores = [
  {
    id: 1,
    title: "1ra EDICION (2019) - LIMA",
    path: "1ra-edicion-2019-lima",
    reto: "Crear una aplicativo con el potencial de convertirse en una red social contra la delincuencia.",
    coders: [
      "Joel Panocca Romero",
      "Leonel Eduardo Rojas Aranda",
      "Ernesto Leoncio Vargas Gil",
      "Jordiny Montañez Flores",
    ],
    aplicacion:
      "La herramienta que actualmente está albergada en una plataforma cloud de Microsoft, sin acceso al público. La aplicación permite principalmente ubicar las 15 comisarías o centros de seguridad más cercanos, y presentar una denuncia rellenando un formulario sencillo y rápido (DNI, descripción de la denuncia, modalidad de robo y hashtags).",
    img: primeraE,
    video: "",
  },
  {
    id: 2,
    title: "2da EDICION (2020) - CHICLAYO",
    path: "2da-edicion-2020-chiclayo",
    reto: "Herramienta innovadora que permita al usuario acceder a la información pública de los candidatos a las elecciones generales del Perú.",
    coders: [
      "Andree Guevara",
      "Willington Farro",
      "Lisette Nervi",
      "Julio Rios",
    ],
    aplicacion:
      "Consiste no solo en una base de datos con la información clave de los postulantes, como antecedentes penales o educación, sino también en una serie de preguntas que el usuario debe responder para identificar al candidato más acorde con su postura.",
    img: segundaE,
    video: "",
  },
  {
    id: 3,
    title: "3ra EDICION (2020) - LIMA",
    path: "3ra-edicion-2021-arequipa",
    reto: "Crear una aplicativo que permita a las mujeres alertar de manera rápida a las autoridades o a sus contactos cercanos cuando se encuentren en una situación de riesgo, en la que sientan que su integridad o su vida está en peligro.",
    coders: [
      "Víctor Edison Gálvez Chávez",
      "Rodrigo Alonso Canaza Pilco",
      "Paul Cabana Lobon",
      "Irving Héctor Llerena Bejarano",
    ],
    aplicacion:
      "Consiste en una aplicación de celular entrelazada a una pulsera inteligente, la cual monitorea a la mujer a través de geolocalización.",
    img: terceraE,
    video: "",
  },
  {
    id: 4,
    title: "4ta EDICION (2020) - LIMA",
    path: "4ta-edicion-2020-lima",
    reto: "Herramienta innovadora que permita al usuario acceder a la información pública de los candidatos a las elecciones generales del Perú.",
    coders: [
      "Pryscila Flores",
      "Luis Melgarejo",
      "Gerardo Quispe",
      "Rodrigo Berrios",
    ],
    aplicacion:
      "Consiste en una aplicación móvil que te da opción de interactuar con las obras [municipales] que ya existen. Buscaron que se alimente de fuentes de datos abiertas y que, a su vez, posea un sistema que dé notificaciones de alerta cada vez que hay un cambio en una obra.",
    img: cuartaE,
    video: "",
  },
];

export function getProyects() {
  return proyects;
}

export function getDevsTAnteriores() {
  return devTAnteriores;
}

export function getProyect(path) {
  return proyects.find((proyect) => proyect.path === path);
}

export function getDevTAnterior(path) {
  return devTAnteriores.find((dta) => dta.path === path);
}
