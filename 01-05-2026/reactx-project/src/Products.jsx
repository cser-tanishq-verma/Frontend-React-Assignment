import React, { Fragment, useEffect, useState } from 'react'
import { getProducts } from './APIServiceLayer/APIRequests';
import ProductForm from './ProductForm';

const Products = () => {

  let [products, setProducts] = useState([]);
  let [count, setCount] = useState(0);

  useEffect(() => {
    (async () => {
      let res = await getProducts();
      setProducts(prev => ([...res]))
    })()
  }, [count])

  return (
    <div>
      {products.map(v => {
        return (
          <Fragment key={v.id}>
            <h2>{v.name}</h2>
          </Fragment>
        )
      })}

      <section>
        <hr />
        <ProductForm {...{ setCount }} />
        <hr />
      </section>
    </div>
  )
}

export default Products;