/** @format */

import Footer from '@/components/Footer';

import Navbar from '@/components/Navbar';

import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
 return (
  <div className="min-h-screen">
   <Navbar />
   <div className="container min-h-full mx-auto">
    <Component {...pageProps} />
   </div>
   <Footer />
  </div>
 );
}
