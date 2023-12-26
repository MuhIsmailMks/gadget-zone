"use client";

import React, { use, useEffect, useState } from "react"; 

import Link from "next/link"; 

import Image from "next/image";
import styles from "./page.css";

import layout, { gradient, dimension, textStyle } from "./styles";

// swiper slider

// components
import {
  SwiperSlides,  
  RatingProduct,
  Cards,
  SpecialProductSmallContainer,
  SpecialProductMediumContainer,
  SpecialProductLargeContainer,
  TitleSectionM
} from "./components/Components";
   
import Navigation from "./components/Navigation";
// image  
import specialProduct1 from "./images/specialProduct1.webp";
import specialProduct2 from "./images/specialProduct2.webp";
import specialProduct3 from "./images/specialProduct3.webp";
import specialProduct4 from "./images/specialProduct4.webp";
import specialProduct5 from "./images/specialProduct5.webp";

import bgSpecialProduct2 from "./images/bgspecialproduct2.webp";
import bgSpecialProduct3 from "./images/bgspecialproduct3.webp";
import bgSpecialProduct5 from "./images/bgspecialproduct5.webp";

import type { RootState } from "./GlobalRedux/store";

import { useSelector,useDispatch } from "react-redux"; 
import { increment,decrement,incrementByAmount } from "./GlobalRedux/Features/counter/counterSlice";
import ShoppingBag from "./components/ShoppingBag";
import dataProducts from './data/products.json'
import Product from "./components/Product"; 
 
export default function Home() { 
 
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



  // counter
  const count = useSelector((state:RootState) => state.counter.value)
  const dispatch = useDispatch()

  const { width } = dimensions; 

  return (   
 
      <main className={styles.main}>
          {/* navigation */} 
        
          <Navigation/>  
          <ShoppingBag/>
        
        
          {/* hero products */}
          <div className="hero-product  w-full h-[603px] relative xl-desktop:h-[900px]  max-s-desktop:h-[40vw] s_desktop-xl_tablet:h-[40vw] mobile:mt-[3rem] mobile:h-[40vw] phone:mt-0 phone:h-[75vw]">
            <SwiperSlides />
          </div>

            {/* special products */}
          <div  className={`special-products relative max-w-[100%]  ${dimension.Wfull_hAuto}`}
          >

          <div className={`title-special-product ${layout.flexStart} px-[2rem] phone-tablet:justify-center`}>
            <TitleSectionM   text={'Special product'}  />
          </div>
    
            {/* special products container*/}
            <div   className={`special-products-container  ${dimension.Wfull_hAuto} ${dimension.specialProductContainer} ${layout.flexBetweenItemsStart}`}  >
              {/* col1 left*/}
              <div
                className={`h-[auto] w-[932px] max-w-[70%] relative ${layout.flexDirection} gap-[1.45rem] s_desktop-xl_tablet:gap-[1.7vw] s-tablet:max-w-[90%] s-tablet:gap-[1vw]  phone:max-w-[100%] phone:gap-[.4rem] `}
            >
              {/* top */}
              <div
                className={`${layout.flexBetween} ${dimension.specialProductLeftContainer} `}
              >
                <SpecialProductSmallContainer
                  imageProduct={specialProduct1}
                  altImage={"logitech G502 X Plus"}
                  brandProduct={"Logitech"}
                  nameProduct={"G502 X Plus"}
                />

                <SpecialProductMediumContainer
                  bgImageProduct={bgSpecialProduct2}
                  imageProduct={specialProduct2}
                  altImage={"Ring Car Cam"}
                  brandProduct={"Ring"}
                  nameProduct={"Car Cam"}
                />
              </div>

              {/* bottom */}
              <div
                className={`${layout.flexBetween} flex-row-reverse ${dimension.specialProductLeftContainer}`}
              >
                <SpecialProductSmallContainer
                  imageProduct={specialProduct4}
                  brandProduct={"Sony"}
                  nameProduct={"WF-1000XM5"}
                />

                <SpecialProductMediumContainer
                  bgImageProduct={bgSpecialProduct3}
                  imageProduct={specialProduct3}
                  altImage={"Unistellar eQuinox 2 Smart Telescope"}
                  brandProduct={"Unistellar"}
                  nameProduct={"eQuinox 2 Smart Telescope"}
                />
              </div>
            </div>

            {/* col2 right*/}
            <div
              className={`relative ${dimension.specialProductRightContainer}  bg-black `}
            >
              <SpecialProductLargeContainer
                bgImageProduct={bgSpecialProduct5}
                imageProduct={specialProduct5}
                altImage={"Apple’s the AirPods Max 2"}
                brandProduct={"Apple’s"}
                nameProduct={" AirPods Max 2"}
              />
            </div>
          </div>

        </div>

          {/* our products */}
          <div className="our-products my-[3rem] mx-[auto]">
            <div
              className={`products-title ${layout.flexCenter} ${dimension.Wfull_hAuto} relative`}
            >
              <h2
                className={`relative font-[700] s-desktop:text-[2.5rem] tablet:text-[1.8rem] phone:text-[1.6rem] leading-[1] `}
              >
                Our Products
              </h2>
            </div>

            <div
              className={`products-container mt-[4rem] mx-[auto] max-w-[1700px] ${layout.flexStart}   content-start  flex-wrap ${dimension.Wfull_hAuto} s-desktop:px-[2rem] tablet:px-[2.5rem] phone:px-[1.5rem] gap-[1.5rem]`}
            >
              {/* <Cards /> */}
              {dataProducts.slice(0,5).map((item,id ) => ( 
                        <Product {...item}  key={id}/>  
                ))}   
            </div>
          </div>  

          {/* percobaan untuk card */}
          <div className="w-[300px] h-[200px] max-w-[100%] bg-black relative mt-[14rem] mx-[auto]">
            <RatingProduct />
          </div>

  
        
        <Link href='/shoppingBag'>To bag</Link>
 
        

         <div className="counter">
            <button onClick={() => dispatch(decrement())}>-</button>
            <span>{count}</span>
            <button onClick={() => dispatch(increment())}>+</button>
         </div>

      
      </main>     
  
  );
}
