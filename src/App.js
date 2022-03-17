import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <div className="App">
        <Route path="/"  element={<Home />}  >
          
        </Route>
        <Route path="/cart" element ={ <Cart />} >
        </Route>
      </div>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
