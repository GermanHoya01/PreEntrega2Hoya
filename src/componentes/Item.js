const Item = ({id, nombre, imagen, precio, descripcion, stock}) => {

    return (
        <article>
            <header>
                <h2>
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={imagen} alt={nombre}/>
            </picture>
            <section>
                <p>
                    Precio: ${precio}
                </p>
                <p>
                    Stock disponible: {stock}
                </p>

            </section>
            <footer>
                <link>Ver detalle : {descripcion}</link>
            </footer> 
        </article>
    );
}

export default Item