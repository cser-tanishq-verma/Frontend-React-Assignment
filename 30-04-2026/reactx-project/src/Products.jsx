import React, { Fragment, useEffect } from 'react'
import { getProducts } from './APIServiceLayer/APIRequests';

const Products = () => {
    let [products, setProducts] = useState([]);
    useEffect(()=>{
        (async()=>{
            let res = await getProducts();
            setProducts(prev =>([...res]))
        })()
    },[])
  return (
    <div>
      {products.map(v=>{
        return <Fragment key={v.id}>
          <h2>{v.name}</h2>
        </Fragment>
      })}
    </div>
  )
}

export default Products