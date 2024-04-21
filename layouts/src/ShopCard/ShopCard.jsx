import "./ShopCard.css";

export default function ShopCard({product}) {
    return (
        <div className="shopCard">
            <span className="titleCard">{product.name}</span>
            <span className="colorCard">{product.color}</span>
            <div className="imageCardWrp">
                <img src={product.img} alt={product.name} className="imageCard"/>
            </div>

            <div className="priceAndAddBtnCard">
                <span className="priceCard">${product.price}</span>
                <span className="addBtnCard">Add to cart</span>
            </div>
        </div>
    );
}