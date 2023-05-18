/** @format */

import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export const pages = [
 { name: 'Home', path: '/' },

 { name: 'About Me', path: '/about-me' },

 { name: 'Projects', path: '/projects' },

 { name: 'Contact', path: '/contact' },
];

type NavLinkProps = {
 href: string;
 children: string;
 activePage: string;
};

const NavLink = function NavLinkProps(props: NavLinkProps) {
 // Check if the current page matches the href link.
 const isActive = props.activePage === props.href;

 return (
  <Link legacyBehavior href={props.href}>
   <a
    className={`${isActive ? 'text-green-600' : ''}
    hover:text-green-800`}>
    {props.children}
   </a>
  </Link>
 );
};

export const Navbar = () => {
 const [nav, setNav] = useState(false);
 const router = useRouter();
 const handleNav = () => {
  setNav(!nav);
 };

 useEffect(() => {
  setNav(false);
 }, [router.pathname]);

 console.log(nav);
 return (
  <div className="text-gray-400 flex items-center justify-between font-header container m-auto p-5">
   <h1 className=" hover:text-green-800 font-bold text-2xl">
    <Link href="/">Lewis Jones</Link>
   </h1>
   <nav>
    <ul className="hidden md:flex uppercase ">
     {pages.map((page) => (
      <li key={`pages-${page.path}`} className="p-4 cursor-pointer font-bold hover:text-green-800">
       <NavLink activePage={router.pathname} href={page.path}>
        {page.name}
       </NavLink>
      </li>
     ))}
    </ul>
   </nav>
   {/* Toggle between each icon */}
   <div onClick={handleNav} className="hover:cursor-pointer block md:hidden">
    {nav ? (
     <AiOutlineClose size={20} className="text-green-300" />
    ) : (
     <AiOutlineMenu size={20} className="text-green-700" />
    )}
   </div>

   {/* Mobile responsive */}
   <nav
    className={
     nav ? ' z-50 bg-black fixed left-0 top-0 w-[30%] h-full pt-10 ease-in-out duration-500' : 'fixed left-[-100%] '
    }>
    <ul className="p-2 mt-5 uppercase font-header text-[8px] font-bold  ">
     {pages.map((page) => (
      <li key={`page-${page.path}`} className="p-4 cursor-pointer font-bold hover:text-green-800">
       <NavLink activePage={router.pathname} href={page.path}>
        {page.name}
       </NavLink>
      </li>
     ))}
    </ul>
   </nav>
   <div
    onClick={handleNav}
    className={
     nav ? 'z-40 bg-green-900 bg-opacity-70 w-screen h-screen fixed left-0 top-0' : 'hidden left-[-100%]'
    }></div>
  </div>
 );
};
export default Navbar;
