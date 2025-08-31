import React, { useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Collections from "../components/Collections";
import Footer from "../components/Footer";
import WomanCollection from "../components/WomanCollection";
import { Gents, Ladies } from "../data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartPage from "../components/CartPage";
import SignIn from "../components/signin";
import SignUp from "../components/signup";
const MainPage = () => {
  const [gentsFashion] = useState(Gents);
  const [ladiesFashion] = useState(Ladies);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      if (prevItems.some((item) => item.id === product.id)) {
        return prevItems;
      }
      return [...prevItems, product];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, product) => {
      const price = parseInt(
        product.price.replace(" INR", "").replace(",", ""),
        10
      );
      return total + price;
    }, 0);
  };

  return (
    <Router>
      <div>
        <Header cartItems={cartItems} />
        <Banner />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Collections gentsFashion={gentsFashion} addToCart={addToCart} />
                <WomanCollection ladiesFashion={ladiesFashion} addToCart={addToCart} />
              </>
            }
          />
          <Route
            path="/men"
            element={<Collections gentsFashion={gentsFashion} addToCart={addToCart} />}
          />
          <Route
            path="/women"
            element={<WomanCollection ladiesFashion={ladiesFashion} addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                totalPrice={calculateTotal()}
              />
            }
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />  
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default MainPage;
