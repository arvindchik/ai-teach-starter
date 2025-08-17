import React from 'react';

export default function LessonContent({ videoUrl, sandboxUrl, demoComponent: Demo }) {
  return (
    <div className="space-y-4">
      <iframe
        src={videoUrl}
        title="Lesson video"
        width="100%"
        height="360"
        className="border rounded"
      />
      {Demo && <Demo />}
      <a
        href={sandboxUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        Open code sandbox
      </a>
    </div>
  );
}
