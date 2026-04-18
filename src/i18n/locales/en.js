export default {
  translation: {
    meta: {
      tagline: 'For builders. By builders. Nowhere else.',
      edition: 'Manifesto — Volume I',
      focus: 'AI · Blockchain · Systems · Dev Tools',
      collective: 'Minnesota · Technology Collective',
      founding: 'Est. 2025 · Founding Edition',
      domain: 'mnstack.dev',
    },

    nav: {
      overview: 'Overview',
      layers: 'Platform Layers',
      membership: 'Membership',
      events: 'Events',
      zoom: 'Zoom Structure',
      tech: 'Tech Stack',
      roadmap: 'Roadmap',
      manifesto: 'Manifesto →',
      blueprint: '← Platform Blueprint',
    },

    landing: {
      header: {
        subtitle: 'Platform Blueprint v1.0',
        date: 'April 2025',
        copy: 'Internal — Founder Copy',
        title: 'Community\nPlatform\nStructure.',
        description:
          'A complete architecture for the {{name}} tech collective — from membership to monthly Zoom meetups, tooling to growth roadmap.',
        pills: ['Zoom-First', 'Apply OR Invite', 'Monthly Meetups (50+)', 'Minnesota Only', 'Free to Join'],
      },

      overview: {
        sectionTitle: 'Platform Overview',
        cards: [
          { label: 'Primary Venue', value: 'Zoom', desc: 'Monthly Zoom meetups as the community heartbeat. No app fatigue. Everyone knows Zoom.' },
          { label: 'Membership Model', value: 'Dual Gate', desc: 'Apply directly via landing page OR get vouched by an existing member. Both paths converge on review.' },
          { label: 'Event Cadence', value: 'Monthly', desc: 'One flagship Zoom meetup per month, 50+ members. Topic rotates: AI, Blockchain, Open Dev, etc.' },
          { label: 'Geography', value: 'MN Only', desc: '100% Minnesota. Zoom removes distance barriers — Duluth to Rochester, all welcome.' },
        ],
        callout: {
          title: 'The core principle: low friction, high signal.',
          body: 'Zoom means zero commute, no venue costs, and maximum attendance. The community grows through quality of conversation — not logistics. Keep the tooling invisible so the tech talk can be the only thing that matters.',
          statValue: '0',
          statLabel: 'Venue costs\nto start',
        },
      },

      layers: {
        sectionTitle: 'Platform Layers',
        items: [
          {
            num: 'Layer 1', title: 'Public Front Door',
            desc: 'The landing page is the only public-facing surface. It communicates the manifesto, focus areas, and the single CTA: Request Access. No social feed. No public forum. The mystery creates signal.',
            tools: ['mnstack.dev (landing page)', 'Application form', 'Typeform or custom form'],
            phaseLabel: 'Phase 1',
          },
          {
            num: 'Layer 2', title: 'Membership Registry',
            desc: "A private member directory — searchable by focus area, city, and skills. Not a social network. A professional rolodex for the collective. Members can see who's in the room before a Zoom session.",
            tools: ['Airtable (simple start)', 'Members-only view', 'Focus area tags', 'MN city filter'],
            phaseLabel: 'Phase 1',
          },
          {
            num: 'Layer 3', title: 'Communication Layer',
            desc: 'Async communication between meetups. Lightweight — this is not where the community lives, Zoom is. Used for event reminders, topic voting, post-meetup threads, and resource sharing.',
            tools: ['Email newsletter (primary)', 'Slack or Discord (secondary)', 'Substack or Beehiiv'],
            phaseLabel: 'Phase 1',
          },
          {
            num: 'Layer 4', title: 'Event Engine',
            desc: 'The monthly Zoom meetup coordination system. Handles scheduling, RSVP (member-only links), speaker/topic coordination, and Zoom link distribution. Recordings optionally shared post-session.',
            tools: ['Zoom (recurring licensed)', 'Luma for RSVPs', 'Calendar invites', 'Email reminders'],
            phaseLabel: 'Phase 1',
          },
          {
            num: 'Layer 5', title: 'Knowledge Archive',
            desc: 'An evolving library of past session recordings, shared resources, demo links, and curated reading lists by topic. Members contribute. Becomes the intellectual DNA of the collective over time.',
            tools: ['Notion (private workspace)', 'Zoom recording archive', 'Curated links by track'],
            phaseLabel: 'Phase 2',
          },
          {
            num: 'Layer 6', title: 'Sub-Groups',
            desc: 'As membership grows past 100, spin up focus-specific Zoom cohorts: an AI group, a Blockchain group, etc. — smaller, more technical, meets bi-monthly. The main meetup remains the full collective.',
            tools: ['Zoom breakout rooms', 'Separate Luma events', 'Interest-based invite lists'],
            phaseLabel: 'Phase 3',
          },
        ],
      },

      membership: {
        sectionTitle: 'Membership System',
        pathA: {
          title: 'Path A — Direct Application',
          sub: 'Anyone in Minnesota can apply via the public landing page',
          steps: [
            { title: 'Submit form', desc: 'Name, email, city, GitHub/portfolio, focus areas, and one freeform question: "What are you building or learning right now?"' },
            { title: 'Founder review', desc: 'You review within 72 hours. Looking for genuine builders, not résumés. The portfolio link is the most important signal.' },
            { title: 'Approval email', desc: 'Accepted members get a welcome email with the member directory link, next Zoom date, and community norms doc.' },
            { title: 'First Zoom access', desc: 'RSVP link to next monthly meetup sent. New members introduced at the top of each session.' },
          ],
        },
        pathB: {
          title: 'Path B — Member Vouching',
          sub: 'Existing members vouch for someone they know personally',
          steps: [
            { title: 'Member submits referral', desc: "A short form: who they're vouching for, what they build, and why they belong. Member puts their name on it." },
            { title: 'Auto-invite sent', desc: "A vouched referral skips the founder review queue. The referee gets a personal invite email from the referring member's name." },
            { title: 'Referee completes profile', desc: 'Fill in basic info and focus areas to appear in the member directory. 5 minutes.' },
            { title: 'Vouching limit: 3', desc: 'Each member can vouch for up to 3 people per quarter. Keeps quality high and makes vouching feel meaningful.' },
          ],
        },
        tiers: [
          {
            tag: 'Tier 1', name: 'Observer',
            desc: 'Newly approved. Attend meetups, lurk the directory. Building trust before contributing.',
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
            features: [
              { label: 'Everything in Member', check: true },
              { label: 'Topic coordination', check: true },
              { label: 'Onboarding new members', check: true },
              { label: 'Co-host Zoom', check: true },
              { label: 'Vouch unlimited', check: true },
              { label: 'Archive curation', check: true },
            ],
          },
        ],
      },

      events: {
        sectionTitle: 'Event Structure',
        cards: [
          {
            title: 'Monthly Flagship Meetup',
            meta: 'Zoom · All Members · 50–100 people · 90 min',
            items: [
              'Themed around one focus area per month (AI in Jan, Blockchain in Feb, Open Dev in Mar, etc.)',
              '2–3 member demos or lightning talks (10 min each, no slides required — live demos preferred)',
              "One structured discussion or open Q&A on the month's theme",
              'New member introductions at the top — 30 seconds each, name + what you build',
              'Breakout rooms at the end — 15 min of open networking by interest group',
              'Recording available to members-only for 30 days post-session',
            ],
          },
          {
            title: 'Topic Rotation Calendar',
            meta: 'Annual theme cadence — repeats yearly',
            items: [
              'Jan / Jul — AI & Machine Learning',
              'Feb / Aug — Blockchain & Distributed Systems',
              'Mar / Sep — Dev Tools, Infra & Systems',
              'Apr / Oct — Security & Cryptography',
              'May / Nov — Open Tech (member-voted topic)',
              'Jun / Dec — Show & Tell — anything goes, demos only',
            ],
          },
          {
            title: 'Speaker / Demo Submission',
            meta: 'How members get on the agenda',
            items: [
              "Simple Airtable form: What you're demoing, which month's theme it fits, how long you need",
              'Stewards curate 2–3 demos per session — no formal CFP, no slides required',
              'First-time speakers prioritized to build community buy-in early',
              'No sales, no recruiting plugs — topic-first only',
            ],
          },
          {
            title: 'Future: In-Person Overlays',
            meta: 'Phase 2 — once online community is stable',
            items: [
              'Quarterly in-person meetup in Minneapolis/St. Paul — same format, physical venue',
              'Annual MN Stack gathering — full-day unconference style, 100+ members',
              'City satellite groups: Duluth, Rochester, St. Cloud — monthly coffee meetups self-organized',
              'Venue costs covered by optional member dues (Phase 2 only)',
            ],
          },
        ],
      },

      zoom: {
        sectionTitle: 'Zoom Session Blueprint',
        runOfShow: {
          title: 'Standard 90-Minute Run of Show',
          schedule: [
            { time: '0:00', title: 'Doors Open / Lobby', desc: 'Zoom opens 10 min early. Casual chat, camera-on encouraged. Background music optional.' },
            { time: '0:10', title: 'Welcome & New Members', desc: 'Host opens the session. New members do 30-second intros: name + what they build. No titles.' },
            { time: '0:20', title: 'Demo / Talk #1', desc: '10-min live demo or lightning talk. Live code, live product, or live prototype preferred over slides.' },
            { time: '0:35', title: 'Demo / Talk #2', desc: 'Second presenter. Q&A woven in — chat questions surfaced by co-host in real time.' },
            { time: '0:50', title: 'Demo / Talk #3 (optional)', desc: 'Third demo if available. Otherwise, skip to structured discussion early.' },
            { time: '1:05', title: 'Structured Discussion', desc: "Host poses 1–2 questions on the month's theme. Open mic format. 15–20 people typically speak." },
            { time: '1:25', title: 'Breakout Rooms', desc: '3–4 rooms by interest area. 15 min. Self-organized, no agenda. Best networking of the session.' },
            { time: '1:40', title: 'Wrap & Next Month', desc: "Full group reconvenes. Host announces next month's theme, call for demos, and closes session." },
          ],
        },
        rules: {
          title: 'Session Ground Rules',
          items: [
            { title: 'Camera on', desc: 'Not required but strongly encouraged. Community feels real when faces are visible.' },
            { title: 'No pitching', desc: 'Demos are technical. If someone mentions raising money or hiring, host redirects.' },
            { title: 'Chat moderated', desc: 'Co-host surfaces the best questions. Spam or off-topic links removed.' },
            { title: 'Recording consent', desc: 'Announced at the top. Members-only access for 30 days. No public sharing.' },
            { title: 'Breakout opt-out', desc: 'Breakout rooms are opt-in. Staying in main room is fine.' },
            { title: 'One host, one co-host', desc: 'Host runs the show. Co-host monitors chat, manages breakouts, watches the clock.' },
          ],
        },
      },

      tech: {
        sectionTitle: 'Tech Stack',
        cards: [
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
        ],
      },

      roadmap: {
        sectionTitle: 'Launch Roadmap',
        phases: [
          {
            label: 'Phase 1 — Foundation', name: 'Launch',
            timeline: 'Month 1–3 · Target: 50 members, 3 meetups',
            colorClass: 'text-mn-green-text', dotClass: 'bg-mn-green-text',
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
            colorClass: 'text-blue-900', dotClass: 'bg-blue-900',
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
            colorClass: 'text-amber-800', dotClass: 'bg-amber-800',
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
        ],
      },

      footer: {
        blueprintLabel: 'Platform Blueprint v1.0',
        internal: 'Internal document — Founder use only',
        date: 'April 2025',
      },
    },

    manifesto: {
      wordmark: 'THE MINNESOTA TECHNOLOGY MANIFESTO',
      openingLabel: 'Opening Statement',
      opening:
        "Minnesota has a tech scene. It's just been <italic>invisible</italic> — scattered across corporations, buried in startups, hidden behind NDAs and LinkedIn titles. <bold>{{name}} exists to make it visible.</bold> Not for business. Not for capital. For the craft of building things that didn't exist before.",
      pullQuote: 'We believe the best tech\nconversations happen when\n<red>nobody is selling anything.</red>',
      columns: [
        {
          n: 'I',
          title: 'Minnesota is underestimated.',
          body: "The coasts get the headlines. Minnesota gets the work done. Engineers here are building machine learning systems, distributed protocols, and production infrastructure that rivals anything coming out of San Francisco or New York. The difference is nobody's talking about it. We intend to change that.",
        },
        {
          n: 'II',
          title: "The existing venues aren't for us.",
          body: "Every other tech gathering in this state is a networking event in disguise. Startup mixers. Pitch nights. Employer brand showcases. They serve a purpose — just not ours. MN Stack is the room that didn't exist: pure technical conversation, no agenda attached. If you want to talk about a ZK proof you've been working through, this is where you do it.",
        },
        {
          n: 'III',
          title: 'Community is built by showing up.',
          body: "There are no speakers. No sponsors. No panels. Every member is a peer. The person who's been writing Rust for fifteen years sits next to the person who shipped their first smart contract last month, and both of them leave knowing something they didn't before. That's the only metric that matters.",
        },
      ],
      tenetsLabel: 'The Tenets',
      tenetsTitle: 'What we stand for.',
      tenets: [
        { n: '01', title: 'Technology is the only agenda.', body: "AI, blockchain, distributed systems, developer tooling, applied cryptography, systems programming, hardware. If you build it with code, it belongs here. Conversations start and end with the work itself — not who funded it, not where it's going, not what it's worth.", verdict: 'Non-negotiable' },
        { n: '02', title: 'No pitching. Not even once.', body: 'You will not pitch your startup here. You will not mention your round. You will not hand out business cards to someone you just met and call it "connecting." If you demo something, you demo it because it\'s technically interesting — full stop.', verdict: 'Enforced' },
        { n: '03', title: 'Demos over decks. Always.', body: "A running piece of software is worth a thousand slide transitions. If you want to share something, share something that works — or something that almost works and you're trying to figure out why. The half-finished thing shown honestly is more valuable than the polished thing shown strategically.", verdict: 'Preferred' },
        { n: '04', title: 'Minnesota, always.', body: "This community is rooted here. Not because the coasts are bad, but because local density creates real relationships. We want the engineer in Duluth and the researcher in Rochester to know each other exists. Geography is a feature, not a limitation.", verdict: 'By Design' },
        { n: '05', title: 'Quality is the gating mechanism.', body: "Membership is not automatic. You apply, or someone who knows you personally vouches for you. Not because we're elitist — because the quality of a community is determined by who's in the room. A smaller room with the right people is worth more than a large room with everyone.", verdict: 'Intentional' },
        { n: '06', title: 'Curiosity outranks credentials.', body: "Your title means nothing here. Your GitHub matters more than your résumé. The question you ask matters more than the company you work for. A self-taught developer with genuine curiosity belongs in this room more than a senior engineer who stopped learning three years ago.", verdict: 'Always' },
      ],
      forYouLabel: 'This is for you if —',
      forYouTitle: 'You build\nthings.',
      forYou: [
        "You've shipped something technical and want to talk about how it works",
        "You're deep in a rabbit hole and want to find someone else who's been there",
        'You think about AI, blockchain, or systems problems in the shower',
        "You learn best by watching someone else's live demo fall apart",
        "You're in Minnesota and tired of going to startup events",
        'You care more about the craft than the outcome',
      ],
      notForYouLabel: 'This is not for you if —',
      notForYouTitle: 'You sell\nthings.',
      notForYou: [
        "You're looking for co-founders, investors, or early customers",
        'Your goal is to "build your personal brand" in Minnesota tech',
        'You want to add 50 LinkedIn connections from one event',
        "You haven't written code, configured infrastructure, or shipped anything technical recently",
        'You think of community as a distribution channel',
        'You plan to recruit members for your team or company',
      ],
      applyStamp: 'Apply Now',
      closingLabel: 'In Closing',
      closing:
        '{{name}} is not trying to be the biggest tech community in Minnesota. It\'s trying to be the <bold>most necessary one.</bold> The room that serious builders wish existed — <muted>so we built it.</muted>\n\nIf that sounds like your room, the door is open. <bold>Come as a builder. Leave as a better one.</bold>',
      closingStats: [
        { label: 'Community type', value: 'Closed collective' },
        { label: 'Geography', value: 'Minnesota only' },
        { label: 'Focus', value: 'AI · Blockchain · Systems' },
        { label: 'Format', value: 'Monthly Zoom meetups' },
        { label: 'Entry', value: 'Apply or be vouched' },
        { label: 'Cost', value: 'Free, always' },
        { label: 'Pitching', value: 'Never.' },
      ],
      footerTagline: 'Minnesota Technology Collective · Manifesto Vol. I · 2025 · mnstack.dev',
      footerSub: 'For builders. By builders.',
    },
  },
}
