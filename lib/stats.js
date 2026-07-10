// ============================================================
// STATS
// 🐛 BUG TASK #2: The team counter is wrong — it always shows
//   one less than the real number of team members!
//   Branch name: bug-fix-team-counter
// ============================================================

export function countTeamMembers(team = []) {
  return Array.isArray(team) ? team.length : 0;
}

export function countFacts(facts = []) {
  return Array.isArray(facts) ? facts.length : 0;
}
