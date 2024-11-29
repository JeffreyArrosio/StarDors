import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './Components/Content';
import Botones from './Components/botones';
import Footer from './Components/footer';
import Imagenes from './Components/imagenes';
import Hidden from './Components/hiddenDiv';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Botones />
    <App mensaje={"Las espadas láser, o sables de luz, son armas emblemáticas del universo de Star Wars, utilizadas tanto por los Jedi como por los Sith. Cada color tiene un significado simbólico, técnico o cultural, y está asociado con un cristal kyber que canaliza la energía de la Fuerza. A continuación, te explicamos los colores principales y algunos usuarios notables:"} />
    <Imagenes />
    <Hidden titulo={"Azul"} mensaje={"Representa la justicia, la valentía y la protección. Es el color más común entre los Jedi guardianes, quienes se especializan en combate físico.Obi-Wan Kenobi, maestro Jedi conocido por su maestría en el combate con sable láser y su rol crucial en entrenar a Anakin y Luke Skywalker."} />
    <Hidden titulo={"Rojo"} mensaje={"Exclusivo de los Sith y otros usuarios del lado oscuro. Se obtiene al 'sangrar' un cristal kyber, proceso que lo corrompe mediante la Fuerza oscura.  Darth Vader, el Sith icónico que simboliza el poder y la tragedia del lado oscuro uso uno."} />
    <Hidden titulo={"Verde"} mensaje={"Asociado con la sabiduría, la armonía y una conexión profunda con la Fuerza. Utilizado por Jedi consulares, quienes prefieren la diplomacia y el uso de la Fuerza sobre el combate físico. Yoda, el venerado maestro Jedi que personifica la sabiduría y el conocimiento, y que lideró la Orden Jedi durante generaciones."} />
    <Hidden titulo={"Morado"} mensaje={"Representa un balance entre el lado luminoso y oscuro, simbolizando complejidad y ambigüedad moral. Mace Windu, un maestro Jedi que domina el estilo de combate Vaapad, el cual roza peligrosamente el lado oscuro. Es el único usuario conocido"} />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
