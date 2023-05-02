import { BrowserRouter, Route, Routes} from "react-router-dom"
import NavBar from "./componentes/NavBar";
import Footer from "./componentes/footer";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <main className="main">

      <Routes>
          <Route path="/" element={<ItemListContainer/>} />

          <Route path="/category/:id" element={<ItemListContainer />} />

          <Route path="/item/:id" element={<ItemDetailContainer />} />

          <Route path="/cart" element={<Cart/>} />

          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        
        </Routes>
      </main>
      <Footer />

    </BrowserRouter>
  )
}

export default App;