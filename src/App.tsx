import { useEffect, useState } from 'react'

const subjects = [
  { name: 'Matematik', href: '/matematik/' },
  { name: 'Fysik', href: 'https://www.gymgpt.dk/fysik/' },
  { name: 'Kemi', href: 'https://www.gymgpt.dk/kemi-c/' },
  { name: 'Biologi', href: 'https://www.gymgpt.dk/biologi/' },
]

const isMatematikPath = (pathname: string) => pathname.replace(/\/+$/, '') === '/matematik'

function HamburgerIcon() {
  return (
    <svg aria-hidden="true" className="icon-sm" viewBox="0 0 20 20" fill="currentColor">
      <path d="M3 5.5h14v1.6H3V5.5Zm0 3.7h14v1.6H3V9.2Zm0 3.7h14v1.6H3v-1.6Z" />
    </svg>
  )
}

function GraduationCapIcon() {
  return (
    <svg aria-hidden="true" className="icon-xs" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3 1.8 8.2 12 13.4 22.2 8.2 12 3Zm-6.4 8.6v4.1c0 2 2.9 4.3 6.4 4.3s6.4-2.3 6.4-4.3v-4.1L12 14.8l-6.4-3.2Zm14.3 1.2 1.8-.9v5.8h-1.8v-4.9Z" />
    </svg>
  )
}

function ArrowUpIcon() {
  return (
    <svg aria-hidden="true" className="icon-sm" viewBox="0 0 20 20" fill="currentColor">
      <path d="m10 5.2 6.1 6.1-1.2 1.2L10 7.6l-4.9 4.9-1.2-1.2L10 5.2Z" />
    </svg>
  )
}

function ChevronDownIcon() {
  return (
    <svg aria-hidden="true" className="chevron-icon" viewBox="0 0 20 20" fill="currentColor">
      <path d="M5.2 7.4 10 12.2l4.8-4.8 1.1 1.1L10 14.4 4.1 8.5l1.1-1.1Z" />
    </svg>
  )
}

function SendArrowIcon() {
  return (
    <svg aria-hidden="true" className="icon-sm" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10 15V5" strokeLinecap="round" />
      <path d="m5.8 9.2 4.2-4.2 4.2 4.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function AvatarIcon() {
  return (
    <svg aria-hidden="true" className="avatar-icon" viewBox="0 0 56 56">
      <circle cx="28" cy="15" r="10.5" fill="#ffb06a" />
      <path d="M10 39.5C10 29.8 17.6 24 28 24s18 5.8 18 15.5V45c0 3.5-2.8 6-6.3 6H16.3C12.8 51 10 48.5 10 45v-5.5Z" fill="#2f80ed" />
      <path d="M28 24v27H16.3C12.8 51 10 48.5 10 45v-5.5C10 29.8 17.6 24 28 24Z" fill="#5ba4ff" />
    </svg>
  )
}

function SubjectMenu({ mobile = false, activeSubject }: { mobile?: boolean; activeSubject?: string }) {
  if (mobile) {
    return (
      <nav className="mobile-subject-menu">
        <div className="gym-container mobile-subject-menu-inner">
          <a className="mobile-subject-title" href="#">
            Fag
          </a>
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
          <a href="#" className={`main-menu-trigger ${activeSubject ? 'is-active' : ''}`}>
            Fag
            <ChevronDownIcon />
          </a>
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

function Header({ activeSubject }: { activeSubject?: string }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="gym-header">
      <div className="gym-container gym-header-inner">
        <div>
          <p className="site-title">
            <a href="/" className="site-title-link" rel="home">
              GymGPT
            </a>
          </p>
          <p className="site-description">Den digitale læringsassistent</p>
        </div>

        <button
          type="button"
          className="mobile-menu-button"
          aria-label="Åbn menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <HamburgerIcon />
        </button>

        <SubjectMenu activeSubject={activeSubject} />
      </div>

      {mobileOpen && <SubjectMenu activeSubject={activeSubject} mobile />}
    </header>
  )
}

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

function SubjectCard({ subject }: { subject: (typeof subjects)[number] }) {
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

function TeachersSection() {
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

function Footer({ variant = 'dark' }: { variant?: 'dark' | 'blue' }) {
  const isBlue = variant === 'blue'

  return (
    <footer className={isBlue ? 'site-footer site-footer-blue' : 'site-footer site-footer-dark'}>
      <div className="gym-container footer-main">
        <a href="https://www.gymgpt.dk/privatlivspolitik/">Privatlivspolitik</a>
      </div>
      {!isBlue && (
        <div className="footer-copy">
          <div className="gym-container footer-copy-inner">
            <div />
            <p>.</p>
            <div>Education Base by Acme Themes</div>
          </div>
        </div>
      )}
      <a href="#page" className="back-to-top" aria-label="Til toppen">
        <ArrowUpIcon />
      </a>
    </footer>
  )
}

function CookieNotice() {
  const [visible, setVisible] = useState(() => localStorage.getItem('gymgpt-cookie-ok') !== 'true')

  if (!visible) {
    return null
  }

  return (
    <div className="cookie-notice">
      <p>
        Denne hjemmeside benytter cookies for at fungere. Ved fortsat at benytte hjemmesiden
        godkender du brugen af cookies.
      </p>
      <div>
        <a href="https://www.gymgpt.dk/privatlivspolitik/">Læs mere</a>
        <button
          type="button"
          onClick={() => {
            localStorage.setItem('gymgpt-cookie-ok', 'true')
            setVisible(false)
          }}
        >
          OK
        </button>
      </div>
    </div>
  )
}

function MatematikHero() {
  return (
    <section className="math-hero">
      <img src="/images/university-student-1872810_1280.jpg" alt="" className="math-hero-image" />
      <div className="math-hero-overlay" />
      <div className="gym-container math-hero-content">
        <header>
          <h1 className="math-title">Matematik</h1>
          <nav className="math-breadcrumbs" aria-label="Breadcrumbs">
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li>»</li>
              <li aria-current="page">Matematik</li>
            </ol>
          </nav>
        </header>
      </div>
    </section>
  )
}

function StaticMathChat() {
  return (
    <div className="math-chat-frame">
      <div className="math-chat-panel">
        <div className="math-chat-message">
          <div className="math-avatar">
            <AvatarIcon />
          </div>
          <p>Jeg er din personlige matematiklærer. Hvad kan jeg hjælpe dig med?</p>
        </div>
        <div className="math-chat-input">
          <span>Skriv dit spørgsmål ...</span>
          <button type="button" aria-label="Spørg" disabled className="math-send-button">
            <SendArrowIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <TeachersSection />
      </main>
      <Footer />
      <CookieNotice />
    </>
  )
}

function MatematikPage() {
  return (
    <>
      <Header activeSubject="Matematik" />
      <main id="main-content">
        <MatematikHero />
        <section className="math-content">
          <div className="gym-container">
            <StaticMathChat />
          </div>
        </section>
      </main>
      <Footer variant="blue" />
      <CookieNotice />
    </>
  )
}

export default function App() {
  const route = isMatematikPath(window.location.pathname) ? 'matematik' : 'home'

  useEffect(() => {
    document.title = route === 'matematik' ? 'Matematik - GymGPT' : 'Home Page - GymGPT'
  }, [route])

  return (
    <div id="page" className="page-shell">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      {route === 'matematik' ? <MatematikPage /> : <HomePage />}
    </div>
  )
}
