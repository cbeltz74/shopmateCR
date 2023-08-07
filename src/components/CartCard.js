import "./CartCard.css";

export const CartCard = ({item_in_cart}) => {
    const {name, price, image} = item_in_cart;

    return (
        <div className="cartCard">
            <img src={image} alt={name} />
            <p className="productName">{name}</p>
            <p className="productPrice">${price}</p>
        </div>
  )
}
