type InnerPageHeroProps = {
  title: string
  heroImage: string
}

export function InnerPageHero({ title, heroImage }: InnerPageHeroProps) {
  return (
    <section className="subject-hero">
      <img src={heroImage} alt="" className="subject-hero-image" />
      <div className="subject-hero-overlay" />
      <div className="gym-container subject-hero-content">
        <header>
          <h1 className="subject-title">{title}</h1>
          <nav className="subject-breadcrumbs" aria-label="Breadcrumbs">
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li>»</li>
              <li aria-current="page">{title}</li>
            </ol>
          </nav>
        </header>
      </div>
    </section>
  )
}
