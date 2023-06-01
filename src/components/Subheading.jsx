import React from 'react';
import red from "../assets/red.svg";
import news from "../assets/news.svg";
import report from "../assets/report.svg";


const Subheading = () => {
  return (
    <div className='md:flex min-w-full  bg-[white] md:justify-evenly   cursor-pointer sx:flex-column' id='about' >
     <div className='flex md:min-w-[350px] xx-min-w-full  xx:rounded-[0]  z-30 md:max-w-[350px] bg-[white] rounded-[10px] xx:mt-[539px] xx:hover:mt-[539px] md:mt-[475px]  md:hover:mt-[450px] relative border-[1px] min-h-[120px] max-h-[120px]'>
<img src={news} alt='news' className='md:hover:w-[100px] sm:ml-[320px] xs:ml-[100px] md:ml-[0] '/><h1  className='flex items-center justify-center text-center text-[18px] font-[500]  md:w-[200px] font-Cormorant hover:text-[purple] '>NEWS & PUBLICATIONS</h1>
     </div>
    
     <div className='flex md:min-w-[350px]  xx-min-w-full xx:rounded-[0] z-30 md:max-w-[350px] bg-[white] md:rounded-[10px] xx:mt-[0] xx:hover:mt-[o] md:mt-[475px]  md:hover:mt-[450px]  border-[1px] min-h-[120px] max-h-[120px]'>
<img src={report} alt='news' className='md:hover:w-[100px] sm:ml-[320px] xs:ml-[100px] md:ml-[0] '/><h1  className='flex items-center justify-center text-center text-[18px] font-[500]   md:w-[200px] font-Cormorant hover:text-[purple] '>FINANCIAL REPORTS</h1>
     </div>

     <div className='flex md:min-w-[350px]  xx-min-w-full xx:rounded-[0] z-30 md:max-w-[350px] bg-[white] md:rounded-[10px] xx:mt-[0] xx:hover:mt-[0] md:mt-[475px]  md:hover:mt-[450px]  border-[1px] md:min-h-[120px] md:max-h-[120px]'>
<img src={red} alt='news' className='md:hover:w-[100px] sm:ml-[320px] xs:ml-[100px] md:ml-[0]'/><h1  className='flex items-center justify-center text-center text-[18px] font-[500]   md:w-[200px] font-Cormorant hover:text-[purple] '>WEMA FOUNDATION</h1>
     </div>
     
    </div>
  )
}

export default Subheading
