import { useTranslation } from 'react-i18next'
import { LOCALES } from '../data'

export default function LanguageSwitcher({ dark = false }) {
  const { i18n } = useTranslation()

  function switchLang(code) {
    i18n.changeLanguage(code)
    localStorage.setItem('mn-lang', code)
  }

  return (
    <div className="flex gap-[1px]">
      {LOCALES.map(({ code, label }) => {
        const active = i18n.language === code
        return (
          <button
            key={code}
            onClick={() => switchLang(code)}
            className={`px-3 py-1 text-[10px] tracking-[0.15em] uppercase transition-colors border ${
              dark
                ? active
                  ? 'bg-mn-green text-black border-mn-green'
                  : 'bg-white/10 border-white/20 text-white/60 hover:text-white'
                : active
                  ? 'bg-ink text-paper border-ink'
                  : 'bg-transparent border-border text-muted hover:text-ink'
            }`}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
