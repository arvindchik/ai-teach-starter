import Link from 'next/link';
import React from 'react';

export default function LessonCard({ lesson }) {
  return (
    <Link
      href={`/lessons/${lesson.id}`}
      className="block border rounded-lg p-4 hover:shadow-lg transition bg-white"
    >
      <h3 className="font-semibold text-lg text-indigo-600">{lesson.title}</h3>
      <p className="text-sm text-gray-600 mt-1">{lesson.summary}</p>
      <div className="mt-2 text-xs text-gray-500">{lesson.duration}</div>
    </Link>
  );
}
