import { layout } from "../styles";

export const shoppingBagContainer = {
    size:'w-[100%] max-w-[100vw]  h-full', 
    property:' translate-y-[110%]  left-0 top-0  z-[999] duration-[.2s] py-[1rem] px-[1.5rem]',

    textHeading:'text-[2rem] font-mono text-center text-[black] font-semibold',
    closeButton:'right-[2rem] absolute top-[2rem] w-[30px] h-[30px] cursor-pointer ',

    aboutbagProduct:{
        property:'relative flex justify-center gap-[1rem] ',
        bagProductList:'flex items-center justify-between w-full relative',
    },

    productList:{
        size:'w-[691px] xl-tablet:w-[60%]',
        property:`${layout.flexDirection}  gap-[.5rem]`,
        aboutProductProperty:'bg-white flex justify-end text-black items-center px-[.5rem] gap-[.3rem]  shadow-shopBagComponentsShadow'
    },

    priceContainer:{ 
        size:'w-[470px] h-[auto] xl-tablet:w-[100%] s-tablet:w-[]',
        property:" z-[999] shadow-shopBagComponentsShadow rounded-[15px] gap-[.7rem] px-[1.75rem] py-[1rem] ",
        checkButton:'bg-[#439CEF] text-[white] w-[180px] h-[40px] rounded-[5px] mx-auto',
        text:'text-[1.188rem] font-Lato   text-black'
    }

}


export const containerBagItem = {
    size:'w-[691px]',
    position:'',
    property:'flex flex-col gap-[.5rem]',
}

export const bagItem = {
    size:' w-[100%] h-[110px] min-h-[100px]    xl-tablet:h-[auto] mobile:h-[auto]',
    property:`relative  bg-[white]
    shadow-shopBagComponentsShadow flex items-center justify-between px-[.5rem]`,
    component:{
        image_name_product:'h-[100%] w-[auto] relative flex xl-tablet:flex-col xl-tablet:h-[auto] mobile:h-[auto]',
    }
}