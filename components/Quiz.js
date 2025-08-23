import { useState } from "react";
import Confetti from "react-confetti";

const Quiz = ({ question, options, answer }) => {
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);

  const checkAnswer = () => {
    if (selected === answer) {
      setFeedback("🎉 Correct! Great job!");
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000); // stop confetti after 3s
    } else {
      setFeedback("❌ Oops! Try again.");
    }
  };

  return (
    <div className="p-4 border rounded-xl shadow-lg bg-white max-w-md mx-auto mt-6">
      {showConfetti && <Confetti />}
      <h2 className="text-lg font-bold">{question}</h2>
      <div className="mt-2">
        {options.map((opt, i) => (
          <button
            key={i}
            className={`block w-full p-2 my-1 rounded-lg transition ${
              selected === i ? "bg-blue-300" : "bg-blue-100"
            }`}
            onClick={() => setSelected(i)}
          >
            {opt}
          </button>
        ))}
      </div>
      <button
        onClick={checkAnswer}
        className="mt-3 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Check Answer
      </button>
      {feedback && <p className="mt-2 text-lg">{feedback}</p>}
    </div>
  );
};

export default Quiz;
