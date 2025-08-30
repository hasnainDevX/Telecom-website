import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  AlertTriangle,
  CheckCircle,
  Scale,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import TermsSection from "@/components/terms/TermsSection";

const Terms = () => {
  const { toast } = useToast();

  const handleContactLegal = () => {
    toast({
      title: "⚖️ Legal Contact",
      description:
        "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <div className="pt-24 min-h-screen bg-background text-foreground">
      <section className="py-20 bg-gradient-to-br from-background via-background/90 to-background/80 dark:from-background dark:via-background/95 dark:to-background/90">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
              <FileText className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Terms of Service
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              These terms govern your use of Go Quality Networks services. Please read
              them carefully as they contain important information about your
              rights and obligations.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: June 19, 2025
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="glass rounded-3xl p-8 sm:p-10 mb-12 fiber-glow shadow-xl"
            >
              <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center">
                <Scale className="w-8 h-8 text-primary mr-3 flex-shrink-0" />
                Key Points Overview
              </h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                {[
                  {
                    icon: CheckCircle,
                    title: "Fair & Clear",
                    description:
                      "Transparent terms designed for understanding.",
                  },
                  {
                    icon: AlertTriangle,
                    title: "Your Role",
                    description: "Guidelines for responsible service use.",
                  },
                  {
                    icon: Scale,
                    title: "Our Commitments",
                    description: "Protections and dispute procedures outlined.",
                  },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="space-y-10">
              <TermsSection title="Acceptance of Terms" sectionNumber="1">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  By using Go Quality Networks services, accessing our website, or
                  signing up for our internet plans, you agree to be bound by
                  these Terms of Service ("Terms"). If you do not agree to these
                  Terms, please do not use our services.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  These Terms constitute a legally binding agreement between you
                  ("Customer," "you," or "your") and Go Quality Networks ("Company,"
                  "we," "us," or "our").
                </p>
                <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mt-6">
                  <p className="text-primary text-sm font-medium">
                    <strong>Important:</strong> These Terms may be updated
                    periodically. Your continued use of our services after any
                    changes signifies your acceptance of the new Terms.
                  </p>
                </div>
              </TermsSection>

              <TermsSection title="Service Description" sectionNumber="2">
                <div className="space-y-6">
                  <div>
                    <p className="text-muted-foreground mb-3 leading-relaxed">
                      Go Quality Networks helps residential and business customers
                      choose the best high-speed fiber optic internet and TV
                      services available in their area. Our assistance includes:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>
                        Comparing fiber optic internet and TV plans from top
                        providers.
                      </li>
                      <li>
                        Recommending the best options based on your needs and
                        budget.
                      </li>
                      <li>
                        Guiding you through the sign-up and installation
                        process.
                      </li>
                      <li>
                        Offering ongoing advice and support to ensure you stay
                        connected with the best deals.
                      </li>
                    </ul>
                  </div>
                </div>
              </TermsSection>

              <TermsSection title="Customer Responsibilities" sectionNumber="3">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3">
                      Acceptable Use
                    </h3>
                    <p className="text-muted-foreground mb-3 leading-relaxed">
                      You agree to use our services responsibly, legally, and in
                      accordance with our Acceptable Use Policy (AUP), which is
                      incorporated by reference into these Terms. Key
                      responsibilities include:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>
                        Complying with all applicable local, state, national,
                        and international laws and regulations.
                      </li>
                      <li>
                        Respecting the rights and privacy of others; not
                        engaging in harassment or distributing harmful content.
                      </li>
                      <li>
                        Not using services for illegal, fraudulent, infringing,
                        or harmful activities.
                      </li>
                      <li>
                        Not attempting to disrupt, degrade, or compromise the
                        security or integrity of our network or the networks of
                        others.
                      </li>
                      <li>
                        Not reselling or redistributing services without our
                        prior written authorization.
                      </li>
                      <li>
                        Ensuring your use of the service does not negatively
                        impact other users or the overall network performance
                        (e.g., through excessive bandwidth consumption
                        inconsistent with typical residential/business use for
                        your plan).
                      </li>
                    </ul>
                  </div>
                </div>
              </TermsSection>

              <TermsSection title=" Affiliate Disclosure" sectionNumber="4">
                <div className="space-y-6">
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 leading-relaxed">
                    We partner with third-party service providers and may earn
                    commissions when users sign up for services through our
                    links or call the phone number listed on our website. We do
                    not set pricing, offer technical support, or control the
                    terms and conditions of the services offered by providers.
                  </ul>
                </div>
              </TermsSection>

              <TermsSection
                title="No Guarantee of Service or Pricing"
                sectionNumber="5"
              >
                <div className="space-y-6">
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>
                      Service availability, pricing, and terms are determined by
                      providers and may change at any time without notice.
                    </li>
                    <li>
                      We do not guarantee any specific speed, pricing, or
                      availability of internet, TV, or phone services.
                    </li>
                    <li>
                      Users are encouraged to verify all details directly with
                      the service provider before making a purchase.
                    </li>
                  </ul>
                  <div className="bg-yellow-500/10 dark:bg-yellow-500/5 border border-yellow-500/30 rounded-lg p-4 mt-6">
                    <p className="text-yellow-600 dark:text-yellow-400 text-sm font-medium">
                      <strong>Note:</strong> Go Quality Networks is committed to
                      making commercially reasonable efforts to provide
                      high-quality service consistent with industry standards.
                      We continuously monitor and manage our network to deliver
                      the best possible performance.
                    </p>
                  </div>
                </div>
              </TermsSection>

              <TermsSection title="Third-Party Links" sectionNumber="6">
                <div className="space-y-6">
                  <p className="text-muted-foreground mb-3 leading-relaxed">
                    Our website may include links to external websites operated
                    by third-party service providers.
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>
                      We do not control or endorse the content, policies, or
                      services of these external sites
                    </li>
                    <li>
                      Clicking on a third-party link means you agree to be
                      subject to their terms and policies.
                    </li>
                  </ul>
                </div>
              </TermsSection>

              <TermsSection title="Limitation of Liability" sectionNumber="7">
                <div className="space-y-6">
                  <div className="bg-red-500/10 dark:bg-red-500/5 border border-red-500/30 rounded-lg p-6">
                
                    <p className="text-red-600 dark:text-red-400 text-sm leading-relaxed">
                      Please read this section carefully as it significantly
                      limits our liability to you. Your use of Go Quality Networks
                      services is subject to these limitations.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3">
                      Go Quality Networks is not responsible for:
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      ❌ Changes in pricing, availability, or service quality
                      made by third-party providers.
                      <p className="text-muted-foreground leading-relaxed">
                        ❌ Any contractual obligations between you and a service
                        provider.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        ❌ Any loss, damage, or inconvenience caused by reliance
                        on information provided on our website.
                      </p>
                    </p>
                  </div>
                </div>
              </TermsSection>

              <TermsSection title="Changes to These Terms" sectionNumber="8">
                <div className="space-y-6">
                  <p className="text-muted-foreground mb-3 leading-relaxed">
                 We reserve the right to modify these Terms & Conditions at any time. Continued use of our website signifies your acceptance of any updated terms.
                  </p>
                </div>
              </TermsSection>

              <TermsSection title="Call Disclaimer" sectionNumber="9">
                <div className="space-y-6">
                  <div>
                    <p className="text-muted-foreground mb-3 leading-relaxed">
                    By calling the number listed on our website, you acknowledge:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <p className="text-muted-foreground leading-relaxed">
                      ✅ We do not own, operate, or directly provide the services advertised.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      ✅ Your contact details may be shared with relevant service providers for further communication.
                    </p>
                    </ul>
                  </div>
                </div>
              </TermsSection>

              <TermsSection title="Contact Information" sectionNumber="10">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  For questions about these Terms of Service, to report
                  violations, or for any legal inquiries, please contact our
                  Legal Department:
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Legal Email:</strong>{" "}
                      <a
                        href="mailto:info@goqualitynetworks.com"
                        className="text-primary hover:underline"
                      >
                        info@goqualitynetworks.com
                      </a>
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">
                        General Customer Service:
                      </strong>{" "}
                      <a
                        href="tel:1-800-342-3763"
                        className="text-primary hover:underline"
                      >
                        +1 (346) 792-7838s
                      </a>
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">
                        Mailing Address:
                      </strong>
                      <br />
                      Go Quality Networks Department
                      <br />
                      <br />
                      Houston, TX, USA
                    </span>
                  </div>
                </div>
                <Button
                  onClick={handleContactLegal}
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact our Team
                </Button>
              </TermsSection>

              <TermsSection title="Acknowledgment">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  By using Go Quality Networks services, you acknowledge that you have read these Terms of
                  Service, understand them, and agree to be bound by all of the
                  terms and conditions herein, as well as our Privacy Policy and
                  Acceptable Use Policy, which are incorporated by reference.
                </p>
                <div className="bg-green-500/10 dark:bg-green-500/5 border border-green-500/30 rounded-lg p-4 mt-6">
                  <p className="text-green-600 dark:text-green-400 text-sm font-medium flex items-center">
                    <CheckCircle className="w-5 h-5 inline mr-2 flex-shrink-0" />
                    These Terms are effective as of the date you first use our
                    services or the "Last updated" date shown at the top of this
                    document, whichever is later.
                  </p>
                </div>
              </TermsSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
