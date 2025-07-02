import React from 'react';
import { motion } from 'framer-motion';

const TermsSection = ({ title, sectionNumber, children }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass rounded-2xl p-8"
    >
      <h2 className="text-2xl font-bold text-foreground mb-6">
        {sectionNumber && <span className="text-primary mr-2">{sectionNumber}.</span>}
        {title}
      </h2>
      {children}
    </motion.section>
  );
};

export default TermsSection;