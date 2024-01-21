import { layout } from "../styles";

export const shoppingBagContainer = {
    size:'w-[100%] max-w-[100vw] h-full', 
    property:' translate-y-[110%]  left-0 top-0  z-[999] duration-[.2s] py-[.5rem] px-[1.5rem] mobile:px-[0rem]',
    textHeading:'text-[2rem]  font-mono text-center text-[black] font-semibold mb-[1rem] xl-tablet:text-[1.5rem] phone:text-[1.2rem]',
    closeButton:'right-[2rem] absolute top-[1rem] w-[30px] h-[auto] cursor-pointer xl-tablet:w-[24px] phone-mtablet:w-[22px] phone:w-[18px]',

    aboutbagProduct:{
        property:'relative flex  justify-between gap-[1rem] mobile:h-[96%] ',
        bagProductList:'flex items-center justify-between w-full relative  ', 
    },

    productList:{
        size:'w-[800px] mobile:w-[100%]  ',
        property:`${layout.flexDirection}  gap-[.5rem]`,
        aboutProductContainer:'w-[100%] h-[50px] phone-mtablet:h-[40px] phone:h-[34px] bg-white flex justify-end text-black items-center px-[.5rem] gap-[.3rem]  shadow-shopBagComponentsShadow',
        description_size:'text-center relative h-full w-[100px] phone-mtablet:w-[80px] phone:w-[15vw] x-phone:w-[10vw]'
    },

    productListContainer:{
        size:' h-[60vh] mobile:h-[100%] max-h-[100%]  w-full ',
        property:'relative overflow-y-auto flex flex-col gap-[.7rem] phone-mtablet:pb-[1rem]',
    },

    priceContainer:{ 
        containerPriceProduct:'relative bg-[white] w-[auto]  mobile:absolute mobile:left-0 mobile:bottom-[-.5%] mobile:w-full ',
        size:'s-desktop:w-[425px] h-[430px]  mobile:w-[100%] mobile:h-[auto] ',
        iconPay:"h-[21px] s-tablet:h-[17px] phone:h-[14px]",
        property:" z-[999] shadow-shopBagComponentsShadow rounded-[15px] text-[#eee] gap-[0.938rem] phone-mtablet:justify-start xl-tablet:gap-[.5rem] phone-mtablet:gap-[.4rem] mobile:pt-[1.25rem] mobile:pb-[2rem] mobile:rounded-[0px] phone:pt-[.5rem] ",
        checkButton:'bg-[#439CEF] text-[white] pt-[.35rem] rounded-[25px] phone:pt-[.1rem] phone:rounded-[10px] phone:h-[20px]', 
        itemProperty:'max-w-[90%] w-[366px] h-[30px] flex justify-between mobile:w-[70%] phone-mtablet:w-[60%] x-phone:w-[90%]',
        line:" w-[366px] line my-[.3rem]  h-[1px]  mobile:w-[70%] phone-mtablet:w-[60%] x-phone:w-[90%] bg-[#D7D7D7]"
    }

}


export const containerBagItem = {
    size:'w-[691px]',
    position:'',
    property:'flex flex-col gap-[.5rem]',
}

export const bagItem = {
    size:' w-[99.5%] h-[110px] min-w-[100px] mobile:min-h-[90px] mobile:h-[auto]    ', 
    property:`relative 
    shadow-shopBagComponentsShadow flex items-center justify-between px-[.5rem] mobile:py-[.4rem] phone-mtablet:pt-[.5rem]`,
    component:{
        image_name_product:'h-[100%] w-[auto] min-w-[250px] phone-mtablet:min-w-[120px] phone:min-w-[60px] phone:w-[100px]   relative flex phone-mtablet:flex-col  mobile:text-center',
        imageSize:'h-[90px] w-[90px] mobile:h-[80px] mobile:w-[auto] phone-mtablet:h-[50px] phone:h-[40px]',
        iconButtonQuantity:' object-contain w-[23px] h-[auto] phone-mtablet:h-[20px]  phone:h-[15px]',
        removeItemIcon:'w-[auto] cursor-pointer  h-[21.05px] object-cover mobile:h-[24px] phone:h-[17px]',
    }
}