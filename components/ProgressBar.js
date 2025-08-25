// components/ProgressBar.js
import React, { useEffect, useState } from "react";
import { getPoints } from "../utils/progress";

export default function ProgressBar() {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    setPoints(getPoints());
  }, []);

  const level = Math.floor(points / 500) + 1; // Level up every 500 pts
  const progress = (points % 500) / 5; // percent (0–100)

  return (
    <div className="my-4">
      <div className="flex justify-between text-sm mb-1">
        <span>Level {level}</span>
        <span>{points} pts</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-blue-500 h-4 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
