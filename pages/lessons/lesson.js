import LessonContent from '../../components/LessonContent';
import SampleDemo from '../../components/SampleDemo';


export default function LessonPage() {
  return (
    <div className="p-4">
      <LessonContent
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
        sandboxUrl="https://codesandbox.io/embed/new"
        demoComponent={SampleDemo}
      />
    </div>
  );
}
