"use client";

import { motion } from 'framer-motion';
import { InfrastructureDiagram } from './InfrastructureDiagram';

export function Infrastructure() {

  return (
    <section id="infrastructure" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-text-primary">
            Infrastructure
          </h2>
          <p className="text-text-secondary mb-12 max-w-2xl">
            Sovereign architecture: Distributed P2P systems connecting across devices with end-to-end encryption and zero-knowledge proofs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-black/20 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-[0_30px_80px_-50px_rgba(0,255,65,0.35)]"
        >
          <InfrastructureDiagram />
        </motion.div>

        {/* Architecture Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          <div className="bg-black/20 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-tech-green rounded-full flex items-center justify-center mr-3">
                <span className="text-tech-black font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-text-primary">Device Control</h3>
            </div>
            <p className="text-text-secondary text-sm">Direct control across your personal ecosystem of devices with synchronized state management.</p>
          </div>

          <div className="bg-black/20 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-tech-cyan rounded-full flex items-center justify-center mr-3">
                <span className="text-tech-black font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-text-primary">E2E Encryption</h3>
            </div>
            <p className="text-text-secondary text-sm">End-to-end encryption for all network communications ensuring data sovereignty and privacy.</p>
          </div>

          <div className="bg-black/20 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-tech-purple rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-text-primary">P2P Sync</h3>
            </div>
            <p className="text-text-secondary text-sm">Peer-to-peer synchronization with zero-knowledge proofs for trustless data verification.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
