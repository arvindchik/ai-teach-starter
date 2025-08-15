// pages/machine-learning.js
import React from 'react';
import LessonContent from '../components/LessonContent';

// Simple interactive ML demo component
function ImageClassifierDemo() {
  return (
    <div className="bg-white shadow rounded p-4">
      <p className="mb-2 text-gray-700">📷 Try uploading an image to see the predicted label.</p>
      <input
        type="file"
        accept="image/*"
        className="border p-2 rounded w-full"
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            alert(`Pretend model predicts: "${file.name.split('.')[0]}"`);
          }
        }}
      />
    </div>
  );
}

export default function MachineLearningPage() {
  return (
    <div className="p-4 space-y-6">
      <LessonContent
        videoUrl="https://www.youtube.com/embed/GwIo3gDZCVQ" // Intro to ML video
        sandboxUrl="https://codesandbox.io/embed/new" // Starter sandbox link
        demoComponent={ImageClassifierDemo}
      />

      <section className="bg-gray-50 p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-3">What you’ll learn</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>What Machine Learning is and why it matters</li>
          <li>Types of ML: Supervised, Unsupervised, Reinforcement</li>
          <li>Training a simple model</li>
          <li>Deploying models for real-world use</li>
        </ul>
      </section>

      <section className="bg-gray-50 p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-3">Next steps</h2>
        <p className="text-gray-700">
          Play with the demo above, edit code in the sandbox, and watch the intro video to get a
          feel for how ML works. Then move on to the next lesson where we’ll train a real image
          classifier in the browser.
        </p>
      </section>
    </div>
  );
}
