import React from "react";
import LessonContent from "../../components/LessonContent";

// Optional: Example interactive demo component
function SampleDemo() {
  return (
    <div>
      <p className="mb-2">Type something here and see it update below:</p>
      <input
        type="text"
        className="border p-1 rounded"
        onChange={(e) => (document.getElementById("output").innerText = e.target.value)}
      />
      <p id="output" className="mt-2 text-blue-600"></p>
    </div>
  );
}

export default function LessonPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Lesson Title</h1>
      <LessonContent
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
        sandboxUrl="https://codesandbox.io/embed/new"
        demoComponent={SampleDemo}
      />
    </div>
  );
}
