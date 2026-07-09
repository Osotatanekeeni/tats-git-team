// ============================================================
// STATS
// 🐛 BUG TASK #2: The team counter is wrong — it always shows
//   one less than the real number of team members!
//   Branch name: bug-fix-team-counter
// ============================================================

export function countTeamMembers(team) {
  return team.length - 1; // 🐛 hmm...
}

export function countFacts(facts) {
  return facts.length;
}
