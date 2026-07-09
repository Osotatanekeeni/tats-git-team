# 🌱 ACA Team Hub — Git/GitHub Lab

A tiny Next.js website used to practice the **ACA Git Workflow**: feature branches, bug fixes, hotfixes, pull requests, and the `develop` → `master` flow.

## 🚀 Setup (everyone, 5 min)

```bash
git clone <REPO_URL>
cd git-lab
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

## 🐛 Bug tasks (planted on purpose — find & fix)

| Bug | File | Branch name |
|-----|------|-------------|
| Says "Good morning" in the afternoon | `lib/greetings.js` | `bug-fix-afternoon-greeting` |
| Team counter shows one less member | `lib/stats.js` | `bug-fix-team-counter` |

## 🚨 Hotfix task (instructor demo or volunteer)

A broken sale banner made it to "production". Branch `hotfix-remove-broken-banner` off `master`, remove the banner in `app/page.js`, PR into `master`, then merge master back into develop.

## 💬 Commit message examples

```
feature: Add Tino's card to team page
bug-fix: Return correct team count in countTeamMembers
hotfix: Remove broken sale banner from homepage
```
