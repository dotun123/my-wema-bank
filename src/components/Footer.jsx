import React from 'react'
import wema from "../assets/wema-bank.svg"
import { footerLinks, socialMedia } from "../constants";
const Footer = () => {
  return (
    <section className="flex-column " id='investors'>
    <div className=" mb-8 w-full ">
      

      <div className=" w-[90%] flex flex-row justify-between flex-wrap md:mt-0 mt-10 ml-7">
      <div className=" flex-col   mr-10">
        <img
          src={wema}
          alt="wema"
          className="w-[266px] h-[123.14px] "
        />
        <p className=" mt-4 max-w-[312px] text-[20px] opacity-[80%] ">
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col  ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-cormorant font-[500] text-[28px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className="font-Cormorant font-[500] text-[20px] leading-[24px] opacity-[80%] text-dimWhite hover:text-[purple] cursor-pointer mb-4"
                  // className={`font-Cormorant font-[500] text-[20px] leading-[24px] opacity-[80%] text-dimWhite hover:text-[purple] cursor-pointer ${
                  //   index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  // }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px]  h-full border-t-[#3F3E45] bg-[purple]">
      <p className="font-cormorant font-normal text-center text-[18px] leading-[27px] mb-[10px] md:ml-[30px] text-white">
        Copyright Ⓒ 2022 Wema Bank. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6  mb-[10px] md:mr-[30px]  ">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className='w-[21px] h-[21px] object-contain hover:opacity-[70%] cursor-pointer mr-6'
            // className={`w-[21px] h-[21px] object-contain hover:opacity-[70%] cursor-pointer ${
            //   index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            // }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
  )
}

export default Footer;
