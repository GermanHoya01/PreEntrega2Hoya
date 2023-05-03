const products = [
    {
        id: 1,
        nombre: "Camiseta",
        precio: 29.99,
        descripcion: "Camiseta de algodón 100% para uso diario",
        imagen: "https://via.placeholder.com/300x300",
        stock: 10,
    },
    {
        id: 2,
        nombre: "Pantalón",
        precio: 59.99,
        descripcion: "Pantalón de mezclilla casual para uso diario",
        imagen: "https://via.placeholder.com/300x300",
        stock: 5,
    },
    {
        id: 3,
        nombre: "Tenis",
        precio: 99.99,
        descripcion: "Calzado deportivo para corredores de alto rendimiento",
        imagen: "https://via.placeholder.com/300x300",
        stock: 7,
    },
];

const filtrar = (productos, categoria) => {
    const productosFiltrados = productos.filter(producto => producto.categoria.toLowerCase() === categoria.toLowerCase());
    return productosFiltrados;
}


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500)
    })
}