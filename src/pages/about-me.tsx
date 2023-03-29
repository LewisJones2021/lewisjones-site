/** @format */

import QuoteGenerator from '@/components/FactGenerator';
import React from 'react';

export const aboutMe = () => {
 return (
  <div className="mx-auto max-w[60%] h-screen mt-[60px]">
   <h1 className=" text-gray-400 flex justify-center text-2xl mx-auto font-header">Hey 👋</h1>
   <div className="flex justify-center flex-col max-w-xl p-5 mx-auto font-cardContent ">
    <p className="text-gray-500 md:text-xl md:leading-6 ">
     I’m a junior front-end developer using multiple technologies, for example: React, JavaScript, HTML5 and CSS. I’ve
     been learning software development in a self taught environment for a couple of years, whilst working on open
     source web applications and using online video courses and creating personal mini projects.
    </p>
    <p className="text-gray-500 md:text-xl mt-5 md:leading-6">
     Alongside my current tech stack of React, Svelte, HTML, CSS, Tailwind, JavaScript, NPM and Git, I aim to become a
     full-stack developer using different technologies such as AWS, TypeScript, Python and Golang.
    </p>
    <p className="text-gray-500 md:text-xl mt-5 md:leading-6">
     My main focus recently has been contributing to an open source time managment web application. I am currently
     seeking my first commmercial developer role.
    </p>
    <aside className="mt-12 text-gray-500  ">
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
