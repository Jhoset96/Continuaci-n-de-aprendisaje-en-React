import React, { useState } from 'react';

export default function ContadorHooks (props){
    const [contador, setcontador] = useState(0);
    const sumar = () => setcontador(contador +1);
    const restar = () =>setcontador(contador -1)

    return(
        <>
        <h2>Hooks UseState</h2>
        <h3>El contador se ecnentra en :{contador}</h3>
        <nav>
        <button onClick={sumar}>Suma</button>
        <button onClick={restar}>Resta</button>
        </nav>
        <p> El numero es de {props.titulo}</p>
        </>
    )
}

ContadorHooks.defaultProps = {
    titulo:"Clicks",
}