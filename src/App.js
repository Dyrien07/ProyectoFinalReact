import "./App.css";
import Navbar from "./componets/NavBar";
import ItemListContainer from "./contariners/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./contariners/ItemDetailContainer";
import ShopProvider from "./context/ShopProvider";

function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="*" elements={<h1>Destino no encontrado</h1>} />
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryID"
              element={<ItemListContainer />}
            />
            <Route path="/detail/:detailID" element={<ItemDetailContainer />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;
