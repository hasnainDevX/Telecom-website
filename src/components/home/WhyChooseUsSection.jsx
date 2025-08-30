
import React from 'react';
import { motion } from 'framer-motion';
import { CheckSquare, Users, Award, Compass, MessageSquare, Lightbulb } from 'lucide-react';
import WhyChooseUsImg from '../../assets/WhyChooseUs.png';

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: CheckSquare,
      title: 'Comprehensive Comparisons',
      description: 'We provide detailed side-by-side comparisons of internet, TV, and phone plans from various providers.',
      imageAlt: 'Checklist icon with multiple items, symbolizing comprehensive comparisons.'
    },
    {
      icon: Users,
      title: 'User-Focused Approach',
      description: 'Our platform is designed with you in mind, making it easy to navigate complex telecom choices and find what fits your needs.',
      imageAlt: 'Group of diverse user icons, representing a user-focused approach.'
    },
    {
      icon: Award,
      title: 'Unbiased & Transparent',
      description: 'We offer impartial information to help you make confident decisions without any hidden agendas.',
      imageAlt: 'Award ribbon icon, symbolizing trust and unbiased information.'
    },
    {
      icon: Lightbulb,
      title: 'Expert Insights',
      description: 'Benefit from our curated guides, tips, and articles that demystify telecom services and industry trends.',
      imageAlt: 'Lightbulb icon, representing expert insights and knowledge.'
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, duration: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      x: 0, 
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
            Why Use Go Quality Networks for Guidance?
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            We're committed to empowering you with the information needed to choose the best telecom services.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-6 md:gap-8 items-stretch"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card rounded-xl p-6 md:p-8 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left shadow-card-hover dark:shadow-card-hover-dark hover:shadow-lg dark:hover:shadow-primary/20 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-primary/10 flex items-center justify-center mb-5 sm:mb-0 sm:mr-6 ring-2 ring-primary/20">
                <reason.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-foreground">{reason.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-16 md:mt-24 grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          <div className="space-y-5">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              Your Trusted Partner in Telecom Decisions.
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              At Go Quality Networks, we understand that choosing internet, TV, or phone services can be overwhelming. Our goal is to simplify this process by providing clear, accurate, and easy-to-understand information, helping you find solutions that perfectly match your needs and budget.
            </p>
            <ul className="space-y-2.5 pt-2">
              {[
                { icon: Compass, text: "Navigate complex service options with ease." },
                { icon: MessageSquare, text: "Understand technical jargon and fine print." },
                { icon: Lightbulb, text: "Discover tips for saving money and maximizing value." },
              ].map(item => (
                <li key={item.text} className="flex items-center space-x-3">
                  <item.icon className="w-5 h-5 text-green-500 dark:text-green-400 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg animate-pulse-glow">
            <img 
              class="w-full h-full object-cover"
              alt="A person thoughtfully comparing charts and graphs on a tablet, representing informed decision-making for telecom services."
              src={WhyChooseUsImg} />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;
