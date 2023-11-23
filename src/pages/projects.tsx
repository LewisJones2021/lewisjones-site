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
  title: 'SQL Pproject',
  description:
   'This is a simple Go project that demonstrates how to interact with a PostgreSQL database. The project includes functionality to create a product table, insert sample products, and generate random product data.   ',
  imageSrc: '/react-image.jpeg',
  link: 'https://github.com/LewisJones2021/firstSQLproject',
 },
 {
  title: 'House Access Manager',
  description:
   'House Access Manager is a project born out of the need to manage multiple lockbox codes for various properties. The application allows users to add houses to a database through a form. Users can input the property name, and the system will display the corresponding access code along with additional notes about the property.',
  imageSrc: '/react-image.jpeg',
  link: 'https://github.com/LewisJones2021/house-access-frontend',
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
  <div className=" container flex flex-col items-center justify-center gap-10 p-5">
   <div className="flex flex-col m-auto">
    <h1 className=" mb-2 font-header text-black md:text-xl">Here are some examples of my projects.</h1>
    <Link href="https://github.com/LewisJones2021">
     <p className=" font-header text-black md:text-xl mb-2 text-center transition-transform transform hover:scale-110 ">
      {' '}
      Click here for a link to my GitHub!
     </p>
    </Link>
   </div>
   <div className="text-white ">
    <div className="grid gap-2 justify-center md:grid-cols-2 md:gap-2 lg:grid-cols-3 ">
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
