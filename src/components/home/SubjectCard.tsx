import type { Subject } from '../../data/subjects'

type SubjectCardProps = {
  subject: Subject
}

export function SubjectCard({ subject }: SubjectCardProps) {
  return (
    <article className="subject-card">
      <div className="subject-card-content">
        <h2>
          <a href={subject.href} rel="bookmark">
            {subject.name}
          </a>
        </h2>
        <a className="subject-card-button" href={subject.href}>
          Spørg mig :)
        </a>
      </div>
    </article>
  )
}
