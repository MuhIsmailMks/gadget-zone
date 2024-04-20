"use client";

import React from "react"; 
import styles from "./page.css";
import layout, { dimension } from "./styles"; 

// components
import {
  SwiperSlides, 
  TitleSectionM,
  Benefits,
  PopularProduct
} from "./components/Components";

import SpecialProductSmallContainer,{SpecialProductMediumContainer,SpecialProductLargeContainer} from "./components/SpecialProducts";

   
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
import { increment,decrement } from "./GlobalRedux/Features/counter/counterSlice";
import ShoppingBag from "./components/ShoppingBag";
import dataProducts from './data/products.json'
import Product from "./components/Product"; 
import { dataBenefits, dataPopularProducts } from "./components/dataComponents";
import { benefitStylingContainer, heroProductStyling, popularProductContainerStyling, specialProductContainerStyling } from "./styles/homePageStyles";
 
export default function Home() {

  // counter
  const count = useSelector((state:RootState) => state.counter.value)
  const dispatch = useDispatch();

  return (   
 
      <main className={styles.main}>
          {/* navigation */} 
        
          <Navigation/>  
          <ShoppingBag/>
        
          {/* hero products */}
          <div className={`hero-product  ${heroProductStyling.heroSize} ${heroProductStyling.property}`}>
            <SwiperSlides />
          </div>

          {/* benefits */}
          <div className={`benefit-container hidden relative   ${layout.flexCenter} ${dimension.Wfull_hAuto} ${benefitStylingContainer.property} `}>
            {
              dataBenefits.map((benefit,i) => (
                <Benefits {...benefit} key={i}/>
              ))
            } 
          </div>


            {/* special products */}
          <div  className={`special-products relative max-w-[100%] overflow-hidden  ${dimension.Wfull_hAuto}`}
          >
 
            <TitleSectionM text={'Special product'}  /> 
    
            {/* special products container*/}
            <div   className={`special-products-container  ${dimension.Wfull_hAuto}  ${specialProductContainerStyling.specialProductContainer} ${layout.flexBetweenItemsStart}`}  >

              {/* col1 left*/}
              <div
                className={`h-[auto] w-[932px] max-w-[70%] relative ${layout.flexDirection} gap-[1.45rem] s_desktop-xl_tablet:gap-[1.7vw] s-tablet:max-w-[90%] s-tablet:gap-[1vw]  phone:max-w-[100%] phone:gap-[.4rem] `}
              >

              {/* top */}
              
              <div
                className={`${layout.flexBetween} ${specialProductContainerStyling.specialProductLeftContainer} `}
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
                className={`${layout.flexBetween} flex-row-reverse ${specialProductContainerStyling.specialProductLeftContainer} `}
              >
                <SpecialProductSmallContainer
                  imageProduct={specialProduct4}
                  brandProduct={"Sony"}
                  altImage={"Sony Earbuds WF-1000XM5"}
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
              className={`relative ${specialProductContainerStyling.specialProductRightContainer}  bg-black `}
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


         {/* popular product */}
         <div className={`popular-products-section hidden relative ${dimension.Wfull_hAuto} max-w-[100%] overflow-hidden`}>

          {/* title */} 
            <TitleSectionM text={'Popular Product In This Shop'}  /> 

          {/* popular product container */}
          <div className={`popular-products-container relative ${layout.flexCenter} flex-wrap ${dimension.Wfull_hAuto} ${popularProductContainerStyling.property}`}>

          {
                dataPopularProducts.map((product,i) => (
                  <PopularProduct {...product} key={i}/>
                ))
              } 
  

          </div>

         </div>

         

          {/* our products */}
          <div className="our-products  my-[3rem] mx-[auto]">
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
              className={`products-container mt-[4rem] mx-[auto] max-w-[1500px] ${layout.flexCenter}   content-start  flex-wrap ${dimension.Wfull_hAuto} s-desktop:px-[2rem] tablet:px-[2.5rem] phone:px-[1.5rem] gap-[1.5rem]`}
            > 
              {dataProducts.slice(0,10).map((item,id ) => ( 
                        <Product {...item}  key={id}/>  
                ))}   
            </div>
          </div>  
 

  
         
 
        

         <div className="counter">
            <button onClick={() => dispatch(decrement())}>-</button>
            <span>{count}</span>
            <button onClick={() => dispatch(increment())}>+</button>
         </div>

      
      </main>     
  
  );
}
