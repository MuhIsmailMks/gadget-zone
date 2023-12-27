import React, { useState } from 'react'
import Image from 'next/image'
import useShoppingBag,{ShoppingBagProvider} from '../context/ShoppingBagContext'
import BagItem from './BagItem'
import dataProducts from '../data/products.json'

import { useSelector,useDispatch } from 'react-redux';
import { closeBag } from '../GlobalRedux/Features/bagActions'; 
import { RootState } from '../GlobalRedux/store'
import formatCurrency from '../utilities/formatCurrency'
import { layout, shoppingBagStyles } from '../styles'

export default function ShoppingBag( ) { 
  // handle close bag   
  const isOpen = useSelector((state: RootState) => state.bag.isOpen);
  const {products,quantity,total} = useSelector((store:RootState) => store.shopping)

  const dispatch = useDispatch();

  const handleCloseClick = () => {
    dispatch(closeBag());
  };

   // handle store in bag
   const bagItems = useSelector((state : RootState) => state.shopping.products)
   const quantityProducts = bagItems.reduce((total,item) => total + item.quantity,0)
   const priceAllProduct = bagItems.reduce((total,item) => total + (item.price * item.quantity),0);
   const offPriceAllProduct = bagItems.reduce((total,item) => total + (item.discountPrice? item.discountPrice : null ) * item.quantity  ,0);
   
  const totalBeforeDiscountPrice = bagItems.reduce((total, item) => {
    
    return total + (item.price + (item.discountPrice ? item.discountPrice : null) ) * item.quantity
  }, 0);
   
  
  return (  
         <div>
       <div> 
        <div className={`bag-container ${shoppingBagStyles.bagContainerSize} fixed ${shoppingBagStyles.bag}  translate-y-[110%] duration-[.2s]  z-[999] ${isOpen  ? 'active' : ''}`}> 
          
          
          <h1 className='text-[2rem] font-mono text-center text-[black] font-semibold'>Bag</h1>
          <button id='close-bag' className='right-[2rem] absolute top-[2rem] w-[30px] h-[30px] cursor-pointer bg-blue-600'  onClick={() => handleCloseClick()}>
            <img src="/icons/close-bag-btn.svg" alt="" />
          </button>

          <div className="about-bag-product w-full relative flex justify-center gap-[1rem]">

            <div className="products-list  flex flex-col gap-[.5rem] w-[691px]">
              <div className="about-product mx-auto w-[100%] h-[50px] bg-white flex justify-end text-black items-center px-[.5rem] gap-[.3rem] shadow-[0px_13px_17.700000762939453px_-10px_rgba(0,0,0,0.25)] ">
              
              <div className='bag-product-list flex items-center justify-between w-full relative'>
                  <h2>Product List</h2>
                  <div className='flex items-center '>
                  <p>Price</p>
                  <p>Quantity</p>
                  <p>Total</p>
                  <p>Remove</p>
                  </div>
              </div>
              </div>

              <div className="product-list-container h-[350px] w-full relative overflow-y-auto flex flex-col gap-[.3rem]">  
                    {
                    products.map((item,i) => (
                      <BagItem key={i} {...item}/>
                    ))
                 }  
                
              </div>

            </div>

            <div className="price-product-container   relative  w-[40%]">
              <div className={`price-container relative  ${layout.flexDirection} w-[470px] h-[auto]  z-[999] shadow-[0px_4px_22.399999618530273px_1px_#00000040] rounded-[15px] gap-[.7rem] px-[1.75rem] py-[1rem] text-[1.25rem]   text-black`}>
                <h3>Total</h3>

                <div className="line my-[.3rem] w-full h-[1px] bg-[#D7D7D7]"></div>

                {/* payment checkout */}
                <div className="payment-checkout container-in-total">
                  <p>payment method:</p>
                  <div className="payment flex gap-[.5rem]">
                 
                   {[
              { icon: '/icons/mastercard-icon.svg', alt: "mastercard " },
              { icon: '/icons/paypal-icon.svg', alt: "paypal " },
              { icon: '/icons/visa-icon.svg' , alt: "bag "},
              { icon: '/icons/debit-icon.svg' , alt: "debit "},
            ].map((image, i) => (
             
                 <Image
                src={image.icon} 
                key={i} 
                alt={image.alt} 
                width={20}
                height={20}
                className="h-[21px] w-auto object-contain "
                priority
              /> 
             
            ))} 


                  </div>
                </div>

                <div className="line my-[.3rem] w-full h-[1px] bg-[#D7D7D7]"></div>

                {/* total items */}
                <div className="items container-in-total">
                <p>Items</p>
                 <span>  {  quantityProducts   }  </span>
                 </div>

                 {/* total-price */}
                <div className="total-price container-in-total">  
                 <p>Total</p>
                 <span>
                 {
                  formatCurrency(totalBeforeDiscountPrice)
                }
                </span>
                </div>

                {/* discount */}
                 <div className="discount container-in-total"> 
                  <p>discount</p>
                  <span> 
                  -{
                    formatCurrency(offPriceAllProduct)
                   }
                  </span>
                 </div>

                 <div className="line my-[.3rem] w-full h-[1px] bg-[#D7D7D7]"></div>

                 {/* subtotal */}
                <div className="subTotal container-in-total">
                  <p>Subtotal</p>
                     {
                        formatCurrency(priceAllProduct)
                     }
                </div>

                <button className='bg-[#439CEF] text-[white] w-[180px] h-[40px] rounded-[5px] mx-auto'>Checkout</button>

              </div>







             <div className='bg-[red] opacity-0'>
             <div className='total-price flex items-center'>
                <h1 className='text-black font-semibold'>Total :</h1>
                <h2 className='text-black'> 
                {
                  formatCurrency(totalBeforeDiscountPrice)
                }
                </h2>
              </div>
              <div className='total-discound flex items-center'>
                <h1 className='text-black font-semibold'> Discount :</h1>
                <h2 className='text-black'>  - 
                {
                  formatCurrency(offPriceAllProduct)
                }
                </h2>
              </div>
              <div className='total-price-after-discount flex items-center'>
                <h1 className='text-black font-semibold'>Total Price :</h1>
                <h2 className='text-black'>  
                {
                  formatCurrency(priceAllProduct)
                }
                </h2>
              </div>
             </div>



        
            </div>

          </div>

        </div>  
      </div>
    </div> 
 
  )
}
