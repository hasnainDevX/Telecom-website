
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, ArrowRight, CheckCircle, Search, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import heroImg from '../../assets/hero.png'; // Adjust the path as necessary
const HeroSection = () => {
  const { toast } = useToast();

  const handleFindProviders = () => {
    toast({
      title: "🔍 Find Providers",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const features = [
    "Compare Top ISP Speeds & Plans",
    "Find Reliable Providers in Your Area",
    "Understand Your Internet Options",
    "Get Expert Telecom Guidance",
  ];

  return (
    <section className="relative min-h-[calc(100vh-80px)] md:min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-br from-background via-background/95 to-background/90 dark:from-background dark:via-background/90 dark:to-background/85">
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.01]">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-primary rounded-full"
            style={{
              width: `${Math.random() * 1.5 + 0.25}px`,
              height: `${Math.random() * 1.5 + 0.25}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `fiber-pulse ${Math.random() * 6 + 4}s ease-in-out infinite alternate`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute w-[200%] h-[200%] -left-[50%] -top-[50%]">
          <div className="absolute w-full h-full bg-no-repeat opacity-[0.03] dark:opacity-[0.015]" style={{backgroundImage: `radial-gradient(circle at center, hsl(var(--primary)) 0%, transparent 35%), radial-gradient(circle at 15% 75%, hsl(var(--accent)) 0%, transparent 25%), radial-gradient(circle at 85% 35%, hsl(var(--primary)) 0%, transparent 30%)`}}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-x-12 xl:gap-x-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-7 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center space-x-2.5 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-xs sm:text-sm text-primary font-semibold shadow-sm"
            >
              <Compass className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Your Guide to Smart Telecom Choices</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tighter">
              <span className="block text-foreground">
                Navigate Your Internet Options
              </span>
              <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mt-1 sm:mt-2">
                With Confidence.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              FiberSolution helps you compare internet, TV, and phone services. Find the best providers and plans in your area with our expert guidance and easy-to-use tools.
            </p>

            <ul className="space-y-2.5 max-w-md mx-auto lg:mx-0 pt-2">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="flex items-center space-x-2.5"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-5"
            >
              <Button
                onClick={handleFindProviders}
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:shadow-xl hover:shadow-primary/30 text-primary-foreground font-semibold px-7 py-3 sm:px-8 sm:py-3.5 rounded-full text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-md"
              >
                Find Providers Near You
                <Search className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Link to={"#learn-more"}>
              <Button
                // onClick={handleLearnMore}
                variant="outline"
                size="lg"
                className="border-border text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 px-7 py-3 sm:px-8 sm:py-3.5 rounded-full text-base sm:text-lg transition-all duration-300 w-full sm:w-auto shadow-sm hover:show-md"
              >
                Learn How We Help
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative hidden lg:flex justify-center items-center mt-12 lg:mt-0 hero-line-fix"
          >
            <div className="relative w-full max-w-md xl:max-w-lg h-auto aspect-[5/4] group">
              <div className="absolute -inset-3 bg-gradient-to-br from-primary/50 to-accent/50 rounded-3xl opacity-15 group-hover:opacity-25 transition-opacity duration-500 blur-2xl animate-pulse-glow"></div>
              <img 
                class="relative w-full h-full object-cover rounded-2xl shadow-2xl transform group-hover:scale-[1.03] transition-transform duration-500 border-2 border-border/10"
                alt="Illustration of a diverse group of people happily using laptops and tablets, with network connection lines in the background, symbolizing informed telecom choices."
                src={heroImg} />
              
              <motion.div
                animate={{ y: [-6, 6, -6], scale: [1, 1.02, 1] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -left-8 glass rounded-lg p-2.5 shadow-lg border border-border/10"
              >
                <div className="text-center">
                  <p className="text-xl font-bold text-primary">Compare</p>
                  <p className="text-xs text-muted-foreground">Plans & Prices</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [6, -6, 6], scale: [1, 1.02, 1] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.25 }}
                className="absolute -bottom-8 -right-8 glass rounded-lg p-2.5 shadow-lg border border-border/10"
              >
                <div className="text-center">
                  <p className="text-xl font-bold text-accent">Choose</p>
                  <p className="text-xs text-muted-foreground">Wisely</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
