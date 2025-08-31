import React from "react";

const CartPage = ({ cartItems, removeFromCart, totalPrice, addToCart }) => {
  return (
    <div className="cart-container" style={{ padding: "20px" }}>
      <h2>CART</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id} 
            >
              <h3>{item.name}</h3>
              <p>Price: {item.price}</p>

              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <button onClick={() => removeFromCart(item.id)}>Remove from cart</button>
                <span>Quantity: {item.quantity}</span>
                <button onClick={() => addToCart(item)}>+</button>
              </div>
            </div>
          ))}

          <div style={{ marginTop: "20px" }}>
            <h3>Total Price: {totalPrice} INR</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
