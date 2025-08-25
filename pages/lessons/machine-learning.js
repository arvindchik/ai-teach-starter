// pages/lessons/machine-learning.js
import ProgressBar from "../../components/ProgressBar";
import BadgeDisplay from "../../components/BadgeDisplay";
import LessonEditor from "../../components/LessonEditor";
import LessonContent from "../../components/LessonContent";
import SampleDemo from "../../components/SampleDemo";
import { addPoints, addBadge } from "../../utils/progress";

export default function MachineLearningLesson() {
  const lesson = {
    title: "Machine Learning",
    summary: "Understand supervised and unsupervised learning.",
  };

  const handleComplete = () => {
    addPoints(100); // add points
    addBadge("🎯 First Steps"); // unlock a badge
    alert("Lesson complete! +100 pts 🎉");
    window.location.reload(); // refresh to update progress/badges
  };

  return (
    <div className="space-y-4 p-6">
      <a href="/" className="text-sm text-blue-600">← Back</a>
      <LessonEditor lesson={lesson} />
      <LessonContent
        videoUrl="https://www.youtube.com/embed/GwIo3gDZCVQ"
        sandboxUrl="https://codesandbox.io/embed/new"
        demoComponent={SampleDemo}
      />

      {/* Progress + Badge Display */}
      <ProgressBar />
      <BadgeDisplay />

      {/* Mark Complete Button */}
      <button
        onClick={handleComplete}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg"
      >
        Mark as Complete
      </button>
    </div>
  );
}
