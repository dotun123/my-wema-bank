import React, { useState } from 'react'
import wema from "../assets/wema-bank.svg";
import {FaLock} from "react-icons/fa";
import {RiMenu3Line,RiCloseLine} from "react-icons/ri";



const Menu=()=>(
  <>
 <li className="font-Cormorant text-[white] font-[400]  md:text-[11px] ss:text-[12px] tracking-[0.06em] leading-[40px] mx-4 my-0  cursor-pointer hover:text-[purple]  flex-nowrap"><a href="#banking">BANKING</a></li>
  <li className="font-Cormorant text-[white] font-[400] md:text-[11px]  ss:text-[12px] tracking-[0.06em] leading-[40px] mx-4 my-0 cursor-pointer hover:text-[purple]  flex-nowrap"><a href="#about">ABOUT WEMA</a></li>
  <li className="font-Cormorant text-[white] font-[400]  md:text-[11px] ss:text-[12px] tracking-[0.06em] leading-[40px] mx-4 my-0 cursor-pointer hover:text-[purple]  flex-nowrap"><a href="#investors">INVESTORS</a></li>
  <li className="font-Cormorant text-[white] font-[400]  md:text-[11px] ss:text-[12px] tracking-[0.06em] leading-[40px] mx-4 my-0 cursor-pointer hover:text-[purple]  flex-nowrap"><a href="#substainability">SUSTAINABILITY</a></li>
  <li className="font-Cormorant text-[white] font-[400] md:text-[11px]  ss:text-[12px] tracking-[0.06em] leading-[40px] mx-4 my-0 cursor-pointer hover:text-[purple]  flex-nowrap"><a href="#account">OPEN AN ACCOUNT</a></li>
  </>
)





const Navbar = () => { 
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className='flex items-center   bg-[#020305]  space-between p-[1rem] w-full relative z-10 '>
      <div className="justify-start flex  items-center min-w-[150px] max-w-[250px] " >
      <img src={wema} alt='logo' className=' h-[80px]  w-[150px]'/>
      </div>
        <div className='flex justify-center text-center  items-center list-none  md:flex xx:hidden md:w-full  '>
          <Menu/>
        </div>
        <div className=' items-center bg-[purple] md:min-w-[220px] max-h-[50px] min-h-[50px] border-0 rounded-[0.37rem] flex xx:hidden md:flex hover:opacity-[0.8] px-[0.73rem]'>
        <FaLock className='text-[white] items-center flex ml-[10px] '/>
        <button type='button' className='items-center flex font-Cormorant text-[white] font-[500] py-[1rem] text-[0.66rem] px-[1rem] cursor-pointer'>WEMA INTERNET BANKING</button>
        </div>
        <div className="ml-[auto] relative md:hidden   ">
          {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
            <div className="flex justify-end items-center flex-column text-end p-[2rem]  z-30 absolute bg-[black] top-[50px] right-[0] shadow mt-[1rem] ss:min-w-[200px] rounded-[4px]">
           
            <div className='flex-column justify-center text-center text-[10px]  items-center list-none flex-nowrap'>
                <Menu />
                
                <div className='flex items-center bg-[purple] min-w-[190px] max-h-[50px] min-h-[50px] border-0 rounded-[6px]  hover:opacity-[0.6]'>
           <FaLock className='text-[white] items-center ml-[10px]'/> <button type='button' className='items-center text-[white] font-Cormorant font-[500] py-[0.6rem] text-[10px] px-[1rem] cursor-pointer'>WEMA INTERNET BANKING</button>
        </div>
              
            </div>
            </div>
          )}
          </div>
    </nav>
  )
}

export default Navbar
