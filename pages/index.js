import LessonCard from '../components/LessonCard';
import { LESSONS } from '../utils/sampleData';

export default function Home() {
  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Teach AI — Starter</h1>
          <p className="text-gray-600">
            Interactive lessons, code playground, and tiny experiments for beginners.
          </p>
        </div>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-3">Lessons</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {LESSONS.map((l) => (
            <LessonCard key={l.id} lesson={l} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Quick playground</h2>
        <p className="text-sm text-gray-600 mb-2">
          Tiny JS runner for demos. Replace with a sandboxed Python worker when you're ready.
        </p>
        <a href="/playground" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded">
          Open Playground
        </a>
      </section>
    </div>
  );
}
