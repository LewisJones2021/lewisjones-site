/** @format */

import React from 'react';

import type { NextApiRequest, NextApiResponse } from 'next';
interface facts {
 id: number;
 fact: string;
}

const factsArray: facts[] = [
 { id: 1, fact: 'The shortest war in history was between Britain and Zanzibar in 1896. It lasted only 38 minutes.' },
 { id: 2, fact: 'A group of flamingos is called a flamboyance.' },
 {
  id: 3,
  fact: "The world's largest snowflake on record was 15 inches wide and 8 inches thick. It fell in Montana in 1887.",
 },
 { id: 4, fact: 'In Japan, letting a sumo wrestler make your baby cry is considered good luck.' },
 { id: 5, fact: "The shortest complete sentence in the English language is 'I am.'" },
 { id: 6, fact: 'A baby spider is called a spiderling.' },
 { id: 7, fact: "An ostrich's eye is bigger than its brain." },
 {
  id: 8,
  fact: 'The longest word in the English language has 189,819 letters and would take over three hours to pronounce.',
 },
 { id: 9, fact: 'Octopuses have three hearts.' },
 { id: 10, fact: 'A small child could swim through the veins of a blue whale.' },
 { id: 11, fact: 'The Great Barrier Reef is the largest living structure on Earth.' },
 {
  id: 12,
  fact: "The first recorded use of the word 'hello' as a greeting was in a letter written by Thomas Edison in 1877.",
 },
 { id: 13, fact: 'Cats can make over 100 different sounds, while dogs can only make about 10.' },
 {
  id: 14,
  fact:
   "The longest word in the Oxford English Dictionary is 45 letters long: 'pneumonoultramicroscopicsilicovolcanoconiosis'.",
 },
 {
  id: 15,
  fact: "The world's largest grand piano was built by a 15-year-old in New Zealand. It's 18 feet long and has 85 keys.",
 },
 { id: 16, fact: 'The first recorded game of baseball was played in 1846 in Hoboken, New Jersey.' },
 { id: 17, fact: 'A cockroach can live for several weeks without its head.' },
 { id: 18, fact: 'There is a species of jellyfish that is biologically immortal.' },
 {
  id: 19,
  fact:
   'The shortest war in American history was the Aroostook War between Maine and Canada, which lasted only a few months in 1839.',
 },
 {
  id: 20,
  fact:
   'The Great Pyramid of Giza was originally covered in smooth white limestone, but most of it was removed over time to build other structures.',
 },
];

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
 res.status(200).json({ factsArray });
 console.log(factsArray);
}
