import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

export default function LessonCard({ lesson }) {
  const [completed, setCompleted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const isCompleted = localStorage.getItem(`lesson-${lesson.id}-completed`) === 'true';
    setCompleted(isCompleted);
  }, [lesson.id]);

  const markComplete = () => {
    localStorage.setItem(`lesson-${lesson.id}-completed`, 'true');
    setCompleted(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000); // show confetti for 3 seconds
  };

  return (
    <div className="relative border rounded p-4 hover:shadow">
      {showConfetti && <Confetti numberOfPieces={150} recycle={false} />}
      <h3 className="font-semibold">{lesson.title}</h3>
      <p className="text-sm text-gray-600">{lesson.summary}</p>
      <div className="mt-2 text-xs text-gray-500">{lesson.duration}</div>

      {completed ? (
        <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">✅ Completed</span>
      ) : (
        <button
          onClick={markComplete}
          className="mt-2 px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600"
        >
          Mark Complete
        </button>
      )}
    </div>
  );
}
