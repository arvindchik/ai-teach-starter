import Link from 'next/link';
import React from 'react';

export default function LessonCard({ lesson }) {
  return (
    <Link href={lesson.href || `/lessons/${lesson.id}`}>
      <div
        className={`p-6 rounded-lg text-white shadow-lg transform hover:scale-105 transition ${lesson.color || 'bg-gray-700'}`}
      >
        <h3 className="text-xl font-semibold mb-2">{lesson.title}</h3>
        <p className="text-sm mb-4">{lesson.summary}</p>
        <div className="text-xs">{lesson.duration}</div>
      </div>
    </Link>
  );
}
