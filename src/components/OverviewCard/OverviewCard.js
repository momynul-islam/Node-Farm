import React from "react";
import "./OverviewCard.css";
import { Link } from "react-router-dom";

const OverviewCard = ({ product, handleClick }) => {
  const { id, image, productName, organic, quantity, price } = product;
  return (
    <div className="overview-card">
      <div className="product-img">
        <p>{image}</p>
      </div>
      <div className="product-name">
        <p>{productName}</p>
      </div>
      <div className="product-organic">{organic && <p>organic!</p>}</div>
      <div className="product-quantity">
        <p>{quantity} 📦</p>
      </div>
      <div className="product-price">
        <p>{price}$</p>
      </div>
      <div className="btn-detail">
        <Link to={`/product/${id}`}>details</Link>
      </div>
    </div>
  );
};

export default OverviewCard;
