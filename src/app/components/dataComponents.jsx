import React from 'react'

// images header
import image1HeroDesk from '../images/heroimage1.webp'
import image1HeroMobile from '../images/heroimage1mobile.png'

import image2HeroDesk from '../images/heroImage2.webp'
import image2HeroMobile from '../images/heroImage2mobile.webp'

import image3HeroDesk from '../images/heroImage3.webp'
import image3HeroMobile from '../images/heroImage3mobile.webp'

import image4HeroDesk from '../images/heroImage4.png'
import image4HeroMobile from '../images/heroimage4mobile.webp'

// special product
import specialProduct1 from '../images/specialProduct1.webp'
import specialProduct2 from '../images/specialProduct1.webp'
import specialProduct3 from '../images/specialProduct1.webp'
import specialProduct4 from '../images/specialProduct1.webp'
import specialProduct5 from '../images/specialProduct1.webp'

 
// images products
import earbudsV5 from '../images/earbuds.png'
import microphoneElgato from '../images/microphoneElgato.webp'




// data components
export const dataHeroSlidesHeader = [
    {
        imageDesk: image1HeroDesk,
        imageMobile: image1HeroMobile,
        offSell:'18%',
        aboutProduct: "Quad camera system with Leica optical lens.",

    },
    {
        imageDesk: image2HeroDesk,
        imageMobile: image2HeroMobile,
        offSell:'12%',
        aboutProduct: "get the latest Samsung Galaxy ultra S8 tablet",
    },
    {
        imageDesk: image3HeroDesk,
        imageMobile: image3HeroMobile,
        offSell:'15%',
        aboutProduct: "dell xps 15 for editing or design work",
    },
    {
        imageDesk: image4HeroDesk,
        imageMobile: image4HeroMobile,
        offSell:'10%',
        aboutProduct: "The Latest Phone Perfects Your Style.",
    },
];

 

export const dataProducts = [
    {
        imageProduct:earbudsV5, 
        ratingProduct: 4.5,
        totalSales: 39,
        favoriteCount: 13, 
        favoriteState:false,
        nameProduct:"Earbuds v5",
        PriceProduct:"80.99", 
        offSell:"95",
        newProduct:true,
    },
    {
        imageProduct:microphoneElgato, 
        ratingProduct: 5,
        totalSales: 23,
        favoriteCount: 5,
        favoriteState:false,
        nameProduct:"Elgato wave 3 | microphone ",
        PriceProduct:"189.89", 
    },
    
]


 