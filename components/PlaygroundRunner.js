import { useState, useRef } from "react";
import Editor from "@monaco-editor/react";

export default function PlaygroundRunner() {
  const [code, setCode] = useState(`// Try editing me!
function greet(name) {
  return "Hello " + name + "!";
}

console.log(greet("AI Learner"));`);
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const iframeRef = useRef(null);

  const runCode = () => {
    setError("");
    setOutput("");
    try {
      const log = [];
      const customConsole = {
        log: (...args) => log.push(args.join(" ")),
      };
      // eslint-disable-next-line no-new-func
      const fn = new Function("console", code);
      fn(customConsole);
      setOutput(log.join("\n"));
    } catch (err) {
      setError(err.toString());
    }
  };

  const explainCode = async () => {
    alert("This is where AI explanation will be integrated.");
    // Example: Call your AI API here and display explanation in a modal
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[80vh]">
      {/* Editor */}
      <div className="border rounded overflow-hidden">
        <Editor
          height="100%"
          language="javascript"
          value={code}
          onChange={(value) => setCode(value)}
          theme="vs-dark"
          options={{
            fontSize: 14,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
          }}
        />
      </div>

      {/* Output Panel */}
      <div className="flex flex-col">
        <div className="flex space-x-2 mb-2">
          <button
            onClick={runCode}
            className="px-4 py-2 bg-indigo-600 text-white rounded"
          >
            ▶ Run
          </button>
          <button
            onClick={explainCode}
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            💡 Explain with AI
          </button>
        </div>
        <div className="border rounded p-2 flex-1 bg-gray-900 text-green-400 overflow-auto">
          {output && <pre>{output}</pre>}
          {error && <pre className="text-red-400">{error}</pre>}
          {!output && !error && (
            <p className="text-gray-500">Output will appear here...</p>
          )}
        </div>
      </div>
    </div>
  );
}
