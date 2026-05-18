import { useState } from 'react'

const subjects = [
  {
    name: 'Matematik',
    href: 'https://www.gymgpt.dk/matematik/',
  },
  {
    name: 'Fysik',
    href: 'https://www.gymgpt.dk/fysik/',
  },
  {
    name: 'Kemi',
    href: 'https://www.gymgpt.dk/kemi-c/',
  },
  {
    name: 'Biologi',
    href: 'https://www.gymgpt.dk/biologi/',
  },
]

function HamburgerIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M3 5.5h14v1.6H3V5.5Zm0 3.7h14v1.6H3V9.2Zm0 3.7h14v1.6H3v-1.6Z" />
    </svg>
  )
}

function GraduationCapIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3 1.8 8.2 12 13.4 22.2 8.2 12 3Zm-6.4 8.6v4.1c0 2 2.9 4.3 6.4 4.3s6.4-2.3 6.4-4.3v-4.1L12 14.8l-6.4-3.2Zm14.3 1.2 1.8-.9v5.8h-1.8v-4.9Z" />
    </svg>
  )
}

function ArrowUpIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="m10 5.2 6.1 6.1-1.2 1.2L10 7.6l-4.9 4.9-1.2-1.2L10 5.2Z" />
    </svg>
  )
}

function SubjectMenu({ mobile = false }: { mobile?: boolean }) {
  if (mobile) {
    return (
      <nav className="border-t border-zinc-100 bg-white md:hidden">
        <div className="mx-auto max-w-[1170px] px-4 py-2">
          <a
            href="#"
            className="block border-b border-zinc-100 px-1 py-3 text-sm font-semibold text-zinc-900"
          >
            Fag
          </a>
          <div className="grid gap-1 py-2">
            {subjects.map((subject) => (
              <a
                key={subject.name}
                href={subject.href}
                className="block px-4 py-2 text-sm text-zinc-700 transition hover:text-gym-orange"
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
    <nav className="hidden md:block">
      <ul className="flex items-center">
        <li className="group relative">
          <a
            href="#"
            className="block px-4 py-8 text-sm font-semibold uppercase tracking-[0.02em] text-zinc-900 transition hover:text-gym-orange focus:text-gym-orange focus:outline-none"
          >
            Fag
          </a>
          <ul className="invisible absolute right-0 top-full z-20 min-w-48 translate-y-2 border-t-2 border-gym-orange bg-white py-2 text-left opacity-0 shadow-lg transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
            {subjects.map((subject) => (
              <li key={subject.name}>
                <a
                  href={subject.href}
                  className="block whitespace-nowrap px-5 py-2.5 text-sm text-zinc-700 transition hover:bg-zinc-50 hover:text-gym-orange focus:bg-zinc-50 focus:text-gym-orange focus:outline-none"
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

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 border-b border-zinc-100 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.05)]">
      <div className="mx-auto flex min-h-20 max-w-[1170px] items-center justify-between px-4">
        <div>
          <p className="leading-none">
            <a
              href="https://www.gymgpt.dk/"
              className="text-[26px] font-semibold text-zinc-950 no-underline transition hover:text-gym-orange"
              rel="home"
            >
              GymGPT
            </a>
          </p>
          <p className="mt-2 text-[13px] leading-none text-zinc-500">Den digitale læringsassistent</p>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-zinc-200 text-zinc-700 transition hover:bg-gym-orange hover:text-white md:hidden"
          aria-label="Åbn menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <HamburgerIcon />
        </button>

        <SubjectMenu />
      </div>

      {mobileOpen && <SubjectMenu mobile />}
    </header>
  )
}

function SectionTitle() {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-[26px] font-semibold uppercase tracking-normal text-zinc-900">
        <span>Mød AI lærerne</span>
      </h2>
      <div className="mx-auto mt-4 flex max-w-64 items-center justify-center gap-3 text-gym-orange">
        <span className="h-px flex-1 bg-gym-orange" />
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-gym-orange bg-gym-orange text-white">
          <GraduationCapIcon />
        </span>
        <span className="h-px flex-1 bg-gym-orange" />
      </div>
    </div>
  )
}

function SubjectCard({ subject }: { subject: (typeof subjects)[number] }) {
  return (
    <article className="h-full bg-white shadow-[0_0_12px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_22px_rgba(0,0,0,0.12)]">
      <div className="flex min-h-48 flex-col items-center justify-center px-6 py-8 text-center">
        <h2 className="text-[22px] font-semibold text-zinc-900">
          <a href={subject.href} rel="bookmark" className="transition hover:text-gym-orange">
            {subject.name}
          </a>
        </h2>
        <a
          className="mt-6 inline-flex items-center justify-center rounded-none bg-gym-orange px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#df4505] focus:bg-[#df4505] focus:outline-none focus:ring-2 focus:ring-gym-orange focus:ring-offset-2"
          href={subject.href}
        >
          Spørg mig :)
        </a>
      </div>
    </article>
  )
}

function TeachersSection() {
  return (
    <aside>
      <section id="aiteachers" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1170px] px-4">
          <SectionTitle />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {subjects.map((subject) => (
              <SubjectCard key={subject.name} subject={subject} />
            ))}
          </div>
        </div>
      </section>
    </aside>
  )
}

function Footer() {
  return (
    <footer className="bg-[#252525] text-zinc-300">
      <div className="mx-auto max-w-[1170px] px-4 py-10">
        <a
          href="https://www.gymgpt.dk/privatlivspolitik/"
          className="text-sm text-zinc-200 transition hover:text-gym-orange"
        >
          Privatlivspolitik
        </a>
      </div>
      <div className="border-t border-white/10 bg-[#1f1f1f] py-6">
        <div className="mx-auto grid max-w-[1170px] grid-cols-1 gap-4 px-4 text-sm md:grid-cols-3">
          <div />
          <p className="text-center text-transparent">.</p>
          <div className="hidden text-right text-transparent md:block">Education Base by Acme Themes</div>
        </div>
      </div>
      <a
        href="#page"
        className="fixed bottom-6 right-6 z-20 inline-flex h-10 w-10 items-center justify-center bg-gym-orange text-white shadow-lg transition hover:bg-[#df4505] focus:outline-none focus:ring-2 focus:ring-gym-orange focus:ring-offset-2"
        aria-label="Til toppen"
      >
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
    <div className="fixed bottom-5 right-5 z-40 max-w-sm bg-[#937afc] p-5 text-sm leading-6 text-white shadow-2xl">
      <p>
        Denne hjemmeside benytter cookies for at fungere. Ved fortsat at benytte hjemmesiden
        godkender du brugen af cookies.
      </p>
      <div className="mt-4 flex items-center justify-between gap-4">
        <a
          href="https://www.gymgpt.dk/privatlivspolitik/"
          className="font-semibold text-white underline decoration-white/70 underline-offset-2 hover:decoration-white"
        >
          Læs mere
        </a>
        <button
          type="button"
          className="bg-white px-5 py-2 font-semibold text-[#937afc] transition hover:bg-zinc-100"
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

export default function App() {
  return (
    <div id="page" className="min-h-screen bg-white font-sans text-zinc-800 antialiased">
      <a
        href="#aiteachers"
        className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:bg-white focus:px-4 focus:py-3 focus:text-zinc-900 focus:shadow"
      >
        Skip to content
      </a>
      <Header />
      <TeachersSection />
      <Footer />
      <CookieNotice />
    </div>
  )
}
