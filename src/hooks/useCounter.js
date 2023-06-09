import { useState } from "react"


const useCounter = () => {

    const [contador, setContador] = useState(0)

    const handleSumar = () => {
        setContador(contador + 1)
    }

    const handleRestar = () => {
        setContador(contador - 1)
    }

    const loQueRetorno = {
        valor: contador,
        sumar: handleSumar,
        restar: handleRestar
    }

    return loQueRetorno
}


export default useCounter