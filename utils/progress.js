// utils/progress.js
export function getPoints() {
  return parseInt(localStorage.getItem("points") || "0", 10);
}

export function addPoints(amount) {
  let current = getPoints();
  current += amount;
  localStorage.setItem("points", current);
  return current;
}

export function getBadges() {
  return JSON.parse(localStorage.getItem("badges") || "[]");
}

export function addBadge(badge) {
  let badges = getBadges();
  if (!badges.includes(badge)) {
    badges.push(badge);
    localStorage.setItem("badges", JSON.stringify(badges));
  }
  return badges;
}
