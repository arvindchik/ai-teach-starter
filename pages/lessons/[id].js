import { useRouter } from 'next/router';
import { LESSONS } from '../../utils/sampleData';
import LessonContent from '../../components/LessonContent';
import SampleDemo from '../../components/SampleDemo';
import Link from 'next/link';

export default function LessonPage() {
  const router = useRouter();
  const { id } = router.query;

  const lesson = LESSONS.find((l) => l.id === id);

  if (!lesson) return <div className="p-4 text-gray-600">Loading lesson...</div>;

  return (
    <div className="space-y-6 p-4">
      <Link href="/">
        <span className="text-sm text-blue-600 hover:underline">← Back to Home</span>
      </Link>

      <h1 className="text-3xl font-bold text-indigo-600">{lesson.title}</h1>
      <p className="text-gray-700 text-lg">{lesson.summary}</p>

      <LessonContent
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
        sandboxUrl="https://codesandbox.io/embed/new"
        demoComponent={SampleDemo}
      />

      <div className="mt-6 p-4 border rounded bg-gray-50">
        <h2 className="text-xl font-semibold">Try a Mini Project!</h2>
        <p className="text-gray-600">
          Use the playground above to experiment with what you just learned. Have fun exploring AI!
        </p>
      </div>
    </div>
  );
}
