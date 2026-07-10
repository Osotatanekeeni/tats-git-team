# 🌱 ACA Team Hub — Git/GitHub Lab

A tiny Next.js website used to practice the **ACA Git Workflow**: feature branches, bug fixes, hotfixes, pull requests, and the `develop` → `master` flow.

## 🚀 Setup (everyone, 5 min)

```bash
git clone <REPO_URL>
cd ats-git-team
npm install
npm run dev
```

Open http://localhost:3000 — you should see the ACA Team Hub. Keep it running; the page live-reloads when you save a file.

## 🔁 The workflow you must follow

1. `git checkout develop && git pull` — always start from the latest develop
2. `git checkout -b <branch-name>` — correct naming (see below!)
3. Make your change, watch it appear live at localhost:3000
4. Commit: short, actionable message
5. `git push -u origin <branch-name>`
6. Open a **pull request into `develop`** on GitHub
7. Get a peer review, then merge
8. `git checkout develop && git pull` — see everyone's changes appear on YOUR site 🎉

## ✨ Feature tasks (pick at least one)

| Task | File | Branch name |
|------|------|-------------|
| Add your team card | `lib/team.js` | `feature-add-<yourname>-card` |
| Add a coding fun fact | `lib/facts.js` | `feature-add-<yourname>-fact` |
| Add `getEmoji(hour)` next to greeting | `lib/greetings.js` + `app/page.js` | `feature-add-greeting-emoji` |

## 💬 Commit message examples

```
feature: Add Tino's card to team page
bug-fix: Return correct team count in countTeamMembers
hotfix: Remove broken sale banner from homepage
```
