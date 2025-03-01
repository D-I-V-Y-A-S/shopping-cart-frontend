import React, { useState, useEffect } from 'react'
import './GetAllProductsComponent.css'
import ProductComponent from '../ProductComponent/ProductComponent'
import Base_Url from '../../../CONFIG.JS'

const GetAllProductsComponent = () => {
    const [products, setProducts] = useState([])

    const fetchAllProducts  = async() => {
        const response = await fetch(`${Base_Url}`)
        const data = await response.json()
        console.log(data);
        setProducts(data)
    }

    useEffect(() => {
        fetchAllProducts()
    }, [])

  return (
    <div className='products'>
        {products.map(productItem=>(
            <ProductComponent productItem={productItem}/>
        ))}
    </div>
  )
}

export default GetAllProductsComponent