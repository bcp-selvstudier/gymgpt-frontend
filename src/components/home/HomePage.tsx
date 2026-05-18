import { CookieNotice } from '../layout/CookieNotice'
import { Footer } from '../layout/Footer'
import { Header } from '../layout/Header'
import { TeachersSection } from './TeachersSection'

export function HomePage() {
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
