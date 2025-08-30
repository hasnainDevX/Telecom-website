
import React from 'react';
import { motion } from 'framer-motion';
import { Search, BarChart3, CheckSquare, Smile } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Search,
      title: 'Fill the form',
      description: 'Provide your zip code and fill out the form then we can find the best options for you.',
      color: 'text-blue-500 dark:text-blue-400',
      imageAlt: 'Search icon with a location pin.'
    },
    {
      icon: BarChart3,
      title: 'Compare Providers & Plans',
      description: 'Easily compare speeds, pricing, features, and customer reviews for different services side-by-side.',
      color: 'text-purple-500 dark:text-purple-400',
      imageAlt: 'Bar chart icon symbolizing comparison of data.'
    },
    {
      icon: CheckSquare,
      title: 'Choose the Best Fit',
      description: 'We will help you find the best plan that fits your needs.',
      color: 'text-green-500 dark:text-green-400',
      imageAlt: 'Check square icon, representing making a selection.'
    },
    {
      icon: Smile,
      title: 'Connect with Confidence!',
      description: 'Once you\'ve decided, we can help guide you to the provider\'s website to sign up for your chosen services.',
      color: 'text-yellow-500 dark:text-yellow-400',
      imageAlt: 'Smiling face icon, representing satisfaction.'
    },
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
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-14 md:mb-20"
        >
          <h2 className="section-title mb-4">
            Finding Your Best Option is Simple
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Follow these easy steps to discover and compare telecom services with GoQuality Networks.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-16 right-16 h-0.5 bg-border/40 transform -translate-y-1/2 -z-10"></div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative bg-card rounded-xl p-6 text-center shadow-card-hover dark:shadow-card-hover-dark hover:shadow-lg dark:hover:shadow-primary/20 transition-all duration-300 flex flex-col items-center"
              >
                <div className={`absolute -top-6 w-14 h-14 rounded-full bg-card flex items-center justify-center ring-4 ring-background shadow-lg`}>
                  <div className={`w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center`}>
                    <step.icon className={`w-6 h-6 ${step.color}`} />
                  </div>
                </div>
                <div className="pt-10">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
