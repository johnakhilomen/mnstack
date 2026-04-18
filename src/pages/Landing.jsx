import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'

const name = import.meta.env.VITE_COMMUNITY_NAME || 'MN Stack'
const [prefix, suffix] = name.split(' ')

const OVERVIEW = [
  { label: 'Primary Venue', value: 'Zoom', desc: 'Monthly Zoom meetups as the community heartbeat. No app fatigue. Everyone knows Zoom.' },
  { label: 'Membership Model', value: 'Dual Gate', desc: 'Apply directly via landing page OR get vouched by an existing member. Both paths converge on review.' },
  { label: 'Event Cadence', value: 'Monthly', desc: 'One flagship Zoom meetup per month, 50+ members. Topic rotates: AI, Blockchain, Open Dev, etc.' },
  { label: 'Geography', value: 'MN Only', desc: '100% Minnesota. Zoom removes distance barriers — Duluth to Rochester, all welcome.' },
]

const LAYERS = [
  {
    num: 'Layer 1', title: 'Public Front Door',
    desc: 'The landing page is the only public-facing surface. It communicates the manifesto, focus areas, and the single CTA: Request Access. No social feed. No public forum. The mystery creates signal.',
    tools: ['mnstack.dev (landing page)', 'Application form', 'Typeform or custom form'],
    phase: 'phase1', phaseLabel: 'Phase 1',
  },
  {
    num: 'Layer 2', title: 'Membership Registry',
    desc: 'A private member directory — searchable by focus area, city, and skills. Not a social network. A professional rolodex for the collective. Members can see who\'s in the room before a Zoom session.',
    tools: ['Airtable (simple start)', 'Members-only view', 'Focus area tags', 'MN city filter'],
    phase: 'phase1', phaseLabel: 'Phase 1',
  },
  {
    num: 'Layer 3', title: 'Communication Layer',
    desc: 'Async communication between meetups. Lightweight — this is not where the community lives, Zoom is. Used for event reminders, topic voting, post-meetup threads, and resource sharing.',
    tools: ['Email newsletter (primary)', 'Slack or Discord (secondary)', 'Substack or Beehiiv'],
    phase: 'phase1', phaseLabel: 'Phase 1',
  },
  {
    num: 'Layer 4', title: 'Event Engine',
    desc: 'The monthly Zoom meetup coordination system. Handles scheduling, RSVP (member-only links), speaker/topic coordination, and Zoom link distribution. Recordings optionally shared post-session.',
    tools: ['Zoom (recurring licensed)', 'Luma for RSVPs', 'Calendar invites', 'Email reminders'],
    phase: 'phase1', phaseLabel: 'Phase 1',
  },
  {
    num: 'Layer 5', title: 'Knowledge Archive',
    desc: 'An evolving library of past session recordings, shared resources, demo links, and curated reading lists by topic. Members contribute. Becomes the intellectual DNA of the collective over time.',
    tools: ['Notion (private workspace)', 'Zoom recording archive', 'Curated links by track'],
    phase: 'phase2', phaseLabel: 'Phase 2',
  },
  {
    num: 'Layer 6', title: 'Sub-Groups',
    desc: 'As membership grows past 100, spin up focus-specific Zoom cohorts: an AI group, a Blockchain group, etc. — smaller, more technical, meets bi-monthly. The main meetup remains the full collective.',
    tools: ['Zoom breakout rooms', 'Separate Luma events', 'Interest-based invite lists'],
    phase: 'phase3', phaseLabel: 'Phase 3',
  },
]

const TIERS = [
  {
    tag: 'Tier 1', name: 'Observer',
    desc: 'Newly approved. Attend meetups, lurk the directory. Building trust before contributing.',
    featured: false,
    features: [
      { label: 'Monthly Zoom access', check: true },
      { label: 'Member directory', check: true },
      { label: 'Newsletter', check: true },
      { label: 'Vouch others', check: false },
      { label: 'Present at meetup', check: false },
      { label: 'Sub-group access', check: false },
    ],
  },
  {
    tag: 'Tier 2', name: 'Member',
    desc: 'After 2 attended meetups. Full access. The default state for most of the collective.',
    featured: true,
    features: [
      { label: 'Monthly Zoom access', check: true },
      { label: 'Member directory', check: true },
      { label: 'Newsletter', check: true },
      { label: 'Vouch others (3/qtr)', check: true },
      { label: 'Present at meetup', check: true },
      { label: 'Sub-group access', check: true },
    ],
  },
  {
    tag: 'Tier 3', name: 'Steward',
    desc: 'Invited by founder. Help run topics, onboard new members, moderate the collective.',
    featured: false,
    features: [
      { label: 'Everything in Member', check: true },
      { label: 'Topic coordination', check: true },
      { label: 'Onboarding new members', check: true },
      { label: 'Co-host Zoom', check: true },
      { label: 'Vouch unlimited', check: true },
      { label: 'Archive curation', check: true },
    ],
  },
]

const TECH_STACK = [
  {
    category: 'Public Layer', title: 'Landing & Applications',
    items: [
      { name: 'Landing page', note: 'Custom HTML or Webflow' },
      { name: 'Application form', note: 'Typeform or Tally.so' },
      { name: 'Domain', note: 'mnstack.dev' },
      { name: 'Vouch form', note: 'Same Typeform, different view' },
    ],
  },
  {
    category: 'Member Layer', title: 'Directory & Registry',
    items: [
      { name: 'Member database', note: 'Airtable (Phase 1)' },
      { name: 'Directory view', note: 'Airtable shared view (members only)' },
      { name: 'Onboarding', note: 'Email sequence (3 emails)' },
      { name: 'Profile updates', note: 'Airtable form self-serve' },
    ],
  },
  {
    category: 'Communication', title: 'Async Channels',
    items: [
      { name: 'Newsletter', note: 'Beehiiv or Substack' },
      { name: 'Event reminders', note: 'Email (3 days + 1 day out)' },
      { name: 'Async chat', note: 'Slack (optional, Phase 1.5)' },
      { name: 'Post-session recap', note: 'Newsletter digest' },
    ],
  },
  {
    category: 'Events', title: 'Meetup Engine',
    items: [
      { name: 'Video platform', note: 'Zoom (Pro or Business)' },
      { name: 'RSVP', note: 'Luma (members-only events)' },
      { name: 'Speaker submissions', note: 'Airtable form' },
      { name: 'Calendar', note: 'Google Cal invite, ICS file' },
    ],
  },
  {
    category: 'Knowledge', title: 'Archive & Resources',
    items: [
      { name: 'Session recordings', note: 'Zoom cloud (30-day limit)' },
      { name: 'Resource library', note: 'Notion (Phase 2)' },
      { name: 'Demo links archive', note: 'Airtable linked records' },
      { name: 'Reading lists', note: 'Notion by focus area' },
    ],
  },
  {
    category: 'Admin', title: 'Ops & Automation',
    items: [
      { name: 'Application review', note: 'Airtable + email' },
      { name: 'Automation', note: 'n8n or Zapier' },
      { name: 'Monthly cost', note: '~$60–100/mo to start' },
      { name: 'Analytics', note: 'Attendance tracking in Airtable' },
    ],
  },
]

const ROADMAP = [
  {
    label: 'Phase 1 — Foundation', name: 'Launch',
    timeline: 'Month 1–3 · Target: 50 members, 3 meetups',
    color: 'text-mn-green-text', dotColor: 'bg-mn-green-text',
    items: [
      'Publish landing page + application form',
      'Set up Airtable member registry',
      'Seed 10–15 members via personal network',
      'Run first 3 monthly Zoom meetups',
      'Establish email newsletter cadence',
      'Define and publish community norms doc',
      'Identify 2–3 founding Stewards',
      'Activate Luma for RSVP management',
    ],
  },
  {
    label: 'Phase 2 — Growth', name: 'Momentum',
    timeline: 'Month 4–9 · Target: 150 members, consistent 50+ attendance',
    color: 'text-blue-900', dotColor: 'bg-blue-900',
    items: [
      'Activate member vouching system',
      'Open Slack for async comms',
      'Launch Notion knowledge archive',
      'First in-person overlay event (MSP)',
      'City satellite groups (Duluth, Rochester)',
      'Member-voted topics for Open months',
      'Post-session newsletter digest',
      'Build demo submission pipeline',
    ],
  },
  {
    label: 'Phase 3 — Scale', name: 'Community',
    timeline: 'Month 10–18 · Target: 300+ members, annual gathering',
    color: 'text-amber-800', dotColor: 'bg-amber-800',
    items: [
      'Focus-specific sub-group Zooms (AI, Blockchain)',
      'Annual MN Stack unconference (in-person)',
      'Member dues option for in-person events',
      'Custom member platform (replace Airtable)',
      'Speaker alumni network',
      'Explore MN Stack research collective',
      'Partnerships with local universities',
      'MN Stack newsletter as public-facing signal',
    ],
  },
]

const phaseBadge = {
  phase1: 'text-mn-green-text border-mn-green-text bg-mn-green-bg',
  phase2: 'text-blue-900 border-blue-900 bg-blue-50',
  phase3: 'text-amber-800 border-amber-800 bg-amber-50',
}

export default function Landing() {
  useScrollReveal()

  return (
    <div className="bg-[#f5f3ee] text-ink font-mono text-[13px] leading-relaxed">

      {/* HEADER */}
      <header className="bg-ink text-paper px-15 py-12 relative overflow-hidden" style={{ padding: '48px 60px 40px' }}>
        <div
          className="absolute right-[-20px] top-1/2 -translate-y-1/2 rotate-90 font-syne font-black text-[80px] opacity-[0.04] tracking-[-4px] whitespace-nowrap pointer-events-none select-none"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          BLUEPRINT
        </div>

        <div className="flex justify-between items-start mb-9">
          <div className="font-syne font-black text-[22px] tracking-[-1px]" style={{ fontFamily: 'Syne, sans-serif' }}>
            {prefix}<span className="text-mn-green">{suffix ? ` ${suffix}` : ''}</span>
          </div>
          <div className="text-right text-[11px] opacity-50 leading-loose">
            Platform Blueprint v1.0<br />
            April 2025<br />
            Internal — Founder Copy
          </div>
        </div>

        <h1 className="font-syne font-black leading-[0.95] tracking-[-3px] mb-5 text-[clamp(36px,6vw,72px)]" style={{ fontFamily: 'Syne, sans-serif' }}>
          Community<br />Platform<br />Structure.
        </h1>
        <p className="text-[13px] opacity-55 max-w-[500px] leading-[1.8]">
          A complete architecture for the {name} tech collective — from membership to monthly Zoom meetups, tooling to growth roadmap.
        </p>

        <div className="flex gap-[10px] mt-6 flex-wrap">
          {['Zoom-First', 'Apply OR Invite', 'Monthly Meetups (50+)', 'Minnesota Only', 'Free to Join'].map((p, i) => (
            <span
              key={p}
              className={`px-3 py-[5px] text-[10px] tracking-[0.12em] uppercase border ${
                i === 0
                  ? 'bg-mn-green text-black border-mn-green'
                  : 'bg-white/10 border-white/15 text-white/70'
              }`}
            >
              {p}
            </span>
          ))}
        </div>
      </header>

      {/* NAV */}
      <nav className="bg-surface border-b border-border flex overflow-x-auto" style={{ padding: '20px 60px' }}>
        {[
          ['#overview', '01', 'Overview'],
          ['#layers', '02', 'Platform Layers'],
          ['#membership', '03', 'Membership'],
          ['#events', '04', 'Events'],
          ['#zoom', '05', 'Zoom Structure'],
          ['#tech', '06', 'Tech Stack'],
          ['#roadmap', '07', 'Roadmap'],
        ].map(([href, num, label]) => (
          <a
            key={href}
            href={href}
            className="flex items-center gap-2 px-5 py-2 text-[11px] tracking-[0.1em] uppercase text-muted border-r border-border whitespace-nowrap hover:text-ink transition-colors first:pl-0"
          >
            <span className="text-[9px] opacity-50">{num}</span>
            {label}
          </a>
        ))}
        <Link
          to="/manifesto"
          className="flex items-center gap-2 px-5 py-2 text-[11px] tracking-[0.1em] uppercase text-mn-red border-r border-border whitespace-nowrap hover:text-ink transition-colors"
        >
          Manifesto →
        </Link>
      </nav>

      <main style={{ maxWidth: 1100, margin: '0 auto', padding: '60px' }}>

        {/* 01 OVERVIEW */}
        <section id="overview" className="mb-20">
          <SectionHeader num="01" title="Platform Overview" />

          <div className="grid grid-cols-4 gap-[1px] bg-border border border-border mb-10">
            {OVERVIEW.map(({ label, value, desc }) => (
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
                The core principle: low friction, high signal.
              </h3>
              <p className="text-[12px] opacity-55 leading-[1.7] max-w-lg">
                Zoom means zero commute, no venue costs, and maximum attendance. The community grows through quality of conversation — not logistics. Keep the tooling invisible so the tech talk can be the only thing that matters.
              </p>
            </div>
            <div className="text-right shrink-0">
              <div className="font-syne font-black text-[48px] leading-none text-mn-green tracking-[-2px]" style={{ fontFamily: 'Syne, sans-serif' }}>0</div>
              <div className="text-[10px] opacity-40 uppercase tracking-[0.12em]">Venue costs<br />to start</div>
            </div>
          </div>
        </section>

        {/* 02 PLATFORM LAYERS */}
        <section id="layers" className="mb-20 reveal">
          <SectionHeader num="02" title="Platform Layers" />
          <div className="flex flex-col gap-[1px] bg-border border border-border">
            {LAYERS.map((layer) => (
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
                  <span className={`text-[9px] tracking-[0.12em] uppercase py-1 px-[10px] border ${phaseBadge[layer.phase]}`}>{layer.phaseLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 03 MEMBERSHIP */}
        <section id="membership" className="mb-20 reveal">
          <SectionHeader num="03" title="Membership System" />

          <div className="grid grid-cols-2 gap-[1px] bg-border border border-border mb-8">
            {/* Path A */}
            <MembershipPath
              title="Path A — Direct Application"
              sub="Anyone in Minnesota can apply via the public landing page"
              steps={[
                { n: '1', title: 'Submit form', desc: 'Name, email, city, GitHub/portfolio, focus areas, and one freeform question: "What are you building or learning right now?"' },
                { n: '2', title: 'Founder review', desc: 'You review within 72 hours. Looking for genuine builders, not résumés. The portfolio link is the most important signal.' },
                { n: '3', title: 'Approval email', desc: 'Accepted members get a welcome email with the member directory link, next Zoom date, and community norms doc.' },
                { n: '4', title: 'First Zoom access', desc: 'RSVP link to next monthly meetup sent. New members introduced at the top of each session.' },
              ]}
            />
            {/* Path B */}
            <MembershipPath
              title="Path B — Member Vouching"
              sub="Existing members vouch for someone they know personally"
              steps={[
                { n: '1', title: 'Member submits referral', desc: 'A short form: who they\'re vouching for, what they build, and why they belong. Member puts their name on it.' },
                { n: '2', title: 'Auto-invite sent', desc: 'A vouched referral skips the founder review queue. The referee gets a personal invite email from the referring member\'s name.' },
                { n: '3', title: 'Referee completes profile', desc: 'Fill in basic info and focus areas to appear in the member directory. 5 minutes.' },
                { n: '4', title: 'Vouching limit: 3', desc: 'Each member can vouch for up to 3 people per quarter. Keeps quality high and makes vouching feel meaningful.' },
              ]}
            />
          </div>

          {/* Tiers */}
          <div className="grid grid-cols-3 gap-[1px] bg-border border border-border">
            {TIERS.map((tier) => (
              <div key={tier.name} className={`p-8 relative ${tier.featured ? 'bg-ink text-paper' : 'bg-[#f5f3ee]'}`}>
                <span className={`text-[9px] tracking-[0.2em] uppercase mb-[10px] block ${tier.featured ? 'text-white/40' : 'text-muted'}`}>{tier.tag}</span>
                <div className={`font-syne font-black text-[22px] tracking-[-1px] mb-[6px]`} style={{ fontFamily: 'Syne, sans-serif' }}>{tier.name}</div>
                <p className={`text-[11px] leading-[1.7] mb-6 pb-5 border-b ${tier.featured ? 'text-white/50 border-white/10' : 'text-muted border-border'}`}>{tier.desc}</p>
                <div className="flex flex-col">
                  {tier.features.map(({ label, check }) => (
                    <div key={label} className={`flex justify-between items-center py-[10px] border-b text-[11px] last:border-0 ${tier.featured ? 'border-white/10' : 'border-border'}`}>
                      <span className={tier.featured ? 'text-white/70' : 'text-muted'}>{label}</span>
                      {check
                        ? <span className={tier.featured ? 'text-mn-green font-bold' : 'text-mn-green-text font-bold'}>✓</span>
                        : <span className="text-[16px] text-border">–</span>
                      }
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 04 EVENTS */}
        <section id="events" className="mb-20 reveal">
          <SectionHeader num="04" title="Event Structure" />
          <div className="grid grid-cols-2 gap-[1px] bg-border border border-border mb-8">
            <EventCard title="Monthly Flagship Meetup" meta="Zoom · All Members · 50–100 people · 90 min" items={[
              'Themed around one focus area per month (AI in Jan, Blockchain in Feb, Open Dev in Mar, etc.)',
              '2–3 member demos or lightning talks (10 min each, no slides required — live demos preferred)',
              'One structured discussion or open Q&A on the month\'s theme',
              'New member introductions at the top — 30 seconds each, name + what you build',
              'Breakout rooms at the end — 15 min of open networking by interest group',
              'Recording available to members-only for 30 days post-session',
            ]} />
            <EventCard title="Topic Rotation Calendar" meta="Annual theme cadence — repeats yearly" items={[
              'Jan / Jul — AI & Machine Learning',
              'Feb / Aug — Blockchain & Distributed Systems',
              'Mar / Sep — Dev Tools, Infra & Systems',
              'Apr / Oct — Security & Cryptography',
              'May / Nov — Open Tech (member-voted topic)',
              'Jun / Dec — Show & Tell — anything goes, demos only',
            ]} />
            <EventCard title="Speaker / Demo Submission" meta="How members get on the agenda" items={[
              'Simple Airtable form: What you\'re demoing, which month\'s theme it fits, how long you need',
              'Stewards curate 2–3 demos per session — no formal CFP, no slides required',
              'First-time speakers prioritized to build community buy-in early',
              'No sales, no recruiting plugs — topic-first only',
            ]} />
            <EventCard title="Future: In-Person Overlays" meta="Phase 2 — once online community is stable" items={[
              'Quarterly in-person meetup in Minneapolis/St. Paul — same format, physical venue',
              'Annual MN Stack gathering — full-day unconference style, 100+ members',
              'City satellite groups: Duluth, Rochester, St. Cloud — monthly coffee meetups self-organized',
              'Venue costs covered by optional member dues (Phase 2 only)',
            ]} />
          </div>
        </section>

        {/* 05 ZOOM STRUCTURE */}
        <section id="zoom" className="mb-20 reveal">
          <SectionHeader num="05" title="Zoom Session Blueprint" />
          <div className="grid gap-[1px] bg-border border border-border" style={{ gridTemplateColumns: '1fr 280px' }}>
            <div className="bg-[#f5f3ee] p-8">
              <h3 className="font-syne font-bold text-[16px] tracking-[-0.3px] mb-5" style={{ fontFamily: 'Syne, sans-serif' }}>Standard 90-Minute Run of Show</h3>
              <div className="flex flex-col border border-border">
                {[
                  { time: '0:00', title: 'Doors Open / Lobby', desc: 'Zoom opens 10 min early. Casual chat, camera-on encouraged. Background music optional.' },
                  { time: '0:10', title: 'Welcome & New Members', desc: 'Host opens the session. New members do 30-second intros: name + what they build. No titles.' },
                  { time: '0:20', title: 'Demo / Talk #1', desc: '10-min live demo or lightning talk. Live code, live product, or live prototype preferred over slides.' },
                  { time: '0:35', title: 'Demo / Talk #2', desc: 'Second presenter. Q&A woven in — chat questions surfaced by co-host in real time.' },
                  { time: '0:50', title: 'Demo / Talk #3 (optional)', desc: 'Third demo if available. Otherwise, skip to structured discussion early.' },
                  { time: '1:05', title: 'Structured Discussion', desc: 'Host poses 1–2 questions on the month\'s theme. Open mic format. 15–20 people typically speak.' },
                  { time: '1:25', title: 'Breakout Rooms', desc: '3–4 rooms by interest area. 15 min. Self-organized, no agenda. Best networking of the session.' },
                  { time: '1:40', title: 'Wrap & Next Month', desc: 'Full group reconvenes. Host announces next month\'s theme, call for demos, and closes session.' },
                ].map(({ time, title, desc }) => (
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
              <h4 className="font-syne font-bold text-[13px] mb-4 tracking-[-0.3px]" style={{ fontFamily: 'Syne, sans-serif' }}>Session Ground Rules</h4>
              {[
                { title: 'Camera on', desc: 'Not required but strongly encouraged. Community feels real when faces are visible.' },
                { title: 'No pitching', desc: 'Demos are technical. If someone mentions raising money or hiring, host redirects.' },
                { title: 'Chat moderated', desc: 'Co-host surfaces the best questions. Spam or off-topic links removed.' },
                { title: 'Recording consent', desc: 'Announced at the top. Members-only access for 30 days. No public sharing.' },
                { title: 'Breakout opt-out', desc: 'Breakout rooms are opt-in. Staying in main room is fine.' },
                { title: 'One host, one co-host', desc: 'Host runs the show. Co-host monitors chat, manages breakouts, watches the clock.' },
              ].map(({ title, desc }) => (
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
          <SectionHeader num="06" title="Tech Stack" />
          <div className="grid grid-cols-3 gap-[1px] bg-border border border-border">
            {TECH_STACK.map(({ category, title, items }) => (
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
          <SectionHeader num="07" title="Launch Roadmap" />
          <div className="grid grid-cols-3 gap-[1px] bg-border border border-border">
            {ROADMAP.map((phase) => (
              <div key={phase.name} className="bg-[#f5f3ee] p-8">
                <div className={`text-[9px] tracking-[0.2em] uppercase mb-2 ${phase.color}`}>{phase.label}</div>
                <div className="font-syne font-black text-[20px] tracking-[-0.8px] mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>{phase.name}</div>
                <div className="text-[11px] text-muted mb-5 pb-4 border-b border-border">{phase.timeline}</div>
                <div className="flex flex-col gap-[10px]">
                  {phase.items.map(item => (
                    <div key={item} className="flex gap-[10px] text-[12px] leading-[1.5]">
                      <div className={`w-[6px] h-[6px] rounded-full mt-[5px] shrink-0 ${phase.dotColor}`} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <footer className="bg-surface border-t border-border flex justify-between items-center text-[11px] text-muted" style={{ padding: '28px 60px' }}>
        <div className="font-syne font-black text-[15px] text-ink" style={{ fontFamily: 'Syne, sans-serif' }}>
          {prefix}<span className="text-mn-green">{suffix ? ` ${suffix}` : ''}</span>
          <span className="font-mono font-normal text-muted text-[11px]"> — Platform Blueprint v1.0</span>
        </div>
        <div>Internal document — Founder use only</div>
        <div>April 2025</div>
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

function MembershipPath({ title, sub, steps }) {
  return (
    <div className="bg-[#f5f3ee] p-8">
      <h3 className="font-syne font-bold text-[18px] tracking-[-0.5px] mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>{title}</h3>
      <p className="text-[11px] text-muted mb-5 pb-4 border-b border-border">{sub}</p>
      <div className="flex flex-col">
        {steps.map(({ n, title: t, desc }) => (
          <div key={n} className="flex gap-4 py-[14px] border-b border-border last:border-0">
            <span className="font-syne font-bold text-[11px] text-muted min-w-[20px] pt-[1px]" style={{ fontFamily: 'Syne, sans-serif' }}>{n}</span>
            <div>
              <strong className="block text-[13px] mb-[3px] font-syne font-semibold" style={{ fontFamily: 'Syne, sans-serif' }}>{t}</strong>
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
