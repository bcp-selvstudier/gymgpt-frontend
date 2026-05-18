import { useState } from 'react'
import { HamburgerIcon } from '../../icons/Icons'
import { SubjectMenu } from './SubjectMenu'

type HeaderProps = {
  activeSubject?: string
}

export function Header({ activeSubject }: HeaderProps) {
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
