import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Button } from "@mui/material";

export default function Cart() {
    const { items, updateItemQuantity } = useContext(CartContext);

    const handleQuantityChange = (id, amount) => {
        updateItemQuantity(id, amount);
    };

    if (items.length === 0) {
        return (
            <div>
                <h2>Your Cart is Empty</h2>
            </div>
        );
    }

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id} className="cart-item">
                        <img src={item.thumbnail} alt={item.title} width={50} />
                        <div>
                            <h3>{item.title}</h3>
                            <p>Price: ${item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                            <Button 
                                onClick={() => handleQuantityChange(item.id, 1)}>
                                +1
                            </Button>
                            <Button 
                                onClick={() => handleQuantityChange(item.id, -1)}>
                                -1
                            </Button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="cart-total">
                <h3>
                    Total: ${items.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}
                </h3>
            </div>
        </div>
    );
}
