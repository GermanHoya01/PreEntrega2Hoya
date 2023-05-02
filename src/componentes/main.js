
import { Route, Routes } from "react-router-dom"

const Main = () => {

    return (
        <Routes>
            <Route path="/" element={<Page2 />} />
            <Route path="/categoria/:id" element={<Page2 />} />
            <Route path="/carrito" element={<Page4 />} />
        </Routes>
    )
}

export default Main