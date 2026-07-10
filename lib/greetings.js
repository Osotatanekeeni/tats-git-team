// ============================================================
// GREETINGS
// 🐛 BUG TASK #1: The greeting is wrong in the afternoon.
//   It says "Good morning" all day until 6pm!
//   Branch name: bug-fix-afternoon-greeting
// ============================================================

export function getGreeting(hour) {
  if (hour < 12) {
    return "Good morning";
  }
  if (hour < 18) {
    return "Good afternoon"; // ✅ FIXED: Now says "Good afternoon"
  }
  return "Good evening";
}

// ============================================================
// FEATURE TASK: Add a getEmoji(hour) function that returns
//   ☀️ for morning, 🌤️ for afternoon, 🌙 for evening —
//   then use it in app/page.js next to the greeting.
//   Branch name: feature-add-greeting-emoji
// ============================================================

export function getEmoji(hour) {
  if (hour < 12) {
    return "☀️";
  }
  if (hour < 18) {
    return "🌤️";
  }
  return "🌙";
}