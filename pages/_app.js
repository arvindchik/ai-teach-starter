import React from 'react';
import '../styles/globals.css';
import Navbar from '../components/Navbar';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <main className="max-w-5xl mx-auto p-6">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
