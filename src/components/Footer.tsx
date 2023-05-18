/** @format */
import React from 'react';
import Link from 'next/link';
export const Footer = () => {
 return (
  <div className="flex flex-col text-[10px] text-gray-400 h-[200px] px-[20px] py-[20px] w-full bg-gray-800 font-header absoloute mt-0 md:text-sm">
   <p className="mb-5">Made by Lewis, featuring lots of ☕️</p>
   <p className="flex">
    Find me on &nbsp;
    <Link className="hover:text-gray-800 font-bold" href="https://www.linkedin.com/in/lewis-jones-947534224/">
     Linkedin👨‍💼
    </Link>
   </p>
  </div>
 );
};
export default Footer;
