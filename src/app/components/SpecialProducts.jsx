import React from "react"
import Image from "next/image"

import layout,{ textStyle } from "../styles"

// special product styling
export const specialProductContainerStyling = {
    specialProductContainer:" max-w-[1420px] my-[1rem] mx-auto px-[3.5rem] s_desktop-xl_tablet:px-[1.5rem] s-tablet:px-[1rem] s-tablet:flex-col s-tablet:gap-[1vw] s-tablet:items-center phone:px-[1rem] phone:flex-col phone:gap-[.45rem]",
    specialProductLeftContainer:"x-desktop:h-[240px] s_desktop-xl_tablet:h-[17vw] gap-[1.5rem]  w-full s_desktop-xl_tablet:gap-[0rem] s-tablet:h-[20vw]  s-tablet:gap-[0] phone:h-[72vw] phone:min-h-[200px] phone:flex-col phone:gap-[.8rem] phone:justify-between",
    specialProductRightContainer:" x-desktop:h-[500px] x-desktop:w-[364px] s_desktop-xl_tablet:h-[35.5vw] h-min-[400px] s_desktop-xl_tablet:w-[28%] s-tablet:h-[39vw]  s-tablet:w-[35%]  phone:h-[43vw] phone:w-[90%] phone:max-w-[90%]  phone:mx-auto  phone:min-h-[210px]" ,

}

const specialProductStyling = { 
    // special product size
    // special product small size
    specialProductSmall:"x-desktop:w-[370px] h-[240px] s_desktop-xl_tablet:w-[40%]  s_desktop-xl_tablet:h-[100%]  s-tablet:w-[43%] s-tablet:h-[100%] ",
    specialProductImageSmall: "absolute top-[1.313rem]  w-[159px] h-auto right-[28%] s_desktop-xl_tablet:w-[40%] s_desktop-xl_tablet:right-[20%] mobile:right-[20%] s-tablet:w-[40%] phone:w-[35%] phone:top-[10%]",

    
    // special product medium size
    specialProductMedium:"relative pl-[10%] h-[240px] x-desktop:w-[537px] s_desktop-xl_tablet:w-[57%]  s_desktop-xl_tablet:h-[100%]  s-tablet:w-[55%] s-tablet:h-[100%]",
    specialProductImageMedium:"relative w-[250px] h-[auto] s_desktop-xl_tablet:w-[65%] s-tablet:w-[70%] phone:w-[50%]",   
    

    // special product large size
    specialProductLarge:"h-full w-full",
    specialProductImageLarge:"h-[auto] x-desktop:w-[281px] s_desktop-xl_tablet:w-[80%] s-tablet:w-[70%] phone:w-[40%]", 
  
    // special product size small and medium for phone
    specialProductPhoneSize:"phone:h-[59%] phone:w-[90%] phone:min-w-[240px] phone:max-w-[90%]",
    specialImageProductPhoneSize:"relative z-[2] phone:h-[100%] phone:w-[auto]",
  
     // special product text container small and medium 
     specialProductTextContainer:"absolute w-full h-[38%] bottom-0 left-0  text-white z-10 px-[2rem] s-tablet:h-[50%] s_desktop-xl_tablet:px-[5%] s-tablet:px-[8%] phone:px-[1rem] phone:h-[50%]",
}


// special products components 
export const SpecialProductSmallContainer = ({brandProduct,nameProduct,imageProduct,altImage}) => {
    return(
      <div className={`small-box relative cursor-pointer  ${specialProductStyling.specialProductSmall} ${specialProductStyling.specialProductPhoneSize}`}>
  
          <div className="bg-image w-full h-full relative bg-black"></div> 
  
            <Image src={imageProduct} alt={altImage} className={`object-contain select-none ${specialProductStyling.specialProductImageSmall} `}/>
  
          <div className={`about-product   ${specialProductStyling.specialProductTextContainer}`}>
              <h3 className={`${textStyle.brandSpecialProduct}`}>{brandProduct}</h3>
              <p className={`${textStyle.nameSpecialProduct}`}>{nameProduct}</p>
          </div>
  
    </div>
    )
  }
  
export const SpecialProductMediumContainer = ({brandProduct,nameProduct,imageProduct,bgImageProduct,altImage}) => {
    return(
      <div className={`medium-box overflow-hidden cursor-pointer  ${specialProductStyling.specialProductMedium}  ${specialProductStyling.specialProductPhoneSize}  ${layout.flexCenter}  `}>
  
                  {/* bg image product */}
                    <Image
                      className="bgImage absolute left-0 top-0 w-full h-full"
                      src={bgImageProduct}
                      alt={altImage}
                    />
  
                  {/*  image product */}
                      <Image
                      className={`image-product ${specialProductStyling.specialProductImageMedium}`}
                      src={imageProduct}
                     />
  
                    <div className={`about-product  ${specialProductStyling.specialProductTextContainer}`}>
                        <h3 className={`${textStyle.brandSpecialProduct}`}>{brandProduct}</h3>
                        <p className={`${textStyle.nameSpecialProduct}`}>{nameProduct}</p>
                    </div>
                </div>
  
    )
}
  
export const SpecialProductLargeContainer = ({brandProduct,nameProduct,imageProduct,bgImageProduct,altImage}) => {
    return(
      <div className={`large-box ${specialProductStyling.specialProductLarge} ${layout.flexCenterItemsStart} pt-[2rem] tablet:pt-[2%] phone:pt-[2%] cursor-pointer`}>
  
                  {/* bg image product */}
                    <Image
                      className="bgImage z-0 absolute left-0 top-0 w-full h-full"
                      src={bgImageProduct}
                      alt={altImage}
                    />
  
                  {/*  image product */}
                      <Image
                      className={`image-product z-10  ${specialProductStyling.specialProductImageLarge}`}
                      src={imageProduct}
                     />
  
                    <div className={`about-product 
                    ${specialProductStyling.specialProductTextContainer}
                    text-center h-[28%] s_desktop-xl_tablet:h-[20%] s-tablet:h-[80px] phone:h-[70px]`}>
                        <h3 className={`${textStyle.brandSpecialProduct}`}>{brandProduct}</h3>
                        <p className={`${textStyle.nameSpecialProduct}`}>{nameProduct}</p>
                    </div>
        </div>
  
    )
}

export default SpecialProductSmallContainer;


