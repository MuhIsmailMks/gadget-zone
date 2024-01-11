import React,{useState,useEffect} from 'react'
import Image from 'next/image'

import { layout,productCardStyles,textStyle,dimension, textStyles } from '../styles' 
import { RatingProduct } from './Components'
import formatCurrency from '../utilities/formatCurrency'

// material ui
import { FavoriteBorder,Favorite } from '@mui/icons-material' 
import { ThemeProvider, createTheme } from "@mui/material/styles";  
import { pink,grey } from "@mui/material/colors"; 
// redux
import { useDispatch ,useSelector} from 'react-redux';
import {  addToBag,removeItems } from '../GlobalRedux/Features/shoppingSlice'
 


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
  const [favoriteAmout,setFavoriteAmout] = useState(item.favoriteCount)
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
    <div className={`card-product transition-all duration-[500ms]  ease-in-out ${productCardStyles.cardSize} ${productCardStyles.padding} relative drop-shadow-card bg-white`}  key={item.id}>

    {/* image container product */}
    <div className={`image-product ${layout.flexCenter} w-[full] ${productCardStyles.cardImageHeight} relative bg-[#ECECEC] overflow-hidden`}>

      {/* image product */}
       <Image
          src={item.imageUrl} 
          width={100}
          height={100}
          className={`w-[50%] h-[auto]  duration-[500ms]`}
          priority
          alt={item.imageUrl}
        />  
 

         {/* handle card */}
      <div className={`handle-card ${layout.flexDirection} absolute left-[.5rem] top-[1rem]  w-auto gap-[.4rem]`}> 
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
              <div className={`new-product absolute text-white top-[1rem] right-0 ${layout.flexCenter} ${productCardStyles.newProductSize} bg-primary-color`}>
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
      <div className={`product-name ${layout.flexCenter} w-full ${productCardStyles.cardNameHeight} px-[.5rem] text-center`}>
        <h5 className={`${textStyles.verySmallInter} font-[500] `}>{item.nameProduct}</h5>
      </div>

      {/* price product */}
      <div className={`price-product w-full relative ${layout.flexCenter} font-plusJakartaSans gap-[.5rem] phone:gap-[.2em] mb-[1rem]`}>
 
        <div className={`price w-[auto] min-w-[50%]  ${item.discountPrice ? layout.flexEnd : layout.flexCenter }`}>
          <p className={`font-[600] ${textStyle.productPrice}`}> {formatCurrency(item.price)} </p>
        </div>
 
        { item.discountPrice !== undefined ? (
            <div className="discount-price w-[50%]"> 
              <p className={`text-red-500 font-[400] line-through ${textStyle.offProductPrice}`}>{
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

            <button  onClick={removeProduct} className={`remove-item-from-bag w-[100px] h-[25px] bg-[#FF0000] rounded-[5px] ${productCardStyles.text_handle_add_remove}`}>remove</button>

        </div>
       :  
         <button   className={`add-bag mx-auto w-[134px] rounded-[10px] h-[25px] bg-primary-color ${layout.flexCenter} tablet:w-[100px] tablet:h-[20px] phone:w-[70%] phone:h-[18px] gap-[0.688rem] cursor-pointer`} onClick={hendleAddToBag}>
            <span className={`${productCardStyles.text_handle_add_remove}`}>Add Bag</span>
            <Image
            src='/bag-icon.svg'
            height={100}
            width={100}
            className='h-[16px] w-[auto] s_desktop-xl_tablet:h-[14px] mobile:h-[12px] '
            alt='bag'
            />
      </button>
      }
      

    </div>

</div>
  )
}
