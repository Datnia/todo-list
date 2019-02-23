import React from "react";

function Products(props) {
  return (
    <div>
      <h3>Name: {props.product.name}</h3>
      <p>Price: {props.product.price}</p>
      <p>Description: {props.product.description}</p>
      <br />
    </div>
  );
}

export default Products;
