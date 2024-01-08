import { layout } from "../styles";

export const shoppingBagContainer = {
    size:'w-[100%] max-w-[100vw] h-full', 
    property:' translate-y-[110%]  left-0 top-0  z-[999] duration-[.2s] py-[.5rem] px-[1.5rem] mobile:px-[1rem]',
    textHeading:'text-[2rem]  font-mono text-center text-[black] font-semibold mb-[1rem] xl-tablet:text-[1.5rem] phone:text-[1.2rem]',
    closeButton:'right-[2rem] absolute top-[1rem] w-[30px] h-[auto] cursor-pointer  xl-tablet:w-[24px] phone-mtablet:w-[22px] phone:w-[18px]',

    aboutbagProduct:{
        property:'relative flex  justify-center gap-[1rem] mobile:h-[96%] ',
        bagProductList:'flex items-center justify-between w-full relative  ',
        text:' font-plusJakartaSans font-[500] text-[.9rem] phone-mtablet:text-[1rem] phone:text-[.7rem]',
    },

    productList:{
        size:'w-[691px] mobile:w-[100%]  ',
        property:`${layout.flexDirection}  gap-[.5rem]`,
        aboutProductProperty:'bg-white flex justify-end text-black items-center px-[.5rem] gap-[.3rem]  shadow-shopBagComponentsShadow'
    },

    productListContainer:{
        size:' h-[350px] max-h-[100%]  w-full ',
        property:'relative overflow-y-auto flex flex-col gap-[.7rem]',
    },

    priceContainer:{ 
        containerPriceProduct:'relative bg-[white] w-[40%]  mobile:absolute mobile:left-0 mobile:bottom-[0%] mobile:w-full mobile:w-[100%]',
        size:'w-[400px] h-[auto] xl-tablet:w-[100%] mobile:w-[100%]',
        iconPay:"h-[21px] s-tablet:h-[17px] phone:h-[14px]",
        property:" z-[999] shadow-shopBagComponentsShadow rounded-[15px] gap-[.7rem] px-[1.75rem] py-[1rem] ",
        checkButton:'bg-[#439CEF] text-[white] w-[100%] h-[30px] rounded-[25px]   phone-mtablet:h-[20px]',
        text:'text-[1rem]  text-black s-tablet:text-[1rem] phone:text-[.8rem]'
    }

}


export const containerBagItem = {
    size:'w-[691px]',
    position:'',
    property:'flex flex-col gap-[.5rem]',
}

export const bagItem = {
    size:' w-[100%] h-[110px] min-h-[100px] mobile:min-h-[120px] mobile:h-[auto]', 
    property:`relative 
    shadow-shopBagComponentsShadow flex items-center justify-between px-[.5rem] mobile:py-[.4rem]`,
    component:{
        image_name_product:'h-[100%] w-[auto] min-w-[250px] relative flex phone-mtablet:flex-col mobile:h-[auto] mobile:text-center',
        imageSize:'h-[90px] w-[90px] mobile:h-[80px] mobile:w-[auto]',
    }
}