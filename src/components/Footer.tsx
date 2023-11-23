/** @format */
import React from 'react';
import Link from 'next/link';
export const Footer = () => {
 return (
  <div className="flex flex-col text-[10px] text-black border-t-2 border-green-400 h-[150px] px-[10px] pt-10 pb-[100px] w-full font-header md:text-sm">
   <p className="mb-5">Made by Lewis, featuring lots of ☕️</p>
   <p className="flex">
    Find me on &nbsp;
    <Link className="hover:text-gray-800 font-extrabold" href="https://www.linkedin.com/in/lewis-jones-947534224/">
     Linkedin👨‍💼
    </Link>
   </p>
  </div>
 );
};
export default Footer;
