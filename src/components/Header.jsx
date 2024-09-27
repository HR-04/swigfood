import React,{useState} from 'react'
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";


export default function Header() {
  const [toggle,setToggle] = useState(false);
  const showSideMenu = () =>{
    setToggle(true);
  }

  const hideSideMenu = () => {
    setToggle(false);
  }
  const links = [
    {
      icon:<IoIosSearch />,
      name: "Search"
    },
    {
      icon:<CiDiscount1 />,
      name: "Offers"
    },
    {
      icon:"",
      name:"Help"
    }
  ]

  return (
    <>
    <div className='black-overlay w-full h-full fixed duration-500' onClick={hideSideMenu} style={{
      opacity:toggle ? 1 : 0,
      visibility: toggle ? "visible" : "hidden"
    }}>
      <div onClick={(e) =>{
        e.stopPropagation();
      }} className='w-[500px] bg-white h-full absolute duration-[400ms]' style={{
        left:toggle ? '0%' : '-100%'
      }}>
        
      </div>
    </div>
    <header className='p-[15px] shadow-xl'>
      <div className='max-w-[1200px] mx-auto border border-red-500 flex items-center '>
        <div className='w-[100px] border border-blue-500 '>
          <img src="images/logo.png" className= 'w-full' alt="" />
        </div>
        <div className=''>
          <span className='font-bold border-b-[3px] border-black '>Madurai</span> 
          Tamil Nadu, India <RxCaretDown onClick={showSideMenu} fontSize={25} className='inline font-bold text-[#fc8019] cursor-pointer'/>
        </div>
        <nav className='flex list-none gap-5 border border-black ml-auto font-semibold text-[18px]'>
          {
            links.map(
              (link,index)=>{
                return <li className='flex items-center gap-2'>
                {link.icon}
                  {link.name}
                </li>
              }
            )
          }
          

        </nav>
      </div>
    </header>
  </>
  );
}



