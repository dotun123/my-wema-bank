import React from 'react'

const Account = () => {
  return (
    <div className='w-full  bg-world mt-[6px]  h-[540px] bg-center bg-cover bg:opacity-[20%] opacity-1' id='account'>
 <div className='text-[white] flex-column md:max-w-[820px] xs:max-w-[820px] ff:w-[93%]  ff:mr-[40px] ff:ml-[10px] ss:m-[40px] ss:text-start'>
     <h1 className=' font-sans text-[30px] ff:py-[15px]  md:py-[27px] text-[white] leading-[50px] opacity-[95%] tracking-[0.01em]  '>Why Choose WEMA ?</h1>
     <p className='font-sans text-[white] font-[600] ff:text-[20px]  md:text-[45px] tracking-[0.01em] leading-[50px] '>We don't just help you reach financial milestones, we build lasting relationships.</p>
     <p className='font-Cormorant text-[white] font-[300] py-[25px] ff:text-[15px] md:text-[18px] tracking-[0.01em] leading-[30px]  '>As digital pioneers, we integrate innovative technological advancements, like Africa’s first banking chatbot LEO, and prioritise safety and security with cutting-edge infrastructure. Our global presence in 4 continents, 20 African countries, and over 7 decades of expertise, attracts an expanding customer base as we provide superior and sustainable financial services.</p>
     <div className=' md:flex'>
     <div className='items-center bg-[black]  ss:ml-[0] ff:ml-[0] opacity-[80%] max-h-[40px] max-w-[180px] min-h-[40px] border-0 rounded-[0.37rem] flex hover:bg-[purple] '>
     <button type="button" className='items-center flex font-Cormorant text-[white] font-[500] py-[1rem] text-[0.8rem] ff:px-[2.5rem] md:px-[1.5rem] cursor-pointer'>FIND OUT WHY</button>
     
     </div>
     <div className='items-center bg-[purple] ff:mt-[10px] ff:ml-[0] md:ml-[20px] md:mt-[0] ss:ml-[0]  ff:ml-[0] max-h-[40px] max-w-[180px] min-h-[40px] border-0 rounded-[0.37rem] flex hover:opacity-[0.8] '>
     <button type="button" className='items-center flex font-Cormorant text-[white] font-[500] py-[1rem] text-[0.8rem] px-[1.5rem] cursor-pointer'>OPEN AN ACCOUNT</button>
     
     </div>
    </div>
     </div>
    </div>
  )}

export default Account
