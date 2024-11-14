import React, {useState, useEffect} from "react";

export const PruebasComponentes= ( )=>{
    const [usuario, setUsuario] = useState("Inventado");
    const [fecha, setFecha]= useState("01-01-2024");
    const modUsuario = e =>{
        setUsuario(e.target.value);
    }
    const modFecha = e =>{
        setFecha(Date.now());
    };
   useEffect(()=>{
        console.log("se cargo el componente de prueba");
   });
   useEffect(()=>{
        console.log("cambio el usuario");
   },[usuario]);

    return (

        <div>
            <h3>El efecto - Hook useEffect</h3>
            <br/>
            <strong>{usuario}</strong>
            <br/>
            <strong>{fecha}</strong>
            <br/>
            <input type='text' onChange={modUsuario} placeholder="Ingresa nombre"></input>
            <button onClick={modFecha}>Cambiar fecha</button>

        </div>
    )
}
