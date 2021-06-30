
import React, {Component} from "react";
//Se importan elementos del Jeison.
import data from './Helpers/Data.json'

function ElementoLista (props){
    return(
    <li>
        <a href={props.el.web} target="blank">{props.el.name}</a>
    </li>)
}

export default class RenderizadoElementos extends Component {
    constructor(props){
        super(props);
            this.state = {
                seasons:["Primavera","Verano","Otoño","Invierno"]
            }
    }
    render(){
        console.log(data)
        return(
            <div>
                <h2>Renderizado de elementos</h2>
                <h3>Estaciones del año:</h3>
                <ol>{
                this.state.seasons.map((el,index)=>(
                    <li key={index}>{el}</li>
                ))}</ol>
                <h3>Frameworks Fronted javaScript</h3>
                <ul>{data.Frameworks.map((el,index)=>(
                    //se realia la i¿teración al elemento el que se encuentra en el modulo ElementLista para traer de la libreria el array.
                    <ElementoLista id={index} el={el} / >))}
                </ul>
            </div>
        )
    }
}

