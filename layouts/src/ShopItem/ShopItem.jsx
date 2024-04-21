import "./ShopItem.css";

export default function ShopItem({product}) {
    return (
        <div className="shopItem">
            <div className="imageListItemWrp">
                <img src={product.img} alt={product.name} className="imageListItem"/>
            </div>
            <span className="titleListItem">{product.name}</span>
            <span className="colorListItem">{product.color}</span>
            <span className="priceListItem">${product.price}</span>
            <span className="addBtnListItem">Add to cart</span>
        </div>
    );
}