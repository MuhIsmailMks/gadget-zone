import React from 'react'
import Image from 'next/image';

import formatCurrency from '../utilities/formatCurrency';
import { layout, textStyles } from '../styles';

import { useDispatch,useSelector } from 'react-redux';
import {increaseQuantity,decreaseQuantity, removeItems } from '../GlobalRedux/Features/shoppingSlice';
import { RootState } from '../GlobalRedux/store';
import { bagItem, shoppingBagContainer } from '../styles/bagContainerStyles';
 

export default function BagItem(item) { 
  const dispatch = useDispatch();

  const handleRemoveClick = (id) => {
    dispatch(removeItems({ id }));
  };
  const addQuantity = (id) => {
    dispatch(increaseQuantity({ id }));
  };
  const lessQuantity = (id) => {
    dispatch(decreaseQuantity({ id }));
  };

  const bagItems = useSelector((state : RootState) => state.shopping.products)
  const quantityProduct =  bagItems.map(items => {
    if(items.id === item.id){
       return items.quantity
    }
  }) 

  return ( 
          <div className={`bag-item mx-auto ${bagItem.size}  ${bagItem.property} ${textStyles.smallInter}`} key={item.id} > 

            {/* image & name product in bag */}
            <section className={`${bagItem.component.image_name_product}`}>
              <div className="image-product h-[100%] w-[140px] flex items-center justify-center ">
                <img src={`${item.imageUrl}`} alt="" className={`object-contain my-auto ${bagItem.component.imageSize}`} />
              </div> 
              <p className={`w-[150px] py-[.8rem]  ${textStyles.verySmallInter}`}>{item.nameProduct}</p>
            </section>

            {/* about product in bag */}
            <div className={`about-product-bag h-[100%] flex items-center  ${textStyles.verySmallInter}`}>

               
               <div id='price-product ' className={`relative ${shoppingBagContainer.productList.description_size} ${layout.flexDirection}`}>

                  {
                    bagItems.map(items => {
                      if(items.id === item.id){ 
                        if(item.discountPrice)
                         return (
                          <p className={`line-through w-[90%] text-[red] `}>
                            {
                              formatCurrency(items.discountPrice)
                            }
                         </p>
                          )
                      } else {
                        return null
                      }
                    })
                  } 

                  <p className='w-[90%]'>{formatCurrency(item.price)}</p>
               </div>
             

              {/* quantity */}
              <div className={`quntity_product justify-between ${shoppingBagContainer.productList.description_size} gap-[0.925rem]  `}>
                <button className='border-none outline-none select-none' onClick={() => lessQuantity(item.id)}>
                   <Image
                   alt='decreaseQuantity'
                   height={20}
                   width={20}
                   src="/icons/decrease-quantity.svg"
                  className='object-contain w-[23px] h-[auto] '
                  />
                </button>
                <p id='quantity-text'>
                {
                  quantityProduct
                }  
                </p> 
                <button className='border-none outline-none select-none' onClick={() => addQuantity(item.id)}>
                  <Image
                  alt='increaseQuantity'
                   height={20}
                   width={20}
                  src="/icons/increase-quantity.svg"
                  className='object-contain w-[23px] h-[auto] '
                  />
                </button>
              </div>
              

              <div id='total-price' className={`${shoppingBagContainer.productList.description_size} relative `}> 

                  <p>  
                    {
                      bagItems.map(items => {
                        if(items.id === item.id){ 
                           return formatCurrency(items.price * items.quantity)
                        }
                      })
                    }
                    </p>

              </div> 

              <div className={`remove-item  relative ${shoppingBagContainer.productList.description_size}  h-[100%] flex justify-center items-center`}  >
                 <img src="/icons/remove-product-icon.svg" alt="" 
                 className='w-[auto] cursor-pointer  h-[21.05px] object-cover mobile:h-[24px]'
                 onClick={() => handleRemoveClick(item.id)}
                 />
              </div>

            </div> 

          
          </div>      

  )
}
