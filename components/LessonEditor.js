import React from 'react';

export default function LessonEditor({ lesson }) {
  const title = lesson?.title ?? 'Untitled Lesson';
  const summary = lesson?.summary ?? '';

  return (
    <div className="p-4 border rounded">
      <h2 className="font-semibold text-xl">{title}</h2>
      <p className="text-sm text-gray-600 my-2">{summary}</p>
      <div className="mt-4">Lesson content placeholder — embed video, interactive demo, and code sandbox here.</div>
    </div>
  );
}
