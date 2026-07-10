import { team } from "@/lib/team";
import { facts } from "@/lib/facts";
import { getGreeting, getEmoji } from "@/lib/greetings";
import { countTeamMembers, countFacts } from "@/lib/stats";

export default function Home() {
  const hour = new Date().getHours();

  return (
    <main>
      <div className="hero">
        <h1>ACA Team Hub</h1>

        <p className="greeting">
          {getEmoji(hour)} {getGreeting(hour)}, welcome to the ACA Team Hub!
        </p>

        <p className="hero-copy">
          This page brings together the ACA team, a few fun facts, and a hands-on Git and GitHub practice space.
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

            <div className="role">
              {member.role}
            </div>

            <div className="fact">
              &ldquo;{member.funFact}&rdquo;
            </div>
          </div>
        ))}
      </div>

      <h2>💡 Fun Facts</h2>

      <p className="facts-intro">
        A few quick reminders about coding, Git, and the surprising history behind the tools we use every day.
      </p>

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