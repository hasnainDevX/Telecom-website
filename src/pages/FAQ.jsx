import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Search,
  HelpCircle,
  BarChart3,
  ShieldCheck,
  ListChecks,
  CreditCard,
  Info,
  Wifi,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [openItems, setOpenItems] = useState(new Set());

  const categories = [
    { id: "all", name: "All Questions", icon: HelpCircle },
    { id: "general", name: "About Go Quality Networks", icon: Info },
    { id: "comparison", name: "Comparing Services", icon: BarChart3 },
    { id: "providers", name: "Understanding Providers", icon: ShieldCheck },
    { id: "internet", name: "Internet Specifics", icon: Wifi },
    { id: "billing", name: "Billing & Contracts", icon: CreditCard },
    { id: "support", name: "Using Our Platform", icon: ListChecks },
  ];

  const faqData = [
    {
      category: "general",
      question: "What does Go Quality Networks do?",
      answer:
        "Go Quality Networks is an online platform that helps you compare and choose the best internet, TV, and phone services in your area. We provide guides, and unbiased information to simplify your decision‑making process.",
    },
    {
      category: "general",
      question: "Are you an internet or TV provider?",
      answer:
        "No, we are not a service provider. We connect you with trusted internet, TV, and home phone providers, helping you find the best options available.",
    },
    {
      category: "comparison",
      question:
        "How do you help me find the best internet, TV, and home phone services?",
      answer:
        "We compare multiple options to find the best deals based on your location, budget, and needs. Instead of searching different websites, we bring everything together in one place—saving you time and effort!",
    },
    {
      category: "comparison",
      question: "Can I compare prices between providers?",
      answer:
        "Yes, our platform lets you compare prices, speeds, contract terms, and bundles from different providers available in your area.",
    },
    {
      category: "providers",
      question: "How do I know which providers are available in my area?",
      answer:
        "Simply enter your zip code and submit the conact from, and we’ll match you with the internet, TV, and phone providers servicing your area.",
    },
    {
      category: "providers",
      question: "Are all providers trustworthy?",
      answer:
        "We only list verified and reputable providers to ensure you get reliable service and honest pricing.",
    },
    {
      category: "internet",
      question: "How can I test my current internet speed?",
      answer:
        "You can use free tools like Speedtest.net to check your current download and upload speeds. Compare them with your plan to see if you’re getting what you pay for.",
    },
    {
      category: "billing",
      question: "Do I have to sign a contract to get services?",
      answer:
        "It depends on the provider. Some offer no-contract plans while others require a 12 or 24-month agreement. We show this information clearly when you compare options.",
    },
    {
      category: "billing",
      question: "Are there any hidden fees?",
      answer:
        "We aim to display all known fees upfront. These may include installation, equipment rental, or early termination fees, depending on the provider.",
    },
    {
      category: "support",
      question: "How can I get started?",
      answer:
        "Just contact us with your zip code and any specific needs you have. We’ll guide you through the process of finding the best services for your home.",
    },
    {
      category: "support",
      question: "What if I need help after signing up?",
      answer:
        "Your provider will handle ongoing customer service, but you can always reach out to us if you need help choosing a different plan later.",
    },
  ];

  const filteredFAQs = faqData.filter((faq) => {
    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="pt-24 min-h-screen bg-background text-foreground">
      <section className="py-12 md:py-16 bg-gradient-to-br from-background via-background/95 to-background/90 dark:from-background dark:via-background/90 dark:to-background/85">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-block p-3 bg-primary/10 rounded-2xl mb-5">
              <HelpCircle className="w-10 h-10 md:w-12 md:h-12 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Find answers to common questions about using Go Quality Networks and
              navigating telecom services.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-6 md:py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-10 md:mb-12"
            >
              <div className="relative bg-card border border-border rounded-xl p-1.5 sm:p-2 shadow-sm">
                <Search className="absolute left-3.5 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search FAQs (e.g., 'compare plans', 'data caps')"
                  className="w-full pl-10 sm:pl-11 pr-3 py-3 bg-transparent border-none rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-0 text-sm sm:text-base"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="flex flex-wrap gap-2 sm:gap-3 mb-10 md:mb-12 justify-center"
            >
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  variant={
                    selectedCategory === category.id ? "default" : "outline"
                  }
                  size="sm"
                  className={`rounded-full font-medium transition-all duration-200 text-xs sm:text-sm group px-3 py-1.5 sm:px-4 sm:py-2 ${
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "border-border text-muted-foreground hover:text-foreground hover:bg-muted/70 hover:border-primary/50"
                  }`}
                >
                  <category.icon
                    className={`w-3.5 h-3.5 mr-1.5 ${
                      selectedCategory === category.id
                        ? "text-primary-foreground"
                        : "text-primary group-hover:text-primary"
                    }`}
                  />
                  {category.name}
                </Button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {filteredFAQs.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-12 bg-card border border-border rounded-xl p-6 md:p-8"
              >
                <HelpCircle className="w-16 h-16 text-primary/60 mx-auto mb-5" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  No Matching FAQs Found
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  We couldn't find an answer for "{searchTerm || "your query"}"
                  in the{" "}
                  {categories.find((c) => c.id === selectedCategory)?.name ||
                    "selected"}{" "}
                  category. Try a different search term, select 'All Questions',
                  or contact our support team.
                </p>
                <div className="flex gap-3 justify-center">
                  <Button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("all");
                    }}
                    variant="outline"
                    size="sm"
                  >
                    Clear Search & Filters
                  </Button>
                  <Link to="/contact">
                    <Button size="sm">Contact Support</Button>
                  </Link>
                </div>
              </motion.div>
            ) : (
              <div className="space-y-3 md:space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <motion.div
                    key={`${faq.question}-${index}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.03,
                      ease: "easeOut",
                    }}
                    className="bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:border-primary/50 transition-colors duration-200"
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      aria-expanded={openItems.has(index)}
                      aria-controls={`faq-answer-${index}`}
                      className="w-full px-4 py-3.5 sm:px-5 sm:py-4 text-left flex items-center justify-between hover:bg-muted/50 dark:hover:bg-muted/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background"
                    >
                      <h3 className="text-sm sm:text-base font-medium text-foreground pr-3">
                        {faq.question}
                      </h3>
                      <ChevronDown
                        className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                          openItems.has(index) ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {openItems.has(index) && (
                        <motion.div
                          id={`faq-answer-${index}`}
                          initial={{
                            height: 0,
                            opacity: 0,
                            paddingTop: 0,
                            paddingBottom: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                            paddingTop: "0.75rem",
                            paddingBottom: "1.25rem",
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                            paddingTop: 0,
                            paddingBottom: 0,
                          }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden px-4 sm:px-5"
                        >
                          <div className="border-t border-border pt-3 sm:pt-4">
                            <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30 dark:bg-muted/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl mx-auto text-center bg-card rounded-2xl p-8 md:p-12 shadow-xl animate-pulse-glow"
          >
            <HelpCircle className="w-12 h-12 text-primary mx-auto mb-5" />
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
              Still Have Questions?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
              Our team is happy to provide more information or guide you through
              using our platform. Don't hesitate to reach out!
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-95 text-primary-foreground font-semibold px-8 py-3 rounded-full text-base shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Contact Our Support Team
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
