
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Wifi, Search, Users, LifeBuoy, ShieldCheck } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Search,
      title: 'Easy Provider Comparison',
      description: 'Quickly compare internet, TV, and phone providers in your area. See plans, pricing, and features side-by-side.',
      color: 'text-primary',
      imageAlt: 'Magnifying glass icon over a map, symbolizing local provider search.'
    },
    {
      icon: BarChart3,
      title: 'Unbiased Information',
      description: 'Access clear, unbiased information to help you understand different technologies (fiber, cable, 5G) and service terms.',
      color: 'text-green-500 dark:text-green-400',
      imageAlt: 'Bar chart icon, symbolizing data and comparison.'
    },
    {
      icon: Wifi,
      title: 'Find Your Perfect Speed',
      description: 'Understand what internet speeds you truly need for streaming, gaming, working from home, and more.',
      color: 'text-accent',
      imageAlt: 'Wi-Fi symbol with speed indicators.'
    },
    {
      icon: ShieldCheck,
      title: 'Verified Customer Reviews',
      description: 'Read authentic reviews from real customers to get insights into provider reliability and service quality.',
      color: 'text-purple-500 dark:text-purple-400',
      imageAlt: 'Shield icon with a checkmark, representing verified reviews.'
    },
    {
      icon: Users,
      title: 'Personalized Recommendations',
      description: 'Answer a few simple questions and get personalized recommendations tailored to your household\'s needs and budget.',
      color: 'text-pink-500 dark:text-pink-400',
      imageAlt: 'User profile icons with gears, symbolizing personalization.'
    },
    {
      icon: LifeBuoy,
      title: 'Expert Guidance & Support',
      description: 'Our resources and guides simplify complex telecom topics, empowering you to make informed decisions.',
      color: 'text-teal-500 dark:text-teal-400',
      imageAlt: 'Life buoy icon, symbolizing help and guidance.'
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
    <section id='learn-more' className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-14 md:mb-20"
        >
          <h2 className="section-title mb-4">
            How FiberSolution Guides You
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            We simplify the process of choosing telecom services. Get clear insights and find the best options available to you.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card rounded-xl p-6 md:p-8 shadow-card-hover dark:shadow-card-hover-dark hover:shadow-lg dark:hover:shadow-primary/20 transition-all duration-300 group flex flex-col items-center text-center"
            >
              <div className={`w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 ring-2 ring-primary/20`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-2.5 text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
