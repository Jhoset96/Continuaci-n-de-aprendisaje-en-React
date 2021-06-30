import { useState, useEffect } from 'react';

export const useFetch = (url) => {

    // creo los useState correpsondientes los cuales invocare en el archivo donde utilizo el Hook creado, en este caso el Hooks personalizados.
    const [data, SetData] = useState(null);
    const [isPending, SetisPending] = useState(true);
    const [error, SetError] = useState(null);
//creo useEffect y en get data de manera asincrona le paso un ulr el cual se lo daremos en el Hookspersonalizados.
    useEffect(() => {
        const getData = async (url) =>{
// Para el manejo de datos es necesario poner un try catch en el cual coloco guard eel fech con la url y  un if, si el valor de la url gerea un error que me arroje 
// un trow coon un arreglo y con el error, si no lo es que tome res el cual  que me cambie los valores de data, isPending y error, en el cash
            try {
                let res = await fetch(url)
                if(!res.ok){
                    throw{
                        err:true,
                        status:res.status,
                        statusText:!res.statusText ? "ocurrio un error": res.statusText
                    }
                }

                let data = await res.json();
                SetData(data)
                SetisPending(false);
                SetError({err:false})
// se guarda el json del valor que ha resibido en el if.

            } catch (err) {
                SetisPending(true);
                SetError(err)
            }
        };
//Invoco getData para pasarle el parametro de ulr el cual sera adjunto en el archivo HooksPersonalizados     
            getData(url);
// Indico que cada que get data cambie la url se efectue ese useEffect.
    }, [url]);

//Retosno los datods a utilizar en el useEffect.
    return { data, isPending, error };
}