import React from 'react';
import "./Estilos.css";
import "./Estilos.scss";
import  StyleModule from "./Estilo.module.css";

export default function Estilos (){

    let myStyle = {
        borderRadius:"25rem",
        margin:"1rem",
        maxWidth:"80%"
    }
return(
    <section className="estilos">
    <h2>Estilos CSS en React</h2>
    <h3 className="bg-react">Estilos en hoja CSS externa</h3>
    <h3 className="bg-react" style={{borderRadius:"25rem", margin:"1rem"}}>Estilos en hoja CSS externa</h3>
    <h3 className="bg-react" style={myStyle}>Estilos en hoja CSS externa</h3>
    <h3 className={StyleModule.error} >Estilos en hoja CSS externa</h3>
    <h3 className={StyleModule.success} >Estilos en hoja CSS externa</h3>
    <h3 className="bg-sass">Estilos con SASS</h3>
    </section>
    
    )   
}