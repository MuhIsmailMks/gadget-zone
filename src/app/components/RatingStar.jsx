import React from 'react'
import Image from 'next/image'



// rating product
const RatingStar = () => {
    return(
       <span>
        <Image
        alt="star icon"
        src='./icons/star.svg'  
        width={10}
        height={10}
        className={`${productCardStyles.ratingSizeStar} object-contain`}
        priority
       />  
       </span>

    )
}

const RatingHalfStar = () => {
  return(
     <span>
      <Image
      alt="star icon"
      src='./icons/half-star.svg'  
      width={10}
      height={10}
      className={`${productCardStyles.ratingSizeStar} object-contain`}
      priority
    />  
     </span>

  )
}

const EmptyStar = () => {
    return(
       <span>
        <Image
        alt="star icon"
        src='./icons/empty-star.svg' 
        width={10}
        height={10}
        className={`${productCardStyles.ratingSizeStar} object-contain`}
        priority
      />  
       </span> 
    )
}

export const RatingProduct = ({ratingVal}) => { 
  const emptyVal = 5;  

    // for rating star 
  const starArray = Array.from({length : Math.floor(ratingVal)}, (_, index) => (
    <RatingStar key={index}/>
  ))

  // for half rating star 
  if (ratingVal % 1 !== 0) {
    starArray.push(<RatingHalfStar key="half-star" />);
  }

  // for backgroung star
  const bgStar = Array.from({length : Math.floor(emptyVal)}, (_, index) => (
    <EmptyStar key={index}/>
  ))
 

  return (
    <div className={`stars-container ${layout.flexCenter} relative w-[100px] mobile:w-[90px] phone:w-[50px]`}>  
      <div className={`star-rating relative w-[100%] z-[2] ${layout.flexStart} gap-[5px] phone:gap-[2px]`}>
         {starArray} 
      </div>
      <div className={`empty-star absolute  w-[100%] ${layout.flexStart} gap-[5px] phone:gap-[2px]`}>
        {bgStar}
      </div>
    </div>
  );
};
 
export default RatingStar
