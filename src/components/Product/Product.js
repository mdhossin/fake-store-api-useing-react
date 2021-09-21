import React from "react";
import "./Product.css";

export default function Product(props) {
  const { image, title, category, price } = props.product;
  //   console.log(props.product);
  return (
    <div className="card-group">
      <div className="card p-2 shadow">
        <img src={image} className="card-img-top img-size mx-auto" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{category}</p>
          <h2>Price : {price}</h2>
        </div>
        <div className="card-footer">
          <button className="btn btn-outline-primary">Add To Cart</button>
          <button className="btn btn-outline-success mx-3">Details</button>
        </div>
      </div>
    </div>
  );
}
