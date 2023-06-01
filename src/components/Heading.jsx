import React from 'react'
const Heading = () => {
  return (
    
    <div  className=' bg-need  top-[100px] w-full h-[550px] bg-center bg-cover absolute  ' id='banking'>
   
    <div className='text-[white] flex-column md:max-w-[520px] xs:max-w-[520px] ff:w-[98%]  ff:mr-[30px] ss:m-[40px] ff:items-center ff:justify-center ff:text-center ss:text-start'>
     <h1 className=' font-sans text-[30px]  py-[27px] text-[purple] leading-[50px] opacity-[75%] tracking-[0.01em]  '>WE ARE AFRICA'S GLOBAL BANK</h1>
     <p className='font-sans text-[white] font-[600]   text-[45px] tracking-[0.01em] leading-[50px] '>Innovation meets excellence</p>
     <p className='font-Cormorant text-[white] font-[300] py-[25px] text-[18px] tracking-[0.01em] leading-[30px]  '>With us, you’ve got options. Our tailor-made banking solutions are designed to speak to your specific needs and ensure that you have a great experience always.</p>
     <div className='items-center bg-[purple] ss:ml-[0] ff:ml-[35%] max-h-[40px] max-w-[140px] min-h-[40px] border-0 rounded-[0.37rem] flex hover:opacity-[0.8] '>
     <button type="button" className='items-center flex font-Cormorant text-[white] font-[500] py-[1rem] text-[0.8rem] px-[1.5rem] cursor-pointer'>GET STARTED</button>
     </div>
     </div>

    </div>
   
  )
}

export default Heading
