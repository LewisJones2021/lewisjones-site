/** @format */

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';
import Link from 'next/link';

type ContactFormProps = {
 href: string;
};

const maxCharacters = 500;

function ContactForm(props: ContactFormProps) {
 const [text, setText] = useState('');

 const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
  const { value } = event.target;
  if (value.length > maxCharacters) {
   `you have reached the limit of ${maxCharacters}`;
  } else {
   setText(value);
  }
 };

 const [state, handleSubmit] = useForm('xknazede');

 if (state.succeeded) {
  return (
   <div className="flex justify-center flex-col mx-auto  text-lg rounded-xl mb-[300px] mt-56 px-12 py-5 bg-green-900 w-[400px]">
    <p className=" text-white flex justify-center font-header">Thank you for getting in touch!</p>
    <Link legacyBehavior href="/">
     <button className=" font-button text-lg flex justify-center text-white mt-4 btn btn-outline btn-success mx-0">
      <a className="">Take me home</a>
     </button>
    </Link>
   </div>
  );
 }

 return (
  <div className="h-screen w-full">
   <p className="  flex justify-center text-gray-500 text-[12px] mb-0 mt-10 font-header sm:text-[15px] md:text-xl">
    If you&apos;d like to get in touch, please fill out the form below 😀
   </p>

   <section className="w-[300px] h-[490px] p-8 bg-gray-800 opacity-90 rounded-xl mx-auto mt-[30px] md:w-[405px] ">
    <form className="flex justify-center flex-col p-5 " onSubmit={handleSubmit}>
     <label className="text-white mb-1 text-xl font-cardHeading" htmlFor="name">
      Full name
     </label>

     <input
      className="p-2 rounded-xl mt-2 mb-2 text-white font-cardContent  bg-gray-700  "
      id="fName"
      type="name"
      name="fName"
     />
     <ValidationError prefix="Email" field="full name" errors={state.errors} />

     <label className="text-white  mb-1 text-xl font-cardHeading" htmlFor="email">
      Email address
     </label>

     <input
      className="mt-2 p-2 rounded-xl font-cardContent text-white bg-gray-700 "
      id="email"
      type="email"
      name="email"
     />
     <ValidationError prefix="Email" field="email" errors={state.errors} />
     <label className="text-white mt-2 text-xl font-cardHeading" htmlFor="message">
      Message
     </label>
     <textarea
      onChange={handleTextChange}
      maxLength={maxCharacters}
      className="bg-gray-700 h-[100px] mt-2 font-cardContent rounded-xl p-2 text-white resize-none"
      id="message"
      name="message"
     />
     <ValidationError prefix="Message" field="message" errors={state.errors} />
     <p className="flex justify-end text-red-400 mt-2 font-bold font-cardContent text-sm md:text-lg">
      {' '}
      {`${text.length}/${maxCharacters}`}
     </p>
     <button
      className="bg-gray-700 opacity-60 text-white font-button text-2xl w-[150px] mx-auto mt-1 rounded-xl p-1 md:w-[250px] "
      type="submit"
      disabled={state.submitting}>
      Send
     </button>
     <aside>
      <p className="text-[10px] text-white font-cardContent mx-auto mt-6 md:text-[15px] font-extrabold">
       Alternitavely, please call me on: 07488308595
      </p>
     </aside>
    </form>
   </section>
  </div>
 );
}

export default ContactForm;
