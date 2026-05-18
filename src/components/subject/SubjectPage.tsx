import type { Subject } from '../../data/subjects'
import { CookieNotice } from '../layout/CookieNotice'
import { Footer } from '../layout/Footer'
import { Header } from '../layout/Header'
import { SubjectChatCard } from './SubjectChatCard'
import { SubjectHero } from './SubjectHero'

type SubjectPageProps = {
  subject: Subject
}

export function SubjectPage({ subject }: SubjectPageProps) {
  return (
    <>
      <Header activeSubject={subject.name} />
      <main id="main-content">
        <SubjectHero subject={subject} />
        <section className="subject-content">
          <div className="gym-container">
            <SubjectChatCard subject={subject} />
          </div>
        </section>
      </main>
      <Footer variant="blue" />
      <CookieNotice />
    </>
  )
}
