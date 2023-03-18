/** @format */

import Typed from 'react-typed';
import Link from 'next/link';

export const projectArray = [
 {
  title: 'Pomolog.app',
  description:
   'Pomolog is a web based full-stack time managment app, which I have been contributing to the front-end development, using React with the NextJS framework and Tailwind CSS for styling.',
  imageSrc: '/react-image.jpeg',
  link: 'https://github.com/LewisJones2021/timetracker-react',
  featuredProject: 'Featured Project',
  project: '',
 },
];

export const Home = () => {
 return (
  <div className="mt-12">
   <div className=" mx-auto text-white w-[100%] bg-green-900 rounded-lg ">
    <div className="flex flex-col  text-center   ">
     <p className="md:text-2xl text-green-300 font-header uppercase mt-5">Software developer enthusiast</p>

     <div>
      <Typed
       className="sm:text-lg md:text-2xl text-green-300 uppercase font-cardHeading "
       strings={['HTML', 'CSS', 'Tailwind', 'JavaScript', 'Git', 'React', 'Svelte', 'NextJS', 'NPM', 'TypeScript']}
       typeSpeed={100}
       backSpeed={80}
       loop
      />
     </div>
     <button className="bg-green-800 opacity-[90%] hover:text-green-300 text-white text-opacity-60 font-button text-[20px] text-center rounded-md px-[8px] py-2 w-[180px] mx-auto mt-5 mb-5">
      <Link href="/contact">Connect with me</Link>
     </button>
    </div>
   </div>
   <div className="flex justify-center mt-5 ">
    <div className="mx-auto w-[100%] p-10">
     {projectArray.map((card) => (
      <div key={card.project} className="hero  bg-base-200">
       <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={card.imageSrc} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
         <h1 className="text-5xl font-bold">{card.title}</h1>
         <p className="py-6 font-cardContent text-lg ">{card.description}</p>
         <button className="btn  bg-green-900 font-button">
          <Link href={card.link}>View project</Link>
         </button>
        </div>
       </div>
      </div>
     ))}
    </div>
   </div>
  </div>
 );
};
export default Home;
