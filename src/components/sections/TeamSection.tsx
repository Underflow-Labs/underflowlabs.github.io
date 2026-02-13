type TeamMember = {
  name: string;
  role: string;
  linkedin: string;
  github: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Francisco Clarke",
    role: "Systems Architect",
    linkedin: "https://www.linkedin.com/in/franciscoclarke/",
    github: "https://github.com/franclarke",
    image: "/equipo/Francisco_Clarke.png",
  },
  {
    name: "Julian Alconcher",
    role: "Frontend Engineer",
    linkedin: "https://www.linkedin.com/in/julian-alconcher/",
    github: "https://github.com/JulianAlconcher",
    image: "/equipo/Julian_Alconcher.png",
  },
  {
    name: "Antonio Carlos",
    role: "Backend Engineer",
    linkedin: "https://www.linkedin.com/in/antoniocarlos2000/",
    github: "https://github.com/totoccar",
    image: "/equipo/Antonio_Carlos.png",
  },
  {
    name: "Francisco Ruiz",
    role: "Automation Engineer",
    linkedin: "https://www.linkedin.com/in/francisco-ruiz-gomez/",
    github: "https://github.com/franciscoruiz00",
    image: "/equipo/Francisco_Ruiz_Gomez.png",
  },
  {
    name: "Tobias Thiessen",
    role: "Software Engineer",
    linkedin: "https://www.linkedin.com/in/tobias-thiessen/",
    github: "https://github.com/TobiasThiessen11",
    image: "/equipo/Tobias_Thiessen.png",
  },
];

const topRow = teamMembers.slice(0, 3);
const bottomRow = teamMembers.slice(3);

export function TeamSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="site-container">
        <h2 className="max-w-3xl font-heading text-3xl leading-tight text-text-primary sm:text-4xl">Nuestro equipo</h2>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {topRow.map((member) => (
            <TeamCard key={member.role} member={member} />
          ))}
        </div>

        <div className="mt-4 grid gap-4 md:mx-auto md:max-w-3xl md:grid-cols-2">
          {bottomRow.map((member) => (
            <TeamCard key={member.role} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

type TeamCardProps = {
  member: TeamMember;
};

function TeamCard({ member }: TeamCardProps) {
  return (
    <article className="h-full rounded-2xl border border-border-base bg-bg-surface p-6 text-center">
      <img
        src={member.image}
        alt={`Foto de ${member.name}`}
        className="mx-auto h-28 w-28 rounded-full border border-border-base object-cover"
        loading="lazy"
        decoding="async"
      />

      <h3 className="mt-5 font-heading text-xl text-text-primary">{member.name}</h3>
      <p className="mt-1 text-sm text-text-secondary">{member.role}</p>

      <div className="mt-5 flex items-center justify-center gap-3">
        <a
          href={member.linkedin}
          aria-label={`LinkedIn de ${member.name}, ${member.role}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-base text-text-secondary transition-colors hover:border-border-hover hover:text-text-primary"
        >
          <LinkedInIcon />
        </a>
        <a
          href={member.github}
          aria-label={`GitHub de ${member.name}, ${member.role}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-base text-text-secondary transition-colors hover:border-border-hover hover:text-text-primary"
        >
          <GitHubIcon />
        </a>
      </div>
    </article>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M6.94 8.5a1.56 1.56 0 1 1 0-3.12 1.56 1.56 0 0 1 0 3.12ZM5.6 18.38h2.67V9.96H5.6v8.42ZM10.64 9.96h2.56v1.15h.04c.36-.67 1.23-1.38 2.53-1.38 2.71 0 3.21 1.78 3.21 4.1v4.55h-2.67v-4.03c0-.96-.02-2.2-1.34-2.2-1.34 0-1.55 1.05-1.55 2.13v4.1h-2.67V9.96Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.82-.25.82-.57v-2.2c-3.34.72-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.74-1.33-1.74-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.24 1.83 1.24 1.08 1.85 2.83 1.31 3.52 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.48-1.33-5.48-5.93 0-1.3.47-2.36 1.24-3.2-.12-.3-.54-1.52.12-3.16 0 0 1.01-.33 3.3 1.22a11.4 11.4 0 0 1 6 0c2.28-1.55 3.29-1.22 3.29-1.22.66 1.64.24 2.86.12 3.16.77.84 1.24 1.9 1.24 3.2 0 4.61-2.81 5.63-5.5 5.93.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}
