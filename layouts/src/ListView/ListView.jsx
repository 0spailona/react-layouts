import ShopItem from "../ShopItem/ShopItem.jsx";
import "./ListView.css";

export default function ListView({products}) {

    for (let i = 0; i < products.length; i++) {
        products[i].key = i;
    }

    return (
        <div className="listView">
            {products.map(product => <ShopItem key={product.key} product={product}/>)}
        </div>
    );
}