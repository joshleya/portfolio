import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Radio,
  CheckCircle2,
  AlertTriangle,
  Maximize2,
  Code,
} from 'lucide-react';
import type { CursorState } from './CustomCursor';

interface Chapter03SereneProps {
  setCursorState: (state: CursorState) => void;
  onOpenLightbox: (imageUrl: string, title: string) => void;
}

const WORKFLOW_STEPS = [
  { id: '01', title: 'User Press SOS', role: 'Victim', desc: 'Distress signal initialized with high-precision GPS coordinates.' },
  { id: '02', title: 'Firebase Dispatch', role: 'Cloud Backend', desc: 'Geohash query triggers instant emergency room event in Firestore.' },
  { id: '03', title: 'Nearby Volunteers Notified', role: 'System Engine', desc: 'Push alert sent to active verified responders within 5km radius.' },
  { id: '04', title: 'Rescuer Accepts', role: 'Volunteer', desc: 'Responder accepts assignment; active channel established.' },
  { id: '05', title: 'Live GPS Vector Tracking', role: 'Navigation', desc: 'Real-time WebSocket stream computes turn-by-turn ETA updates.' },
  { id: '06', title: 'On-Site Arrival', role: 'Rendezvous', desc: 'Volunteer arrives at victim location; standby verification requested.' },
  { id: '07', title: 'Safe Code Verification', role: 'Security', desc: '4-digit OTP exchange confirms legitimate rescuer identity.' },
  { id: '08', title: 'Emergency Resolved', role: 'System Status', desc: 'Incident log closed and logged to audit database.' },
];

const FEATURES = [
  {
    num: '01',
    title: 'Instant SOS Activation',
    subtitle: 'Zero-Latency Emergency Signal Trigger',
    desc: 'In critical situations, seconds save lives. The SOS module bypasses multi-step forms with a single-action hold protocol that broadcasts exact lat-long coordinates and medical context to the cloud instantaneously.',
    badge: 'Real-Time Dispatch',
    image: '/assets/serene_hero.jpg',
  },
  {
    num: '02',
    title: 'Live GPS Vector Tracking',
    subtitle: 'Bi-Directional High Precision Location Stream',
    desc: 'Powered by continuous geospatial polling, both the person in distress and the responding volunteer track each other on an interactive dark mode vector map with live dynamic ETA calculation.',
    badge: 'GPS & WebSockets',
    image: '/assets/serene_hero.jpg',
  },
  {
    num: '03',
    title: 'Volunteer Matching Engine',
    subtitle: 'Radius-Based Proximity Dispatch',
    desc: 'Intelligent spatial queries instantly identify verified first-responders, certified EMTs, and local volunteers within immediate physical proximity to minimize response windows.',
    badge: 'Geohash Engine',
    image: '/assets/serene_hero.jpg',
  },
  {
    num: '04',
    title: 'Command Center Admin Dashboard',
    subtitle: 'System-Wide Emergency Heatmaps & Control',
    desc: 'Comprehensive web control panel enabling administrative authorities and dispatchers to monitor city-wide incident maps, track responder status, and manage verified volunteer credentials.',
    badge: 'Web Command Platform',
    image: '/assets/serene_admin.jpg',
  },
  {
    num: '05',
    title: 'Safe Code OTP Verification',
    subtitle: 'Cryptographic Rescuer Authentication Protocol',
    desc: 'To prevent impersonation and guarantee safety during vulnerability, an encrypted 4-digit Safe Code generated on the victim device must be entered by the volunteer upon physical arrival before concluding the rescue.',
    badge: 'OTP Security Protocol',
    image: '/assets/serene_safecode.jpg',
  },
];

const TECH_STACK = [
  { name: 'React', desc: 'Frontend UI Architecture' },
  { name: 'Firebase', desc: 'Backend Cloud Services' },
  { name: 'Authentication', desc: 'Role-Based Auth' },
  { name: 'Cloud Firestore', desc: 'Document Database' },
  { name: 'GPS', desc: 'Geolocation API' },
  { name: 'Maps', desc: 'Interactive Geospatial UI' },
  { name: 'Realtime Database', desc: 'Sub-second Sync' },
  { name: 'Role-Based Access', desc: 'RBAC Security' },
];

export const Chapter03Serene: React.FC<Chapter03SereneProps> = ({
  setCursorState,
  onOpenLightbox,
}) => {
  const [activeWorkflowIndex, setActiveWorkflowIndex] = useState(0);

  // Auto step cycle for workflow if user doesn't interact
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveWorkflowIndex((prev) => (prev + 1) % WORKFLOW_STEPS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="chapter-03"
      className="relative min-h-screen py-24 px-6 lg:px-16 overflow-hidden border-b border-white/5 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Chapter Lead Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
          <span className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase">
            CHAPTER 03 // FEATURED CASE STUDY
          </span>
        </div>

        {/* Project Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7">
            <span className="text-xs font-mono text-[#D4AF37] tracking-widest uppercase px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#0F0F12]">
              REAL-TIME EMERGENCY RESPONSE PLATFORM
            </span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="mt-6 font-display text-6xl sm:text-8xl font-black text-[#F5F5F5] tracking-tight uppercase"
            >
              SERENE<span className="text-[#D4AF37]">.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg sm:text-2xl font-sans text-[#B8B8B8] font-light leading-relaxed max-w-2xl"
            >
              A real-time emergency response platform that connects people in distress with verified nearby volunteers using live GPS tracking, role-based authentication, secure rescue verification, and Firebase-powered coordination.
            </motion.p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://serene-five-chi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setCursorState({ text: 'LAUNCH', variant: 'hover' })}
                onMouseLeave={() => setCursorState({ text: '', variant: 'default' })}
                className="group flex items-center gap-3 px-8 py-4 rounded-full bg-[#D4AF37] hover:bg-[#F5F5F5] text-black font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-lg shadow-[#D4AF37]/10"
              >
                <span>LAUNCH LIVE EXPERIENCE</span>
                <ExternalLink className="w-4 h-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <div
                className="flex items-center gap-2 px-5 py-4 rounded-full border border-white/10 glass-panel text-xs font-mono text-[#6E6E73] cursor-not-allowed"
                title="Repository private / released upon request"
              >
                <Code className="w-4 h-4 text-[#A1A1AA]" />
                <span>SOURCE CODE (PROPRIETARY)</span>
              </div>
            </div>
          </div>

          {/* Hero Mockup Showcase Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative max-w-sm w-full group cursor-pointer"
              onClick={() => onOpenLightbox('/assets/serene_hero.jpg', 'SERENE App Interface')}
              onMouseEnter={() => setCursorState({ text: 'ZOOM', variant: 'gallery' })}
              onMouseLeave={() => setCursorState({ text: '', variant: 'default' })}
            >
              {/* Glow backdrop */}
              <div className="absolute inset-0 bg-[#D4AF37]/20 rounded-3xl blur-3xl group-hover:bg-[#D4AF37]/30 transition-all duration-500" />
              <img
                src="/assets/serene_hero.jpg"
                alt="SERENE Mobile App Mockup"
                className="relative z-10 w-full h-auto rounded-3xl border border-white/15 shadow-2xl object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute bottom-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                <Maximize2 className="w-4 h-4 text-[#D4AF37]" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Problem vs Solution Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-8 sm:p-10 rounded-3xl border border-red-500/20 relative overflow-hidden"
          >
            <div className="flex items-center gap-3 text-red-400 mb-6">
              <AlertTriangle className="w-6 h-6" />
              <span className="text-xs font-mono tracking-widest uppercase font-semibold">
                THE REAL-WORLD CHALLENGE
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F5F5F5] mb-4">
              Traditional Emergency Response Delays
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-[#B8B8B8] font-sans leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">•</span>
                Ambulance dispatches suffer critical latency due to dense city traffic and dispatch bottlenecks.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">•</span>
                Nearby off-duty medical volunteers or trained bystanders are unaware of nearby distress signals.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold">•</span>
                Lack of identity verification poses severe safety risks for vulnerable individuals seeking assistance.
              </li>
            </ul>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel-gold p-8 sm:p-10 rounded-3xl relative overflow-hidden"
          >
            <div className="flex items-center gap-3 text-[#D4AF37] mb-6">
              <CheckCircle2 className="w-6 h-6" />
              <span className="text-xs font-mono tracking-widest uppercase font-semibold">
                THE SERENE ARCHITECTURE
              </span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F5F5F5] mb-4">
              Instant Decentralized Rescue Mesh
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-[#B8B8B8] font-sans leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] font-bold">•</span>
                1-Tap Instant SOS broadcasting live high-precision GPS geohashes to nearby verified citizens.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] font-bold">•</span>
                Firebase Realtime Database synchronization ensuring sub-second location updates and volunteer arrival vectors.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] font-bold">•</span>
                Encrypted 4-digit Safe Code OTP protocol guaranteeing authenticity before any rescue handover.
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Interactive Visual Timeline Workflow */}
        <div className="mb-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono text-[#D4AF37] tracking-widest uppercase">
              // INTERACTIVE SYSTEM ARCHITECTURE
            </span>
            <h3 className="font-display text-3xl sm:text-5xl font-bold text-[#F5F5F5] mt-3">
              Emergency Dispatch Workflow
            </h3>
            <p className="text-sm font-sans text-[#A1A1AA] mt-2">
              Click any node to inspect the live step-by-step state transition.
            </p>
          </div>

          {/* Stepper Grid Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-8">
            {WORKFLOW_STEPS.map((step, idx) => {
              const isActive = activeWorkflowIndex === idx;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveWorkflowIndex(idx)}
                  onMouseEnter={() => setCursorState({ text: step.id, variant: 'hover' })}
                  onMouseLeave={() => setCursorState({ text: '', variant: 'default' })}
                  className={`p-3 rounded-xl text-left border transition-all duration-300 ${
                    isActive
                      ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-[#D4AF37] scale-105 shadow-lg shadow-[#D4AF37]/10'
                      : 'bg-[#0F0F12] border-white/10 text-[#6E6E73] hover:border-white/30 hover:text-[#F5F5F5]'
                  }`}
                >
                  <div className="text-[10px] font-mono font-bold tracking-widest">
                    STEP {step.id}
                  </div>
                  <div className="text-xs font-display font-semibold mt-1 truncate">
                    {step.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Details Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeWorkflowIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="glass-panel p-8 sm:p-12 rounded-3xl border border-[#D4AF37]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
            >
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-mono font-semibold">
                    ROLE: {WORKFLOW_STEPS[activeWorkflowIndex].role.toUpperCase()}
                  </span>
                  <span className="text-xs font-mono text-[#6E6E73]">
                    STATE 0{activeWorkflowIndex + 1} OF 08
                  </span>
                </div>
                <h4 className="font-display text-2xl sm:text-4xl font-bold text-[#F5F5F5]">
                  {WORKFLOW_STEPS[activeWorkflowIndex].title}
                </h4>
                <p className="mt-3 text-sm sm:text-base font-sans text-[#B8B8B8] leading-relaxed">
                  {WORKFLOW_STEPS[activeWorkflowIndex].desc}
                </p>
              </div>

              {/* Step Navigation Dots */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() =>
                    setActiveWorkflowIndex(
                      (prev) => (prev - 1 + WORKFLOW_STEPS.length) % WORKFLOW_STEPS.length
                    )
                  }
                  className="px-4 py-2 rounded-full border border-white/10 hover:border-[#D4AF37] text-xs font-mono text-[#F5F5F5]"
                >
                  PREV
                </button>
                <button
                  onClick={() =>
                    setActiveWorkflowIndex((prev) => (prev + 1) % WORKFLOW_STEPS.length)
                  }
                  className="px-4 py-2 rounded-full bg-[#D4AF37] text-black text-xs font-mono font-bold"
                >
                  NEXT
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 5 Viewport Pinned Feature Showcase */}
        <div className="mb-32 flex flex-col gap-24">
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <div>
              <span className="text-xs font-mono text-[#D4AF37] tracking-widest uppercase">
                // MODULE BREAKDOWN
              </span>
              <h3 className="font-display text-3xl sm:text-5xl font-bold text-[#F5F5F5] mt-2">
                Core Feature Architecture
              </h3>
            </div>
            <span className="text-xs font-mono text-[#A1A1AA] hidden sm:block">
              05 PLATFORM PILLARS
            </span>
          </div>

          {FEATURES.map((feat) => (
            <motion.div
              key={feat.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center p-8 sm:p-12 rounded-3xl glass-panel border border-white/10 relative overflow-hidden"
            >
              {/* Text Info */}
              <div className="lg:col-span-6 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-mono font-bold text-[#D4AF37]">
                    {feat.num}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#B8B8B8]">
                    {feat.badge}
                  </span>
                </div>

                <h4 className="font-display text-3xl sm:text-4xl font-bold text-[#F5F5F5]">
                  {feat.title}
                </h4>
                <p className="text-xs font-mono text-[#D4AF37] mt-1 tracking-wider">
                  {feat.subtitle}
                </p>
                <p className="mt-5 text-sm sm:text-base font-sans text-[#B8B8B8] leading-relaxed">
                  {feat.desc}
                </p>
              </div>

              {/* Image Preview Card */}
              <div className="lg:col-span-6">
                <div
                  onClick={() => onOpenLightbox(feat.image, feat.title)}
                  onMouseEnter={() => setCursorState({ text: 'VIEW', variant: 'gallery' })}
                  onMouseLeave={() => setCursorState({ text: '', variant: 'default' })}
                  className="relative group rounded-2xl overflow-hidden border border-white/10 cursor-pointer aspect-video bg-[#0A0A0C]"
                >
                  <img
                    src={feat.image}
                    alt={feat.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-xs font-mono text-[#D4AF37] flex items-center gap-2">
                      <Maximize2 className="w-4 h-4" /> CLICK TO EXPAND FULLSCREEN
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Technology Labels Matrix */}
        <div className="mb-32">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-mono text-[#D4AF37] tracking-widest uppercase">
              // TECH STACK & INTEGRATIONS
            </span>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#F5F5F5] mt-2">
              Engineering Stack
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {TECH_STACK.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.05, y: -4 }}
                className="px-6 py-3 rounded-2xl bg-[#0F0F12] border border-[#D4AF37]/30 hover:border-[#D4AF37] flex flex-col items-center justify-center transition-all duration-300 cursor-default"
              >
                <span className="font-display font-bold text-base text-[#F5F5F5]">
                  {tech.name}
                </span>
                <span className="text-[10px] font-mono text-[#A1A1AA] uppercase tracking-wider mt-0.5">
                  {tech.desc}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Gallery Lightbox Preview Grid */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono text-[#D4AF37] tracking-widest uppercase">
                // EXHIBITION GALLERY
              </span>
              <h3 className="font-display text-3xl font-bold text-[#F5F5F5] mt-1">
                Visual Assets & Interface Mockups
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'SERENE Mobile SOS & GPS Radar', url: '/assets/serene_hero.jpg' },
              { title: 'SERENE Admin Command Dispatch', url: '/assets/serene_admin.jpg' },
              { title: 'Safe Code Verification OTP', url: '/assets/serene_safecode.jpg' },
            ].map((img, index) => (
              <motion.div
                key={index}
                onClick={() => onOpenLightbox(img.url, img.title)}
                onMouseEnter={() => setCursorState({ text: 'LIGHTBOX', variant: 'gallery' })}
                onMouseLeave={() => setCursorState({ text: '', variant: 'default' })}
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#0F0F12] aspect-[3/4] cursor-pointer"
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end">
                  <span className="text-xs font-mono text-[#D4AF37]">ASSET 0{index + 1}</span>
                  <h4 className="font-display font-semibold text-lg text-[#F5F5F5] mt-1">
                    {img.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Launch Banner */}
        <div className="glass-panel-gold p-10 sm:p-16 rounded-3xl text-center relative overflow-hidden flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] mb-6">
            <Radio className="w-8 h-8 animate-pulse" />
          </div>

          <h3 className="font-display text-3xl sm:text-5xl font-extrabold text-[#F5F5F5]">
            Experience SERENE Live
          </h3>
          <p className="mt-4 max-w-xl text-sm sm:text-base font-sans text-[#B8B8B8]">
            Explore the deployed cloud application in action on Vercel with real-time GPS simulation and live Firebase dispatch.
          </p>

          <a
            href="https://serene-five-chi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setCursorState({ text: 'GO', variant: 'hover' })}
            onMouseLeave={() => setCursorState({ text: '', variant: 'default' })}
            className="mt-8 px-10 py-5 rounded-full bg-[#D4AF37] hover:bg-white text-black font-mono font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-xl shadow-[#D4AF37]/20 flex items-center gap-3"
          >
            <span>LAUNCH SERENE PLATFORM</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
