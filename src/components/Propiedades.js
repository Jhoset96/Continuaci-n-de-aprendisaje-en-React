import React from "react";
import PropTypes from "prop-types"

export default function Propiedades (props){
    return (
        <div>
            <h2>{props.porDefecto}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.valor}</li>
                <li>{props.boolean? "Verdadero":"Falso"}</li>
                <li>{props.shein.join(",")}</li>
                <li>{props.object.name + "-" + props.object.mail}</li>
                <li>{props.element}</li>
                <li>{props.shein.map(props.squared).join(",")}</li>
            </ul>
        </div>
    )
}

Propiedades.defaultProps = {
     porDefecto: "¡React es Divertido!"
};

Propiedades.prototype={
    valor:PropTypes.number.isRequired,
    
}