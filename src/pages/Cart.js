import { useCart } from "../context/CartContext";
import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";

export const Cart = () => {
  const { total } = useCart();

    useTitle("Cart");

    const items_in_cart = [
        {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/1001.png"},
        {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/images/1002.png"}
      ]

  return (
    <main>
      <section className="cart">
        <h1>Cart Item: {items_in_cart.length} / ${total} </h1>
        { items_in_cart.map((item_in_cart) => (
            <CartCard key={item_in_cart.id} item_in_cart={item_in_cart} />
        ))}
      </section>
    </main>
  )
}
