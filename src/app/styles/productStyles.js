import { layout, textStyles } from "../styles"

export const productCardStyles = {
    size:"overflow-hidden s-desktop:h-[auto] s-desktop:w-[230px] tablet:w-[190px] phone:w-[140px] x-phone:w-[130px]",
    property:"relative pb-[.85rem] drop-shadow-card bg-white transition-all duration-[500ms]  ease-in-out",
    priceProductContainer:` w-full relative gap-[.5rem] phone:gap-[.2em] mb-[1rem] ${layout.flexCenter} `
}

export const productComponentStyles = { 
    cardImageStyle:"w-[full] s-desktop:h-[152px] tablet:h-[135px] phone:h-[100px] relative bg-[#ECECEC] overflow-hidden",
    newProductStyle:'s-desktop:w-[42px] s-desktop:h-[18px] tablet:w-[37px] tablet:h-[18px] phone:w-[35px] phone:h-[13px] absolute text-white top-[1rem] right-0 bg-primary-color',
    favoriteStyle:'absolute left-[.5rem] top-[1rem] mobile:top-[.6rem] phone:top-[.4rem]  w-auto gap-[.4rem]',
    buttonHandler:`w-[134px] h-[25px] max-w-[90%] phone-mtablet:h-[20px] x-phone:h-[17px] ${textStyles.verySmallInter} text-white rounded-[8px]`,
    iconBagButton:'h-[16px] w-[auto] s_desktop-xl_tablet:h-[14px] mobile:h-[12px] phone:h-[10px]',
    cardImageHeight:"s-desktop:h-[152px] tablet:h-[135px] phone:h-[100px]",
    cardNameStyle:'w-full s-desktop:h-[63px] tablet:h-[55px] phone:h-[45px]  px-[.5rem] text-center',
}
 