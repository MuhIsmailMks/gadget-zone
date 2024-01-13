import { layout } from "../styles";

export const shoppingBagContainer = {
    size:'w-[100%] max-w-[100vw] h-full', 
    property:' translate-y-[110%]  left-0 top-0  z-[999] duration-[.2s] py-[.5rem] px-[1.5rem] mobile:px-[0rem]',
    textHeading:'text-[2rem]  font-mono text-center text-[black] font-semibold mb-[1rem] xl-tablet:text-[1.5rem] phone:text-[1.2rem]',
    closeButton:'right-[2rem] absolute top-[1rem] w-[30px] h-[auto] cursor-pointer  xl-tablet:w-[24px] phone-mtablet:w-[22px] phone:w-[18px]',

    aboutbagProduct:{
        property:'relative flex  justify-between gap-[1rem] mobile:h-[96%] ',
        bagProductList:'flex items-center justify-between w-full relative  ',
        text:' font-plusJakartaSans font-[500] text-[.9rem] phone-mtablet:text-[1rem] phone:text-[.7rem]',
    },

    productList:{
        size:'w-[800px] mobile:w-[100%]  ',
        property:`${layout.flexDirection}  gap-[.5rem]`,
        aboutProductProperty:'bg-white flex justify-end text-black items-center px-[.5rem] gap-[.3rem]  shadow-shopBagComponentsShadow',
        description_size:'w-[100px] relative'
    },

    productListContainer:{
        size:' h-[350px] max-h-[100%]  w-full ',
        property:'relative overflow-y-auto flex flex-col gap-[.7rem]',
    },

    priceContainer:{ 
        containerPriceProduct:'relative bg-[white] w-[auto]  mobile:absolute mobile:left-0 mobile:bottom-[0%] mobile:w-full mobile:w-[100%]',
        size:'s-desktop:w-[425px] h-[430px]  mobile:w-[100%] mobile:h-[auto]',
        iconPay:"h-[21px] s-tablet:h-[17px] phone:h-[14px]",
        property:" z-[999] shadow-shopBagComponentsShadow rounded-[15px] text-[#eee] gap-[0.938rem] xl-tablet:gap-[.5rem] mobile:py-[1rem] mobile:rounded-[0px] ",
        checkButton:'bg-[#439CEF] text-[white] rounded-[25px]  phone-mtablet:h-[20px]', 
        itemProperty:'max-w-[90%] w-[366px] h-[30px] flex justify-between mobile:w-[70%]',
        line:" w-[366px] line my-[.3rem]  h-[1px]  mobile:w-[70%] bg-[#D7D7D7]"
    }

}


export const containerBagItem = {
    size:'w-[691px]',
    position:'',
    property:'flex flex-col gap-[.5rem]',
}

export const bagItem = {
    size:' w-[99.5%] h-[110px] min-h-[100px] mobile:min-h-[120px] mobile:h-[auto]', 
    property:`relative 
    shadow-shopBagComponentsShadow flex items-center justify-between px-[.5rem] mobile:py-[.4rem]`,
    component:{
        image_name_product:'h-[100%] w-[auto] min-w-[250px] relative flex phone-mtablet:flex-col mobile:h-[auto] mobile:text-center',
        imageSize:'h-[90px] w-[90px] mobile:h-[80px] mobile:w-[auto]',
    }
}