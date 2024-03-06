import React from 'react'
import ProductDetailContext from './ProductDetailContext'


export default function ProductDetailState(props) {
    const ProductDetail = {
        name: "PC",
        detail: "i5 6th Genration",
    }
  return (
    <>
    <ProductDetailContext.Provider value={ProductDetail}>
        {props.children}
    </ProductDetailContext.Provider>
    </>
  )
}
