import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white/50 backdrop-blur p-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Link href="/">
          <span className="font-semibold text-lg">AI Teach</span>
        </Link>

        <div className="flex gap-4 items-center">
          <Link href="/lessons/machine-learning">
            <span>Machine Learning</span>
          </Link>

          <Link href="/playground">
            <span className="px-3 py-1 rounded hover:bg-gray-100">Playground</span>
          </Link>
          <button className="px-3 py-1 bg-blue-600 text-white rounded">Sign in</button>
        </div>
      </div>
    </nav>
  );
}
