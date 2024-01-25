'use client'

// react
import React from 'react';  
import Navigation from '../components/Navigation';
import { dimension, layout } from '../styles';
import Image from 'next/image';

// data
import dataProducts from '../data/products.json' 

// image
import mainImage from '../images/main-image-products.webp' 
import mainImageTablet from '../images/main-image-products-tablet.webp' 
import mainImagePhone from '../images/main-image-products-handphone.webp' 
import ShoppingBag from '../components/ShoppingBag';
import Product from '../components/Product';
import { useSelector } from 'react-redux';

export default function products (){  
  // const {product,total,quantity} = useSelector((store) => store.shopping)

  const [dimensions, setDimensions] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  const { width } = dimensions;  

  const widthMainImage = () => {
    if(width >= 1100){
      return mainImage
    } else if  (width <= 1100 && width >= 600){
      return mainImageTablet
    } else if (width <= 600){
      return mainImagePhone
    }
  }
 
  return (
    <main>    
            <Navigation/>   
            <ShoppingBag/>


      <div className={`product-container ${dimension.Wfull_hAuto} relative`}> 

       <div className={`main-image ${dimension.Wfull_hAuto} relative bg-[#222222] ${layout.flexCenter}`}> 
           <Image 
             src={widthMainImage()}
             alt="main image"
           />
       </div>

        {/* products */}
       <div className={`all-products ${dimension.Wfull_hAuto} relative min-h-[100vh]`}>

        <div className="products-title">

        </div>
        <div className={`products-container  pt-[5rem] px-[1.5rem] flex  flex-wrap justify-center gap-[2rem] max-w-[1500px]  mx-auto`}>

                {dataProducts.map((item,id ) => ( 
                        <Product {...item}  key={id}/>  
                ))}   

        </div>
       </div>

        <button className='ml-[9rem] my-[5rem] bg-primary-color'>hello</button>
      </div>
    </main>
  )
}

 