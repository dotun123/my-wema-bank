import React from 'react';
import {AiOutlineSearch} from "react-icons/ai";
import info2 from "../assets/info2.jpg"
const Info = () => {
  return (
  <div className='md:flex w-full bg-[white] mt-[60px] xx:flex-column' id='substainability' >
    <div className='flex-column mt-[60px] md:min-w-[39%] md:max-w-[39%] md:ml-[70px]  xx:ml-[13px] xx:min-w-[95%] xx:max-w-[95%] '>
    <div className='font-Cormorant'>
     <h1 className=' text-[30px]   text-[black] leading-[50px] opacity-[75%] tracking-[0.01em] '>Let’s make it easier for you</h1>
     <p className=' text-[grey] font-[300] py-[25px]  text-[22px] tracking-[0.01em] leading-[30px] '>Find what you are looking for quicker by telling us what you do or who you are.</p>
    </div>
    <div className='flex '>
    <input placeholder='Please Select' input="search" className='xx:w-[95%] h-[40px] border-[1px] border-solid md:min-w-[39%] md:max-w-[39%] rounded-[5px] absolute outline-none' /> <AiOutlineSearch size={33} className=" relative ml-[95%] py-[0.4rem] pt-[10px]"/>
    </div>
    <div className='items-center bg-[purple]  max-h-[40px] w-full min-h-[40px] border-0 rounded-[0.37rem] flex hover:opacity-[0.8] mt-[30px]'>
     <button type="button" className='items-center flex font-Cormorant text-[white] font-[500]  text-[0.8rem] ff:w-full ff:justify-center ff:items-center ff:text-center   cursor-pointer'>GET STARTED</button>
     </div>
    </div>
    <div className='flex items-center md:ml-[100px] md-mt-[0] xx:mt-[30px] xx:ml-[8px]'>
      <img src={info2} alt='info' className='md:max-w-[90%] md:min-w-[90%] xx:max-w-[98%] xx:min-w-[98%] rounded-[30px] opacity-[2]'/>
    </div>
    </div>
  )
}

export default Info
