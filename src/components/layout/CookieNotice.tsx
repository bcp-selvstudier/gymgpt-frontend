import { useState } from 'react'

export function CookieNotice() {
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
