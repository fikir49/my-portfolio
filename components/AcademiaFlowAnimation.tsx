import { motion } from 'framer-motion';

const shardEntries = [
  { label: 'Pixels', x: -72, y: -50, delay: 0.5 },
  { label: 'Shard 1', x: 72, y: -50, delay: 0.65 },
  { label: 'Shard 2', x: -72, y: 50, delay: 0.8 },
  { label: 'Shard 3', x: 72, y: 50, delay: 0.95 },
];

export function AcademiaFlowAnimation() {
  return (
    <div className="relative mx-auto mb-6 max-w-[360px] px-4 py-6 overflow-hidden z-0">
      <div className="relative flex flex-wrap justify-center gap-4 items-center overflow-hidden z-10">
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="relative z-20 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-tech-green to-tech-cyan shadow-[0_0_60px_rgba(0,255,65,0.3)] border border-tech-green"
        >
          <svg viewBox="0 0 24 24" className="h-12 w-12 text-tech-black" fill="currentColor">
            <path d="M12 2L5 5v6c0 5.25 3.5 9.74 7 11 3.5-1.26 7-5.75 7-11V5l-7-3z" />
            <path d="M8.5 9.5l2.5 2.75L15.5 8" fill="none" stroke="#0a0a0a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>

        {shardEntries.map((shard) => (
          <motion.div
            key={shard.label}
            initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
            animate={{ opacity: 1, scale: 1, x: shard.x, y: shard.y }}
            transition={{ duration: 0.6, delay: shard.delay, type: 'spring', stiffness: 120, damping: 15 }}
            className="absolute flex h-14 w-14 items-center justify-center rounded-2xl bg-black/90 border border-white/10 shadow-[0_20px_40px_-20px_rgba(0,255,65,0.45)]"
          >
            <svg viewBox="0 0 24 24" className="h-7 w-7 text-tech-cyan" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 11l5 5 4-4 6 6" />
              <circle cx="8" cy="9" r="1.5" fill="currentColor" />
            </svg>
          </motion.div>
        ))}
      </div>

      <div className="z-20 relative mb-8 mt-6 grid grid-cols-3 gap-2 text-[10px] text-text-secondary uppercase tracking-[0.25em] text-center">
        <span className="col-span-3">Encryption → Steganography → Sharding</span>
        <span className="col-span-1 text-tech-green">Shield</span>
        <span className="col-span-2 text-tech-cyan">Split into secure shards</span>
      </div>
    </div>
  );
}
