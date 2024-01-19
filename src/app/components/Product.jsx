import React,{useState,useEffect} from 'react'
import Image from 'next/image'

import { layout,textStyle,dimension, textStyles } from '../styles' 
import { RatingProduct } from './Components'
import formatCurrency from '../utilities/formatCurrency' 
// material ui
import { FavoriteBorder,Favorite } from '@mui/icons-material' 
import {  createTheme } from "@mui/material/styles";  
import { pink,grey } from "@mui/material/colors"; 
// redux
import { useDispatch ,useSelector} from 'react-redux';
import {  addToBag,removeItems } from '../GlobalRedux/Features/shoppingSlice'
import { productComponentStyles ,productCardStyles} from '../styles/productStyles'
 


export default function Product(item) {
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


  // redux state
  const dispatch = useDispatch(); 
  const productState = useSelector(state => state.shopping.products)
  const removeProduct = () => {
    productState.filter(product => product.id !== item.id)
    dispatch(removeItems({id:item.id}))
  }
  
  const productInBag = productState.some(product => product.id === item.id)  
  const hendleAddToBag = () => {
    dispatch(addToBag({...item}))
  }

  // favorite handler
  const [truerly,setTruerly] = useState(false)
  const [favoriteAmout,setFavoriteAmout] = useState(item.favoriteCount);
  createTheme({
    palette: {
      primary: {
        main: pink[600],
        main: grey[600],
      },
    },
  });

  function favoriteSize(){
    if(dimensions.width >= 1100 ){
      return '1.3rem'
    } else if (dimensions.width >= 600 && dimensions.width <= 1100){
      return '1.2rem'
    } else {
      return '1rem'
    }
  }

  const handleFavoriteCard = () => {
    setTruerly(!truerly);
    if(truerly === true){
      setFavoriteAmout(favoriteAmout - 1)
    } else {
      setFavoriteAmout(favoriteAmout + 1)
    } 
  }
    


  return (
    <div className={`card-product ${productCardStyles.size}  ${productCardStyles.property}`} key={item.id}>

    {/* image container product */}
    <div className={`image-product ${layout.flexCenter} ${productComponentStyles.cardImageStyle}  `}>

      {/* image product */}
       <Image
          src={item.imageUrl} 
          width={100}
          height={100}
          className={`w-[50%] h-[auto]  duration-[500ms]`}
          priority
          alt={item.imageUrl}
        />  
 

         {/* favorite product*/}
      <div className={`handle-card ${layout.flexDirection} ${productComponentStyles.favoriteStyle}`}> 
            <div className={`favorite w-[30px] ${layout.flexDirection} items-center`}>
                <button onClick={() =>  handleFavoriteCard()}>  
                {
                 truerly == true ? <Favorite sx={{ color: pink[500],fontSize:favoriteSize() }} className={`FavoriteIcon`}  /> : <FavoriteBorder sx={{ color: grey[600],fontSize:favoriteSize() }} className={`FavoriteIcon`} />
                }
                </button>
              <p className={`${textStyles.verySmallInter} text-[#8B8B8B] font-[600]`}>{favoriteAmout}</p> 
            </div>

       </div>

      {/* new product */}
      { item.newProduct ? (
              <div className={`new-product absolute text-white top-[1rem] right-0 ${layout.flexCenter} ${productComponentStyles.newProductSize} bg-primary-color`}>
              <p className={`${textStyles.verySmallLato} font-[100] h-[100%]`}>New</p>
            </div>
        ):null} 

    </div>

    <div className={`about-product relative ${dimension.Wfull_hAuto} p-[.4rem]`}>
      
      {/* accessibilty product */}
      <div className={`accessibilty-card ${layout.flexBetween} w-full relative`}>
        {/* rating products */}
        <div className={`rating-product ${layout.flexStart}  w-[auto]  gap-[.6rem] `}>
          <RatingProduct ratingVal={item.rating}/> 
          <p className={`${textStyles.verySmallInter}`}>({item.sales})</p>
        </div>

       
      </div>



      {/* name product */}
      <div className={`product-name ${layout.flexCenter} w-full ${productComponentStyles.cardNameHeight} px-[.5rem] text-center`}>
        <h5 className={`${textStyles.verySmallInter} font-[500] `}>{item.nameProduct}</h5>
      </div>

      {/* price product */}
      <div className={`price-product w-full relative ${layout.flexCenter} font-plusJakartaSans gap-[.5rem] phone:gap-[.2em] mb-[1rem]`}>
 
        <div className={`price w-[auto] min-w-[50%]  ${item.discountPrice ? layout.flexEnd : layout.flexCenter }`}>
          <p className={`font-[600] ${textStyle.productPrice}`}> {formatCurrency(item.price)} </p>
        </div>
 
        { item.discountPrice !== undefined ? (
            <div className="discount-price w-[50%]"> 
              <p className={`text-red-500 line-through  font-[400] ${textStyle.offProductPrice}`}>{
              formatCurrency(item.discountPrice)
              } 
              </p>
            </div>
          ):null} 
        
      </div>



      {/* card product handler add, quantity and remove */}
      {
        productInBag ? 
         
        <div className={`${layout.flexDirection} items-center  relative`}>

            <button  onClick={removeProduct} className={`remove-item-from-bag bg-[#FF0000]  ${productComponentStyles.buttonHandler} `}>Remove</button>

        </div>
       :  
         <button   className={`add-bag mx-auto    bg-primary-color ${layout.flexCenter} cursor-pointer gap-[.5rem] ${productComponentStyles.buttonHandler}`} onClick={hendleAddToBag}>
            <span  >Add Bag</span>
            <Image
            src='bag-icon.svg'
            height={10}
            width={7}
            className={`${productComponentStyles.iconBagButton}`}
            alt='bag'
            />
      </button>
      }
      

    </div>

    </div>
  )
}
