import Link from 'next/link';
import React from 'react';

export default function LessonCard({ lesson, href }) {
  return (
    <Link 
      href={href || `/lessons/${lesson.id}`} 
      className={`block border rounded p-4 hover:shadow transition ${
        lesson.highlight ? 'bg-blue-50 border-blue-400' : 'bg-white'
      }`}
    >
      <div className="flex items-center gap-2">
        {lesson.icon && <span className="text-xl">{lesson.icon}</span>}
        <div>
          <h3 className="font-semibold">{lesson.title}</h3>
          <p className="text-sm text-gray-600">{lesson.summary}</p>
          <div className="mt-2 text-xs text-gray-500">{lesson.duration}</div>
        </div>
      </div>
    </Link>
  );
}
