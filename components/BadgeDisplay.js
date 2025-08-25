// components/BadgeDisplay.js
import React, { useEffect, useState } from "react";
import { getBadges } from "../utils/progress";

export default function BadgeDisplay() {
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    setBadges(getBadges());
  }, []);

  if (badges.length === 0) return <p>No badges yet. Keep learning! 🚀</p>;

  return (
    <div className="my-4">
      <h3 className="font-semibold mb-2">🏅 Your Badges</h3>
      <div className="flex gap-2 flex-wrap">
        {badges.map((badge, i) => (
          <span key={i} className="px-3 py-1 bg-yellow-200 rounded-lg shadow">
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}
