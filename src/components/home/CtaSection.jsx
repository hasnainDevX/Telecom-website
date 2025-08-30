import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary to-accent text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-16 h-16 mx-auto mb-6 bg-primary-foreground/20 rounded-full flex items-center justify-center animate-pulse-glow">
            <Search className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">
            Ready to Find Your Best Telecom Fit?
          </h2>
          <p className="text-lg sm:text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Start comparing internet, TV, and phone services in your area.
            Go Quality Networks provides the insights you need to choose with
            confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact" className="flex items-center justify-center">
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold px-8 py-3.5 rounded-full text-base sm:text-lg shadow-xl transition-all duration-300 hover:scale-105 transform"
              >
                Get a Quote
                <ArrowRight className="ml-2.5 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground/60 text-primary-foreground bg-primary-foreground/10 hover:border-primary-foreground px-8 py-3.5 rounded-full text-base sm:text-lg font-medium transition-all duration-300 w-full sm:w-auto"
              >
                Learn More About Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
