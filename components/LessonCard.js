import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function LessonCard({ lesson }) {
  const [completed, setCompleted] = useState(false);

  // Check localStorage for completion status
  useEffect(() => {
    const status = localStorage.getItem(`lesson-${lesson.id}-completed`);
    if (status === 'true') setCompleted(true);
  }, [lesson.id]);

  const handleComplete = () => {
    localStorage.setItem(`lesson-${lesson.id}-completed`, 'true');
    setCompleted(true);
  };

  return (
    <Link href={`/lessons/${lesson.id}`} className="block">
      <div className="border rounded-lg p-4 bg-gradient-to-tr from-pink-50 to-yellow-50 hover:scale-105 transform transition-shadow shadow-sm hover:shadow-lg cursor-pointer relative">
        <h3 className="font-bold text-lg text-pink-700">{lesson.title}</h3>
        <p className="text-sm text-gray-700 mt-1">{lesson.summary}</p>
        <div className="mt-2 text-xs text-gray-500">{lesson.duration}</div>

        {/* Completion Badge */}
        {completed && (
          <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-0.5 text-xs rounded-full font-semibold">
            ✅ Completed
          </div>
        )}

        {/* "Mark Complete" button if not done */}
        {!completed && (
          <button
            onClick={(e) => {
              e.preventDefault();
              handleComplete();
            }}
            className="mt-3 px-2 py-1 bg-green-400 text-white text-xs rounded hover:bg-green-500"
          >
            Mark Complete
          </button>
        )}
      </div>
    </Link>
  );
}
