/** @format */

import QuoteGenerator from '@/components/FactGenerator';
import React from 'react';

export const aboutMe = () => {
 return (
  <div className="mx-auto max-w[60%] mt-[60px] ">
   <h1 className=" text-green-400 flex justify-center text-2xl mx-auto font-header font-extrabold">Hey 👋</h1>
   <div className="flex justify-center flex-col max-w-xl p-5 mx-auto font-cardContent ">
    <p className="text-black md:text-xl md:leading-6 ">
    I am a junior developer who's mostly focused on the front-end, where I've self-taught to break into the software realm. 
    My learning journey has been a mix of watching YouTube tutorials, taking popular online coding courses, and doing my fair share of googling! 
    I've been playing around with HTML and CSS for a few years now, and recently, I've ventured into JavaScript to understand the basics of working with APIs and fetching data. 
    I'm also enjoying crafting interactive web applications and learning along the way.
    </p>
    <p className="text-black md:text-xl mt-5 md:leading-6">
    The spark for my interest in coding comes from my family and friends, who are talented and passionate software engineers.
    I've always been intrigued by the mechanics of clicking buttons and generating data on websites, and now I find joy in writing my own code. 
    Exploring the inner workings of the World Wide Web is truly fascinating.
    </p>
    <p className="text-black md:text-xl mt-5 md:leading-6">
    My main focus recently has been contributing to an open source time managment web application. 
    I am currently seeking my first commmercial developer role.
    </p>
    <p className="text-black md:text-xl mt-5 md:leading-6">
    <span className='text-green-400 font-extrabold'>Tech stack:</span> HTML, CSS, Tailwind, JavaScript, Golang, MySQL, Wordpress (Elementor)
    </p>
    <aside className="mt-12 text-black  ">
     <details>
      <summary className="font-cardHeading text-base cursor-pointer md:text-lg">
       How many hours a day do I code for?
      </summary>
      <p className="font-cardContent text-sm mb-5 md:text-base ">
       I code for a few hours in the morning, and then up until <time dateTime="17:00">5pm</time> in the evening.
      </p>
     </details>
     <details>
      <summary className="font-cardHeading text-base mt-8 cursor-pointer md:text-lg">
       What is my favourtie part about coding/ web-development?
      </summary>
      <p className="font-cardContent text-sm md:text-base ">
       I love seeing instant results with the "Live Server" extention and seeing a project come together, learning
       everyday is a bonus too!
      </p>
     </details>
    </aside>
   </div>
  </div>
 );
};

export default aboutMe;
