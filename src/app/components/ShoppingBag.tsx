import React, { useState } from 'react'
import Image from 'next/image'
import BagItem from './BagItem' 

import { useSelector,useDispatch } from 'react-redux';
import { closeBag } from '../GlobalRedux/Features/bagActions'; 
import { RootState } from '../GlobalRedux/store'
import formatCurrency from '../utilities/formatCurrency'
import { layout } from '../styles'
import { shoppingBagContainer } from '../styles/bagContainerStyles'

export default function ShoppingBag( ) { 
  // handle close bag   
  const isOpen = useSelector((state: RootState) => state.bag.isOpen);
  const {products,quantity,total} = useSelector((store:RootState) => store.shopping)

  const dispatch = useDispatch();

  const handleCloseClick = () => {
    dispatch(closeBag())
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
       <> 
        <div className={`bag-container fixed ${shoppingBagContainer.size}  ${shoppingBagContainer.property} ${isOpen  ? 'active' : ''}`}> 
          
          
          {/* heading section */}
          <h1 className={`${shoppingBagContainer.textHeading}`}>Bag</h1>
          <button id='close-bag' className={`${shoppingBagContainer.closeButton}`}  onClick={() => handleCloseClick()}>
            <Image
              src={'/icons/close-bag-btn.svg'}
              height={10}
              width={10}
              alt='closeButton'
              className='object-cover h-full w-full'
            />
          </button>

          {/* content & item section */}
          <div className={`about-bag-product h-[80%] w-full ${shoppingBagContainer.aboutbagProduct.property} `}>

            <div className={`products-list ${shoppingBagContainer.productList.property}  ${shoppingBagContainer.productList.size} `}>

              <div className={`about-product w-[100%] h-[50px] ${shoppingBagContainer.productList.aboutProductProperty}`}>
              
              <div className={`bag-product-list ${shoppingBagContainer.aboutbagProduct.bagProductList}`}>
                  <h2>Product List</h2>
                  <div className='flex items-center '>
                  <p>Price</p>
                  <p>Quantity</p>
                  <p>Total</p>
                  <p>Remove</p>
                  </div>
              </div>
              </div>

              <div className="product-list-container h-[350px] w-full relative overflow-y-auto flex flex-col gap-[.7rem]">  
              
                 {
                    products.map((item,i) => (
                      <BagItem key={i} {...item}/>
                    ))
                 }  
                
              </div>

            </div>

            <div className="price-product-container   relative phone-mtablet:absolute phone-mtablet:left-0 phone-mtablet:bottom-0 w-[40%]">
              <div className={`price-container relative  ${layout.flexDirection} ${shoppingBagContainer.priceContainer.size} ${shoppingBagContainer.priceContainer.property} ${shoppingBagContainer.priceContainer.text} `}>

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
                  <span>
                     {
                        formatCurrency(priceAllProduct)
                     }
                  </span>
                </div>

                <button className={`${shoppingBagContainer.priceContainer.checkButton}`}>Checkout</button>

              </div>


        
            </div>

          </div>

        </div>  
         
    </> 
 
  )
}
