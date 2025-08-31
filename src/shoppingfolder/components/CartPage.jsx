import React from 'react';

const CartPage = ({ cartItems, removeFromCart, totalPrice }) => {
  return (
    <div className="cart-container">
      <h2>CART</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
      
          {cartItems.map((item) => (
            <div key={item.id} style={{ marginBottom: '20px' }}>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
            </div>
          ))}

          <div >
            <h3>Total Price: {totalPrice} INR</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
