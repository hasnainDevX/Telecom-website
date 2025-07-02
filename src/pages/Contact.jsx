import { motion } from 'framer-motion';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import { MessageSquare, Globe } from 'lucide-react';
import LocationForm from '@/components/LocationForm';

const Contact = () => {
  return (
    <div className="pt-20 min-h-screen bg-background text-foreground">
      <section className="pt-16 md:pt-20 bg-gradient-to-br from-background via-background/95 to-background/90 dark:from-background dark:via-background/90 dark:to-background/85">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-block p-3 bg-primary/10 rounded-2xl mb-5">
              <MessageSquare className="w-10 h-10 md:w-12 md:h-12 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
              Get in Touch
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We're here to help! Whether you have questions about using our platform or need guidance in your telecom search, our team is ready to assist you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-start">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted/30 dark:bg-muted/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut"}}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="inline-block p-2.5 bg-primary/10 rounded-xl mb-4">
              <Globe className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Nationwide Guidance</h2>
            <p className="text-muted-foreground mb-5 text-sm sm:text-base">
              While we don't have physical offices for visits, FiberSolution proudly offers telecom comparison guidance to users all across the United States. Our online platform is accessible anytime, anywhere.
            </p>
            <a 
              href="mailto:info@fibersolution.net"
              className="inline-block text-sm sm:text-base font-medium text-primary hover:text-accent transition-colors duration-300 underline underline-offset-4"
            >
              Email Us for Support
            </a>
          </motion.div>
        </div>
      </section>

      <LocationForm />
    </div>
  );
};

export default Contact;
