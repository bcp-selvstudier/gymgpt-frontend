import { useEffect } from 'react'
import { HomePage } from './components/home/HomePage'
import { PrivacyPage } from './components/privacy/PrivacyPage'
import { SubjectPage } from './components/subject/SubjectPage'
import { getLocalSubjectByPath } from './data/subjects'

const privacyPath = '/privatlivspolitik'

export default function App() {
  const subject = getLocalSubjectByPath(window.location.pathname)
  const isPrivacyPath = window.location.pathname.replace(/\/+$/, '') === privacyPath

  useEffect(() => {
    document.title = subject?.pageTitle ?? (isPrivacyPath ? 'Privatlivspolitik - GymGPT' : 'Home Page - GymGPT')
  }, [isPrivacyPath, subject])

  return (
    <div id="page" className="page-shell">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      {subject ? <SubjectPage subject={subject} /> : isPrivacyPath ? <PrivacyPage /> : <HomePage />}
    </div>
  )
}
