import LessonContent from "../../components/LessonContent";
import SampleDemo from "../../components/SampleDemo";
import Quiz from "../../components/Quiz";

export default function LessonPage() {
  return (
    <div className="p-4">
      <LessonContent
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
        sandboxUrl="https://codesandbox.io/embed/new"
        demoComponent={SampleDemo}
      />

      {/* Add Quiz */}
      <Quiz
        question="Which of these is an example of AI?"
        options={["Calculator", "ChatGPT", "Light bulb", "Hammer"]}
        answer={1}
      />
    </div>
  );
}
