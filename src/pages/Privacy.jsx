import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Eye,
  Lock,
  Users,
  FileText,
  Mail,
  Info,
  Activity,
  Share2,
  ShieldCheck,
  Cookie,
  Edit3,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import PrivacySection from "@/components/privacy/PrivacySection";

const Privacy = () => {
  const { toast } = useToast();
  const handleContactPrivacy = () => {
    toast({
      title: "🔒 Privacy Contact",
      description: "Reaching out to our privacy team. This is a demo.",
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
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-xl">
              <ShieldCheck className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Privacy Policy
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your privacy is critically important to us at Go Quality Networks. This
              policy outlines how we collect, use, protect, and handle your
              personal information.
            </p>
            <p className="text-sm text-muted-foreground mt-6">
              Last Updated: June 19, 2025
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto box">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="glass rounded-3xl p-8 sm:p-10 mb-12 fiber-glow shadow-xl"
            >
              <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center">
                <Eye className="w-8 h-8 text-primary mr-3 flex-shrink-0" />
                Privacy Commitment at a Glance
              </h2>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                {[
                  {
                    icon: Lock,
                    title: "Data Encryption",
                    description:
                      "We use strong encryption to safeguard your personal data.",
                  },
                  {
                    icon: Users,
                    title: "No Third-Party Selling",
                    description:
                      "Your personal information is never sold to advertisers.",
                  },
                  {
                    icon: FileText,
                    title: "Full Transparency",
                    description:
                      "Our policies are clear and straightforward about data handling.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="space-y-10">
              <PrivacySection title="Introduction">
                <div className="space-y-8">
                  <div>
                    <p className="text-muted-foreground mb-3 leading-relaxed">
                      Welcome to Go Quality Networks. Your privacy matters to us, and
                      we are committed to safeguarding your personal
                      information. This Privacy Policy outlines how we collect,
                      use, and protect your data when you visit our website
                      https://goqualitynetworks.com/ and use our services.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      By accessing our website, you agree to the practices
                      described in this Privacy Policy.
                    </p>
                  </div>
                </div>
              </PrivacySection>
              <PrivacySection title="1. Information We Collect">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
                      <Info className="w-5 h-5 mr-2" />
                      Personal Information You Provide
                    </h3>
                    <p className="text-md text-gray-500 font-[500] space-x-3 space-y-2">
                      We may collect and process the following types of
                      information:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>
                        <strong>Personal Information:</strong> When you contact
                        us, fill out a form, or request a quote, we may collect
                        your name, phone number, email address, and other
                        relevant details.
                      </li>
                      <li>
                        <strong>Usage Data:</strong> We collect cookies, IP
                        addresses, and browsing behavior to analyze website
                        traffic and improve user experience.
                      </li>
                      <li>
                        <strong>Marketing Information:</strong> If you opt-in,
                        we may use your contact details to send promotional
                        offers related to internet, TV, and home phone services.(you can opt-out at any time)
                      </li>
                    </ul>
                  </div>
                </div>
              </PrivacySection>

              <PrivacySection title="2. How We Use Your Information">
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Go Quality Networks uses the collected information for the
                    following primary purposes:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                    <p>
                      ✅ Connecting you with top internet, TV, and phone service
                      providers.
                    </p>
                    <p>✅ Enhancing website performance and user experience.</p>
                    <p>
                      ✅ Sending promotional offers and exclusive deals (you can
                      opt out anytime).
                    </p>
                    <p>
                      ✅ Providing customer support and responding to inquiries.
                    </p>
                  </ul>
                </div>
              </PrivacySection>

              <PrivacySection title="3. Information Sharing and Disclosure">
                <div className="space-y-6">
                  <div className="bg-green-500/10 dark:bg-green-500/5 border border-green-500/30 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-2 flex items-center">
                      <ShieldCheck className="w-5 h-5 mr-2" />
                      We Do NOT Sell Your Personal Information
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Go Quality Networksolution is committed to protecting your privacy. We
                      do not sell, rent, or trade your personal information to
                      third parties for their marketing purposes.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3 flex items-center">
                      <Share2 className="w-5 h-5 mr-2" />
                      Limited Sharing Scenarios
                    </h3>
                    <p className="text-muted-foreground mb-3 leading-relaxed">
                      We may share your information only in the following
                      specific and limited circumstances:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                      <li>
                        <strong>Third-Party Service Providers:</strong> We
                        engage trusted third-party companies and individuals to
                        perform services on our behalf (e.g., installation
                        contractors, payment processors, customer support
                        platform providers, data analytics services, cloud
                        hosting providers). These providers are contractually
                        obligated to protect your data, maintain its
                        confidentiality, and only use it for the specific
                        purposes for which we disclose it to them.
                      </li>
                      <li>
                        <strong>Legal Compliance:</strong> We may disclose your
                        information if required by law, in response to a valid
                        legal request (e.g., court order, subpoena), or to
                        protect our rights, privacy, safety, or property, or
                        that of others.
                      </li>
                      <li>
                        <strong>With Your Explicit Consent:</strong> We may
                        share your information with other third parties not
                        described in this policy when we have your explicit
                        consent to do so.
                      </li>
                      <li>
                        <strong>Aggregated or De-Identified Data:</strong> We
                        may share aggregated or de-identified information, which
                        cannot reasonably be used to identify you, for research,
                        marketing, analytics, or other purposes.
                      </li>
                    </ul>
                  </div>
                </div>
              </PrivacySection>

              <PrivacySection title="4. Your Privacy Rights and Choices">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Depending on your jurisdiction, you may have certain rights
                  regarding your personal information. Go Quality Networksolution is
                  committed to honoring these rights. These may include:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                  <li>
                    <strong>Right to Access:</strong> You can request a copy of
                    the personal information we hold about you.
                  </li>
                  <li>
                    <strong>Right to Rectification (Correction):</strong> You
                    can request that we correct any inaccurate or incomplete
                    personal information we hold about you.
                  </li>
                  <li>
                    <strong>Right to Erasure (Deletion):</strong> You can
                    request that we delete your personal information, subject to
                    certain exceptions (e.g., where we are legally required to
                    retain data or for ongoing service provision).
                  </li>
                  <li>
                    <strong>Right to Object to Processing:</strong> You can
                    object to the processing of your personal information in
                    certain circumstances, particularly for direct marketing
                    purposes or processing based on legitimate interests.
                  </li>
                  <li>
                    <strong>
                      Right to Opt-Out of Marketing Communications:
                    </strong>{" "}
                    You can unsubscribe from our marketing emails at any time by
                    clicking the "unsubscribe" link provided in such emails or
                    by contacting us directly. You may still receive
                    transactional or service-related communications.
                  </li>
                  <li>
                    <strong>Right to Lodge a Complaint:</strong> You have the
                    right to lodge a complaint with a supervisory authority if
                    you believe our processing of your personal information
                    violates applicable data protection laws.
                  </li>
                </ul>
                <p className="text-muted-foreground mt-6 leading-relaxed">
                  To exercise any of these rights, please contact us using the
                  contact details provided in Section 10 ("Contact Us About
                  Privacy"). We will respond to your request within the
                  timeframe required by applicable law. We may need to verify
                  your identity before processing your request.
                </p>
              </PrivacySection>

              <PrivacySection title="5. Third-Party Links & Affiliate Disclosure">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Our website may contain links to third-party service
                  providers. When you click on these links, you will be directed
                  to the provider’s website, where their Privacy Policy applies.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>
                    Affiliate Disclaimer: We may earn commissions when you sign
                    up for services through our links.
                  </li>
                  <li>
                    We do not control the pricing, terms, or availability of
                    third-party services and are not liable for any disputes or
                    changes.
                  </li>
                </ul>
              </PrivacySection>

              <PrivacySection title="6. Children's Privacy">
                <p className="text-muted-foreground leading-relaxed">
                  Go Quality Networksolution's services are not directed to individuals under
                  the age of 13 (or a higher age threshold as required by
                  applicable local law). We do not knowingly collect personal
                  information from children under this age. If we become aware
                  that we have inadvertently collected personal information from
                  a child under the relevant age without verifiable parental
                  consent, we will take steps to delete such information from
                  our records promptly. If you are a parent or guardian and
                  believe that your child has provided us with personal
                  information without your consent, please contact us using the
                  details in Section 10.
                </p>
              </PrivacySection>

              <PrivacySection title="7. Consent & Communications">
                <p className="text-muted-foreground leading-relaxed">
                  By calling the number provided on our website, you acknowledge
                  that you are reaching out to an independent service that helps
                  compare providers. We may receive commissions for referring
                  customers to these providers.
                </p>
              </PrivacySection>

              <PrivacySection title="8. Data Security">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We implement security measures to protect your personal
                  information. However, no online system can guarantee absolute
                  security. We encourage users to take precautions when sharing
                  personal details online.
                </p>
              </PrivacySection>

              <PrivacySection title="9. Changes to This Privacy Policy">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect
                  changes in our data practices, service offerings, or
                  applicable laws. When we make material changes to this Privacy
                  Policy, we will notify you by:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
                  <li>
                    Posting the updated policy prominently on our website.
                  </li>
                  <li>
                    Updating the "Last Updated" date at the top of this Privacy
                    Policy.
                  </li>
                </ul>
                <div className="bg-yellow-500/10 dark:bg-yellow-500/5 border border-yellow-500/30 rounded-lg p-6">
                  <p className="text-yellow-600 dark:text-yellow-400 text-sm font-medium flex items-start">
                    <Edit3 className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    We encourage you to review this Privacy Policy periodically
                    to stay informed about how Go Quality Networks is protecting your
                    information and to be aware of any modifications. Your
                    continued use of our services after any changes to this
                    Privacy Policy will constitute your acceptance of such
                    changes.
                  </p>
                </div>
              </PrivacySection>

              <PrivacySection title="10. Contact Us About Privacy">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  If you have any questions, concerns, or complaints about this
                  Privacy Policy, our data practices, or if you wish to exercise
                  your privacy rights, please contact our dedicated Privacy
                  Team:
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Email:</strong>{" "}
                      <a
                        href="mailto:info@goqualitynetworks.com"
                        className="text-primary hover:underline"
                      >
                        goqualitynetworks.com
                      </a>
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Phone:</strong>{" "}
                      <a
                        href="tel:+13467927838"
                        className="text-primary hover:underline"
                      >
                        713-382-9770
                      </a>{" "}
                      (Select option for Privacy Office)
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">
                        Mailing Address:
                      </strong>
                      <br />
                      Go Quality Networks Office
                      <br />
                      <br />
                      5922 Clerkenwell Dr Houston TX 77084
                    </span>
                  </div>
                </div>
                <Button
                  onClick={handleContactPrivacy}
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Mail className="w-5 h-5 mr-2" /> Contact Privacy Team
                </Button>
              </PrivacySection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
