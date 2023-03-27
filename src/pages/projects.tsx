/** @format */

import React from 'react';
import Card from '@/components/Card';
import Link from 'next/link';
export const projectsArray = [
 {
  title: 'Pomolog.app',
  description:
   'Pomolog is a web based full-stack time managment app, which I have been contributing to the front-end development, using React with the NextJS framework and Tailwind CSS for styling.',
  imageSrc: '/react-image.jpeg',
  link: 'https://www.pomolog.app/',
 },
 {
  title: 'Photo Gallery',
  description:
   'Photo gallery is an app that usese an API to fetch different photos based on the users search. This project was built with Tailwind CSS and React.',
  imageSrc: '/react-image.jpeg',
  link: 'https://github.com/LewisJones2021/React-Tailwind-Photo-Gallery',
 },
 {
  title: 'Signup Validation Form',
  description:
   'Signup validation form checks to see if the user has inputed the required information. If not, the input field will turn red, stating an error. This project was built with HTML, CSS and JavaScript.',
  imageSrc: '/react-image.jpeg',
  link: 'https://github.com/LewisJones2021/Sign-Up-Validation-Form',
 },
 {
  title: 'Current Weather',
  description:
   'Current weather uses a weather API to fetch the current weather and other data e.g "wind-speed" and displays it to the DOM. This project was built with HTML, CSS and JavaScript.',
  imageSrc: '/react-image.jpeg',
  link: 'https://github.com/LewisJones2021/Latest-Weather-Forecast',
 },
 {
  title: 'RGB Generator',
  description:
   'RGB generator allows the user to select different RGB colours to combine them into one colour, esentially creating your own custom colour! This project was built with HTML, CSS and JavaScript.',
  imageSrc: '/react-image.jpeg',
  link: 'https://github.com/LewisJones2021/Latest-Weather-Forecast',
 },
 {
  title: 'Password Generator',
  description:
   'Password generator allows the user to create a custom password with additional options like "upper case" as well as copy the password to the clipboard. This project was built with HTML, CSS and JavaScript.',
  imageSrc: '/react-image.jpeg',
  link: 'https://github.com/LewisJones2021/Password-Generator',
 },
];

export const projects = () => {
 return (
  <div className=" container mx-auto">
   <div className="flex flex-col items-center justify-center">
    <h1 className=" mb-2 font-header text-gray-500 md:text-xl">Here are some examples of my projects.</h1>
    <Link href="https://github.com/LewisJones2021">
     <p className="hover:text-green-800  text-green-900 md:text-xl mb-2"> Click here for a link to my GitHub!</p>
    </Link>
   </div>
   <div className="text-white ">
    <div className="   grid gap-2 justify-center md:grid-cols-2 md:gap-2 lg:grid-cols-3 ">
     {projectsArray.map((card) => (
      <Card
       key={`projects`}
       title={card.title}
       description={card.description}
       imageSrc={card.imageSrc}
       link={card.link}
      />
     ))}
    </div>
   </div>
  </div>
 );
};

export default projects;
