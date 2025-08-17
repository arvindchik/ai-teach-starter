import React from 'react';

export default function LessonContent({ videoUrl, sandboxUrl, demoComponent: Demo }) {
  return (
    <div className="space-y-6 p-4 border rounded bg-gradient-to-b from-yellow-50 to-white shadow-md">
      {/* Video Section */}
      <div className="rounded overflow-hidden shadow-lg">
        <iframe
          className="w-full h-64 sm:h-80"
          src={videoUrl}
          title="Lesson Video"
          allowFullScreen
        ></iframe>
      </div>

      {/* Interactive Demo Section */}
      <div className="bg-green-50 p-4 rounded shadow-inner">
        <h3 className="text-lg font-bold text-green-700">Try it out!</h3>
        <p className="text-sm text-green-800 mb-2">
          Play with this mini demo and see what happens.
        </p>
        <div className="border p-2 rounded bg-white">
          {Demo && <Demo />}
        </div>
      </div>

      {/* Sandbox Section */}
      <div className="bg-blue-50 p-4 rounded shadow-inner">
        <h3 className="text-lg font-bold text-blue-700">Your Sandbox</h3>
        <iframe
          className="w-full h-80 rounded border"
          src={sandboxUrl}
          title="Code Sandbox"
        ></iframe>
      </div>

      {/* Think About It / Reflection */}
      <div className="bg-yellow-100 p-3 rounded text-yellow-900">
        <strong>Think About It:</strong> What would happen if Robo makes a mistake? Can you help it learn better?
      </div>
    </div>
  );
}
