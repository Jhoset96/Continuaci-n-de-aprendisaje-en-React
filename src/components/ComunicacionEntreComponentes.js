import React,{Component} from "react"

export default class ComunicacionComponentes extends Component {

    state={
        Contador:0
    }

    incrementarContador = (e)=>{
        this.setState({
            Contador:this.state.Contador + 1
        })
        
    }
    render(){
        return(
            <>
            <h2>Comunicación de Componentes</h2>
            <h1>Contador : {this.state.Contador}</h1>
            <Hijo mensaje="Mensaje para el hijo numero 1"
            IncrementarContador={this.incrementarContador}
            />
            <Hijo mensaje="Mensaje para el hijo numero 2"
            IncrementarContador={this.incrementarContador}
            />
            
            </>
        )
    }
}

// Mediante props exporto mensajes los cuales son exportados mediante props hacia el componente hijo en el cual los parametros con espesificados
// EL COMPONENTE FUNCIONAL hIJO ES ES QUE POSEE EL BOTON, PARA PODR¿ER RENDERIZARLO SE CREA UN EVENTO PERSONALIZADO DENTRO DEL RENDER
// EL CUAL ES QUIEN LLEVA EN SU ECOP ÑA FUNCIÓN DE INCREMENTAR EL CUAL TERMINA POR INCREMENTAS THIS.STATE.CONTADOR CUANDO SE PRECIONA
// UN BOTON.
function Hijo (props) {
    return(
        <>
        <h3>{props.mensaje}</h3>
        <button onClick={props.IncrementarContador}>+</button>
        </>
    )
}