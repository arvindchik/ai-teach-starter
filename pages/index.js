import LessonCard from '../components/LessonCard';

const LESSONS = [
  {
    id: 1,
    title: 'Intro to AI',
    summary: 'Learn the basics of AI with hands-on examples.',
    duration: '5 min',
    color: 'bg-gradient-to-r from-purple-400 to-purple-600',
  },
  {
    id: 2,
    title: 'Machine Learning',
    summary: 'Understand supervised and unsupervised learning.',
    duration: '8 min',
    color: 'bg-gradient-to-r from-green-400 to-green-600',
    href: '/lessons/machine-learning',
  },
];

export default function Home() {
  return (
    <div className="space-y-10">
      {/* Hero section */}
      <header className="text-center space-y-3 py-10 bg-gray-50 rounded-lg shadow">
        <h1 className="text-4xl font-bold">Teach AI — Starter</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Interactive lessons, code playgrounds, and tiny experiments for beginners. Learn AI with hands-on demos and visualizations.
        </p>
      </header>

      {/* Lessons section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Lessons</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {LESSONS.map((l) => (
            <LessonCard key={l.id} lesson={l} />
          ))}
        </div>
      </section>

      {/* Playground section */}
      <section className="py-6 bg-gray-50 rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-3">Quick Playground</h2>
        <p className="text-gray-600 mb-4">
          Tiny JS runner for demos. Later, replace with a sandboxed Python or ML worker.
        </p>
        <a
          href="/playground"
          className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Open Playground
        </a>
      </section>
    </div>
  );
}
