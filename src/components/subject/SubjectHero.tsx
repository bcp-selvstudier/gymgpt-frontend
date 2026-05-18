import type { Subject } from '../../data/subjects'

type SubjectHeroProps = {
  subject: Subject
}

export function SubjectHero({ subject }: SubjectHeroProps) {
  return (
    <section className="subject-hero">
      <img src={subject.heroImage} alt="" className="subject-hero-image" />
      <div className="subject-hero-overlay" />
      <div className="gym-container subject-hero-content">
        <header>
          <h1 className="subject-title">{subject.name}</h1>
          <nav className="subject-breadcrumbs" aria-label="Breadcrumbs">
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li>»</li>
              <li aria-current="page">{subject.name}</li>
            </ol>
          </nav>
        </header>
      </div>
    </section>
  )
}
