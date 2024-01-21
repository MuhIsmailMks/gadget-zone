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
    <div className={`image-product ${layout.flexCenter} ${productComponentStyles.cardImageStyle}`}>

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
              <div className={`new-product  ${layout.flexCenter} ${productComponentStyles.newProductStyle} `}>
              <p className={`${textStyles.verySmallLato} font-[100] h-[100%]`}>New</p>
            </div>
        ):null} 

    </div>

    <div className={`about-product relative p-[.4rem] ${dimension.Wfull_hAuto}`}>
      
      {/* accessibilty product */}
      <div className={`accessibilty-card w-full relative ${layout.flexBetween}`}>
        {/* rating products */}
        <div className={`rating-productw-[auto]  gap-[.6rem]  ${layout.flexStart}  `}>
          <RatingProduct ratingVal={item.rating}/> 
          <p className={`${textStyles.verySmallInter}`}>({item.sales})</p>
        </div>

       
      </div>



      {/* name product */}
      <div className={`product-name ${layout.flexCenter} ${productComponentStyles.cardNameStyle}`}>
        <h5 className={`font-[500] ${textStyles.verySmallInter}`}>{item.nameProduct}</h5>
      </div>

      {/* price product */}
      <div className={`price-product ${productCardStyles.priceProductContainer} `}>
 
        <div className={`price w-[auto] min-w-[50%]  ${item.discountPrice ? layout.flexEnd : layout.flexCenter }`}>
          <p className={`${textStyles.verySmallInter}`}> {formatCurrency(item.price)} </p>
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
         
        <div className={`items-center  relative ${layout.flexDirection} `}>

            <button  onClick={removeProduct} className={`remove-item-from-bag bg-[#FF0000]  ${productComponentStyles.buttonHandler} `}>Remove</button>

        </div>
       :  
         <button   className={`add-bag mx-auto    bg-primary-color cursor-pointer gap-[.5rem] ${layout.flexCenter} ${productComponentStyles.buttonHandler}`} onClick={hendleAddToBag}>
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
