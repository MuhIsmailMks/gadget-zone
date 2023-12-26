import React from 'react'
import Image from 'next/image'

import { layout,productCardStyles,textStyle,dimension } from '../styles' 
import { RatingProduct } from './Components'
import formatCurrency from '../utilities/formatCurrency'
import { log } from 'console'
import useShoppingBag from '../context/ShoppingBagContext'


type CardItemProps = {
    id:number
    nameProduct:string
    price:number
    imageUrl:string
    discountPrice:number
    rating:number
    sales:number
}



export default function Card({id,price,nameProduct,imageUrl,discountPrice,rating,sales}:CardItemProps) {
  const {getItemQuantity,increaseBagQuantity,decreaseBagQuantity,removeFromBag} = useShoppingBag()
    const quantity = getItemQuantity(id)
    // const quantity = 1 
    
    // console.log(discountPrice)
    
  return (
    <div className={`card-product transition-all duration-[500ms]  ease-in-out ${productCardStyles.cardSize} ${productCardStyles.padding} relative drop-shadow-card bg-white`} key={id}>

    {/* image container product */}
    <div className={`image-product ${layout.flexCenter} w-[full] ${productCardStyles.cardImageHeight} relative bg-[#ECECEC] overflow-hidden`}>

      {/* image product */}
       <Image
        //   src='/images/product1.jpg'  
          src={imageUrl} 
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
              {/* <p className='font-saira text-[#8B8B8B] text-[0.938rem]'>{product.favoriteCount}</p>  */}
              <p className='font-saira text-[#8B8B8B] text-[0.938rem]'>12</p> 
            </div>

       </div>

      {/* new product */}
      {/* { product.newProduct ? (
              <div className={`new-product absolute text-white top-[1rem] right-0 ${layout.flexCenter} ${productCardStyles.newProductSize} bg-primary-color`}>
              <p className={`font-maitre ${textStyle.newProductText} font-[400] h-[100%]`}>New</p>
            </div>
        ):null}  */}

    </div>

    <div className={`about-product relative ${dimension.Wfull_hAuto} p-[.4rem]`}>
      
      {/* accessibilty product */}
      <div className={`accessibilty-card ${layout.flexBetween} w-full relative`}>

        {/* rating products */}
        <div className={`rating-product ${layout.flexStart}  w-[auto]  gap-[.6rem] `}>
          <RatingProduct ratingVal={rating}/> 
          <p className={`${textStyle.accessibiltyCard}`}>({sales})</p>
        </div>

       
      </div>



      {/* name product */}
      <div className={`product-name ${layout.flexCenter} w-full ${productCardStyles.cardNameHeight} `}>
        <h5 className={`font-plusJakartaSans font-[500] ${textStyle.productName} `}>{nameProduct}</h5>
      </div>

      {/* price product */}
      <div className={`price-product w-full relative ${layout.flexCenter} font-plusJakartaSans gap-[.5rem] phone:gap-[.2em] mb-[1rem]`}>
 
        <div className={`price w-[auto] min-w-[50%]  ${discountPrice ? layout.flexEnd : layout.flexCenter }`}>
          <p className={`font-[600] ${textStyle.productPrice}`}> {formatCurrency(price)} </p>
        </div>
 
        { discountPrice !== undefined ? (
            <div className="discount-price w-[50%]"> 
              <p className={`text-red-500 font-[400] line-through ${textStyle.offProductPrice}`}>{
              formatCurrency(discountPrice)
              } 
              </p>
            </div>
          ):null} 
        
      </div>



      {/* card product handler add, quantity and remove */}
      {
        quantity >= 1 ? 
         
        <div className={`${layout.flexDirection} items-center  relative`}>

            <div className={`handle-quantity relative my-[.5rem] ${layout.flexBetween} gap-[1.5rem]  ${productCardStyles.text_quantity}`}>
                <button onClick={() => decreaseBagQuantity(id)} className={`descrease   ${layout.flexCenter}  ${productCardStyles.button_quantity}`}> <span className='absolute top-[-6px]'>-</span> </button>
                <p className='text-black'>{quantity}</p>
                <button onClick={() => increaseBagQuantity(id)} className={`increase ${layout.flexCenter}  ${productCardStyles.button_quantity}`}><span className='absolute top-[-6px]'>+</span></button>
            </div>

            <button onClick={() => removeFromBag(id)} className={`remove-item-from-bag w-[100px] h-[25px] bg-[#FF0000] ${productCardStyles.text_handle_add_remove}`}>remove</button>
        </div>
       :  
         <button  onClick={() => increaseBagQuantity(id)}  className={`add-bag mx-auto w-[134px] rounded-[10px] h-[25px] bg-primary-color ${layout.flexCenter} gap-[0.688rem] cursor-pointer`}>
        <span className={`${productCardStyles.text_handle_add_remove}`}>Add Bag</span>
        <Image
        src='/bag-icon.svg'
        height={100}
        width={100}
        className='h-[16px] w-[auto]'
        alt='bag'
        />
      </button>
      }
      

    </div>

</div>
  )
}
