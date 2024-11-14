import React, {useState, useEffect} from "react";

function BreakingBad(){
    const [breakingBad, setBreakingBad]=useState([]);
    const [cargando,setCargando]=useState(true);
    const [error, setError]=useState(null);

    useEffect(()=>{
        fetch('https://api.breakingbadquotes.xyz/v1/quotes/10')
        .then(response=>{
            if(!response.ok){
                throw new Error('Error de conexion')
            }
            return response.json();
        })
        .then((data)=>{
            setBreakingBad(data);
            setCargando(false);
        })
        .catch((error)=>{
            setError(error);
            setCargando(false);
        });

    }, []);
    return(
        <div>
            <h1>BreakingBad</h1>
            <article>
                {breakingBad.map((bad)=>(
                    <p key={bad.id}>
                        <strong>{bad.author}:"</strong>
                        {bad.quote}"
                    </p>
                ))}
            </article>
        </div>
    )
}
export default BreakingBad;