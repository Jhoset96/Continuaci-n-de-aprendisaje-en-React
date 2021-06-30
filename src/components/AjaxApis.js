import React, { Component } from 'react';

function Pokemon (props){
    return(
        <figure>
            <img src= {props.avatar} alt={props.name}></img>
            <figcaption>{props.name}</figcaption>
        </figure>
    )
}

export default class AjaxApis extends Component {

    state = {
        pokemons:[]
    }

    componentDidMount(){
        let url = "https://pokeapi.co/api/v2/pokemon/";
// fetch metodo mediante el cual se da el ulr de la base de datos solicitada de la ulr.
        fetch(url)
// El metodo then es una petición, la cual res ="abebiación de respuesta" es el dato extraido de la base de datos la cual la convierto en json con res.json
            .then ((res)=>res.json())
// el json es el formato de objeto el cual debuelve el servidor.
//luego le pido al json que muestre el resultado.
            .then((json)=>{
                // console.log(json)
// luego recorro el json con un forEach trajendo el array llamado el o como quiera cde elemento.
                json.results.forEach((el)=>{
// traigo el ulr de cada uno e los el="elementos u objetos"
                    fetch(el.url)
// reincicio el proceso
                        .then((res)=>res.json())
// solicito que cree un n uevo objeto del el que esta en el jeson colocado con los datos ectraidos
                        .then((json)=>{
                            // console.log(json);
                            let pokemon = {
                                id:json.id,
                                name:json.name,
                                avatar:json.sprites.front_default
                            }

                            let pokemons = [...this.state.pokemons,pokemon]
// se coloca solo un pokemon debido a que el key del state de arriba tiene el mimoe nombre del valor que le estamos otorgando el cual en este caso 
// es el json creado previamente llamado pokemon
                            this.setState({pokemons})
                        })
                })
            })
    }
    render(){
        return(<>
            <h2>Peticiones asignadas en componentes de clase</h2>
{/* // a los elementos que se encuentran en e array del key del estado pokemons los recorro con un map que cree un nuevo componente por cada objeto
y que ponga en el componente funcional el la key o id, el nombre de la imagen y el avatar que trae el ulr de la imagen para ponerla. */}
            {this.state.pokemons.map((el)=>(<Pokemon key={el.id} name={el.name} avatar={el.avatar}/>))}
            </>)
        
    }
}