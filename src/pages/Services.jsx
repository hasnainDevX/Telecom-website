import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Compass,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Users,
  Wifi,
  Package,
  Tv,
  PhoneCall,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import ServicesImg from "../assets/servicesImg.jpg";

const Services = () => {
  const { toast } = useToast();

  const handleLearnMore = (serviceName) => {
    toast({
      title: `💡 Exploring: ${serviceName}`,
      description:
        "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const services = [
    {
      icon: Wifi,
      title: "Internet Services Guidance",
      description:
        "Go Quality Networks helps you compare internet providers, plans, and speeds available in your area. Understand the differences between fiber, cable, DSL, 5G home internet, and satellite to make an informed decision that fits your browsing, streaming, and gaming needs.",
      features: [
        "Side-by-side provider comparisons",
        "Breakdown of different internet technologies",
        "Guidance on choosing the right speed",
        "Information on data caps and contracts",
        "Access to user reviews and ratings",
      ],
      imageAlt:
        "Stylized Wi-Fi symbol with comparison charts in the background.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Tv,
      title: "TV Package Comparisons",
      description:
        "Navigate the complex world of TV packages with Go Quality Networks. We provide information to compare channel lineups, streaming service integrations, DVR options, and pricing from various providers, helping you find the best entertainment value.",
      features: [
        "Compare cable, satellite, and streaming TV options",
        "Detailed channel lineup comparisons",
        "Information on sports, movie, and international packages",
        "Guidance on equipment and installation (from providers)",
        "Insights into bundling TV with internet",
      ],
      imageAlt:
        "Modern TV screen displaying a collage of popular show logos and channel icons.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: PhoneCall,
      title: "Home & Business Phone Advice",
      description:
        "Whether you need a traditional landline, a VoIP solution for your home, or a comprehensive phone system for your business, Go Quality Networks offers insights to compare features, call quality, pricing, and provider reliability.",
      features: [
        "Understand VoIP vs. traditional landline pros & cons",
        "Compare residential and business phone plans",
        "Information on international calling rates and features",
        "Guidance on necessary phone equipment",
        "Tips for porting your existing phone number",
      ],
      imageAlt:
        "Smartphone and traditional phone handset side-by-side, representing phone service choices.",
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: Package,
      title: "Bundle & Save Insights",
      description:
        "Learn how bundling multiple services like internet, TV, and phone from a single provider can lead to significant savings and simplified billing. Go Quality Networks helps you identify and compare available bundle deals.",
      features: [
        "Discover available double-play and triple-play bundles",
        "Calculate potential monthly and annual savings",
        "Understand bundle-specific contract terms",
        "Compare bundled vs. standalone service costs",
        "Tips for negotiating the best bundle deals",
      ],
      imageAlt:
        "Stack of service icons (internet, TV, phone) tied together with a ribbon, symbolizing a bundle.",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    in: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
      className="pt-20 min-h-screen bg-background text-foreground"
    >
      <section className="py-12 md:py-16 bg-gradient-to-br from-background via-background/95 to-background/90 dark:from-background dark:via-background/90 dark:to-background/85">
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
              Our Telecom Guidance Services
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Go Quality Networks empowers you to make informed decisions about your
              internet, TV, and phone services. Explore how we can help you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-6 md:py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 xl:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                initial="initial"
                whileInView="in"
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="bg-card rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl dark:hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col"
              >
                <div
                  className={`h-56 w-full bg-gradient-to-br ${service.color} relative overflow-hidden group`}
                >
                  <img
                    src={ServicesImg}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover opacity-15 group-hover:opacity-25 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <service.icon className="w-20 h-20 text-white opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500" />
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start space-x-2.5"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 flex-shrink-0 mt-1" />
                        <span className="text-xs text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact?subject=ServiceQuote">
                    <Button
                      size="lg"
                      className={`w-full mt-auto py-3 text-base font-semibold rounded-md transition-all duration-300 bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20 hover:border-primary/40 group-hover:scale-[1.02]`}
                    >
                      Get a Quote
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
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
            <div className="inline-block p-3 bg-primary/10 rounded-xl mb-4">
              <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 tracking-tight">
              <span className="block text-foreground">
                Our Commitment to You
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              At Go Quality Networks, we are dedicated to providing accurate, up-to-date, and
              unbiased information to help you make the best telecom choices.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: BarChart3,
                title: "Data-Driven Insights",
                description:
                  "We analyze data from numerous providers to give you a clear picture of the market.",
              },
              {
                icon: Users,
                title: "User-Friendly Guides",
                description:
                  "Our guides are designed to be easy to understand and follow.",
              },
              {
                icon: CheckCircle,
                title: "Regularly Updated Information",
                description:
                  "The telecom landscape changes fast; we work to keep our information current.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1 + 0.2,
                  ease: "easeOut",
                }}
                className="bg-card rounded-xl p-6 flex items-start space-x-4 shadow-card-hover dark:shadow-card-hover-dark hover:shadow-lg dark:hover:shadow-primary/15 transition-shadow"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mt-0.5">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-card rounded-2xl p-8 md:p-12 text-center shadow-2xl animate-pulse-glow"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Ready to Make an Informed Choice?
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
              Contact us and find
              the best options available in your area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact?subject=GuidanceRequest">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-95 text-primary-foreground font-semibold px-7 py-3 rounded-full text-base shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Get a Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/faq">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-border text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 px-7 py-3 sm:px-8 sm:py-3.5 rounded-full text-base sm:text-lg transition-all duration-300 w-full sm:w-auto shadow-sm hover:show-md"
                >
                  Read Our FAQs
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
