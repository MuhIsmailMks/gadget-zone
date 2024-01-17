export const layout = {
    flexCenter: 'flex justify-center items-center',
    flexCenterItemsStart: 'flex justify-center items-start',
    flexStart: 'flex justify-start items-center',
    flexBetween: 'flex justify-between items-center',
    flexBetweenItemsStart: 'flex justify-between items-start',
    flexEnd: 'flex justify-end items-center',
    flexDirection: 'flex flex-col items-start',
}

const fontSize = {
    verySmallFont:"text-[0.875rem] mobile:text-[.7rem]  phone:text-[.6rem] x-phone:text-[.55rem]",
    smallFont : 'text-[1rem] mobile:text-[.85rem] phone-mtablet:text-[.75rem] phone:text-[.65rem] x-phone:text-[.585rem]',
    mediumFont:"text-[1.125rem] mobile:text-[.9rem]",
    largeFont:"text-[1.25rem] mobile:text-[1rem]"
}

export const textStyles = {  
    verySmallLato :`'font-Lato ${fontSize.verySmallFont}`, 
    smallLato :`font-Lato ${fontSize.smallFont}`, 
    mediumLato :`font-Lato ${fontSize.mediumFont}`, 
    largeLato :`font-Lato  ${fontSize.largeFont}`, 

    verySmallInter :`font-inter ${fontSize.verySmallFont}`, 
    smallInter :`font-inter ${fontSize.smallFont}`, 
    mediumInter :`font-inter ${fontSize.mediumFont}`, 
    largeInter :`font-inter  ${fontSize.largeFont}`, 
}

export const dimension = {
    Wfull_hAuto : 'w-[full] h-[auto]',

    paddingX_section:"px-[3.938rem] xl-tablet:px-[2rem] mobile:px-[1.7rem] phone:px-[1.25rem]",

    // hero product button
    viewProduct: 'w-[164px] h-[32px] tablet:h-auto tablet:w-[140px] xl-phone:h-[25px] xl-phone:w-[110px]  x-phone:h-[19px] x-phone:w-[90px]',


    // title line
    sectionProductTitleLine:'w-[50%] h-[3px] absolute bottom-0 left-0  bg-primary-color phone:h-[1.5px]',
 
}

export const gradient = {
    textGradient: 'bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500',
    bgGradient: 'bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500',

    // header section
    newProductGradient:`bg-clip-text text-transparent bg-gradient-to-r from-[#00B2FF] to-[#0836C1]`
}

export const textStyle = {
    textPlusSans : '',

    // common text style
    mediumLatoText:'text-[600] text-[1.75rem] font-Lato relative xl-tablet:text-[1.4rem] s-tablet:text-[1.2rem] phone:text-[1rem]',


    // header section
    viewProductText:"text-black font-maitre font-[700] text-[1rem] tablet:text-[1.6vw]  xl-phone:text-[.7rem] x-phone:text-[.5rem]",    

    // section product title
    sectionProductTitle: "text-[600] text-[1.75rem] font-Lato relative xl-tablet:text-[1.4rem] s-tablet:text-[1.2rem] phone:text-[1rem]",

    // special products text
    brandSpecialProduct: "brand-product text-[1.75rem] font-Lato s_desktop-xl_tablet:text-[2vw] s-tablet:text-[2.5vw] phone:text-[.9rem]",
    nameSpecialProduct: "name-product text-[#C2C2C2] font-inter font-[400] tracking-[4px] text-[0.938rem] s_desktop-xl_tablet:text-[1.2vw] s-tablet:text-[1.4vw] phone:text-[.6rem] phone:tracking-[2px]", 
    

    // our products section
    // card product text
    accessibiltyCard : "font-saira  text-[0.938rem] font-[500] tablet:text-[.75rem] phone:text-[.6rem]",
    productName:'text-[0.938rem] tablet:text-[.8rem]  phone:text-[.7rem]',
    productPrice:'text-[0.938rem] tablet:text-[.85rem] phone:text-[.7rem]',
    offProductPrice:'text-[.75rem] tablet:text-[.67rem] phone:text-[.58rem]',
    newProductText :'s-desktop:text-[0.938rem] tablet:text-[0.8rem] phone:text-[0.6rem]',
}


// product card styles
export const productCardStyles = { 
    // product card size
    cardSize : "overflow-hidden s-desktop:h-[auto] s-desktop:w-[230px] tablet:w-[190px] phone:w-[140px]", 
    padding:'pb-[.85rem]',
    newProductSize:'s-desktop:w-[42px] s-desktop:h-[18px] tablet:w-[37px] tablet:h-[18px] phone:w-[35px] phone:h-[13px]',
    cardImageHeight:"s-desktop:h-[152px] tablet:h-[135px] phone:h-[100px]",
    cardNameHeight:'s-desktop:h-[63px] tablet:h-[55px] phone:h-[45px]',

    // rating star size
    ratingSizeStar : "s-desktop:w-[auto] s-desktop:h-[16px]   tablet:w-[auto] tablet:h-[13px]   phone:w-[auto] phone:h-[10px]", 
    

    // icons product card size
    cardBagIcon:"w-[18px] h-[23px] tablet:w-[13px] tablet:h-[19px] phone:w-[10px] phone:h-[15]", 

    // quantity handler and remove
    text_handle_add_remove :'text-[0.875rem] text-white font-plusJakartaSans font-[400] s_desktop-xl_tablet:text-[.7rem]  mobile:text-[.6rem]',  
}

export const shoppingBagStyles = {
    // size
    bagContainerSize:"w-[100%] max-w-[100vw]  h-full",
    bagContainerProperties:"left-0 top-0 duration-[.2s] py-[1rem] px-[1.5rem]",
    priceContainerSize:"w-[470px] h-[auto] translate-y-[100%] z-[999]",
    priceContainerProperties:" shadow-[0px_4px_22.399999618530273px_1px_#00000040] rounded-[15px] gap-[.7rem] px-[1.75rem] py-[1rem]",
    // text 
}


const defaultExport = layout;
export default defaultExport; 
