/** @format */
import React from 'react';
import Link from 'next/link';
export const Footer = () => {
 return (
  <div className=" flex flex-col text-[8px] text-gray-400  px-[20px]  py-[30px] w-full  bg-green-900 font-header md:text-sm">
   <p className=" mb-2  ">Made by Lewis, featuring lots of ☕️</p>
   <p className="flex ">
    Find me on &nbsp;
    <Link className="hover:text-gray-800 font-bold" href="https://www.linkedin.com/in/lewis-jones-947534224/">
     Linkden👨‍💼
    </Link>
   </p>
  </div>
 );
};
export default Footer;
