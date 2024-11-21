import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";


export default function Cartt() {
  const { items, updateItemQuantity } = useContext(CartContext);

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleQuantityChange = (id, amount) => {
    updateItemQuantity(id, amount);
  };

  const renderCartItems = () => {
    return items.map(item => (
        <tr key={item.id}>
            <td>
                <img src={item.thumbnail} alt={item.title} className="cart-item-image" />
                {item.title}
            </td>
            <td>R$ {item.price.toFixed(2)}</td>
            <td>
                <button className="quantity-btn" onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                {item.quantity}
                <button className="quantity-btn" onClick={() => handleQuantityChange(item.id, 1)}>+</button>
            </td>
            <td>R$ {(item.price * item.quantity).toFixed(2)}</td>
        </tr>
    ));
};

  return (
    <section className="cart">
      <h2>Carrinho de compras</h2>

      {items.length === 0 ? (
        <p className="empty-cart">O seu carrinho está vazio.</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Produto</th>
                <th>Preço</th>
                <th>Quantidade</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {renderCartItems()}
            </tbody>
          </table>

          <div className="total">
            <strong>Total: R$ {calculateTotal().toFixed(2)}</strong>
          </div>

          { }
          <Link to="/checkout">
            <button className="checkout-btn">Finalizar Compra</button>
          </Link>
        </>
      )}
    </section>
  );
}