import React from "react";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import Products from "../components/products/Products";
import Services from "../components/services/Services";

function Shop() {
  const page = "shop"
  return (
    <>
      <Nav />
      <Products page={page} />
      <Services />
      <Footer />
    </>
  );
}

export default Shop;
