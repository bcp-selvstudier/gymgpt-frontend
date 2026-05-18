import { ChevronDownIcon } from '../../icons/Icons'
import { subjects } from '../../data/subjects'

type SubjectMenuProps = {
  mobile?: boolean
  activeSubject?: string
}

export function SubjectMenu({ mobile = false, activeSubject }: SubjectMenuProps) {
  if (mobile) {
    return (
      <nav className="mobile-subject-menu">
        <div className="gym-container mobile-subject-menu-inner">
          <div className="mobile-subject-title">
            Fag
          </div>
          <div className="mobile-subject-list">
            {subjects.map((subject) => (
              <a
                key={subject.name}
                href={subject.href}
                aria-current={subject.name === activeSubject ? 'page' : undefined}
                className={`mobile-subject-link ${subject.name === activeSubject ? 'is-active' : ''}`}
              >
                {subject.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="desktop-subject-nav">
      <ul className="main-menu">
        <li className="main-menu-item group">
          <button type="button" className={`main-menu-trigger ${activeSubject ? 'is-active' : ''}`}>
            Fag
            <ChevronDownIcon />
          </button>
          <ul className="submenu group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
            {subjects.map((subject) => (
              <li key={subject.name}>
                <a
                  href={subject.href}
                  aria-current={subject.name === activeSubject ? 'page' : undefined}
                  className={`submenu-link ${subject.name === activeSubject ? 'is-active' : ''}`}
                >
                  {subject.name}
                </a>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  )
}
