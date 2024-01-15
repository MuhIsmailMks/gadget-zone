import React, { useState } from 'react'
import Image from 'next/image'
import BagItem from './BagItem' 

import { useSelector,useDispatch } from 'react-redux';
import { closeBag } from '../GlobalRedux/Features/bagActions'; 
import { RootState } from '../GlobalRedux/store'
import formatCurrency from '../utilities/formatCurrency'
import { dimension, layout, textStyles } from '../styles'
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
          <div className={`about-bag-product h-[80%] w-full ${shoppingBagContainer.aboutbagProduct.property} ${dimension.paddingX_section}`}>
            
            {/* product list / description product*/}
            <div className={`products-list ${shoppingBagContainer.productList.property}  ${shoppingBagContainer.productList.size} `}>

              <div className={`about-product  ${shoppingBagContainer.productList.aboutProductContainer}`}>
              
                <div className={`bag-product-list ${shoppingBagContainer.aboutbagProduct.bagProductList}  ${textStyles.smallLato}  `}>
                    <h2 className='font-[600]'>Product List</h2>
                    <div className={`flex items-center`}>
                      <p className={`${shoppingBagContainer.productList.description_size}`}>Price</p>
                      <p className={`${shoppingBagContainer.productList.description_size} quntity_product`}  >Quantity</p>
                      <p className={`${shoppingBagContainer.productList.description_size}`}>Total</p>
                      <p className={`${shoppingBagContainer.productList.description_size}`}>Remove</p>
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
            
            
            {/* price product / description price*/}
            <div className={`price-product-container duration-[400ms] ${shoppingBagContainer.priceContainer.containerPriceProduct} ${drop === true ? 'drop' : ''}`}>

              <div className={`price-container relative price_gradients_bg ${layout.flexCenter} flex-col  ${shoppingBagContainer.priceContainer.size} ${shoppingBagContainer.priceContainer.property} ${textStyles.smallLato} `}>

                <div className={`${layout.flexBetween} ${shoppingBagContainer.priceContainer.itemProperty}`}>
                  
                   <h3 className='font-[600]'>Total</h3>
            
                   {
                    dimensions.width >= 1100 ? null :   <div className={`drop-checkout-btn abso duration-[500ms] ${drop === true ? 'rotate-180' :''}`} onClick={() => dropdownCheck()}>
                      <Image
                        src='icons/dropdown-checkout.svg'
                        alt='checkout btn'
                        height={20}
                        width={20}
                        className='h-auto w-[30px] s-tablet:w-[25px] phone:w-[20px]'
                    />
                  </div> 
                   }
     

                </div>

              

                <div className={`${shoppingBagContainer.priceContainer.line}`}></div>

                {/* payment checkout */}
                <div className={`payment-checkout ${shoppingBagContainer.priceContainer.itemProperty}`}>
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
                    className={`w-auto object-contain ${shoppingBagContainer.priceContainer.iconPay}`}
                    priority
                  /> 
                
            ))} 


                  </div>
                </div>

                <div className={`${shoppingBagContainer.priceContainer.line}`}></div>

                {/* total items */}
                <div className={`items ${shoppingBagContainer.priceContainer.itemProperty}`}>
                <p>Items</p>
                 <span>  {  quantityProducts   }  </span>
                 </div>

                 {/* total-price */}
                <div className={`total-price ${shoppingBagContainer.priceContainer.itemProperty}`}>  
                 <p>Total</p>
                 <span>
                 {
                  formatCurrency(totalBeforeDiscountPrice)
                }
                </span>
                </div>

                {/* discount */}
                 <div className={`discount ${shoppingBagContainer.priceContainer.itemProperty}`}> 
                  <p>discount</p>
                  <span> 
                  -{
                    formatCurrency(offPriceAllProduct)
                   }
                  </span>
                 </div>

                 <div className={`${shoppingBagContainer.priceContainer.line}`}></div>

                 {/* subtotal */}
                <div className={`subTotal ${shoppingBagContainer.priceContainer.itemProperty}`}>
                  <p>Subtotal</p>
                  <span>
                     {
                        formatCurrency(priceAllProduct)
                     }
                  </span>
                </div>

                <button className={`${shoppingBagContainer.priceContainer.checkButton} ${shoppingBagContainer.priceContainer.itemProperty}`}> <span className='w-full  '>Checkout</span> </button>

              </div>


        
            </div>



          </div>

        </div>  
         
    </> 
 
  )
}
