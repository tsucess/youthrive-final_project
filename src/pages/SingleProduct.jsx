import React from "react";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import Products from "../components/products/Products";
import Services from "../components/services/Services";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import Singleprodsection from "../components/sigleproduct/Singleprodsection";

function Singleproduct() {
  const page = "home";
  const title = "Related Products";
  return (
    <>
      <Nav />
      <Breadcrumbs />
      <Singleprodsection />
      <Products page={page} title={title} />
      <Services />
      <Footer />
    </>
  );
}

export default Singleproduct;
