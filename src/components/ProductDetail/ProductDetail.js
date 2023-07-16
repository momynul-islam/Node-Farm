import React, { useContext, useState } from "react";
import "./ProductDetail.css";
import { DATACONTEXT } from "../../App";
import { Link, useLoaderData } from "react-router-dom";

const ProductDetail = () => {
  const data = useContext(DATACONTEXT);

  console.log(data);

  const id = useLoaderData();

  const {
    image,
    productName,
    price,
    quantity,
    description,
    from,
    nutrients,
    organic,
  } = data[id];

  return (
    <section className="product-detail">
      <div className="product-card">
        <div className="product-thumbnail">
          <p className="img-1">{image}</p>
          <p className="img-2">{image}</p>
          <p className="img-3">{image}</p>
          <p className="img-4">{image}</p>
          <p className="img-5">{image}</p>
          <p className="img-6">{image}</p>
          {/* <p className="img-7">🥑</p>
          <p className="img-8">🥑</p>
          <p className="img-9">🥑</p> */}
        </div>
        <h3 className="product-title">{productName}</h3>
        <div className="product-details">
          <div>
            <p>🌍 From {from}</p>
            <p>📦 {quantity}</p>
          </div>
          <div>
            <p>❤️ {nutrients}</p>
            <p>🏷 {price}€</p>
          </div>
        </div>
        <button className="btn-cart">🛒 Add to shopping card ({price}€)</button>
        <p className="product-des">{description}</p>
        <Link to={"/"} className="btn-back">
          👈Back
        </Link>
        {organic && <p className="organic-label">organic</p>}
      </div>
    </section>
  );
};

export default ProductDetail;
