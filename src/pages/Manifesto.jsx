import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

const name = import.meta.env.VITE_COMMUNITY_NAME || 'MN Stack'

const TENETS = [
  {
    n: '01', title: 'Technology is the only agenda.',
    body: 'AI, blockchain, distributed systems, developer tooling, applied cryptography, systems programming, hardware. If you build it with code, it belongs here. Conversations start and end with the work itself — not who funded it, not where it\'s going, not what it\'s worth.',
    verdict: 'Non-negotiable',
  },
  {
    n: '02', title: 'No pitching. Not even once.',
    body: 'You will not pitch your startup here. You will not mention your round. You will not hand out business cards to someone you just met and call it "connecting." If you demo something, you demo it because it\'s technically interesting — full stop.',
    verdict: 'Enforced',
  },
  {
    n: '03', title: 'Demos over decks. Always.',
    body: 'A running piece of software is worth a thousand slide transitions. If you want to share something, share something that works — or something that almost works and you\'re trying to figure out why. The half-finished thing shown honestly is more valuable than the polished thing shown strategically.',
    verdict: 'Preferred',
  },
  {
    n: '04', title: 'Minnesota, always.',
    body: 'This community is rooted here. Not because the coasts are bad, but because local density creates real relationships. We want the engineer in Duluth and the researcher in Rochester to know each other exists. Geography is a feature, not a limitation.',
    verdict: 'By Design',
  },
  {
    n: '05', title: 'Quality is the gating mechanism.',
    body: 'Membership is not automatic. You apply, or someone who knows you personally vouches for you. Not because we\'re elitist — because the quality of a community is determined by who\'s in the room. A smaller room with the right people is worth more than a large room with everyone.',
    verdict: 'Intentional',
  },
  {
    n: '06', title: 'Curiosity outranks credentials.',
    body: 'Your title means nothing here. Your GitHub matters more than your résumé. The question you ask matters more than the company you work for. A self-taught developer with genuine curiosity belongs in this room more than a senior engineer who stopped learning three years ago.',
    verdict: 'Always',
  },
]

const FOR_YOU = [
  'You\'ve shipped something technical and want to talk about how it works',
  'You\'re deep in a rabbit hole and want to find someone else who\'s been there',
  'You think about AI, blockchain, or systems problems in the shower',
  'You learn best by watching someone else\'s live demo fall apart',
  'You\'re in Minnesota and tired of going to startup events',
  'You care more about the craft than the outcome',
]

const NOT_FOR_YOU = [
  'You\'re looking for co-founders, investors, or early customers',
  'Your goal is to "build your personal brand" in Minnesota tech',
  'You want to add 50 LinkedIn connections from one event',
  'You haven\'t written code, configured infrastructure, or shipped anything technical recently',
  'You think of community as a distribution channel',
  'You plan to recruit members for your team or company',
]

export default function Manifesto() {
  useScrollReveal()

  return (
    <div
      className="font-mono text-[13px] leading-relaxed"
      style={{ background: '#f7f4ee', color: '#0e0d0b' }}
    >
      {/* MASTHEAD */}
      <header className="fade fade-1" style={{ borderBottom: '3px solid #0e0d0b', padding: '28px 60px 20px' }}>
        <div className="flex justify-between items-center mb-4 pb-3" style={{ borderBottom: '1px solid #c8c2b4' }}>
          <span className="text-[10px] tracking-[0.15em] uppercase text-muted">Minnesota · Technology Collective</span>
          <span className="text-[10px] tracking-[0.15em] uppercase text-muted">Est. 2025 · Founding Edition</span>
          <span className="text-[10px] tracking-[0.15em] uppercase text-muted">mnstack.dev</span>
        </div>

        <div className="text-center py-2 pb-4">
          <h1 className="font-bebas tracking-[6px] leading-[0.9]" style={{ fontSize: 'clamp(72px, 14vw, 160px)', fontFamily: '"Bebas Neue", sans-serif' }}>
            {name.toUpperCase()}
          </h1>
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted mt-[6px]">The Minnesota Technology Manifesto</p>
        </div>

        <div className="grid items-center gap-5 mt-3 pt-3" style={{ gridTemplateColumns: '1fr auto 1fr', borderTop: '1px solid #c8c2b4' }}>
          <span className="text-[11px] text-muted italic tracking-[0.05em]">For builders. By builders. Nowhere else.</span>
          <span className="bg-ink text-paper text-[10px] tracking-[0.15em] uppercase whitespace-nowrap" style={{ padding: '5px 14px' }}>Manifesto — Volume I</span>
          <span className="text-[11px] text-muted text-right tracking-[0.05em]">AI · Blockchain · Systems · Dev Tools</span>
        </div>

        <div className="mt-4 pt-3 flex justify-end" style={{ borderTop: '1px solid #c8c2b4' }}>
          <Link to="/" className="text-[10px] tracking-[0.15em] uppercase text-muted hover:text-ink transition-colors">
            ← Platform Blueprint
          </Link>
        </div>
      </header>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 60px 80px' }}>

        {/* OPENING */}
        <div className="fade fade-2 py-14 grid gap-[60px] items-start" style={{ borderBottom: '2px solid #0e0d0b', gridTemplateColumns: '1fr 2fr' }}>
          <div className="text-[10px] tracking-[0.2em] uppercase text-mn-red pt-2">Opening Statement</div>
          <p className="font-playfair leading-[1.3] tracking-[-0.5px]" style={{ fontSize: 'clamp(22px, 3.5vw, 38px)', fontFamily: '"Playfair Display", serif' }}>
            Minnesota has a tech scene. It's just been{' '}
            <em className="italic text-mn-red">invisible</em>{' '}
            — scattered across corporations, buried in startups, hidden behind NDAs and LinkedIn titles.{' '}
            <strong className="font-black">{name} exists to make it visible.</strong>{' '}
            Not for business. Not for capital. For the craft of building things that didn't exist before.
          </p>
        </div>

        {/* PULL QUOTE */}
        <div className="fade fade-3 py-[52px] text-center relative" style={{ borderBottom: '2px solid #0e0d0b' }}>
          <div className="absolute top-5 left-0 font-playfair text-[200px] leading-[0.6] pointer-events-none select-none" style={{ color: '#c8c2b4', fontFamily: '"Playfair Display", serif' }}>"</div>
          <div className="font-bebas leading-[1.05] relative z-10 mx-auto max-w-[900px]" style={{ fontSize: 'clamp(36px, 7vw, 80px)', letterSpacing: '2px', fontFamily: '"Bebas Neue", sans-serif' }}>
            We believe the best tech<br />
            conversations happen when<br />
            <span className="text-mn-red">nobody is selling anything.</span>
          </div>
        </div>

        {/* THREE COLUMNS */}
        <div className="reveal grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', borderBottom: '2px solid #0e0d0b' }}>
          {[
            { n: 'I', title: 'Minnesota is underestimated.', body: 'The coasts get the headlines. Minnesota gets the work done. Engineers here are building machine learning systems, distributed protocols, and production infrastructure that rivals anything coming out of San Francisco or New York. The difference is nobody\'s talking about it. We intend to change that.' },
            { n: 'II', title: 'The existing venues aren\'t for us.', body: 'Every other tech gathering in this state is a networking event in disguise. Startup mixers. Pitch nights. Employer brand showcases. They serve a purpose — just not ours. MN Stack is the room that didn\'t exist: pure technical conversation, no agenda attached. If you want to talk about a ZK proof you\'ve been working through, this is where you do it.' },
            { n: 'III', title: 'Community is built by showing up.', body: 'There are no speakers. No sponsors. No panels. Every member is a peer. The person who\'s been writing Rust for fifteen years sits next to the person who shipped their first smart contract last month, and both of them leave knowing something they didn\'t before. That\'s the only metric that matters.' },
          ].map(({ n, title, body }, i) => (
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
            <div className="text-[10px] tracking-[0.2em] uppercase text-mn-red">The Tenets</div>
            <h2 className="font-playfair font-black leading-none tracking-[-1px]" style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontFamily: '"Playfair Display", serif' }}>What we stand for.</h2>
          </div>

          <div className="grid grid-cols-2 border-2 border-ink" style={{ borderColor: '#0e0d0b' }}>
            {TENETS.map((t, i) => (
              <div
                key={t.n}
                className="p-8 relative group transition-colors hover:bg-paper2"
                style={{
                  borderBottom: i < 4 ? '1px solid #c8c2b4' : 'none',
                  borderRight: i % 2 === 0 ? '1px solid #c8c2b4' : 'none',
                }}
              >
                <span className="font-bebas text-[48px] leading-[0.9] block mb-[10px] transition-colors group-hover:text-mn-red" style={{ color: '#c8c2b4', fontFamily: '"Bebas Neue", sans-serif' }}>{t.n}</span>
                <h3 className="font-playfair font-bold text-[18px] mb-[10px] tracking-[-0.3px]" style={{ fontFamily: '"Playfair Display", serif' }}>{t.title}</h3>
                <p className="text-[12px] leading-[1.85]" style={{ color: '#4a4740' }}>{t.body}</p>
                <span className="inline-block mt-[14px] text-[10px] tracking-[0.15em] uppercase text-mn-red border-b border-mn-red pb-[1px]">{t.verdict}</span>
              </div>
            ))}
          </div>
        </div>

        {/* WHO FOR / NOT FOR */}
        <div className="reveal grid" style={{ borderBottom: '2px solid #0e0d0b', gridTemplateColumns: '1fr 1fr' }}>
          {/* FOR */}
          <div className="py-[52px] px-12" style={{ borderRight: '2px solid #0e0d0b', background: '#0e0d0b', color: '#f7f4ee' }}>
            <div className="text-[10px] tracking-[0.2em] uppercase text-mn-red mb-5">This is for you if —</div>
            <h2 className="font-playfair font-black leading-none tracking-[-1px] mb-7" style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontFamily: '"Playfair Display", serif' }}>You build<br />things.</h2>
            <ul className="flex flex-col">
              {FOR_YOU.map(item => (
                <li key={item} className="flex gap-[14px] py-[13px] text-[13px] leading-[1.6]" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <span className="font-playfair font-black text-[16px] shrink-0 pt-[1px] text-mn-green" style={{ fontFamily: '"Playfair Display", serif' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <span className="inline-block mt-6 border-[3px] border-mn-red text-mn-red font-bebas text-[22px] tracking-[4px] px-4 py-[6px]" style={{ transform: 'rotate(-2deg)', fontFamily: '"Bebas Neue", sans-serif' }}>Apply Now</span>
          </div>

          {/* NOT FOR */}
          <div className="py-[52px] px-12" style={{ background: '#f7f4ee' }}>
            <div className="text-[10px] tracking-[0.2em] uppercase text-muted mb-5">This is not for you if —</div>
            <h2 className="font-playfair font-black leading-none tracking-[-1px] mb-7" style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontFamily: '"Playfair Display", serif' }}>You sell<br />things.</h2>
            <ul className="flex flex-col">
              {NOT_FOR_YOU.map(item => (
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
            <div className="text-[10px] tracking-[0.2em] uppercase text-mn-red mb-4">In Closing</div>
            <p className="font-playfair font-normal leading-[1.45] tracking-[-0.3px]" style={{ fontSize: 'clamp(20px, 3vw, 32px)', fontFamily: '"Playfair Display", serif' }}>
              {name} is not trying to be the biggest tech community in Minnesota.
              It's trying to be the <strong className="font-black">most necessary one.</strong>
              {' '}The room that serious builders wish existed —{' '}
              <em className="italic" style={{ color: '#8a8478' }}>so we built it.</em>
              <br /><br />
              If that sounds like your room, the door is open.{' '}
              <strong className="font-black">Come as a builder. Leave as a better one.</strong>
            </p>
          </div>
          <div className="flex flex-col border-2 border-ink" style={{ borderColor: '#0e0d0b' }}>
            {[
              { label: 'Community type', value: 'Closed collective' },
              { label: 'Geography', value: 'Minnesota only' },
              { label: 'Focus', value: 'AI · Blockchain · Systems' },
              { label: 'Format', value: 'Monthly Zoom meetups' },
              { label: 'Entry', value: 'Apply or be vouched' },
              { label: 'Cost', value: 'Free, always' },
              { label: 'Pitching', value: 'Never.' },
            ].map(({ label, value }) => (
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
          <span className="font-bebas text-[28px] tracking-[4px]" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>{name.toUpperCase()}</span>
          <span className="text-[10px] text-muted tracking-[0.1em] uppercase">Minnesota Technology Collective · Manifesto Vol. I · 2025 · mnstack.dev</span>
          <span className="text-[10px] text-muted tracking-[0.1em] uppercase">For builders. By builders.</span>
        </div>
      </div>
    </div>
  )
}
