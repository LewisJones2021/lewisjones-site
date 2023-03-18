/** @format */
import React from 'react';
import Link from 'next/link';
export const Footer = () => {
 return (
  <div className=" flex justify-between text-[8px] text-gray-400 pt-8 p-[25px] w-full  bg-green-900 font-header md:text-sm">
   <p className="   ">Made by Lewis, featuring lots of ☕️</p>
   <p className=" ">
    Find me on&nbsp;
    <Link className="hover:text-gray-800" href="https://www.linkedin.com/in/lewis-jones-947534224/">
     Linkden👨‍💼
    </Link>
   </p>
  </div>
 );
};
export default Footer;
