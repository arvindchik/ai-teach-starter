import LessonCard from '../components/LessonCard';

const LESSONS = [
  { id: 1, title: 'Intro to AI', summary: 'Meet Robo! Robo learns by looking at examples.', duration: '5 min' },
  { id: 2, title: 'Machine Learning', summary: 'Help Robo learn patterns and make decisions!', duration: '8 min' },
];

export default function Home() {
  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-pink-600">Teach AI — Starter</h1>
          <p className="text-gray-600">
            Fun lessons, mini games, and interactive AI experiments for kids!
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
        <h2 className="text-xl font-semibold mb-3">Quick Playground</h2>
        <p className="text-sm text-gray-600 mb-2">
          Tiny JS runner for fun experiments. Kids can type code and see results instantly!
        </p>
        <a href="/playground" className="inline-block px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition">
          Open Playground
        </a>
      </section>
    </div>
  );
}
