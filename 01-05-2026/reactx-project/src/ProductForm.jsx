import React, { useState } from 'react'
import { postProduct } from './APIServiceLayer/APIRequests';

const ProductForm = ({ setCount }) => {

  let [product, setProducts] = useState({});

  // React has Synthetic Events
  // Synthetic Events - Wrapper Event which wraps around the Browser Event (Native Event)
  // and provides additional features

  function onChangeFunction(e) {
    setProducts(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();
        postProduct(product);
        setCount(prev => prev + 1);
      }}>

        <div>
          <input
            type="text"
            name="name"
            value={product?.name || ""}
            onChange={(e) => { onChangeFunction(e) }}
          />
        </div>

        <div>
          <input
            type="text"
            name="description"
            value={product?.description || ""}
            onChange={(e) => { onChangeFunction(e) }}
          />
        </div>

        <button>Submit the Form</button>

      </form>
    </>
  )
}

export default ProductForm;