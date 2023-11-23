/** @format */

import React, { useEffect } from 'react';
import { useState } from 'react';

type fact = {
 fact: string;
};

type factResponse = {
 factsArray: fact[];
};
const headers = {
 'Content-type': 'application/json',
};
export const FactGenerator = () => {
 const [fact, setFact] = useState<fact>();

 async function fetchData() {
  try {
   const res = await fetch('/api/facts', {
    method: 'GET',
    headers: headers,
   });

   const factsJson: factResponse = await res.json();
   console.log(factsJson);
   setFact(factsJson.factsArray[randomFact(factsJson.factsArray.length)]);
   console.log(fact);
  } catch (error) {
   console.error('Failed to get fact: ', error);
  }
 }

 useEffect(() => {
  fetchData();
 }, []);

 // Return a random number between 0-20.
 function randomFact(factsLength: number) {
  return Math.floor(Math.random() * factsLength);
 }

 if (!fact) {
  return <></>;
 }

 return (
  <div className="flex justify-center">
   <div className="mx-auto mt-10 text-white font-cardContent md:text-xl">{fact && <p> {fact.fact}</p>}</div>
  </div>
 );
};
export default FactGenerator;
