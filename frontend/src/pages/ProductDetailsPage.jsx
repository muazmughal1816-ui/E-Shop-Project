import React, { useEffect, useState } from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import ProductDetails from "../components/Products/ProductDetails";
import SuggestedProduct from "../components/Products/SuggestedProduct";
import { useParams } from 'react-router-dom';
import { productData } from '../static/data';

const OrderDetailsPage = () => {
    const {name} = useParams();
    const [data, setData] = useState(null);
    const productName = name.replace(/-/g," ");

    useEffect(() => {
    if (productName) {
        const foundProduct = productData.find(
            (i) => i.name.toLowerCase() === productName.toLowerCase()
        );
        setData(foundProduct);
    }
}, [productName]);
    
  return (
    <div>
        <Header />
        <ProductDetails data = {data} />
        {
            data && <SuggestedProduct data={data} />          
        }
        <Footer />
    </div>
  )
}

export default OrderDetailsPage