import { ArrowUpIcon } from '../../icons/Icons'

type FooterProps = {
  variant?: 'dark' | 'blue'
}

export function Footer({ variant = 'dark' }: FooterProps) {
  const isBlue = variant === 'blue'

  return (
    <footer className={isBlue ? 'site-footer site-footer-blue' : 'site-footer site-footer-dark'}>
      <div className="gym-container footer-main">
        <a href="/privatlivspolitik/">Privatlivspolitik</a>
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
