import React, { useState, useEffect } from 'react';

//Ya no es necesario 
function Pokemon ({avatar,name}){
    return(
        <figure>
            <img src= {avatar} alt={name}></img>
            <figcaption>{name}</figcaption>
        </figure>
    )
}

export default function AjaxHooks (){
    const [pokemons,setPokemons]=useState([])

//     useEffect(() => {
//         let url = "https://pokeapi.co/api/v2/pokemon/";
// // fetch metodo mediante el cual se da el ulr de la base de datos solicitada de la ulr.
//         fetch(url)
// // El metodo then es una petición, la cual res ="abebiación de respuesta" es el dato extraido de la base de datos la cual la convierto en json con res.json
//             .then ((res)=>res.json())
// // el json es el formato de objeto el cual debuelve el servidor.
// //luego le pido al json que muestre el resultado.
//             .then((json)=>{

//                 // console.log(json)
// // luego recorro el json con un forEach trajendo el array llamado el o como quiera cde elemento.
//                 json.results.forEach((el)=>{
// // traigo el ulr de cada uno e los el="elementos u objetos"
//                     fetch(el.url)
// // reincicio el proceso
//                         .then((res)=>res.json())
// // solicito que cree un n uevo objeto del el que esta en el jeson colocado con los datos ectraidos
//                         .then((json)=>{
//                             // console.log(json);
//                             let pokemon = {
//                                 id:json.id,
//                                 name:json.name,
//                                 avatar:json.sprites.front_default
//                             };
//                             setPokemons((pokemons)=>[...pokemons,pokemon]) 
                            
//                         })
//                 })
//             })
//     },[])

    useEffect(() => {
        const getPokemons = async (url) =>{
            let res = await fetch(url),
            json = await res.json();

            json.results.forEach(async(el)=>{
            let res = await fetch(el.url),
            json = await res.json();
            

            let pokemon = {
            id:json.id,
            name:json.name,
            avatar:json.sprites.front_default
        };
        
            setPokemons((pokemons)=>[...pokemons,pokemon])
        })
    };
        
            getPokemons("https://pokeapi.co/api/v2/pokemon/");

    }, [])

    // useEffect(() => {
    //     const getPokemons = async (ulr) =>{
    //         let res = await fetch(ulr),
    //         json = await res.json();
    //       //console.log(json);
    
    //       json.results.forEach(async (el) => {
    //         let res = await fetch(el.url),
    //           json = await res.json();
    
    //         //console.log(json);
    //         let pokemon = {
    //           id: json.id,
    //           name: json.name,
    //           avatar: json.sprites.front_default,
    //         };
    
    //         setPokemons((pokemons) => [...pokemons, pokemon]);
    //       });
    //     };
    
    //     getPokemons("https://pokeapi.co/api/v2/pokemon/");
    //   }, []);
   
    console.log(pokemons)
    return(
        <>
        <h2>Peticiones Asíncronas en Hooks</h2>
         {pokemons.length === 0 ? (
        <h3>Cargando...</h3>
         ) : (
        pokemons.map((el) => (
          <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
            ))
            )}

        </>
    
    )
}