import "./App.css";
import Store from "./Store/Store.jsx";
import products from "./ProductsData.js";

function App() {

    return (
        <Store products={products}/>
    );
}

export default App;
