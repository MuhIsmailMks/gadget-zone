import React from 'react'
import Image from 'next/image'

import { layout,productCardStyles,textStyle,dimension } from '../styles' 
import { RatingProduct } from './Components'
import formatCurrency from '../utilities/formatCurrency' 
import { FavoriteBorder,Favorite } from '@mui/icons-material'

import { useDispatch ,useSelector} from 'react-redux';
import { increaseQuantity,decreaseQuantity, addToBag,removeItems } from '../GlobalRedux/Features/shoppingSlice'
 


export default function Product(item,id) {
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
          alt="procut"
        />  
 

         {/* handle card */}
      <div className={`handle-card ${layout.flexDirection} absolute left-[.5rem] top-[1rem]  w-auto gap-[.4rem]`}> 
            <div className={`favorite w-[30px] ${layout.flexDirection} items-center`}>
                {/* <button onClick={() =>  handleFavoriteCard(i)}> 
                {
                  product.favoriteState ? <Favorite sx={{ color: pink[500],fontSize:favoriteSize() }} className={`FavoriteIcon`}  /> : <FavoriteBorder sx={{ color: grey[600],fontSize:favoriteSize() }} className={`FavoriteIcon`} />
                }
                </button> */}
              <p className='font-saira text-[#8B8B8B] text-[0.938rem]'>{item.favoriteCount}</p> 
            </div>

       </div>

      {/* new product */}
      { item.newProduct ? (
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
          <RatingProduct ratingVal={item.rating}/> 
          <p className={`${textStyle.accessibiltyCard}`}>({item.sales})</p>
        </div>

       
      </div>



      {/* name product */}
      <div className={`product-name ${layout.flexCenter} w-full ${productCardStyles.cardNameHeight} `}>
        <h5 className={`font-plusJakartaSans font-[500] ${textStyle.productName} `}>{item.nameProduct}</h5>
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
            className='h-[16px] w-[auto] mobile:h-[12px] '
            alt='bag'
            />
      </button>
      }
      

    </div>

</div>
  )
}
