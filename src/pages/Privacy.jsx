import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Users, FileText, Mail, Info, Activity, Share2, ShieldCheck, Cookie, Edit3, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import PrivacySection from '@/components/privacy/PrivacySection';

const Privacy = () => {
  const { toast } = useToast();

  const handleContactPrivacy = () => {
    toast({
      title: "🔒 Privacy Contact",
      description: "Reaching out to our privacy team. This is a demo."
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
              Your privacy is critically important to us at FiberSolution. This policy outlines how we collect, use, protect, and handle your personal information.
            </p>
            <p className="text-sm text-muted-foreground mt-6">
              Last Updated: June 19, 2025
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
                <Eye className="w-8 h-8 text-primary mr-3 flex-shrink-0" />
                Privacy Commitment at a Glance
              </h2>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                {[
                  { icon: Lock, title: 'Data Encryption', description: 'We use strong encryption to safeguard your personal data.' },
                  { icon: Users, title: 'No Third-Party Selling', description: 'Your personal information is never sold to advertisers.' },
                  { icon: FileText, title: 'Full Transparency', description: 'Our policies are clear and straightforward about data handling.' }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="space-y-10">
              <PrivacySection title="1. Information We Collect">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3 flex items-center"><Info className="w-5 h-5 mr-2"/>Personal Information You Provide</h3>
                    <p className="text-muted-foreground mb-3 leading-relaxed">When you sign up for FiberSolution services, contact customer support, or interact with our website, we may collect the following personal information:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li><strong>Contact Details:</strong> Name, residential/business address, phone number, and email address.</li>
                      <li><strong>Account Information:</strong> Username, password, service plan details, and account preferences.</li>
                      <li><strong>Billing Information:</strong> Payment card details (processed securely by our PCI-compliant payment gateway), bank account information for direct debit, billing address, and transaction history.</li>
                      <li><strong>Identification Information:</strong> Government-issued ID (e.g., driver's license, passport) for identity verification purposes, where legally required or for certain high-value services.</li>
                      <li><strong>Communications:</strong> Records of your communications with us, including emails, chat transcripts, and call recordings (where permitted by law and with notice).</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3 flex items-center"><Activity className="w-5 h-5 mr-2"/>Information Collected Automatically (Service Usage & Technical Data)</h3>
                    <p className="text-muted-foreground mb-3 leading-relaxed">To provide, maintain, and improve our services, we automatically collect certain information:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li><strong>Network Usage Data:</strong> Aggregated data on bandwidth consumption, traffic patterns, and types of internet protocols used. We do not monitor the content of your internet traffic unless legally compelled to do so.</li>
                      <li><strong>Device Information:</strong> Information about the devices connected to our network, such as MAC addresses, IP addresses (which may be dynamic or static), device type, operating system, and modem/router identifiers.</li>
                      <li><strong>Service Performance Data:</strong> Metrics related to the performance and quality of your internet service, such as connection speed, latency, packet loss, and uptime.</li>
                      <li><strong>Website and Application Usage:</strong> When you visit our website or use our mobile applications, we collect information like your IP address, browser type, device identifiers, pages visited, time spent on pages, links clicked, and referral URLs. This is often collected using cookies and similar technologies (see Section 5).</li>
                      <li><strong>Location Information:</strong> We may collect approximate location data (e.g., based on IP address) to provide localized services, check service availability, or for network optimization. Precise location is only collected with your explicit consent (e.g., for specific mobile app features).</li>
                    </ul>
                  </div>
                </div>
              </PrivacySection>

              <PrivacySection title="2. How We Use Your Information">
                 <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">FiberSolution uses the collected information for the following primary purposes:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                    <li><strong>To Provide and Manage Services:</strong> To establish and maintain your account, install and configure services, process payments, provide customer support, and ensure the proper functioning of our network and services.</li>
                    <li><strong>Communication:</strong> To communicate with you about your account, service updates, maintenance notifications, billing matters, new products or services (where you have consented or it's a legitimate interest), and to respond to your inquiries.</li>
                    <li><strong>Service Improvement and Development:</strong> To analyze usage patterns, troubleshoot issues, conduct research, and develop new features, products, and services to enhance your experience.</li>
                    <li><strong>Network Management and Security:</strong> To monitor network performance, manage traffic, prevent fraud, protect against malicious activities, ensure the security and integrity of our network, and enforce our Acceptable Use Policy.</li>
                    <li><strong>Personalization:</strong> To tailor our services and communications to your preferences and usage, where appropriate and with your consent if required.</li>
                    <li><strong>Legal and Regulatory Compliance:</strong> To comply with applicable laws, regulations, court orders, subpoenas, and other legal processes. This includes responding to lawful requests from government authorities.</li>
                    <li><strong>Marketing and Advertising:</strong> With your consent, or where permitted by law, to inform you about FiberSolution products, services, and promotions that may be of interest to you. You can opt-out of marketing communications at any time (see Section 6).</li>
                  </ul>
                </div>
              </PrivacySection>

              <PrivacySection title="3. Information Sharing and Disclosure">
                <div className="space-y-6">
                  <div className="bg-green-500/10 dark:bg-green-500/5 border border-green-500/30 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-2 flex items-center"><ShieldCheck className="w-5 h-5 mr-2"/>We Do NOT Sell Your Personal Information</h3>
                    <p className="text-muted-foreground leading-relaxed">FiberSolution is committed to protecting your privacy. We do not sell, rent, or trade your personal information to third parties for their marketing purposes.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3 flex items-center"><Share2 className="w-5 h-5 mr-2"/>Limited Sharing Scenarios</h3>
                    <p className="text-muted-foreground mb-3 leading-relaxed">We may share your information only in the following specific and limited circumstances:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                      <li><strong>Third-Party Service Providers:</strong> We engage trusted third-party companies and individuals to perform services on our behalf (e.g., installation contractors, payment processors, customer support platform providers, data analytics services, cloud hosting providers). These providers are contractually obligated to protect your data, maintain its confidentiality, and only use it for the specific purposes for which we disclose it to them.</li>
                      <li><strong>Legal Obligations and Rights Protection:</strong> We may disclose your information if required to do so by law or in the good faith belief that such action is necessary to: (a) comply with a legal obligation, court order, or subpoena; (b) protect and defend the rights, property, or safety of FiberSolution, our customers, or the public; (c) detect, prevent, or otherwise address fraud, security, or technical issues; or (d) enforce our Terms of Service and other agreements.</li>
                      <li><strong>Business Transfers or Corporate Changes:</strong> In the event of a merger, acquisition, financing, reorganization, bankruptcy, receivership, sale of company assets, or transition of service to another provider, your personal information may be transferred as part of that transaction. We will notify you via email and/or a prominent notice on our website of any change in ownership or uses of your personal information, as well as any choices you may have regarding your personal information.</li>
                      <li><strong>With Your Explicit Consent:</strong> We may share your information with other third parties not described in this policy when we have your explicit consent to do so.</li>
                      <li><strong>Aggregated or De-Identified Data:</strong> We may share aggregated or de-identified information, which cannot reasonably be used to identify you, for research, marketing, analytics, or other purposes.</li>
                    </ul>
                  </div>
                </div>
              </PrivacySection>

              <PrivacySection title="4. Data Security">
                 <p className="text-muted-foreground mb-6 leading-relaxed">FiberSolution takes the security of your personal information very seriously. We implement a range of administrative, technical, and physical security measures designed to protect your data from unauthorized access, use, disclosure, alteration, or destruction. These measures include:</p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-3">Technical Safeguards:</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li><strong>Encryption:</strong> Use of industry-standard encryption protocols (e.g., TLS/SSL) for data in transit over public networks and encryption for sensitive data at rest.</li>
                      <li><strong>Access Controls:</strong> Implementation of strict access controls, authentication, and authorization mechanisms to limit access to personal information to authorized personnel only based on job function (principle of least privilege).</li>
                      <li><strong>Network Security:</strong> Deployment of firewalls, intrusion detection/prevention systems (IDS/IPS), and other network security technologies to protect our infrastructure.</li>
                      <li><strong>Secure Development:</strong> Incorporating security best practices into our software development lifecycle.</li>
                      <li><strong>Vulnerability Management:</strong> Regular security assessments, vulnerability scanning, and penetration testing to identify and remediate potential weaknesses.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-3">Administrative and Physical Safeguards:</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li><strong>Employee Training:</strong> Comprehensive training programs for employees on data privacy and security policies and best practices.</li>
                      <li><strong>Data Minimization:</strong> Collecting only the personal information necessary for the purposes identified in this policy.</li>
                      <li><strong>Incident Response Plan:</strong> Maintaining an incident response plan to address data breaches or security incidents effectively.</li>
                      <li><strong>Physical Security:</strong> Secure data centers with restricted access, environmental controls, and surveillance.</li>
                      <li><strong>Third-Party Vendor Security:</strong> Conducting due diligence on third-party vendors who handle personal information to ensure they meet our security standards.</li>
                    </ul>
                  </div>
                </div>
                 <p className="text-muted-foreground mt-8 leading-relaxed">While we strive to use commercially acceptable means to protect your personal information, please remember that no method of transmission over the Internet or method of electronic storage is 100% secure. Therefore, we cannot guarantee its absolute security. You also play a role in protecting your information by using strong passwords and keeping your account credentials confidential.</p>
              </PrivacySection>

              <PrivacySection title="5. Cookies and Tracking Technologies">
                <p className="text-muted-foreground mb-4 leading-relaxed">We and our third-party partners use cookies, web beacons, pixels, and similar tracking technologies to collect information about your browsing activities over time and across different websites following your use of our Site and Services. This information helps us to provide and improve our services, understand user activity, personalize your experience, and for advertising purposes.</p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2 flex items-center"><Cookie className="w-5 h-5 mr-2"/>Types of Cookies We Use:</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                        <li><strong>Essential Cookies:</strong> Necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.</li>
                        <li><strong>Performance and Analytics Cookies:</strong> Allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.</li>
                        <li><strong>Functionality Cookies:</strong> Enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.</li>
                        <li><strong>Targeting and Advertising Cookies:</strong> May be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Your Choices:</h3>
                    <p className="text-muted-foreground leading-relaxed">Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, since it will no longer be personalized to you. It may also stop you from saving customized settings like login information. For more detailed information about how we use cookies and your choices, please see our full Cookie Policy (link typically provided in footer).</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-primary/10 border border-primary/30 rounded-lg">
                  <p className="text-primary text-sm font-medium">Our Cookie Policy provides detailed information on the specific cookies used, their purpose, and how you can manage your preferences.</p>
                </div>
              </PrivacySection>

              <PrivacySection title="6. Your Privacy Rights and Choices">
                <p className="text-muted-foreground mb-6 leading-relaxed">Depending on your jurisdiction, you may have certain rights regarding your personal information. FiberSolution is committed to honoring these rights. These may include:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-3 ml-4">
                    <li><strong>Right to Access:</strong> You can request a copy of the personal information we hold about you.</li>
                    <li><strong>Right to Rectification (Correction):</strong> You can request that we correct any inaccurate or incomplete personal information we hold about you.</li>
                    <li><strong>Right to Erasure (Deletion):</strong> You can request that we delete your personal information, subject to certain exceptions (e.g., where we are legally required to retain data or for ongoing service provision).</li>
                    <li><strong>Right to Restrict Processing:</strong> You can request that we restrict the processing of your personal information in certain circumstances (e.g., if you contest the accuracy of the data).</li>
                    <li><strong>Right to Data Portability:</strong> You can request to receive your personal information in a structured, commonly used, and machine-readable format, and to have it transmitted to another controller where technically feasible.</li>
                    <li><strong>Right to Object to Processing:</strong> You can object to the processing of your personal information in certain circumstances, particularly for direct marketing purposes or processing based on legitimate interests.</li>
                    <li><strong>Right to Opt-Out of Marketing Communications:</strong> You can unsubscribe from our marketing emails at any time by clicking the "unsubscribe" link provided in such emails or by contacting us directly. You may still receive transactional or service-related communications.</li>
                    <li><strong>Right to Lodge a Complaint:</strong> You have the right to lodge a complaint with a supervisory authority if you believe our processing of your personal information violates applicable data protection laws.</li>
                </ul>
                <p className="text-muted-foreground mt-6 leading-relaxed">To exercise any of these rights, please contact us using the contact details provided in Section 8 ("Contact Us About Privacy"). We will respond to your request within the timeframe required by applicable law. We may need to verify your identity before processing your request.</p>
              </PrivacySection>

              <PrivacySection title="7. Data Retention">
                <p className="text-muted-foreground mb-4 leading-relaxed">We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including to provide you with our services, comply with our legal obligations, resolve disputes, and enforce our agreements. The retention period may vary depending on the type of information and the context.</p>
                <p className="text-muted-foreground leading-relaxed">Factors we consider in determining retention periods include:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>The duration of your relationship with us (e.g., while you are an active customer).</li>
                    <li>Legal, contractual, or similar obligations to retain data (e.g., tax laws, record-keeping requirements, litigation holds).</li>
                    <li>The need to preserve data for security, fraud prevention, or network management purposes.</li>
                    <li>Whether the data is still necessary for the purposes for which it was collected.</li>
                </ul>
                <p className="text-muted-foreground mt-4 leading-relaxed">When personal information is no longer needed, we will securely delete or anonymize it in accordance with our data retention policies and applicable laws.</p>
              </PrivacySection>
              
              <PrivacySection title="8. Children's Privacy">
                <p className="text-muted-foreground leading-relaxed">FiberSolution's services are not directed to individuals under the age of 13 (or a higher age threshold as required by applicable local law). We do not knowingly collect personal information from children under this age. If we become aware that we have inadvertently collected personal information from a child under the relevant age without verifiable parental consent, we will take steps to delete such information from our records promptly. If you are a parent or guardian and believe that your child has provided us with personal information without your consent, please contact us using the details in Section 10.</p>
              </PrivacySection>

              <PrivacySection title="9. International Data Transfers">
                <p className="text-muted-foreground leading-relaxed">Your personal information may be processed in and transferred to countries other than your country of residence, including the United States, where our servers and central database are located. These countries may have data protection laws that are different from the laws of your country. When we transfer your personal information to other countries, we will protect that information as described in this Privacy Policy and in accordance with applicable law, by ensuring appropriate safeguards are in place (e.g., Standard Contractual Clauses, adequacy decisions, or your consent where required).</p>
              </PrivacySection>


              <PrivacySection title="10. Contact Us About Privacy">
                <p className="text-muted-foreground mb-6 leading-relaxed">If you have any questions, concerns, or complaints about this Privacy Policy, our data practices, or if you wish to exercise your privacy rights, please contact our dedicated Privacy Team:</p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground"><strong className="text-foreground">Email:</strong> <a href="mailto:privacy@fibersolution.net" className="text-primary hover:underline">privacy@fibersolution.net</a></span>
                  </div>
                   <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground"><strong className="text-foreground">Phone:</strong> <a href="tel:1-800-342-3763" className="text-primary hover:underline">1-800-FIBER-NET</a> (Select option for Privacy Office)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground"><strong className="text-foreground">Mailing Address:</strong><br />FiberSolution Privacy Office<br />123 Fiber Optic Avenue<br />Tech City, TC 12345, USA</span>
                  </div>
                </div>
                <Button
                  onClick={handleContactPrivacy}
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Mail className="w-5 h-5 mr-2" /> Contact Privacy Team
                </Button>
              </PrivacySection>

              <PrivacySection title="11. Changes to This Privacy Policy">
                <p className="text-muted-foreground mb-4 leading-relaxed">We may update this Privacy Policy from time to time to reflect changes in our data practices, service offerings, or applicable laws. When we make material changes to this Privacy Policy, we will notify you by:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-6">
                  <li>Posting the updated policy prominently on our website.</li>
                  <li>Updating the "Last Updated" date at the top of this Privacy Policy.</li>
                  <li>For significant changes, we may also provide a more prominent notice, such as sending an email notification to the primary email address associated with your account or displaying a notice within your customer portal.</li>
                </ul>
                <div className="bg-yellow-500/10 dark:bg-yellow-500/5 border border-yellow-500/30 rounded-lg p-6">
                  <p className="text-yellow-600 dark:text-yellow-400 text-sm font-medium flex items-start">
                    <Edit3 className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    We encourage you to review this Privacy Policy periodically to stay informed about how FiberSolution is protecting your information and to be aware of any modifications. Your continued use of our services after any changes to this Privacy Policy will constitute your acceptance of such changes.
                  </p>
                </div>
              </PrivacySection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;