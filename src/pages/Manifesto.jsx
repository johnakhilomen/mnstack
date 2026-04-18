import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useScrollReveal } from '../hooks/useScrollReveal'
import LanguageSwitcher from '../components/LanguageSwitcher'
import { COMMUNITY_NAME, NAME_PREFIX, NAME_SUFFIX } from '../data'

export default function Manifesto() {
  const { t } = useTranslation()
  useScrollReveal()

  const m = t('manifesto', { returnObjects: true })

  return (
    <div className="font-mono text-[13px] leading-relaxed" style={{ background: '#f7f4ee', color: '#0e0d0b' }}>

      {/* MASTHEAD */}
      <header className="fade fade-1" style={{ borderBottom: '3px solid #0e0d0b', padding: '28px 60px 20px' }}>
        <div className="flex justify-between items-center mb-4 pb-3" style={{ borderBottom: '1px solid #c8c2b4' }}>
          <span className="text-[10px] tracking-[0.15em] uppercase text-muted">{t('meta.collective')}</span>
          <span className="text-[10px] tracking-[0.15em] uppercase text-muted">{t('meta.founding')}</span>
          <span className="text-[10px] tracking-[0.15em] uppercase text-muted">{t('meta.domain')}</span>
        </div>

        <div className="text-center py-2 pb-4">
          <h1
            className="font-bebas tracking-[6px] leading-[0.9]"
            style={{ fontSize: 'clamp(72px, 14vw, 160px)', fontFamily: '"Bebas Neue", sans-serif' }}
          >
            {COMMUNITY_NAME.toUpperCase()}
          </h1>
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted mt-[6px]">{m.wordmark}</p>
        </div>

        <div className="grid items-center gap-5 mt-3 pt-3" style={{ gridTemplateColumns: '1fr auto 1fr', borderTop: '1px solid #c8c2b4' }}>
          <span className="text-[11px] text-muted italic tracking-[0.05em]">{t('meta.tagline')}</span>
          <span className="bg-ink text-paper text-[10px] tracking-[0.15em] uppercase whitespace-nowrap" style={{ padding: '5px 14px' }}>
            {t('meta.edition')}
          </span>
          <span className="text-[11px] text-muted text-right tracking-[0.05em]">{t('meta.focus')}</span>
        </div>

        <div className="mt-4 pt-3 flex justify-between items-center" style={{ borderTop: '1px solid #c8c2b4' }}>
          <Link to="/" className="text-[10px] tracking-[0.15em] uppercase text-muted hover:text-ink transition-colors">
            {t('nav.blueprint')}
          </Link>
          <LanguageSwitcher />
        </div>
      </header>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 60px 80px' }}>

        {/* OPENING */}
        <div className="fade fade-2 py-14 grid gap-[60px] items-start" style={{ borderBottom: '2px solid #0e0d0b', gridTemplateColumns: '1fr 2fr' }}>
          <div className="text-[10px] tracking-[0.2em] uppercase text-mn-red pt-2">{m.openingLabel}</div>
          <p className="font-playfair leading-[1.3] tracking-[-0.5px]" style={{ fontSize: 'clamp(22px, 3.5vw, 38px)', fontFamily: '"Playfair Display", serif' }}>
            <RichText text={t('manifesto.opening', { name: COMMUNITY_NAME })} />
          </p>
        </div>

        {/* PULL QUOTE */}
        <div className="fade fade-3 py-[52px] text-center relative" style={{ borderBottom: '2px solid #0e0d0b' }}>
          <div className="absolute top-5 left-0 font-playfair text-[200px] leading-[0.6] pointer-events-none select-none" style={{ color: '#c8c2b4', fontFamily: '"Playfair Display", serif' }}>"</div>
          <div className="font-bebas leading-[1.05] relative z-10 mx-auto max-w-[900px]" style={{ fontSize: 'clamp(36px, 7vw, 80px)', letterSpacing: '2px', fontFamily: '"Bebas Neue", sans-serif' }}>
            <PullQuote text={m.pullQuote} />
          </div>
        </div>

        {/* THREE COLUMNS */}
        <div className="reveal grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', borderBottom: '2px solid #0e0d0b' }}>
          {m.columns.map(({ n, title, body }, i) => (
            <div
              key={n}
              className="py-12"
              style={{
                paddingRight: i < 2 ? 36 : 0,
                paddingLeft: i > 0 ? 36 : 0,
                borderRight: i < 2 ? '1px solid #c8c2b4' : 'none',
              }}
            >
              <span className="font-bebas text-[64px] leading-[0.9] block mb-3" style={{ color: '#c8c2b4', fontFamily: '"Bebas Neue", sans-serif' }}>{n}</span>
              <h3 className="font-playfair font-bold text-[20px] mb-[14px] tracking-[-0.3px] leading-[1.2]" style={{ fontFamily: '"Playfair Display", serif' }}>{title}</h3>
              <p className="text-[13px] leading-[1.9]" style={{ color: '#3a3830' }}>{body}</p>
            </div>
          ))}
        </div>

        {/* TENETS */}
        <div className="reveal py-14" style={{ borderBottom: '2px solid #0e0d0b' }}>
          <div className="grid gap-10 mb-10 items-end" style={{ gridTemplateColumns: '220px 1fr' }}>
            <div className="text-[10px] tracking-[0.2em] uppercase text-mn-red">{m.tenetsLabel}</div>
            <h2 className="font-playfair font-black leading-none tracking-[-1px]" style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontFamily: '"Playfair Display", serif' }}>{m.tenetsTitle}</h2>
          </div>
          <div className="grid grid-cols-2 border-2" style={{ borderColor: '#0e0d0b' }}>
            {m.tenets.map((tenet, i) => (
              <div
                key={tenet.n}
                className="p-8 relative group transition-colors hover:bg-paper2"
                style={{
                  borderBottom: i < 4 ? '1px solid #c8c2b4' : 'none',
                  borderRight: i % 2 === 0 ? '1px solid #c8c2b4' : 'none',
                }}
              >
                <span className="font-bebas text-[48px] leading-[0.9] block mb-[10px] transition-colors group-hover:text-mn-red" style={{ color: '#c8c2b4', fontFamily: '"Bebas Neue", sans-serif' }}>{tenet.n}</span>
                <h3 className="font-playfair font-bold text-[18px] mb-[10px] tracking-[-0.3px]" style={{ fontFamily: '"Playfair Display", serif' }}>{tenet.title}</h3>
                <p className="text-[12px] leading-[1.85]" style={{ color: '#4a4740' }}>{tenet.body}</p>
                <span className="inline-block mt-[14px] text-[10px] tracking-[0.15em] uppercase text-mn-red border-b border-mn-red pb-[1px]">{tenet.verdict}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FOR / NOT FOR */}
        <div className="reveal grid" style={{ borderBottom: '2px solid #0e0d0b', gridTemplateColumns: '1fr 1fr' }}>
          <div className="py-[52px] px-12" style={{ borderRight: '2px solid #0e0d0b', background: '#0e0d0b', color: '#f7f4ee' }}>
            <div className="text-[10px] tracking-[0.2em] uppercase text-mn-red mb-5">{m.forYouLabel}</div>
            <h2 className="font-playfair font-black leading-none tracking-[-1px] mb-7 whitespace-pre-line" style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontFamily: '"Playfair Display", serif' }}>{m.forYouTitle}</h2>
            <ul className="flex flex-col">
              {m.forYou.map(item => (
                <li key={item} className="flex gap-[14px] py-[13px] text-[13px] leading-[1.6]" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <span className="font-playfair font-black text-[16px] shrink-0 pt-[1px] text-mn-green" style={{ fontFamily: '"Playfair Display", serif' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <span className="inline-block mt-6 border-[3px] border-mn-red text-mn-red font-bebas text-[22px] tracking-[4px] px-4 py-[6px]" style={{ transform: 'rotate(-2deg)', fontFamily: '"Bebas Neue", sans-serif' }}>
              {m.applyStamp}
            </span>
          </div>
          <div className="py-[52px] px-12" style={{ background: '#f7f4ee' }}>
            <div className="text-[10px] tracking-[0.2em] uppercase text-muted mb-5">{m.notForYouLabel}</div>
            <h2 className="font-playfair font-black leading-none tracking-[-1px] mb-7 whitespace-pre-line" style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontFamily: '"Playfair Display", serif' }}>{m.notForYouTitle}</h2>
            <ul className="flex flex-col">
              {m.notForYou.map(item => (
                <li key={item} className="flex gap-[14px] py-[13px] text-[13px] leading-[1.6]" style={{ borderBottom: '1px solid #c8c2b4', color: '#3a3830' }}>
                  <span className="font-playfair font-black text-[16px] shrink-0 pt-[1px] text-mn-red" style={{ fontFamily: '"Playfair Display", serif' }}>✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CLOSING */}
        <div className="reveal py-16 grid gap-20 items-center" style={{ borderBottom: '2px solid #0e0d0b', gridTemplateColumns: '1fr 1fr' }}>
          <div>
            <div className="text-[10px] tracking-[0.2em] uppercase text-mn-red mb-4">{m.closingLabel}</div>
            <p className="font-playfair font-normal leading-[1.45] tracking-[-0.3px]" style={{ fontSize: 'clamp(20px, 3vw, 32px)', fontFamily: '"Playfair Display", serif' }}>
              <RichText text={t('manifesto.closing', { name: COMMUNITY_NAME })} />
            </p>
          </div>
          <div className="flex flex-col border-2" style={{ borderColor: '#0e0d0b' }}>
            {m.closingStats.map(({ label, value }) => (
              <div key={label} className="flex justify-between items-center px-6 py-[18px] text-[12px] transition-colors hover:bg-paper2" style={{ borderBottom: '1px solid #c8c2b4' }}>
                <span className="text-muted">{label}</span>
                <span className="font-playfair font-bold text-[14px]" style={{ fontFamily: '"Playfair Display", serif' }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 60px' }}>
        <hr style={{ border: 'none', borderTop: '2px solid #0e0d0b' }} />
        <div className="flex justify-between items-center py-7">
          <span className="font-bebas text-[28px] tracking-[4px]" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>{COMMUNITY_NAME.toUpperCase()}</span>
          <span className="text-[10px] text-muted tracking-[0.1em] uppercase">{m.footerTagline}</span>
          <span className="text-[10px] text-muted tracking-[0.1em] uppercase">{m.footerSub}</span>
        </div>
      </div>
    </div>
  )
}

// Renders <bold>, <italic>, <red>, <muted> inline tags from translation strings
function RichText({ text }) {
  const parts = text.split(/(<bold>.*?<\/bold>|<italic>.*?<\/italic>|<red>.*?<\/red>|<muted>.*?<\/muted>|\n)/gs)
  return (
    <>
      {parts.map((part, i) => {
        if (part === '\n') return <br key={i} />
        if (part.startsWith('<bold>'))   return <strong key={i} className="font-black">{part.slice(6, -7)}</strong>
        if (part.startsWith('<italic>')) return <em key={i} className="italic text-mn-red">{part.slice(8, -9)}</em>
        if (part.startsWith('<red>'))    return <span key={i} className="text-mn-red">{part.slice(5, -6)}</span>
        if (part.startsWith('<muted>'))  return <em key={i} className="italic" style={{ color: '#8a8478' }}>{part.slice(7, -8)}</em>
        return part
      })}
    </>
  )
}

// Renders pull quote with <red> accent
function PullQuote({ text }) {
  const lines = text.split('\n')
  return (
    <>
      {lines.map((line, i) => {
        const redMatch = line.match(/^<red>(.*)<\/red>$/)
        return (
          <span key={i}>
            {redMatch ? <span className="text-mn-red">{redMatch[1]}</span> : line}
            {i < lines.length - 1 && <br />}
          </span>
        )
      })}
    </>
  )
}
