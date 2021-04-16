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
        <div className = "container1">
        <tr className = "classAll2">
                <td className="AllP3"><p>PRODUCTO</p></td>
                <td className="AllP3"><p>PRECIO</p></td>
                <td className="AllP4"><p>DESCRIPCIÓN</p></td>
                <td className="AllP3"><p>STOCK</p></td>
        </tr>
        <AllProduct/>
        </div>

        
    </div>


  );
}

export default App;
