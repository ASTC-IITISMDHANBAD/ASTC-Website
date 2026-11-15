import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { members } from '../data/members';
import MemberCard from '../components/MemberCard';

// ================================================================
// DIVISION MEMBERSHIP — keyed by member ID
// Each entry lists every division tab the member appears in,
// and what position to show on their card in THAT tab.
// A member can appear in multiple divisions with different positions.
// ================================================================
type DivEntry = { tabId: string; position: string };
const DIVISION_MEMBERSHIP: Record<string, DivEntry[]> = {

  // ── Leadership ────────────────────────────────────────────────
  "24JE0177": [
    { tabId: 'leadership', position: 'Coordinator' },
    { tabId: 'electronics', position: 'Pre-Finals' },
  ],
  "24JE0729": [
    { tabId: 'leadership', position: 'Co-coordinator' },
    { tabId: 'data-driven', position: 'Pre-Finals' },
  ],

  // ── Theoretical ───────────────────────────────────────────────
  "24JE0745": [
    { tabId: 'leadership', position: 'Theoretical Division Head' },
    { tabId: 'theoretical', position: 'Theoretical Division Head' },
  ],
  "24JE0613": [
    { tabId: 'leadership', position: 'Content Head' },
    { tabId: 'theoretical', position: 'Pre-Finals' },
  ],
  "24JE0727": [
    { tabId: 'theoretical', position: 'Pre-Finals' },
  ],

  // ── Electronics ───────────────────────────────────────────────
  "24JE0170": [
    { tabId: 'leadership', position: 'Electronics Division Head' },
    { tabId: 'electronics', position: 'Electronics Division Head' },
  ],
  "25JE1082": [
    { tabId: 'electronics', position: 'Sophomore' },
  ],
  "25JE0608": [
    { tabId: 'electronics', position: 'Sophomore' },
    { tabId: 'aerospace', position: 'Sophomore' },
  ],

  // ── Data-Driven ───────────────────────────────────────────────
  "24JE0737": [
    { tabId: 'leadership', position: 'Data-Driven Division Head' },
    { tabId: 'data-driven', position: 'Data-Driven Division Head' },
  ],
  "24JE0594": [
    { tabId: 'data-driven', position: 'Pre-Finals' },
  ],
  "24JE0748": [
    { tabId: 'data-driven', position: 'Pre-Finals' },
  ],
  "24JE1058": [
    { tabId: 'data-driven', position: 'Pre-Finals' },
  ],
  "24JE0754": [
    { tabId: 'data-driven', position: 'Pre-Finals' },
  ],
  "25JE0168": [
    { tabId: 'data-driven', position: 'Sophomore' },
    { tabId: 'aerospace', position: 'Sophomore' },
    { tabId: 'electronics', position: 'Sophomore' },
  ],
  "25JE0782": [
    { tabId: 'data-driven', position: 'Sophomore' },
  ],
  "25JE0291": [
    { tabId: 'data-driven', position: 'Sophomore' },
  ],
  "25JE0052": [
    { tabId: 'data-driven', position: 'Sophomore' },
  ],
  "25JE0792": [
    { tabId: 'data-driven', position: 'Sophomore' },
  ],
  "25JE0284": [
    { tabId: 'data-driven', position: 'Sophomore' },
  ],
  "25JE0802": [
    { tabId: 'data-driven', position: 'Sophomore' },
  ],
  "25JE0803": [
    { tabId: 'data-driven', position: 'Sophomore' },
  ],
  "25JE0806": [
    { tabId: 'data-driven', position: 'Sophomore' },
  ],

  // ── Aerospace ─────────────────────────────────────────────────
  "24JE0349": [
    { tabId: 'aerospace', position: 'Pre-Finals' },
  ],
  "25JE0377": [
    { tabId: 'aerospace', position: 'Sophomore' },
  ],
  "25JE0176": [
    { tabId: 'aerospace', position: 'Sophomore' },
  ],
  "25JE0288": [
    { tabId: 'aerospace', position: 'Sophomore' },
  ],
  "25JE0385": [
    { tabId: 'aerospace', position: 'Sophomore' },
  ],
};

// ================================================================
// Tab definitions
// ================================================================
type DivisionTab = { id: string; label: string; description: string; color: string };

const DIVISIONS: DivisionTab[] = [
  { id: 'all', label: 'All Members', description: 'Every member of ASTC across all divisions.', color: 'from-space-primary to-space-secondary' },
  { id: 'leadership', label: 'Leadership', description: 'The core leadership steering ASTC forward.', color: 'from-space-primary to-purple-900' },
  { id: 'theoretical', label: 'Theoretical', description: 'Astrophysics, orbital mechanics, and space science.', color: 'from-space-primary to-indigo-900' },
  { id: 'electronics', label: 'Electronics', description: 'Avionics, circuits, and embedded systems.', color: 'from-space-primary to-cyan-900' },
  { id: 'data-driven', label: 'Data-Driven', description: 'AI, ML, and data science to decode the cosmos.', color: 'from-space-primary to-blue-900' },
  { id: 'aerospace', label: 'Aerospace', description: 'Rocket science, propulsion, and space exploration.', color: 'from-space-primary to-orange-900' },
  { id: 'seniors', label: 'Senior Members', description: 'Final-year students (23JE) shaping the club.', color: 'from-space-primary to-amber-900' },
  { id: 'advisors', label: 'Advisors', description: 'Alumni & passouts guiding the club\'s vision.', color: 'from-teal-900 via-emerald-800 to-cyan-900' },
];

type SectionDef = { id: string; label: string; accentColor: string; borderColor: string };

const ALL_SECTIONS: SectionDef[] = [
  { id: 'leadership', label: 'Leadership', accentColor: 'text-purple-400', borderColor: 'border-purple-500/50' },
  { id: 'theoretical', label: 'Theoretical', accentColor: 'text-indigo-400', borderColor: 'border-indigo-500/50' },
  { id: 'electronics', label: 'Electronics', accentColor: 'text-cyan-400', borderColor: 'border-cyan-500/50' },
  { id: 'data-driven', label: 'Data-Driven', accentColor: 'text-blue-400', borderColor: 'border-blue-500/50' },
  { id: 'aerospace', label: 'Aerospace', accentColor: 'text-orange-400', borderColor: 'border-orange-500/50' },
  { id: 'seniors', label: 'Senior Members', accentColor: 'text-amber-400', borderColor: 'border-amber-500/50' },
  { id: 'advisors', label: 'Advisors', accentColor: 'text-emerald-300', borderColor: 'border-emerald-400/60' },
];

// ================================================================
// Helpers
// ================================================================
function cleanId(id: string) { return id.trim(); }

/** Default post shown on card when not in a specific division context */
function getDefaultPost(id: string): string {
  if (id.startsWith("22JE") || id.startsWith("21JE") || id.startsWith("20JE")) return "Advisor";
  if (id.startsWith("23JE")) return "Senior Member";
  if (id.startsWith("24JE")) return "Pre-Finals";
  if (id.startsWith("25JE")) return "Sophomore";
  return "Member";
}

/** Position shown on the card for a specific division context */
function getPositionInTab(id: string, tabId: string, defaultPost: string): string {
  const entries = DIVISION_MEMBERSHIP[id];
  if (!entries) return defaultPost;
  const entry = entries.find(e => e.tabId === tabId);
  return entry ? entry.position : defaultPost;
}

/** Primary section id for the grouped "All Members" view */
function getPrimarySection(id: string): string {
  const entries = DIVISION_MEMBERSHIP[id];
  if (!entries) {
    if (id.startsWith("22JE") || id.startsWith("21JE") || id.startsWith("20JE")) return 'advisors';
    if (id.startsWith("23JE")) return 'seniors';
    return 'advisors';
  }
  // Priority: leadership > specific division (first entry wins)
  const leadership = entries.find(e => e.tabId === 'leadership');
  if (leadership) return 'leadership';
  return entries[0].tabId;
}

/** All tabs this member should appear in */
function getDivisionTabs(id: string): string[] {
  const tabs = new Set<string>(['all']);
  const entries = DIVISION_MEMBERSHIP[id];
  if (entries) {
    for (const e of entries) tabs.add(e.tabId);
  } else {
    // Not in any named division
    if (id.startsWith("23JE")) tabs.add('seniors');
    if (id.startsWith("22JE") || id.startsWith("21JE") || id.startsWith("20JE")) tabs.add('advisors');
  }
  return Array.from(tabs);
}

// Enriched member type
type EnrichedMember = typeof members[number] & {
  cleanId: string;
  post: string;
  primarySection: string;
  divisionTabs: string[];
};

const POST_ORDER = [
  "Coordinator", "Co-coordinator",
  "Theoretical Division Head", "Electronics Division Head",
  "Data-Driven Division Head",
  "Pre-Finals", "Sophomore", "Senior Member", "Advisor", "Member",
];

function enrichMembers(): EnrichedMember[] {
  return members
    .map(m => {
      const id = cleanId(m.id);
      const defaultPost = getDefaultPost(id);
      const leadershipEntry = DIVISION_MEMBERSHIP[id]?.find(e => e.tabId === 'leadership');
      const post = leadershipEntry ? leadershipEntry.position : defaultPost;
      return {
        ...m,
        cleanId: id,
        post,
        primarySection: getPrimarySection(id),
        divisionTabs: getDivisionTabs(id),
      };
    })
    .sort((a, b) => {
      const pa = POST_ORDER.indexOf(a.post);
      const pb = POST_ORDER.indexOf(b.post);
      const diff = (pa < 0 ? 99 : pa) - (pb < 0 ? 99 : pb);
      if (diff !== 0) return diff;

      // Special ordering for Senior Members: Sai Swapnil at pos 1, Rohit at pos 2
      if (a.post === 'Senior Member' && b.post === 'Senior Member') {
        const getSeniorPriority = (name: string) => {
          const lower = name.toLowerCase();
          if (lower.includes('sai swapnil')) return 1;
          if (lower.includes('rohit')) return 2;
          return 99;
        };
        const pA = getSeniorPriority(a.name);
        const pB = getSeniorPriority(b.name);
        if (pA !== pB) return pA - pB;
      }

      return a.name.trim().localeCompare(b.name.trim());
    });
}

// ================================================================
// Section Divider
// ================================================================
const SectionDivider: React.FC<{ section: SectionDef; count: number }> = ({ section, count }) => (
  <motion.div
    className="col-span-full flex items-center gap-4 mt-8 mb-2"
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className={`flex-1 h-px border-t ${section.borderColor}`} />
    <div className={`flex items-center gap-2 px-5 py-2 rounded-full border ${section.borderColor} bg-space-dark`}>
      <span className={`font-display font-bold text-sm uppercase tracking-widest ${section.accentColor}`}>
        {section.label}
      </span>
      <span className={`text-xs font-mono px-1.5 py-0.5 rounded ${section.accentColor} bg-white/5`}>
        {count}
      </span>
    </div>
    <div className={`flex-1 h-px border-t ${section.borderColor}`} />
  </motion.div>
);

// ================================================================
// Members Page
// ================================================================
const Members: React.FC = () => {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  const [activeTab, setActiveTab] = React.useState<string>('all');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [delayModulus, setDelayModulus] = React.useState(3);

  const updateModulus = React.useCallback(() => {
    const w = window.innerWidth;
    setDelayModulus(w >= 1024 ? 3 : w >= 768 ? 2 : 1);
  }, []);

  React.useEffect(() => {
    updateModulus();
    window.addEventListener('resize', updateModulus);
    return () => window.removeEventListener('resize', updateModulus);
  }, [updateModulus]);

  const enriched = React.useMemo(() => enrichMembers(), []);
  const activeDivision = DIVISIONS.find(d => d.id === activeTab)!;

  const filteredMembers = React.useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return enriched.filter(m =>
      m.divisionTabs.includes(activeTab) &&
      (q === '' || m.name.trim().toLowerCase().includes(q) || m.post.toLowerCase().includes(q))
    );
  }, [enriched, activeTab, searchQuery]);

  const groupedSections = React.useMemo(() => {
    if (activeTab !== 'all') return null;
    return ALL_SECTIONS
      .map(sec => ({
        section: sec,
        members: filteredMembers.filter(m => m.divisionTabs.includes(sec.id)),
      }))
      .filter(g => g.members.length > 0);
  }, [activeTab, filteredMembers]);

  /** Render a MemberCard with the position for the current tab context */
  const renderCard = (member: EnrichedMember, index: number, contextTab: string) => {
    const contextPost = getPositionInTab(member.cleanId, contextTab, member.post);
    return (
      <MemberCard
        key={`${contextTab}-${member.cleanId}`}
        member={{ ...member, post: contextPost }}
        index={index}
        delayModulus={delayModulus}
      />
    );
  };

  return (
    <div className="pt-20 bg-space-dark min-h-screen">

      {/* Hero */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-space-primary/30 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <motion.p
            className="text-space-accent text-sm font-semibold tracking-[0.3em] uppercase mb-3"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          >
            // Meet the crew
          </motion.p>
          <motion.h1
            className="text-5xl md:text-6xl font-display font-bold text-white mb-5"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our <span className="text-space-accent">Team</span>
          </motion.h1>
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="h-1 w-24 bg-space-accent rounded-full" />
          </motion.div>
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
          >
            The engineers behind the machine — passionate students advancing aerospace innovation at IIT(ISM) Dhanbad.
          </motion.p>
        </div>
      </section>

      {/* Division Tabs */}
      <section className="sticky top-16 z-30 bg-space-dark/95 backdrop-blur-md border-b border-white/10 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-1 overflow-x-auto py-3 no-scrollbar">
            {DIVISIONS.map((div, i) => (
              <motion.button
                key={div.id}
                onClick={() => { setActiveTab(div.id); setSearchQuery(''); }}
                className={`
                  relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold
                  whitespace-nowrap transition-all duration-300 flex-shrink-0
                  ${activeTab === div.id
                    ? 'text-white bg-space-accent/20 border border-space-accent shadow-[0_0_12px_rgba(0,188,212,0.3)]'
                    : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                  }
                `}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {div.label}
                {activeTab === div.id && (
                  <motion.div
                    layoutId="active-tab-indicator"
                    className="absolute inset-0 rounded-lg bg-space-accent/10 -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Banner */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className={`bg-gradient-to-r ${activeDivision.color} border border-white/10 rounded-xl p-5 mb-6 flex items-center gap-4`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <h2 className="text-white font-display font-bold text-xl">{activeDivision.label}</h2>
                <p className="text-gray-300 text-sm mt-0.5">{activeDivision.description}</p>
              </div>
              <div className="ml-auto text-right hidden sm:block">
                <span className="text-space-accent font-bold text-2xl">{filteredMembers.length}</span>
                <p className="text-gray-400 text-xs">members</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Search */}
          <div className="relative mb-10">
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={`Search in ${activeDivision.label}...`}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-4 pr-10 py-3 text-white
                         placeholder-gray-500 focus:outline-none focus:border-space-accent transition-all duration-300"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
              >✕</button>
            )}
          </div>

          {/* Grid */}
          <AnimatePresence mode="wait">
            {filteredMembers.length > 0 ? (
              <motion.div
                key={activeTab + searchQuery}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 place-items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'all' && groupedSections
                  ? groupedSections.map(({ section, members: sm }) => (
                    <React.Fragment key={section.id}>
                      <SectionDivider section={section} count={sm.length} />
                      {sm.map((m, i) => renderCard(m, i, section.id))}
                    </React.Fragment>
                  ))
                  : filteredMembers.map((m, i) => renderCard(m, i, activeTab))
                }
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                className="flex flex-col items-center justify-center py-24 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-white font-display font-bold text-2xl mb-2">No members found</h3>
                <p className="text-gray-400">Try a different search or select another division.</p>
                <button
                  onClick={() => { setSearchQuery(''); setActiveTab('all'); }}
                  className="mt-6 px-6 py-2 rounded-lg bg-space-accent/20 border border-space-accent
                             text-space-accent hover:bg-space-accent/30 transition"
                >
                  View All Members
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Members;
