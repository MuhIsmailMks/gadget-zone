import React, { useState } from 'react'
import Image from 'next/image'
import BagItem from './BagItem' 

import { useSelector,useDispatch } from 'react-redux';
import { closeBag } from '../GlobalRedux/Features/bagActions'; 
import { RootState } from '../GlobalRedux/store'
import formatCurrency from '../utilities/formatCurrency'
import { layout } from '../styles'
import { shoppingBagContainer } from '../styles/bagContainerStyles'

interface Dimensions{
  width: number
  height: number 
}

interface DropdownCheckout{
  drop: boolean 
}

export default function ShoppingBag( ) { 
  // width 
  const [dimensions, setDimensions] = React.useState<Dimensions>({
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

  // down checkout
  const [drop,setDrop] = useState(false);
  const dropdownCheck = () => {
    setDrop(!drop)
  }
   
  
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

              <div className={`about-product w-[100%] h-[50px] phone:h-[40px] ${shoppingBagContainer.productList.aboutProductProperty}`}>
              
                <div className={`bag-product-list ${shoppingBagContainer.aboutbagProduct.bagProductList}  ${shoppingBagContainer.aboutbagProduct.text}  `}>
                    <h2 className='font-[700]'>Product List</h2>
                    <div className={`flex items-center `}>
                      <p>Price</p>
                      <p className='quantity'>Quantity</p>
                      <p>Total</p>
                      <p>Remove</p>
                    </div> 
                </div>

              </div>

              <div className={`product-list-container ${shoppingBagContainer.productListContainer.size}  ${shoppingBagContainer.productListContainer.property} `}>  
              
                 {
                    products.map((item,i) => (
                      <BagItem key={i} {...item}/>
                    ))
                 }  
                
              </div>

            </div>

            <div className={`price-product-container duration-[400ms] ${shoppingBagContainer.priceContainer.containerPriceProduct} ${drop === true ? 'drop' : ''}`}>

              <div className={`price-container relative  ${layout.flexDirection} ${shoppingBagContainer.priceContainer.size} ${shoppingBagContainer.priceContainer.property} ${shoppingBagContainer.priceContainer.text} `}>

                <div className={`${layout.flexBetween} w-full`}>
                  
                   <h3>Total</h3>
            
                   {
                    dimensions.width >= 1100 ? null :   <div className={`drop-checkout-btn abso duration-[500ms] ${drop === true ? 'rotate-180' :''}`} onClick={() => dropdownCheck()}>
                      <Image
                        src='icons/dropdown-checkout.svg'
                        alt='checkout btn'
                        height={20}
                        width={20}
                        className='h-auto w-[30px]'
                    />
                  </div> 
                   }
     

                </div>

              

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
