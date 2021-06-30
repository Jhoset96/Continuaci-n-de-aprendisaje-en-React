
import React,{Component} from "react";

export class EventosES6 extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador:0
        }

    this.sumar=this.sumar.bind(this)
    this.restar=this.restar.bind(this)
    }
    
    sumar(e){
        console.log("sumar")
        console.log(this)
        this.setState({
            contador: this.state.contador +1
        })
    }

    restar(e){
        console.log("sumar")
        console.log(this)
        this.setState({
            contador: this.state.contador -1
        })
    }

    render(){
        return(
            <div>
                <h2>Eventos en componentes de Clases ES6</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
                
            </div>
        )
    }
}

export class EventosES7 extends Component{
   
        state = {
            contador:0
        }

   //Arrow Function
    sumar  =(e)=>{
        console.log("sumar")
        console.log(this)
        this.setState({
            contador: this.state.contador +1
        })
    }

    restar = (e)=>{
        console.log("sumar")
        console.log(this)
        this.setState({
            contador: this.state.contador -1
        })
    }

    render(){
        return(
            <div>
                <h2>Eventos en componentes de Clases ES7</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
                
            </div>
        )
    }
}
//---------------------------------------------Eventos sintetios y personalizados-----------------------------------------

function Boton (props){
    return(<button onClick={props.myonClick}>Boton echo componente</button>)
}


export class MasSobreEventos extends Component{

    handelClick = (e,mensaje)=>{
        console.log(e);
        console.log(e.target);
        console.log(e.nativeEvent);
        console.log(e.nativeEvent.target);
        console.log(mensaje);
    }
    render(){
        return(
            <div>
                <h2>Ma sobre eventos</h2>
                {/* Paso parametros desde una Arrowfunction y le doy los parametros de manera directa               */}
                    <button onClick={(e)=>this.handelClick(e,"Pasando parametro desde un evento")}>Saludar</button>
                {/* //esto es un evento sintetico, lo creo primero, le doy los parametros y luego mediante un props puedo darle 
                //valores a sus parametros indicarle el evento desado con el fin de que lleve acabo una función espesifica. */}
                <Boton myonClick = {(e) => this.handelClick(e,"Pasando parametro desde un evento")}/>
                
            </div>
        )
    }
}
