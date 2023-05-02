import useCounter from '../hooks/useCounter'

const Counter = ({ children }/* props */) => {

    const { valor, sumar, restar } = useCounter()
    /* const {children} = props */

    return (
        <div>
            <h2>ItemCount</h2>
            <p>Contador : {valor} </p>
            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar</button>
            {children}
            {/* props.children */}
        </div>
    )
}

export default Counter