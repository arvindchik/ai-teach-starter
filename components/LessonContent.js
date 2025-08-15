// components/LessonContent.js
import React from 'react';
import PlaygroundRunner from './PlaygroundRunner';

export default function LessonContent({ videoUrl, sandboxUrl, demoComponent: Demo }) {
  return (
    <div className="space-y-8">
      {/* Video Section */}
      <section>
        <h2 className="text-xl font-bold mb-2">Watch the Lesson</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={videoUrl}
            title="Lesson Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg"
          />
        </div>
      </section>

      {/* Interactive Demo */}
      {Demo && (
        <section>
          <h2 className="text-xl font-bold mb-2">Try the Demo</h2>
          <div className="border rounded-lg p-4 bg-gray-50">
            <Demo />
          </div>
        </section>
      )}

      {/* Code Sandbox Embed */}
      {sandboxUrl && (
        <section>
          <h2 className="text-xl font-bold mb-2">Explore in CodeSandbox</h2>
          <iframe
            src={sandboxUrl}
            style={{ width: '100%', height: '500px', border: '0', borderRadius: '8px', overflow: 'hidden' }}
            title="CodeSandbox Embed"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          />
        </section>
      )}

      {/* Built-in Playground */}
      <section>
        <h2 className="text-xl font-bold mb-2">Experiment in Playground</h2>
        <PlaygroundRunner />
      </section>
    </div>
  );
}
