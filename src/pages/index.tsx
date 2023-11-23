/** @format */


import Link from 'next/link';
import useModal from '@/hooks/useModal';
import Modal from '@/components/Modal';
import FactGenerator from '@/components/FactGenerator';

export const Home = () => {
 const { isOpen, toggleModal } = useModal();
 return (
  <div className="flex flex-col items-center justify-center mt-[20px]">
   <div className=" mx-auto text-white w-[480px] bg-gray-800 rounded-lg p-4 ">
    <section className="flex flex-col  text-center">
     <p className="md:text-2xl text-green-500 font-header uppercase mt-5">Software developer enthusiast</p>
     <button className="bg-gray-700 text-white font-header uppercase text-[18px] text-center rounded-md px-[8px] py-2 w-[190px] mx-auto mt-5 mb-5 transition-transform transform hover:scale-110">
      <Link href="/contact">Connect with me</Link>
     </button>
    </section>
   </div>
   <button
    onClick={toggleModal}
    className="flex justify-center bg-gray-700  text-white  font-header uppercase  text-[15px] text-center rounded-md px-[8px] py-2 w-[240px] mx-auto mt-[80px] md:text-[18px] md:w-[280px] transition-transform transform hover:scale-110">
    Click for a random fact
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
