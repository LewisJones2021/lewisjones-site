/** @format */

import Link from 'next/link';
import React from 'react';

interface cardProps {
 title: string;
 description: string;
 imageSrc: string;
 link: string;
 key: string;
}

const Card: React.FC<cardProps> = ({ title, description, imageSrc, link }) => {
 return (
  <div className="mb-5">
   <div className="card w-[auto] h-[600px] bg-black shadow-xl  ">
    <figure className="px-10 pt-10">
     <img src={imageSrc} className="rounded-xl blur-[2px]" />
    </figure>
    <div className="card-body items-center text-center">
     <h1 className="card-title uppercase font-cardHeading md:text-2xl">{title}</h1>
     <p className="font-cardContent">{description}</p>
     <div className="card-actions">
      <button className="btn transition-transform transform hover:scale-110 font-button bg-black hover:bg-black">
       <Link href={link}>View project</Link>
      </button>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Card;
