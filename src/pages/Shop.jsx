/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import Products from "../components/products/Products";
import Services from "../components/services/Services";

function Shop() {
  const page = "shop"
  return (
    <>
      <header className="nav-section">
        <Nav />
      </header>
      <Products page={page} />
      <Services />
      <Footer />
    </>
  );
}

export default Shop;
