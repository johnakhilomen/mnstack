import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useScrollReveal } from '../hooks/useScrollReveal'
import LanguageSwitcher from '../components/LanguageSwitcher'
import {
  COMMUNITY_NAME,
  NAME_PREFIX,
  NAME_SUFFIX,
  NAV_ANCHORS,
  PHASE_BADGE,
  LAYER_PHASES,
  ROADMAP_STYLES,
  FEATURED_TIER_INDEX,
} from '../data'

export default function Landing() {
  const { t } = useTranslation()
  useScrollReveal()

  const header       = t('landing.header',      { returnObjects: true })
  const overview     = t('landing.overview',    { returnObjects: true })
  const layers       = t('landing.layers',      { returnObjects: true })
  const membership   = t('landing.membership',  { returnObjects: true })
  const events       = t('landing.events',      { returnObjects: true })
  const zoom         = t('landing.zoom',        { returnObjects: true })
  const tech         = t('landing.tech',        { returnObjects: true })
  const roadmap      = t('landing.roadmap',     { returnObjects: true })
  const footer       = t('landing.footer',      { returnObjects: true })

  return (
    <div className="bg-[#f5f3ee] text-ink font-mono text-[13px] leading-relaxed">

      {/* HEADER */}
      <header className="bg-ink text-paper relative overflow-hidden" style={{ padding: '48px 60px 40px' }}>
        <div
          className="absolute right-[-20px] top-1/2 -translate-y-1/2 rotate-90 font-syne font-black text-[80px] opacity-[0.04] tracking-[-4px] whitespace-nowrap pointer-events-none select-none"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          BLUEPRINT
        </div>

        <div className="flex justify-between items-start mb-9">
          <div className="font-syne font-black text-[22px] tracking-[-1px]" style={{ fontFamily: 'Syne, sans-serif' }}>
            {NAME_PREFIX}<span className="text-mn-green">{NAME_SUFFIX ? ` ${NAME_SUFFIX}` : ''}</span>
          </div>
          <div className="flex items-start gap-4">
            <LanguageSwitcher dark />
            <div className="text-right text-[11px] opacity-50 leading-loose">
              {header.subtitle}<br />{header.date}<br />{header.copy}
            </div>
          </div>
        </div>

        <h1
          className="font-syne font-black leading-[0.95] tracking-[-3px] mb-5"
          style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(36px,6vw,72px)' }}
        >
          {header.title.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}
        </h1>
        <p className="text-[13px] opacity-55 max-w-[500px] leading-[1.8]">
          {t('landing.header.description', { name: COMMUNITY_NAME })}
        </p>

        <div className="flex gap-[10px] mt-6 flex-wrap">
          {header.pills.map((p, i) => (
            <span
              key={p}
              className={`px-3 py-[5px] text-[10px] tracking-[0.12em] uppercase border ${
                i === 0 ? 'bg-mn-green text-black border-mn-green' : 'bg-white/10 border-white/15 text-white/70'
              }`}
            >
              {p}
            </span>
          ))}
        </div>
      </header>

      {/* NAV */}
      <nav className="bg-surface border-b border-border flex overflow-x-auto" style={{ padding: '20px 60px' }}>
        {NAV_ANCHORS.map(({ href, key }) => (
          <a
            key={href}
            href={href}
            className="flex items-center gap-2 px-5 py-2 text-[11px] tracking-[0.1em] uppercase text-muted border-r border-border whitespace-nowrap hover:text-ink transition-colors first:pl-0"
          >
            <span className="text-[9px] opacity-50">{String(NAV_ANCHORS.findIndex(a => a.key === key) + 1).padStart(2, '0')}</span>
            {t(key)}
          </a>
        ))}
        <Link
          to="/manifesto"
          className="flex items-center gap-2 px-5 py-2 text-[11px] tracking-[0.1em] uppercase text-mn-red border-r border-border whitespace-nowrap hover:text-ink transition-colors"
        >
          {t('nav.manifesto')}
        </Link>
      </nav>

      <main style={{ maxWidth: 1100, margin: '0 auto', padding: '60px' }}>

        {/* 01 OVERVIEW */}
        <section id="overview" className="mb-20">
          <SectionHeader num="01" title={overview.sectionTitle} />

          <div className="grid grid-cols-4 gap-[1px] bg-border border border-border mb-10">
            {overview.cards.map(({ label, value, desc }) => (
              <div key={label} className="bg-[#f5f3ee] p-7">
                <div className="text-[10px] tracking-[0.15em] uppercase text-muted mb-[10px]">{label}</div>
                <div className="font-syne font-black text-[20px] tracking-[-0.5px] mb-[6px]" style={{ fontFamily: 'Syne, sans-serif' }}>{value}</div>
                <div className="text-[11px] text-muted leading-[1.6]">{desc}</div>
              </div>
            ))}
          </div>

          <div className="bg-ink text-paper flex justify-between items-center gap-10 mb-10" style={{ padding: '40px 48px' }}>
            <div>
              <h3 className="font-syne font-black text-[22px] tracking-[-0.8px] mb-[6px]" style={{ fontFamily: 'Syne, sans-serif' }}>
                {overview.callout.title}
              </h3>
              <p className="text-[12px] opacity-55 leading-[1.7] max-w-lg">{overview.callout.body}</p>
            </div>
            <div className="text-right shrink-0">
              <div className="font-syne font-black text-[48px] leading-none text-mn-green tracking-[-2px]" style={{ fontFamily: 'Syne, sans-serif' }}>
                {overview.callout.statValue}
              </div>
              <div className="text-[10px] opacity-40 uppercase tracking-[0.12em]">
                {overview.callout.statLabel.split('\n').map((l, i) => <span key={i}>{l}<br /></span>)}
              </div>
            </div>
          </div>
        </section>

        {/* 02 LAYERS */}
        <section id="layers" className="mb-20 reveal">
          <SectionHeader num="02" title={layers.sectionTitle} />
          <div className="flex flex-col gap-[1px] bg-border border border-border">
            {layers.items.map((layer, i) => (
              <div key={layer.num} className="bg-[#f5f3ee] grid hover:bg-surface transition-colors" style={{ gridTemplateColumns: '160px 1fr auto' }}>
                <div className="p-6 border-r border-border flex flex-col justify-center gap-1">
                  <span className="text-[9px] tracking-[0.2em] uppercase text-muted">{layer.num}</span>
                  <span className="font-syne font-bold text-[15px] tracking-[-0.3px]" style={{ fontFamily: 'Syne, sans-serif' }}>{layer.title}</span>
                </div>
                <div className="p-6">
                  <p className="text-muted text-[12px] leading-[1.8] mb-3">{layer.desc}</p>
                  <div className="flex flex-wrap gap-[6px] mt-2">
                    {layer.tools.map(t => (
                      <span key={t} className="bg-surface2 border border-border px-[10px] py-[3px] text-[10px] tracking-[0.05em]">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="p-6 flex items-center border-l border-border min-w-[100px] justify-center">
                  <span className={`text-[9px] tracking-[0.12em] uppercase py-1 px-[10px] border ${PHASE_BADGE[LAYER_PHASES[i]] || PHASE_BADGE[layer.phaseLabel] || ''}`}>
                    {layer.phaseLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 03 MEMBERSHIP */}
        <section id="membership" className="mb-20 reveal">
          <SectionHeader num="03" title={membership.sectionTitle} />

          <div className="grid grid-cols-2 gap-[1px] bg-border border border-border mb-8">
            <MembershipPath path={membership.pathA} />
            <MembershipPath path={membership.pathB} />
          </div>

          <div className="grid grid-cols-3 gap-[1px] bg-border border border-border">
            {membership.tiers.map((tier, i) => {
              const featured = i === FEATURED_TIER_INDEX
              return (
                <div key={tier.name} className={`p-8 relative ${featured ? 'bg-ink text-paper' : 'bg-[#f5f3ee]'}`}>
                  <span className={`text-[9px] tracking-[0.2em] uppercase mb-[10px] block ${featured ? 'text-white/40' : 'text-muted'}`}>{tier.tag}</span>
                  <div className="font-syne font-black text-[22px] tracking-[-1px]" style={{ fontFamily: 'Syne, sans-serif' }}>{tier.name}</div>
                  <p className={`text-[11px] leading-[1.7] my-5 pb-5 border-b ${featured ? 'text-white/50 border-white/10' : 'text-muted border-border'}`}>{tier.desc}</p>
                  <div className="flex flex-col">
                    {tier.features.map(({ label, check }) => (
                      <div key={label} className={`flex justify-between items-center py-[10px] border-b text-[11px] last:border-0 ${featured ? 'border-white/10' : 'border-border'}`}>
                        <span className={featured ? 'text-white/70' : 'text-muted'}>{label}</span>
                        {check
                          ? <span className={featured ? 'text-mn-green font-bold' : 'text-mn-green-text font-bold'}>✓</span>
                          : <span className="text-[16px] text-border">–</span>
                        }
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* 04 EVENTS */}
        <section id="events" className="mb-20 reveal">
          <SectionHeader num="04" title={events.sectionTitle} />
          <div className="grid grid-cols-2 gap-[1px] bg-border border border-border mb-8">
            {events.cards.map(card => <EventCard key={card.title} {...card} />)}
          </div>
        </section>

        {/* 05 ZOOM */}
        <section id="zoom" className="mb-20 reveal">
          <SectionHeader num="05" title={zoom.sectionTitle} />
          <div className="grid gap-[1px] bg-border border border-border" style={{ gridTemplateColumns: '1fr 280px' }}>
            <div className="bg-[#f5f3ee] p-8">
              <h3 className="font-syne font-bold text-[16px] tracking-[-0.3px] mb-5" style={{ fontFamily: 'Syne, sans-serif' }}>{zoom.runOfShow.title}</h3>
              <div className="flex flex-col border border-border">
                {zoom.runOfShow.schedule.map(({ time, title, desc }) => (
                  <div key={time} className="grid border-b border-border last:border-0" style={{ gridTemplateColumns: '80px 1fr' }}>
                    <div className="py-[14px] px-4 border-r border-border text-[11px] text-muted bg-surface flex items-center">{time}</div>
                    <div className="py-[14px] px-4 text-[12px]">
                      <strong className="block font-syne font-semibold text-[13px] mb-[2px]" style={{ fontFamily: 'Syne, sans-serif' }}>{title}</strong>
                      <span className="text-muted text-[11px]">{desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-surface p-6 border-l border-border">
              <h4 className="font-syne font-bold text-[13px] mb-4 tracking-[-0.3px]" style={{ fontFamily: 'Syne, sans-serif' }}>{zoom.rules.title}</h4>
              {zoom.rules.items.map(({ title, desc }) => (
                <div key={title} className="py-[10px] border-b border-border last:border-0 text-[11px] text-muted leading-[1.6]">
                  <strong className="text-ink block mb-[2px]">{title}</strong>
                  {desc}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 06 TECH STACK */}
        <section id="tech" className="mb-20 reveal">
          <SectionHeader num="06" title={tech.sectionTitle} />
          <div className="grid grid-cols-3 gap-[1px] bg-border border border-border">
            {tech.cards.map(({ category, title, items }) => (
              <div key={title} className="bg-[#f5f3ee] p-7">
                <div className="text-[9px] tracking-[0.2em] uppercase text-muted mb-[10px]">{category}</div>
                <div className="font-syne font-bold text-[15px] mb-4 tracking-[-0.3px]" style={{ fontFamily: 'Syne, sans-serif' }}>{title}</div>
                <div className="flex flex-col">
                  {items.map(({ name, note }) => (
                    <div key={name} className="flex justify-between items-center py-[9px] border-b border-border text-[11px] last:border-0">
                      <span className="font-medium">{name}</span>
                      <span className="text-muted text-[10px]">{note}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 07 ROADMAP */}
        <section id="roadmap" className="mb-20 reveal">
          <SectionHeader num="07" title={roadmap.sectionTitle} />
          <div className="grid grid-cols-3 gap-[1px] bg-border border border-border">
            {roadmap.phases.map((phase, i) => {
              const { colorClass, dotClass } = ROADMAP_STYLES[i]
              return (
                <div key={phase.name} className="bg-[#f5f3ee] p-8">
                  <div className={`text-[9px] tracking-[0.2em] uppercase mb-2 ${colorClass}`}>{phase.label}</div>
                  <div className="font-syne font-black text-[20px] tracking-[-0.8px] mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>{phase.name}</div>
                  <div className="text-[11px] text-muted mb-5 pb-4 border-b border-border">{phase.timeline}</div>
                  <div className="flex flex-col gap-[10px]">
                    {phase.items.map(item => (
                      <div key={item} className="flex gap-[10px] text-[12px] leading-[1.5]">
                        <div className={`w-[6px] h-[6px] rounded-full mt-[5px] shrink-0 ${dotClass}`} />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

      </main>

      <footer className="bg-surface border-t border-border flex justify-between items-center text-[11px] text-muted" style={{ padding: '28px 60px' }}>
        <div className="font-syne font-black text-[15px] text-ink" style={{ fontFamily: 'Syne, sans-serif' }}>
          {NAME_PREFIX}<span className="text-mn-green">{NAME_SUFFIX ? ` ${NAME_SUFFIX}` : ''}</span>
          <span className="font-mono font-normal text-muted text-[11px]"> — {footer.blueprintLabel}</span>
        </div>
        <div>{footer.internal}</div>
        <div>{footer.date}</div>
      </footer>
    </div>
  )
}

function SectionHeader({ num, title }) {
  return (
    <div className="flex items-baseline gap-4 mb-8 pb-4 border-b-2 border-ink">
      <span className="font-syne text-[11px] font-bold tracking-[0.2em] uppercase opacity-30" style={{ fontFamily: 'Syne, sans-serif' }}>{num}</span>
      <h2 className="font-syne font-black text-[28px] tracking-[-1px]" style={{ fontFamily: 'Syne, sans-serif' }}>{title}</h2>
    </div>
  )
}

function MembershipPath({ path }) {
  return (
    <div className="bg-[#f5f3ee] p-8">
      <h3 className="font-syne font-bold text-[18px] tracking-[-0.5px] mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>{path.title}</h3>
      <p className="text-[11px] text-muted mb-5 pb-4 border-b border-border">{path.sub}</p>
      <div className="flex flex-col">
        {path.steps.map(({ title, desc }, i) => (
          <div key={title} className="flex gap-4 py-[14px] border-b border-border last:border-0">
            <span className="font-syne font-bold text-[11px] text-muted min-w-[20px] pt-[1px]" style={{ fontFamily: 'Syne, sans-serif' }}>{i + 1}</span>
            <div>
              <strong className="block text-[13px] mb-[3px] font-syne font-semibold" style={{ fontFamily: 'Syne, sans-serif' }}>{title}</strong>
              <span className="text-[11px] text-muted leading-[1.6]">{desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function EventCard({ title, meta, items }) {
  return (
    <div className="bg-[#f5f3ee] p-8">
      <h3 className="font-syne font-bold text-[16px] tracking-[-0.3px] mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>{title}</h3>
      <p className="text-[10px] tracking-[0.1em] uppercase text-muted mb-5 pb-4 border-b border-border">{meta}</p>
      <div className="flex flex-col gap-2">
        {items.map(item => (
          <div key={item} className="flex gap-[10px] text-[12px] leading-[1.6] text-muted">
            <span className="text-ink shrink-0 text-[11px] pt-[2px]">→</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
