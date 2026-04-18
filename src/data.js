// All static/structural data for the MN Stack platform.
// Text content lives in src/i18n/locales/{en,es}.js
// This file holds non-translatable configuration: keys, styles, phase mappings.

export const COMMUNITY_NAME = import.meta.env.VITE_COMMUNITY_NAME || 'MN Stack'

// Derive prefix (e.g. "MN") and suffix (e.g. "Stack") for split-color wordmark
export const [NAME_PREFIX, ...NAME_SUFFIX_PARTS] = COMMUNITY_NAME.split(' ')
export const NAME_SUFFIX = NAME_SUFFIX_PARTS.join(' ')

// Phase badge styles — keyed to the phaseLabel strings used in layer data
export const PHASE_BADGE = {
  'Phase 1': 'text-mn-green-text border-mn-green-text bg-mn-green-bg',
  'Phase 2': 'text-blue-900 border-blue-900 bg-blue-50',
  'Phase 3': 'text-amber-800 border-amber-800 bg-amber-50',
  // Spanish equivalents
  'Fase 1': 'text-mn-green-text border-mn-green-text bg-mn-green-bg',
  'Fase 2': 'text-blue-900 border-blue-900 bg-blue-50',
  'Fase 3': 'text-amber-800 border-amber-800 bg-amber-50',
}

// Nav section anchors — order matters for display
export const NAV_ANCHORS = [
  { href: '#overview',    key: 'nav.overview' },
  { href: '#layers',      key: 'nav.layers' },
  { href: '#membership',  key: 'nav.membership' },
  { href: '#events',      key: 'nav.events' },
  { href: '#zoom',        key: 'nav.zoom' },
  { href: '#tech',        key: 'nav.tech' },
  { href: '#roadmap',     key: 'nav.roadmap' },
]

// Supported locales for the language switcher
export const LOCALES = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
]

// Layer phase keys — maps layer index (0-based) to phase badge key
export const LAYER_PHASES = ['Phase 1', 'Phase 1', 'Phase 1', 'Phase 1', 'Phase 2', 'Phase 3']

// Roadmap phase style config — parallel to roadmap.phases array
export const ROADMAP_STYLES = [
  { colorClass: 'text-mn-green-text', dotClass: 'bg-mn-green-text' },
  { colorClass: 'text-blue-900',      dotClass: 'bg-blue-900' },
  { colorClass: 'text-amber-800',     dotClass: 'bg-amber-800' },
]

// Membership tier "featured" index (0-based) — determines dark background
export const FEATURED_TIER_INDEX = 1

// Manifesto pull-quote accent color
export const PULL_QUOTE_ACCENT = 'text-mn-red'
