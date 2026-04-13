import { teamMembers } from '../data/content'

export function AboutPage() {
  return (
    <section className="section">
      <h1>About House Aurelius</h1>
      <p className="muted">
        House Aurelius builds practical systems for schools, service businesses,
        real estate operators, and church communities.
      </p>

      <div className="team top-space">
        {teamMembers.map((member) => (
          <article key={member.name} className="member-card">
            <img className="member-image" src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p className="member-role">{member.role}</p>
            <p>{member.bio}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
