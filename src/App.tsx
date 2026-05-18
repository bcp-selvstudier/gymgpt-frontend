import { useEffect } from 'react'
import { HomePage } from './components/home/HomePage'
import { SubjectPage } from './components/subject/SubjectPage'
import { getLocalSubjectByPath } from './data/subjects'

export default function App() {
  const subject = getLocalSubjectByPath(window.location.pathname)

  useEffect(() => {
    document.title = subject?.pageTitle ?? 'Home Page - GymGPT'
  }, [subject])

  return (
    <div id="page" className="page-shell">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      {subject ? <SubjectPage subject={subject} /> : <HomePage />}
    </div>
  )
}
