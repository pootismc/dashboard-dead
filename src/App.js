import Header from "./components/Header";
import Simple from "./components/Simple";
import Product from "./components/Product";
import Data from "./components/Data";
import AllProduct from "./components/AllProduct";


function App() {
  return (
    <div className="App">
        <Header/>
        <Simple/>
        <div className = "categorias">
          <Data/>
          <Product/>
        </div>
        <AllProduct/>
        
    </div>


  );
}

export default App;
