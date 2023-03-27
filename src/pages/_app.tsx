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
   <main>
    <div className="container  min-h-[80vh] mx-auto">
     <Component {...pageProps} />
    </div>
   </main>
   <Footer />
  </div>
 );
}
