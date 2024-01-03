import React from 'react'
import Image from 'next/image';

import formatCurrency from '../utilities/formatCurrency';
import { layout } from '../styles';

import { useDispatch,useSelector } from 'react-redux';
import {increaseQuantity,decreaseQuantity, removeItems } from '../GlobalRedux/Features/shoppingSlice';
import { RootState } from '../GlobalRedux/store';
import { bagItem } from '../styles/bagContainerStyles';
 

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
          <div className={`bag-item mx-auto ${bagItem.size}  ${bagItem.property} `} key={item.id} > 

            {/* image & name product in bag */}
            <section className={`${bagItem.component.image_name_product}`}>
              <div className="image-product h-[100%] w-[140px] flex items-center justify-center ">
                <img src={`${item.imageUrl}`} alt="" className={`object-contain my-auto ${bagItem.component.imageSize}`} />
              </div> 
              <p className='w-[150px] py-[.8rem] text-[black] font-medium text-[1.1rem]'>{item.nameProduct}</p>
            </section>

            {/* about product in bag */}
            <div className='about-product-bag h-[100%] flex items-center  text-[.938rem]'>

               
               <div id='price-product'>

                  {
                    bagItems.map(items => {
                      if(items.id === item.id){ 
                        if(item.discountPrice)
                         return (
                          <p className=' line-through text-left text-[.8rem] text-[red] absolute mb-[1.6rem]'>
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

                  <p className='w-[90px] text-black text-center font-sans font-[500] '>{formatCurrency(item.price)}</p>
               </div>
             

              {/* quantity */}
              <div className={`justify-center w-[90px] gap-[.5rem]  `}>
                <button className='border-none outline-none' onClick={() => lessQuantity(item.id)}>
                   <Image
                   alt='decreaseQuantity'
                   height={20}
                   width={20}
                   src="/icons/decrease-quantity.svg"
                  className='object-contain w-[23px] h-[auto] '
                  />
                </button>
                <p id='quantity-text' className='  text-black text-center font-sans font-[500] '>
                {
                  quantityProduct
                }  
                </p> 
                <button className='border-none outline-none' onClick={() => addQuantity(item.id)}>
                  <Image
                  alt='increaseQuantity'
                   height={20}
                   width={20}
                  src="/icons/increase-quantity.svg"
                  className='object-contain w-[23px] h-[auto] '
                  />
                </button>
              </div>
              

              <div id='total-price' className='w-[90px] relative '> 

                  <p className=' text-black  font-sans font-[500] '>  
                    {
                      bagItems.map(items => {
                        if(items.id === item.id){ 
                           return formatCurrency(items.price * items.quantity)
                        }
                      })
                    }
                    </p>

              </div> 

              <div className="remove-item  relative w-[90px]  h-[100%] flex justify-center items-center"  >
                 <img src="/icons/remove-product-icon.svg" alt="" 
                 className='w-[auto] cursor-pointer  h-[21.05px] object-cover'
                 onClick={() => handleRemoveClick(item.id)}
                 />
              </div>

            </div> 

          
          </div>      

  )
}
