import React,{useState,useEffect} from 'react'
import Image from "next/image"; 

// get data from dataComponents
import {dataHeroSlidesHeader,dataProducts} from './dataComponents'
import dataProductsJson from '../data/products.json'
import layout,{ dimension, textStyle ,gradient, productCardStyles} from '../styles';

// material UI
// yang kita butuhkan di gadget zone
import SvgIcon from "@mui/material/SvgIcon";  
import { Favorite,FavoriteBorder } from '@mui/icons-material';
import { pink,grey } from "@mui/material/colors"; 
import { ThemeProvider } from 'styled-components'; 

// images
import star from '../icons/star.svg'
import bg_star from '../icons/empty-star.svg'
import halfStar from '../icons/half-star.svg'
import bagIcon from '../icons/bag-icon.svg'

 

// swiper slider
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/effect-creative';

import "swiper/css";
import "swiper/css/navigation"; 
import 'swiper/css/pagination';

import { Navigation,Pagination,EffectCreative,Autoplay } from "swiper/modules";

// components 
function Components() {
  return (
    <div>Components</div>
  )
}

// header
export const MenuButton = ({click}) => { 
    return(
        <button className='text-yellow-400 relative hidden mobile:flex mobile:ml-[3vw]'   onClick={click}> 
            <svg className='w-[30px] h-auto x-phone:w-[25px]' viewBox="0 0 55 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="13.75" width="41.25" height="5" fill="#439CEF"/>
                <rect x="21.0833" y="28" width="33.9167" height="5" fill="#439CEF"/>
                <rect y="14" width="55" height="5" fill="#439CEF"/>
            </svg> 
        </button>
    )
}


// hero product
export const SwiperSlides = () => {
  const [dimensions, setDimensions] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  }); 

  const handleResize = () => {
      setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
      });
    } 

  React.useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  const {width} = dimensions;


  return( 
     <Swiper 
           navigation={true} 
           pagination={{
            clickable: true,
          }}
           loop={true}
           autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
           modules={[Navigation,Pagination,EffectCreative,Autoplay]} 
           effect={"creative"}
           creativeEffect={{
            prev: {
              shadow: true,
              translate: ['-20%', 0, -1],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }}
           className="mySwiper"
        >
 
  {
        dataHeroSlidesHeader.map((product,i) => (

          <SwiperSlide className="container-product-header" key={i}>

          <div className="bg-image h-full w-full absolute left-0 top-0  ">
            <Image
              src={width >= 602 ? product.imageDesk : product.imageMobile}
              alt="logo" 
              className="image-product-header w-full h-auto object-cover  phone:h-full" 
            />
          </div>

          <div className={`product-header relative w-full h-full flex  justify-end phone:justify-center `}>

              <div className="h-full flex flex-col justify-center text-white font-plusJakartaSans w-[50%]  x-desktop:w-[45%] phone-tablet:w-[100%] phone-tablet:items-center phone-tablet:text-center  ">

                <section>

                    {/* special sale */}
                    <p className="text-[0.875rem]  xl-tablet:text-[1.5vw]">Special Sale</p>
                    <h2 className={`${gradient.newProductGradient} leading-[1.1] font-Lato font-[700] tracking-[2px] text-[1.875rem] mobile:tracking-[1px] tablet:text-[2.5vw] xl-phone:text-[1.2rem]  x-phone:text-[1rem]`}>New Product</h2>

                    {/* about product */}
                    <div className="about-product-header my-[2.5rem] w-[485px] max-w-[100%]  tablet:my-[1.6rem] xl-tablet:pr-[10vw] phone:my-[5vw] xl-phone:px-[5rem] x-phone:px-[30vw]">
                      <p className="italic text-[2.5rem] font-[300] tablet:text-[3vw] xl-phone:text-[1.4rem] x-phone:text-[1.2rem]">{product.aboutProduct}</p>
                    </div>

                    {/* off sell */}
                    <div className="discount">
                      <p className="text-[1.313rem] tablet:text-[1rem] xl-phone:text-[.9rem] x-phone:text-[.9rem]">Off Sell</p>
                      <span className="text-primary-color text-[3.438rem] leading-[1.2] tablet:text-[4.2vw] xl-phone:text-[2rem] x-phone:text-[1rem]">{product.offSell}</span>
                    </div>

                </section>

                <button  id="alempty" aria-label="open to navigation" className={` bg-primary-color rounded-[34px] ${dimension.viewProduct} tablet:py-[.2rem]  xl-phone:mt-[.4rem] ${textStyle.viewProductText} `}>View Product</button>

              </div>

          </div>

         </SwiperSlide>
        ))
       } 
        </Swiper>
     
  )
}

// title section
export const TitleSectionM = ({text}) => {
  return(
    <div className=' w-[auto] relative flex mt-[2rem]  '>
      <h2 className={`m-0 ${textStyle.mediumLatoText}`}>{text}</h2>
      <div className={`line ${dimension.sectionProductTitleLine}`}></div>
    </div>
  )
}
 

// special product container 
// special product
export const SpecialProductSmallContainer = ({brandProduct,nameProduct,imageProduct,altImage}) => {
  return(
    <div className={`small-box relative cursor-pointer ${dimension.specialProductSmall} ${dimension.specialProductPhoneSize}`}>

        <div className="bg-image w-full h-full relative bg-black"></div> 

          <Image src={imageProduct} alt={altImage} className={`object-contain select-none ${dimension.specialProductImageSmall}  `}/>

        <div className={`about-product ${dimension.specialProductTextContainer}`}>
            <h3 className={`${textStyle.brandSpecialProduct}`}>{brandProduct}</h3>
            <p className={`${textStyle.nameSpecialProduct}`}>{nameProduct}</p>
        </div>

  </div>
  )
}

export const SpecialProductMediumContainer = ({brandProduct,nameProduct,imageProduct,bgImageProduct,altImage}) => {
  return(
    <div className={`medium-box ${dimension.specialProductMedium}  ${dimension.specialProductPhoneSize} ${layout.flexCenter}  `}>

                {/* bg image product */}
                  <Image
                    className="bgImage absolute left-0 top-0 w-full h-full"
                    src={bgImageProduct}
                    alt={altImage}
                  />

                {/*  image product */}
                    <Image
                    className={`image-product ${dimension.specialProductImageMedium}`}
                    src={imageProduct}
                   />

                  <div className={`about-product ${dimension.specialProductTextContainer}`}>
                      <h3 className={`${textStyle.brandSpecialProduct}`}>{brandProduct}</h3>
                      <p className={`${textStyle.nameSpecialProduct}`}>{nameProduct}</p>
                  </div>
              </div>

  )
}

export const SpecialProductLargeContainer = ({brandProduct,nameProduct,imageProduct,bgImageProduct,altImage}) => {
  return(
    <div className={`large-box ${dimension.specialProductLarge} ${layout.flexCenterItemsStart} pt-[2rem] tablet:pt-[2%] phone:pt-[2%] cursor-pointer`}>

                {/* bg image product */}
                  <Image
                    className="bgImage z-0 absolute left-0 top-0 w-full h-full"
                    src={bgImageProduct}
                    alt={altImage}
                  />

                {/*  image product */}
                    <Image
                    className={`image-product z-10 ${dimension.specialProductImageLarge}`}
                    src={imageProduct}
                   />

                  <div className={`about-product ${dimension.specialProductTextContainer} text-center h-[28%] s_desktop-xl_tablet:h-[20%] s-tablet:h-[80px] phone:h-[70px]`}>
                      <h3 className={`${textStyle.brandSpecialProduct}`}>{brandProduct}</h3>
                      <p className={`${textStyle.nameSpecialProduct}`}>{nameProduct}</p>
                  </div>
      </div>

  )
}

// rating product
const RatingStar = () => {
    return(
       <>
        <Image
        alt="star icon"
        src={star}  
        className={`${productCardStyles.ratingSizeStar}   object-contain`}
        priority
       />  
       </>

    )
}

const RatingHalfStar = () => {
  return(
     <>
      <Image
      alt="star icon"
      src={halfStar}  
      className={`${productCardStyles.ratingSizeStar}   object-contain`}
      priority
    />  
     </>

  )
}

const EmptyStar = () => {
    return(
       <>
        <Image
        alt="star icon"
        src={bg_star}  
        className={`${productCardStyles.ratingSizeStar}   object-contain`}
        priority
      />  
       </> 
    )
}

export const RatingProduct = ({ratingVal}) => { 
  const emptyVal = 5;  

    // for rating star 
  const starArray = Array.from({length : Math.floor(ratingVal)}, (_, index) => (
    <RatingStar key={index}/>
  ))

  // for half rating star 
  if (ratingVal % 1 !== 0) {
    starArray.push(<RatingHalfStar key="half-star" />);
  }

  // for backgroung star
  const bgStar = Array.from({length : Math.floor(emptyVal)}, (_, index) => (
    <EmptyStar key={index}/>
  ))
 

  return (
    <div className={`stars-container ${layout.flexCenter} relative w-[100px]`}>  
      <div className={`star-rating relative w-[100%] z-[2] ${layout.flexStart} gap-[5px] phone:gap-[2px]`}>
         {starArray} 
      </div>
      <div className={`empty-star absolute  w-[100%] ${layout.flexStart} gap-[5px] phone:gap-[2px]`}>
        {bgStar}
      </div>
    </div>
  );
};
 
 
// products card
export const Cards = () => {
  // resize
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const updateWindowSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowSize);

    return () => {
      window.removeEventListener('resize', updateWindowSize);
    };
  }, []);

  console.log(windowSize.width);
  
  let favoriteSize = () => {
    if(windowSize.width > 1300){
      return 25
    } else if(windowSize.width < 1300 && windowSize.width > 600){
      return 20
    } else {
      return 15
    }
  }
 

  // favorite handler
  const [countFavorite,setCountFavorite] = useState(dataProducts);

  const handleFavoriteCard = (i) => {
    const updateProducts = [...dataProducts];
    updateProducts[i].favoriteState = !updateProducts[i].favoriteState

    if(updateProducts[i].favoriteState){
      updateProducts[i].favoriteCount += 1
    } else {
      updateProducts[i].favoriteCount -= 1
    }

    setCountFavorite(updateProducts)
  }

  return(
  <>
   {
    dataProducts.map((product,i) => {
      return(

        <div className={`card-product transition-all duration-[500ms] cursor-pointer ease-in-out ${productCardStyles.cardSize} relative drop-shadow-card bg-white`}key={i}>

          {/* image container product */}
          <div className={`image-product ${layout.flexCenter} w-[full] ${productCardStyles.cardImageHeight} relative bg-[#ECECEC]`}>

            {/* image product */}
             <Image
                src={product.imageProduct}  
                className={`w-[50%] h-[auto]  duration-[500ms]`}
                priority
                alt="procut"
              />  
 
               {/* handle card */}
            <div className={`handle-card ${layout.flexDirection} absolute left-[.5rem] top-[1rem]  w-auto gap-[.4rem]`}>

                  <div className={`add-bag ${layout.flexCenter} w-[30px]`}>
                    <button className='bag-icon'>
                      <Image 
                      className={`${productCardStyles.cardBagIcon}`}
                      src={bagIcon}
                      alt='bag icon'
                      />
                    </button>
                  </div>

                  <div className={`favorite w-[30px] ${layout.flexDirection} items-center`}>
                      <button onClick={() => handleFavoriteCard(i)}> 
                      {
                        product.favoriteState ? <Favorite sx={{ color: pink[500],fontSize:favoriteSize() }} className={`FavoriteIcon`}  /> : <FavoriteBorder sx={{ color: grey[600],fontSize:favoriteSize() }} className={`FavoriteIcon`} />
                      }
                      </button>
                    <p className='font-saira text-[#8B8B8B] text-[0.938rem]'>{product.favoriteCount}</p> 
                  </div>

             </div>

            {/* new product */}
            { product.newProduct ? (
                    <div className={`new-product absolute text-white top-[1rem] right-0 ${layout.flexCenter} ${productCardStyles.newProductSize} bg-primary-color`}>
                    <p className={`font-maitre ${textStyle.newProductText} font-[400] h-[100%]`}>New</p>
                  </div>
              ):null} 

          </div>

          <div className={`about-product relative ${dimension.Wfull_hAuto} p-[.4rem]`}>
            
            {/* accessibilty product */}
            <div className={`accessibilty-card ${layout.flexBetween} w-full relative`}>

              {/* rating products */}
              <div className={`rating-product ${layout.flexStart}  w-[auto]  gap-[.6rem] `}>
                <RatingProduct ratingVal={product.ratingProduct}/> 
                <p className={`${textStyle.accessibiltyCard}`}>({product.totalSales})</p>
              </div>

             
            </div>



            {/* name product */}
            <div className={`product-name ${layout.flexCenter} w-full ${productCardStyles.cardNameHeight} `}>
              <h5 className={`font-plusJakartaSans font-[500] ${textStyle.productName} `}>{product.nameProduct}</h5>
            </div>

            {/* price product */}
            <div className={`price-product w-full relative ${layout.flexCenter} font-plusJakartaSans gap-[.5rem] phone:gap-[.2em]`}>

              <div className={`price w-[auto] min-w-[50%]  ${product.offSell ? layout.flexEnd : layout.flexCenter }`}>
                <p className={`font-[600] ${textStyle.productPrice}`}> ${product.PriceProduct} </p>
              </div>
 
              { product.offSell ? (
                  <div className="discount-price w-[50%]"> 
                    <p className={`text-red-500 font-[400] line-through ${textStyle.offProductPrice}`}>${product.offSell}</p>
                  </div>
                ):null} 
              
            </div>

          </div>

      </div>


      )
    })
   }
  </>
  )
}
 

export default {
    Components,
    SwiperSlides,
    MenuButton,  
    RatingProduct,
    Cards
}