 
import React,{ useState } from 'react'   
import Link from 'next/link' 
import {usePathname} from 'next/navigation'
import Image from "next/image";
import { layout ,dimension} from '../styles';
import  '../page.css';

import { useSelector,useDispatch } from 'react-redux';
 
import { MenuButton } from './Components';  
// image
import logo from '../icons/logo.svg' 
import { openBag } from '../GlobalRedux/Features/bagActions';
import { RootState } from '../GlobalRedux/store';


export default function Navigation() {
  const currentRoute = usePathname(); 
  const dispatch = useDispatch();
  // handle bag
  const handleBagClick  = () => {   
    dispatch(openBag());
    console.log(openBag()); 
  }


  // handle menu
  const [menu, setMenu] = useState(false);

  const handleClickMenu = () => {
    setMenu(!menu); 
  };
  
  // store in bag
  const bagItems = useSelector((state : RootState) => state.shopping.products)
  const quantity = bagItems.reduce((total,item) => total + item.quantity,0)
  

  return ( 
        <header className='fixed z-[995] left-0 top-0 w-full'> 

        <nav className="w-full px-[1.55rem] h-[80px] bg-white relative flex justify-between items-center s-tablet:px-[4rem]  xl-desktop:px-[10%] mobile:h-[55px] phone:h-[49px]  ">

          <div className="logo w-auto phone:h-[23px] tablet:h-[30px] ">
            <Image
              src='/icons/web-icon.svg'
              alt="logo"
              height={20}
              width={20}
              className="h-full w-full object-contain"
            />
          </div>

          <div
            className="menu relative items-center  mobile:bg-white mobile:absolute mobile:right-0 mobile:top-[100%]  mobile:w-[100%] mobile:z-30  mobile:px-[2rem] mobile:h-[auto] mobile:py-[2rem]  max-s-desktop:ml-[15%] x-desktop:ml-[30%]"
            id={menu === true ? "activeMenu" : "noActiveMenu"}
          >
            <ul className="text-black flex   text-[1rem]  mobile:gap-[3rem] mobile:h-full mobile:flex-col   s-tablet:gap-[1.125rem]  ">
              <li >
               <Link className={currentRoute === '/' ? "active" : ""} href={'/'}>Home</Link>
              </li>
              <li > 
                <Link className={currentRoute === '/products/' ? "active" : ""} href='/products/'>Products</Link>
              </li>
              <li  >
                <a href="#" >About Us</a>
              </li>
              <li >
                <a href="#" >Contact</a>
              </li>
            </ul>
          </div>

          <div
            className={`accessibility relative ${layout.flexCenter} gap-[.5rem]  `}
          >
            
            {[
              { icon: '/icons/search-icon.svg', alt: "search Icon" },
              { icon: '/icons/account-icon.svg', alt: "account Icon" },
              { icon: '/icons/bag-nav-icon.svg' , alt: "bag icon",handler:true,quantity:true ,class:'bag'},
            ].map((image, i) => (
              <span className={`navigation-handler cursor-pointer relative ${image.class? image.class : ''}`} onClick={handleBagClick }>
                 <Image
                src={image.icon} 
                key={i} 
                alt={image.alt} 
                width={20}
                height={20}
                className={`h-[37px] w-full object-contain tablet:h-[39px] s-tablet:h-[33px]  phone:h-[35px] x-phone:h-[25px]  relative `}
                priority
              />
              {
                image.class? <div className={`countBag absolute ${layout.flexCenter}  h-[20px] w-[20px] bg-red-500 bottom-0 left-0 absolute rounded-[50%] z-[1] text-white font-plusJakartaSans text-[.75rem] phone:h-[17px] phone:w-[17px] phone:text-[.65rem] x-phone:h-[15px] x-phone:w-[15px]`}>{quantity}</div> : null
              }
              </span>
             
            ))} 
            
             
             

            <MenuButton click={handleClickMenu}/>
          </div>
        </nav>
      </header> 
  
  )
}
