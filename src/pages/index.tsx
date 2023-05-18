/** @format */

import Typed from 'react-typed';
import Link from 'next/link';
import useModal from '@/hooks/useModal';
import Modal from '@/components/Modal';
import FactGenerator from '@/components/FactGenerator';

export const Home = () => {
 const { isOpen, toggleModal } = useModal();
 return (
  <div className="mt-12 ">
   <div className=" mx-auto text-white w-[100%] bg-gray-800 rounded-lg ">
    <section className="flex flex-col  text-center   ">
     <p className="md:text-2xl text-green-500 font-header uppercase mt-5">Software developer enthusiast</p>

     <div>
      <Typed
       className="sm:text-lg md:text-2xl text-green-300 uppercase font-cardHeading "
       strings={['HTML', 'CSS', 'Tailwind', 'JavaScript', 'Git', 'React', 'Svelte', 'NextJS', 'NPM', 'TypeScript']}
       typeSpeed={100}
       backSpeed={80}
       loop
      />
     </div>
     <button className="bg-gray-700 opacity-[90%] hover:text-green-700 text-white text-opacity-60 font-header uppercase text-[18px] text-center rounded-md px-[8px] py-2 w-[190px] mx-auto mt-5 mb-5">
      <Link href="/contact">Connect with me</Link>
     </button>
    </section>
   </div>
   <button
    onClick={toggleModal}
    className="flex justify-center bg-gray-800 opacity-[90%] hover:text-green-700 text-white text-opacity-60 font-header uppercase  text-[15px] text-center rounded-md px-[8px] py-2 w-[240px] mx-auto mt-[80px] md:text-[18px] md:w-[280px]">
    Click for a random fact!
   </button>
   <div className="">
    <Modal isOpen={isOpen} toggleModal={toggleModal}>
     <div className="text-md flex justify-center font-extrabold font-cardContent p-4 md:text-xl">
      <FactGenerator />
     </div>
    </Modal>
   </div>
  </div>
 );
};
export default Home;
