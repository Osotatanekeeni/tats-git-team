import { team } from "@/lib/team";
import { facts } from "@/lib/facts";
import { getGreeting, getEmoji } from "@/lib/greetings";
import { countTeamMembers, countFacts } from "@/lib/stats";

export default function Home() {
  const hour = new Date().getHours();

  return (
    <main>
      {/* 🚨 HOTFIX TASK: This broken banner made it to production!
          Remove it on a branch called: hotfix-remove-broken-banner */}
      <div className="banner">
        🚧 MEGA SALE!!! 90% OFF EVERYTHING!!! CLICK HERE!!! 🚧
        (wait... we don&apos;t even sell anything?)
      </div>

      <div className="hero">
        <h1>ACA Team Hub</h1>
        <p className="greeting">
           {getEmoji(hour)} {getGreeting(hour)}, welcome to your personal hell!
        </p>
      </div>

      <div className="stats">
        <div className="stat">
          <div className="num">{countTeamMembers(team)}</div>
          <div className="label">Team members</div>
        </div>
        <div className="stat">
          <div className="num">{countFacts(facts)}</div>
          <div className="label">Fun facts</div>
        </div>
      </div>

      <h2>👩‍💻 The Team</h2>
      <div className="team-grid">
        {team.map((member) => (
          <div className="card" key={member.name}>
            <div className="emoji">{member.emoji}</div>
            <h3>{member.name}</h3>
            <div className="role">{member.role}</div>
            <div className="fact">&ldquo;{member.funFact}&rdquo;</div>
          </div>
        ))}
      </div>

      <h2>💡 Fun Facts</h2>
      <ul className="facts-list">
        {facts.map((fact) => (
          <li key={fact}>{fact}</li>
        ))}
      </ul>

      <footer>
        Made By Tats For Tats!
      </footer>
    </main>
  );
}
