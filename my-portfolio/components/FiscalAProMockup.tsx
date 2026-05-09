"use client";

import { motion } from 'framer-motion';

export function FiscalAProMockup() {
  return (
    <div className="mb-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative bg-black/40 rounded-2xl p-4 border border-white/10 backdrop-blur-sm"
      >
        {/* Mockup Header */}
        <div className="flex items-center justify-between mb-3">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-2"
          >
            <div className="w-3 h-3 bg-tech-green rounded-full"></div>
            <span className="text-sm font-medium text-tech-green">Android Financial Intelligence</span>
          </motion.div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xs text-text-secondary"
          >
            Today
          </motion.div>
        </div>

        {/* Transaction List */}
        <div className="space-y-2 mb-4">
          {[
            { desc: "Grocery Shopping", amount: "-$45.20", type: "expense" },
            { desc: "Salary Deposit", amount: "+$2,850.00", type: "income" },
            { desc: "Coffee Shop", amount: "-$12.50", type: "expense" },
            { desc: "Online Transfer", amount: "-$200.00", type: "expense" }
          ].map((transaction, index) => (
            <motion.div
              key={index}
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="flex items-center justify-between py-2 px-3 bg-white/5 rounded-lg border border-white/5"
            >
              <span className="text-sm text-text-primary">{transaction.desc}</span>
              <span className={`text-sm font-medium ${transaction.type === 'income' ? 'text-tech-green' : 'text-red-400'}`}>
                {transaction.amount}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Budget Progress Bar */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="space-y-2"
        >
          <div className="flex justify-between items-center">
            <span className="text-xs text-text-secondary">Monthly Budget</span>
            <span className="text-xs text-tech-cyan">$1,250 / $2,000</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "62.5%" }}
              viewport={{ once: true }}
              transition={{ delay: 1.1, duration: 1 }}
              className="bg-gradient-to-r from-tech-green to-tech-cyan h-2 rounded-full"
            />
          </div>
          <div className="text-xs text-text-muted text-center">62.5% used</div>
        </motion.div>
      </motion.div>
    </div>
  );
}