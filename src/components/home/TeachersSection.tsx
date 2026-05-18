import { subjects } from '../../data/subjects'
import { GraduationCapIcon } from '../../icons/Icons'
import { SubjectCard } from './SubjectCard'

function SectionTitle() {
  return (
    <div className="home-section-title">
      <h2>
        <span>Mød AI lærerne</span>
      </h2>
      <div className="home-title-line">
        <span />
        <span className="home-title-icon">
          <GraduationCapIcon />
        </span>
        <span />
      </div>
    </div>
  )
}

export function TeachersSection() {
  return (
    <aside>
      <section id="aiteachers" className="teachers-section">
        <div className="gym-container">
          <SectionTitle />
          <div className="subject-grid">
            {subjects.map((subject) => (
              <SubjectCard key={subject.name} subject={subject} />
            ))}
          </div>
        </div>
      </section>
    </aside>
  )
}
