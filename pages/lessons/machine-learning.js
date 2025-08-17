import React from 'react';
import LessonContent from '../../components/LessonContent';
import SampleDemo from '../../components/SampleDemo';
import LessonEditor from '../../components/LessonEditor';

export default function MachineLearningLesson() {
  const lesson = {
    title: 'Machine Learning',
    summary: 'Understand supervised and unsupervised learning.'
  };

  return (
    <div className="space-y-4">
      <a href="/" className="text-sm text-blue-600">← Back</a>
      <LessonEditor lesson={lesson} />
      <LessonContent
        videoUrl="https://www.youtube.com/embed/GwIo3gDZCVQ"
        sandboxUrl="https://codesandbox.io/embed/new"
        demoComponent={SampleDemo}
      />
    </div>
  );
}
