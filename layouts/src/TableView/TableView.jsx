import ShopCard from "../ShopCard/ShopCard.jsx";
import "./TableView.css";

export default function TableView({products}) {

    for (let i = 0; i < products.length; i++) {
        products[i].key = i;
    }

    return (
        <div className="tableView">
            {products.map(product => <ShopCard key={product.key} product={product}/>)}
        </div>
    );
}