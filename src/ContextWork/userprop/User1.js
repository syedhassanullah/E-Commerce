import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'
import ProductDetailContext from '../Context/ProductDetailContext';

export default function User1() {
  const Data = useContext(UserContext);
  const PData = useContext(ProductDetailContext);
  console.log(Data);
  return (
    <>
    <h1>User Detail</h1>
    <br/>
    <h1>Name: {Data.name}</h1>
    <h1>Last Name: {Data.fname}</h1>
    <h1>Address: {Data.address}</h1>
    <br/>
    <br/>
    <br/>
    

    </>
  )
}
