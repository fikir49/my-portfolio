"use client";

import { motion } from 'framer-motion';
import { User, Laptop, Smartphone, Server, Cloud, Network } from 'lucide-react';

export function InfrastructureDiagram() {
  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      {/* Central User Node */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-400/50">
            <User className="w-8 h-8 text-black" />
          </div>
          <div className="mt-2 text-center">
            <div className="text-sm font-medium text-green-400">You</div>
            <div className="text-xs text-gray-400">Sovereign Node</div>
          </div>
        </div>
      </motion.div>

      {/* Device Nodes */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-20 left-20"
      >
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-400/30">
            <Laptop className="w-6 h-6 text-black" />
          </div>
          <div className="mt-2 text-center">
            <div className="text-xs font-medium text-cyan-400">Laptop</div>
            <div className="text-xs text-gray-500">Primary Node</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute top-20 right-20"
      >
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-400/30">
            <Smartphone className="w-6 h-6 text-black" />
          </div>
          <div className="mt-2 text-center">
            <div className="text-xs font-medium text-cyan-400">Mobile</div>
            <div className="text-xs text-gray-500">Relay Node</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-400/30">
            <Server className="w-6 h-6 text-black" />
          </div>
          <div className="mt-2 text-center">
            <div className="text-xs font-medium text-cyan-400">Server</div>
            <div className="text-xs text-gray-500">Backup Node</div>
          </div>
        </div>
      </motion.div>

      {/* Cloud Node */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute top-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-400/50">
            <Cloud className="w-7 h-7 text-white" />
          </div>
          <div className="mt-2 text-center">
            <div className="text-xs font-medium text-purple-400">Distributed</div>
            <div className="text-xs text-gray-400">Network</div>
          </div>
        </div>
      </motion.div>

      {/* Peer Nodes */}
      <motion.div
        initial={{ x: -120, y: 60, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-16 left-16"
      >
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 bg-gray-800 border-2 border-green-400 rounded-full flex items-center justify-center shadow-lg shadow-green-400/20">
            <Network className="w-5 h-5 text-green-400" />
          </div>
          <div className="mt-1 text-center">
            <div className="text-xs font-medium text-green-400">Peer 1</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 120, y: 60, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute bottom-16 right-16"
      >
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 bg-gray-800 border-2 border-green-400 rounded-full flex items-center justify-center shadow-lg shadow-green-400/20">
            <Network className="w-5 h-5 text-green-400" />
          </div>
          <div className="mt-1 text-center">
            <div className="text-xs font-medium text-green-400">Peer 2</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 0, y: 120, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 bg-gray-800 border-2 border-green-400 rounded-full flex items-center justify-center shadow-lg shadow-green-400/20">
            <Network className="w-5 h-5 text-green-400" />
          </div>
          <div className="mt-1 text-center">
            <div className="text-xs font-medium text-green-400">Peer 3</div>
          </div>
        </div>
      </motion.div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 300">
        {/* User to Devices */}
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.9 }}
          d="M 200 150 Q 150 120 120 80"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.0 }}
          d="M 200 150 Q 250 120 280 80"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.1 }}
          d="M 200 150 Q 200 200 200 220"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
        />

        {/* Devices to Cloud */}
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.2 }}
          d="M 120 80 Q 160 50 200 40"
          stroke="url(#gradient2)"
          strokeWidth="2"
          fill="none"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.3 }}
          d="M 280 80 Q 240 50 200 40"
          stroke="url(#gradient2)"
          strokeWidth="2"
          fill="none"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.4 }}
          d="M 200 220 Q 200 180 200 40"
          stroke="url(#gradient2)"
          strokeWidth="2"
          fill="none"
        />

        {/* Cloud to Peers */}
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.5 }}
          d="M 200 40 Q 160 60 140 100"
          stroke="url(#gradient3)"
          strokeWidth="2"
          fill="none"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.6 }}
          d="M 200 40 Q 240 60 260 100"
          stroke="url(#gradient3)"
          strokeWidth="2"
          fill="none"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.7 }}
          d="M 200 40 Q 200 80 200 120"
          stroke="url(#gradient3)"
          strokeWidth="2"
          fill="none"
        />

        {/* Peer connections */}
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.8 }}
          d="M 140 100 Q 170 130 200 120"
          stroke="url(#gradient4)"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.9 }}
          d="M 260 100 Q 230 130 200 120"
          stroke="url(#gradient4)"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />

        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00ff41" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0ff7ff" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0ff7ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#b000ff" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#b000ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00ff41" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00ff41" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0ff7ff" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}