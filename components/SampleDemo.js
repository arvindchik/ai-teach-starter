import React, { useState } from 'react';

export default function SampleDemo() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleReverse = () => setOutput(input.split('').reverse().join(''));

  return (
    <div className="space-y-2">
      <label className="block font-semibold text-sm">Type a word to help Robo reverse it!</label>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-1 rounded w-full"
        placeholder="Enter word"
      />
      <button
        onClick={handleReverse}
        className="px-3 py-1 bg-green-600 text-white rounded mt-1"
      >
        Reverse
      </button>
      {output && (
        <div className="mt-2 p-2 bg-green-100 rounded text-green-800">
          Robo reversed it: <strong>{output}</strong>
        </div>
      )}
    </div>
  );
}
