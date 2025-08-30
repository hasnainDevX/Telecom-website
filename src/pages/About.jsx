
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Award, Compass, Lightbulb, Target, Brain, HeartHandshake as Handshake, Users2, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const About = () => {
  const { toast } = useToast();

  // const handleJoinTeam = () => {
  //   toast({
  //     title: "💼 Join Our Team",
  //     description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
  //   });
  // };

  // const teamMembers = [
  //   {
  //     name: 'Alice Johnson',
  //     role: 'Founder & CEO',
  //     bio: 'Alice leads Go Quality Networks with a passion for empowering consumers with clear, actionable telecom information.',
  //     imageAlt: 'Professional headshot of Alice Johnson, a confident female CEO.'
  //   },
  //   {
  //     name: 'Robert Chen',
  //     role: 'Head of Research & Data',
  //     bio: 'Robert ensures our data is accurate and our comparison tools are cutting-edge, providing users the best insights.',
  //     imageAlt: 'Professional headshot of Robert Chen, a male data expert.'
  //   },
  //   {
  //     name: 'Maria Garcia',
  //     role: 'Director of User Advocacy',
  //     bio: 'Maria champions the user experience, ensuring our platform is intuitive and truly helpful for everyone.',
  //     imageAlt: 'Professional headshot of Maria Garcia, a friendly female advocate.'
  //   }
  // ];

  const values = [
    {
      icon: Target,
      title: 'User Empowerment',
      description: 'We put users first, providing clear information to make confident telecom choices.',
      color: 'text-blue-500 dark:text-blue-400'
    },
    {
      icon: Lightbulb,
      title: 'Clarity & Simplicity',
      description: 'We break down complex information into easy-to-understand insights.',
      color: 'text-yellow-500 dark:text-yellow-400'
    },
    {
      icon: Award,
      title: 'Accuracy & Trust',
      description: 'We strive for data accuracy and unbiased comparisons you can rely on.',
      color: 'text-green-500 dark:text-green-400'
    },
    {
      icon: Handshake,
      title: 'Helpful Community',
      description: 'Fostering a community where users can share experiences and help each other.',
      color: 'text-purple-500 dark:text-purple-400'
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-background text-foreground">
      <section className="pt-12 md:pt-16 bg-gradient-to-br from-background via-background/95 to-background/90 dark:from-background dark:via-background/90 dark:to-background/85">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-block p-3 bg-primary/10 rounded-2xl mb-5">
              <Compass className="w-10 h-10 md:w-12 md:h-12 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
              About Go Quality Networks
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Your trusted guide to navigating the world of internet, TV, and phone services. We empower you to choose wisely.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-5 text-foreground">
                Our Mission: Simplifying Your Telecom Choices
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                At Go Quality Networks, our mission is to demystify the often confusing landscape of telecom services. We believe everyone deserves access to clear, unbiased information to find internet, TV, and phone plans that perfectly suit their needs and budget.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-7">
                We are dedicated to providing comprehensive comparison, expert guides, and genuine user reviews. We're not a service provider; we're your independent ally in making informed decisions for your home or business connectivity.
              </p>
              <Link to="/services">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-95 text-primary-foreground font-semibold px-7 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  How We Help You Choose
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="relative"
            >
              <div className="bg-card rounded-2xl p-1.5 shadow-xl animate-pulse-glow">
                <img 
                  alt="A diverse group of people collaboratively looking at a large screen displaying comparison charts and service options, symbolizing teamwork and informed choices."
                  className="w-full h-auto object-cover rounded-xl aspect-[16/10]"
                  src="https://images.unsplash.com/photo-1598971579229-02df97aec5d2" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted/30 dark:bg-muted/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-block p-2.5 bg-primary/10 rounded-xl mb-4">
              <Brain className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
              Our Core Values
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
              These principles guide our platform, content, and commitment to you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className="bg-card rounded-xl p-6 text-center shadow-card-hover dark:shadow-card-hover-dark hover:shadow-lg dark:hover:shadow-primary/15 transition-all duration-300"
              >
                <div className={`w-14 h-14 mx-auto mb-5 bg-gradient-to-br ${value.color.replace('text-', 'from-').replace('-400', '-500/10').replace('-500', '-600/10')} to-transparent rounded-lg flex items-center justify-center ring-2 ${value.color.replace('text-', 'ring-')}/20`}>
                  <value.icon className={`w-7 h-7 ${value.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-12 md:mb-16"
          >
             <div className="inline-block p-2.5 bg-primary/10 rounded-xl mb-4">
              <Users2 className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
              Meet Our Team
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
              The dedicated professionals helping you make smarter telecom choices.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                className="bg-card rounded-xl p-6 text-center shadow-card-hover dark:shadow-card-hover-dark hover:shadow-lg dark:hover:shadow-primary/20 transition-all duration-300 flex flex-col items-center"
              >
                <img 
                  alt={member.imageAlt}
                  className="w-28 h-28 rounded-full mx-auto mb-5 object-cover shadow-lg border-2 border-primary/20"
                  src="https://images.unsplash.com/photo-1635185481431-661b09594e6c" />
                <h3 className="text-lg font-bold text-foreground mb-0.5">{member.name}</h3>
                <p className="text-primary text-sm font-semibold mb-2.5">{member.role}</p>
                <p className="text-xs text-muted-foreground leading-relaxed flex-grow">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
      
      {/* <section className="py-20 md:py-24 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl mx-auto text-center"
          >
            <Heart className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-5 opacity-80" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight">
              Want to Help Others Choose Wisely?
            </h2>
            <p className="text-base sm:text-lg opacity-90 mb-8 max-w-xl mx-auto leading-relaxed">
              We're always looking for passionate individuals to contribute to our mission of empowering consumers.
            </p>
            <Button
              // onClick={handleJoinTeam}
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold px-8 py-3 rounded-full text-base shadow-xl transition-all duration-300 hover:scale-105 transform"
            >
              Explore Opportunities
            </Button>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default About;
