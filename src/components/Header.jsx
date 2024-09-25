import React,{useState} from 'react'
import { RxCaretDown } from "react-icons/rx";

export default function Header() {
  const [toggle,setToggle] = useState(false);
  const showSideMenu = () =>{
    setToggle(true);
  }

  const hideSideMenu = () => {
    setToggle(false);
  }

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
      </div>
    </header>
  </>
  );
}



