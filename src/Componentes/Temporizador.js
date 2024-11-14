import React, {useState,useEffect} from "react";

function Temporizador({tiempoInicial}) {
    const [tiempo, setTiempo] = useState(tiempoInicial);

    useEffect(() => {
        if (tiempo <= 0) return;

        const temporizadord = setInterval(() => {
            setTiempo((prevTiempo) => prevTiempo - 1)
        }, 1000);
        return () => clearInterval(temporizadord);
    }, [tiempo]);

    return (<div>
        <h1>Cuenta regresiva: {tiempo} segundos</h1>
        {tiempo === 0 && <p>tiempo terminado</p>}
    </div>
    )
}
export default Temporizador;