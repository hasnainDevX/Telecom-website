
import React from 'react';
import { motion } from 'framer-motion';
import { Users, BarChart3, ListChecks, Smile } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { icon: Users, number: '200+', label: 'Users Helped Monthly' },
    { icon: ListChecks, number: '500+', label: 'Providers Compared' },
    { icon: BarChart3, number: '300+', label: 'Plans Detailed' },
    { icon: Smile, number: '95%', label: 'User Satisfaction Rate' }
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, duration: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 12 }
    }
  };

  return (
    <section className="py-20 md:py-28 bg-muted/30 dark:bg-muted/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-14 md:mb-20"
        >
          <h2 className="section-title mb-4">
            Go Quality Networks by the Numbers
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            We're proud of our impact in helping users navigate the complex world of telecom services.
          </p>
        </motion.div>

        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card rounded-xl p-6 text-center shadow-card-hover dark:shadow-card-hover-dark hover:shadow-lg dark:hover:shadow-primary/20 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-5 bg-primary/10 rounded-lg flex items-center justify-center ring-2 ring-primary/20">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-primary mb-1.5">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
