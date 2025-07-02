import React from 'react';
import { motion } from 'framer-motion';
import { FileText, AlertTriangle, CheckCircle, Scale, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import TermsSection from '@/components/terms/TermsSection';

const Terms = () => {
  const { toast } = useToast();

  const handleContactLegal = () => {
    toast({
      title: "⚖️ Legal Contact",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
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
              These terms govern your use of FiberSolution services. Please read them carefully 
              as they contain important information about your rights and obligations.
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
                  { icon: CheckCircle, title: 'Fair & Clear', description: 'Transparent terms designed for understanding.' },
                  { icon: AlertTriangle, title: 'Your Role', description: 'Guidelines for responsible service use.' },
                  { icon: Scale, title: 'Our Commitments', description: 'Protections and dispute procedures outlined.' }
                ].map((item, index) => (
                  <div key={index}>
                    <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="space-y-10">
              <TermsSection title="Acceptance of Terms" sectionNumber="1">
                <p className="text-muted-foreground mb-4 leading-relaxed">By using FiberSolution services, accessing our website, or signing up for our internet plans, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.</p>
                <p className="text-muted-foreground mb-4 leading-relaxed">These Terms constitute a legally binding agreement between you ("Customer," "you," or "your") and FiberSolution ("Company," "we," "us," or "our").</p>
                <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mt-6">
                  <p className="text-primary text-sm font-medium"><strong>Important:</strong> These Terms may be updated periodically. Your continued use of our services after any changes signifies your acceptance of the new Terms.</p>
                </div>
              </TermsSection>

              <TermsSection title="Service Description" sectionNumber="2">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3">Internet Services</h3>
                    <p className="text-muted-foreground mb-3 leading-relaxed">FiberSolution provides high-speed fiber optic internet services to residential and business customers. Our services include, but are not limited to:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Fiber optic internet connectivity at various speed tiers.</li>
                      <li>Professional installation and setup of required equipment.</li>
                      <li>Ongoing technical support and customer service.</li>
                      <li>Regular network monitoring and maintenance for optimal performance.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3">Service Availability & Limitations</h3>
                    <p className="text-muted-foreground leading-relaxed">Services are subject to availability in your geographical area and technical feasibility. We reserve the right to refuse or discontinue service in areas where providing reliable service is impractical due to technical, regulatory, or business conditions. Actual speeds may vary and are not guaranteed; they can be affected by factors such as customer equipment, network congestion, and website/server performance.</p>
                  </div>
                </div>
              </TermsSection>

              <TermsSection title="Customer Responsibilities" sectionNumber="3">
                 <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3">Acceptable Use</h3>
                    <p className="text-muted-foreground mb-3 leading-relaxed">You agree to use our services responsibly, legally, and in accordance with our Acceptable Use Policy (AUP), which is incorporated by reference into these Terms. Key responsibilities include:</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Complying with all applicable local, state, national, and international laws and regulations.</li>
                      <li>Respecting the rights and privacy of others; not engaging in harassment or distributing harmful content.</li>
                      <li>Not using services for illegal, fraudulent, infringing, or harmful activities.</li>
                      <li>Not attempting to disrupt, degrade, or compromise the security or integrity of our network or the networks of others.</li>
                      <li>Not reselling or redistributing services without our prior written authorization.</li>
                      <li>Ensuring your use of the service does not negatively impact other users or the overall network performance (e.g., through excessive bandwidth consumption inconsistent with typical residential/business use for your plan).</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3">Equipment Care</h3>
                    <p className="text-muted-foreground mb-3 leading-relaxed">You are responsible for the proper care and use of any equipment provided by FiberSolution (e.g., modem, router, optical network terminal):</p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Protect provided equipment from damage, theft, misuse, or unauthorized modification.</li>
                      <li>Allow FiberSolution or its authorized agents reasonable access to your premises for installation, maintenance, inspection, and removal of equipment.</li>
                      <li>Return all provided equipment in good working condition (normal wear and tear excepted) upon service termination. Fees may apply for unreturned, lost, stolen, or damaged equipment.</li>
                      <li>Promptly report any equipment problems, malfunctions, or suspected tampering to us.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3">Account Security</h3>
                    <p className="text-muted-foreground leading-relaxed">You are responsible for maintaining the confidentiality and security of your account credentials (e.g., username, password, security questions) and for all activities that occur under your account. Notify us immediately of any unauthorized use of your account or any other breach of security.</p>
                  </div>
                </div>
              </TermsSection>

              <TermsSection title="Billing and Payment" sectionNumber="4">
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold text-primary mb-3">Payment Obligations</h3>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 leading-relaxed">
                            <li>Monthly service fees are typically billed in advance and are due by the date specified on your invoice.</li>
                            <li>You agree to pay all charges associated with your account, including applicable taxes, surcharges, and fees (e.g., regulatory fees, late payment fees, equipment fees if applicable).</li>
                            <li>Late payments may incur additional late fees as outlined in our fee schedule. Continuous non-payment may lead to service suspension or termination after appropriate notice.</li>
                            <li>We may require a deposit or perform a credit check before initiating or reactivating service, subject to applicable laws.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-primary mb-3">Pricing, Promotions, and Changes</h3>
                        <p className="text-muted-foreground mb-3 leading-relaxed">Service pricing and plan features are subject to change. We will provide you with at least 30 days' notice of any adverse material changes to your regular monthly service fees or plan features. Promotional rates are temporary and will revert to then-current standard rates upon expiration of the promotional period, as specified in the offer terms.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-primary mb-3">Refunds and Credits</h3>
                        <p className="text-muted-foreground leading-relaxed">Refunds and service credits are issued at our sole discretion, in accordance with our published policies, or as required by applicable law. Installation fees, activation fees, and one-time charges are generally non-refundable unless explicitly stated otherwise.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-primary mb-3">Disputed Charges</h3>
                        <p className="text-muted-foreground leading-relaxed">If you believe there is an error on your bill, you must contact us within 60 days of the bill date to dispute the charge. You must pay any undisputed portions of your bill by the due date to avoid service interruption or late fees while the disputed amount is under review.</p>
                    </div>
                </div>
              </TermsSection>

              <TermsSection title="Service Level and Limitations" sectionNumber="5">
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold text-primary mb-3">Service Availability and Performance</h3>
                        <p className="text-muted-foreground mb-3 leading-relaxed">While FiberSolution strives to provide consistent and reliable service, including targeting a high level of network uptime (e.g., 99.9%), we do not guarantee uninterrupted or error-free service. Internet service may be subject to interruptions, delays, or limitations due to various factors, including but not limited to:</p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                            <li>Scheduled network maintenance, repairs, and upgrades necessary for improving and expanding our infrastructure.</li>
                            <li>Unforeseen equipment failures, software bugs, or technical issues within our network or third-party systems we rely on.</li>
                            <li>Natural disasters, severe weather conditions, acts of God, or other force majeure events beyond our reasonable control.</li>
                            <li>Issues with third-party network infrastructure (e.g., power outages affecting our equipment, problems with upstream internet providers).</li>
                            <li>Limitations or issues related to your own equipment (computer, router, wiring), in-home network configuration, Wi-Fi interference, or software.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-primary mb-3">Speed and Bandwidth</h3>
                        <p className="text-muted-foreground leading-relaxed">Advertised speeds (e.g., "up to 1 Gigabit") represent the maximum theoretical network speeds achievable for the respective service plan under optimal conditions between your location and our network core. Actual speeds experienced by customers will vary and are not guaranteed. Factors that can affect actual speeds include, but are not limited to: capabilities of customer equipment (computers, routers, Wi-Fi adapters), internal home/business wiring, Wi-Fi signal strength and interference, network congestion (both on our network and the broader internet), the performance of websites/servers you are accessing, and the number of simultaneously connected devices and applications using the internet connection.</p>
                    </div>
                    <div className="bg-yellow-500/10 dark:bg-yellow-500/5 border border-yellow-500/30 rounded-lg p-4 mt-6">
                        <p className="text-yellow-600 dark:text-yellow-400 text-sm font-medium"><strong>Note:</strong> FiberSolution is committed to making commercially reasonable efforts to provide high-quality service consistent with industry standards. We continuously monitor and manage our network to deliver the best possible performance.</p>
                    </div>
                </div>
              </TermsSection>

              <TermsSection title="Termination of Service" sectionNumber="6">
                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold text-primary mb-3">Termination by Customer</h3>
                        <p className="text-muted-foreground mb-3 leading-relaxed">You may terminate your service at any time by contacting FiberSolution customer service and following the specified cancellation procedures. Key conditions include:</p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                            <li>Typically, a 30-day notice period is required for termination, unless a different period is stated in your specific service agreement or a promotional offer.</li>
                            <li>You are responsible for returning all FiberSolution-owned equipment (e.g., modem, router) in good working condition (normal wear and tear excepted) within the timeframe specified by us (usually 14-30 days after the service termination date). Failure to return equipment or returning damaged equipment may result in charges.</li>
                            <li>You must pay all outstanding charges on your account up to the effective date of termination. If you are under a contract term with an early termination fee (ETF), that fee will apply if you cancel before the contract end date.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-primary mb-3">Termination or Suspension by FiberSolution</h3>
                        <p className="text-muted-foreground mb-3 leading-relaxed">FiberSolution reserves the right to suspend or terminate your service, with or without prior notice (depending on the severity and nature of the issue, and applicable laws), for reasons including, but not limited to:</p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                            <li>Non-payment of undisputed charges after the due date and any applicable grace or notice period.</li>
                            <li>Violation of these Terms of Service, our Acceptable Use Policy, or other applicable policies.</li>
                            <li>Engaging in fraudulent, illegal, abusive, or harmful activities using the services.</li>
                            <li>If we determine that providing service to you is no longer technically or commercially feasible, or if we cease to provide service in your specific area or discontinue the particular service plan you are subscribed to (in such cases, appropriate notice will be given).</li>
                            <li>Upon request by law enforcement or other government agencies, in accordance with applicable legal processes.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-primary mb-3">Effect of Termination</h3>
                        <p className="text-muted-foreground leading-relaxed">Upon termination of your service, your access to the FiberSolution network and related services will cease. You remain responsible for all charges incurred up to the date of termination and for the prompt return of any FiberSolution-owned equipment. FiberSolution is not liable for any loss of data, information, or stored content resulting from service termination.</p>
                    </div>
                </div>
              </TermsSection>
              
              <TermsSection title="Limitation of Liability" sectionNumber="7">
                <div className="space-y-6">
                    <div className="bg-red-500/10 dark:bg-red-500/5 border border-red-500/30 rounded-lg p-6">
                        <p className="text-red-600 dark:text-red-400 text-lg font-semibold mb-2 flex items-center">
                            <AlertTriangle className="w-6 h-6 mr-2 flex-shrink-0" />
                            IMPORTANT LEGAL NOTICE
                        </p>
                        <p className="text-red-600 dark:text-red-400 text-sm leading-relaxed">
                            Please read this section carefully as it significantly limits our liability to you. Your use of FiberSolution services is subject to these limitations.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-primary mb-3">Service Limitations and "AS IS" Basis</h3>
                        <p className="text-muted-foreground mb-3 leading-relaxed">THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. FIBERSOLUTION MAKES NO WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, OR ANY WARRANTY THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE FROM VIRUSES OR OTHER HARMFUL COMPONENTS. YOU ACKNOWLEDGE THAT YOUR USE OF THE SERVICES IS AT YOUR SOLE RISK.</p>
                        <p className="text-muted-foreground mb-3 leading-relaxed">OUR LIABILITY FOR ANY SERVICE INTERRUPTIONS, DELAYS, OR FAILURES SHALL BE LIMITED TO SERVICE CREDITS AS MAY BE EXPRESSLY OUTLINED IN OUR APPLICABLE SERVICE LEVEL AGREEMENT (SLA), IF ANY, OR AS REQUIRED BY MANDATORY APPLICABLE LAW. THIS SHALL BE YOUR SOLE AND EXCLUSIVE REMEDY FOR SUCH SERVICE ISSUES.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-primary mb-3">Exclusion of Certain Types of Damages</h3>
                        <p className="text-muted-foreground mb-3 leading-relaxed">TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL FIBERSOLUTION, ITS AFFILIATES, DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, SUPPLIERS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES. THIS INCLUDES, BUT IS NOT LIMITED TO, DAMAGES FOR LOST PROFITS, LOSS OF BUSINESS OPPORTUNITY, LOSS OF DATA OR INFORMATION, BUSINESS INTERRUPTION, LOSS OF GOODWILL, OR OTHER INTANGIBLE LOSSES. THESE EXCLUSIONS APPLY REGARDLESS OF THE THEORY OF LIABILITY (WHETHER CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR OTHERWISE) AND EVEN IF FIBERSOLUTION HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THIS LIMITATION APPLIES TO DAMAGES RESULTING FROM: (I) THE USE OR THE INABILITY TO USE THE SERVICE; (II) THE COST OF PROCUREMENT OF SUBSTITUTE GOODS AND SERVICES; (III) UNAUTHORIZED ACCESS TO, ALTERATION OF, OR LOSS OF YOUR TRANSMISSIONS OR DATA; (IV) STATEMENTS OR CONDUCT OF ANY THIRD PARTY ON OR THROUGH THE SERVICE; OR (V) ANY OTHER MATTER RELATING TO THE SERVICE.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-primary mb-3">Maximum Aggregate Liability</h3>
                        <p className="text-muted-foreground leading-relaxed">NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, FIBERSOLUTION'S MAXIMUM AGGREGATE LIABILITY TO YOU (AND ANY PARTY CLAIMING THROUGH YOU) FOR ANY AND ALL CLAIMS, LOSSES, DAMAGES, OR LIABILITIES ARISING OUT OF OR RELATING TO THESE TERMS OR YOUR USE OF THE SERVICES, REGARDLESS OF THE FORM OF ACTION, SHALL NOT EXCEED THE TOTAL AMOUNT OF FEES ACTUALLY PAID BY YOU TO FIBERSOLUTION FOR THE SPECIFIC SERVICES GIVING RISE TO THE CLAIM DURING THE TWELVE (12) MONTH PERIOD IMMEDIATELY PRECEDING THE DATE THE CAUSE OF ACTION AROSE.</p>
                        <p className="text-muted-foreground mt-2 leading-relaxed">SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN WARRANTIES OR DAMAGES, SO SOME OF THE ABOVE LIMITATIONS AND EXCLUSIONS MAY NOT APPLY TO YOU TO THE EXTENT PROHIBITED BY APPLICABLE LAW.</p>
                    </div>
                </div>
              </TermsSection>

              <TermsSection title="Dispute Resolution" sectionNumber="8">
                 <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold text-primary mb-3">Governing Law</h3>
                        <p className="text-muted-foreground leading-relaxed">These Terms of Service and any disputes arising out of or related to them, your use of the Services, or our relationship with you shall be governed by and construed in accordance with the laws of the State in which FiberSolution's principal corporate office is located (or, if service is provided by a state-specific subsidiary, the laws of that state), without regard to its conflict of law principles that would result in the application of laws of another jurisdiction.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-primary mb-3">Informal Dispute Resolution First</h3>
                        <p className="text-muted-foreground leading-relaxed">We value our customers and aim to resolve disputes amicably. Before initiating any formal legal proceeding, you agree to first contact FiberSolution's customer service department or legal department to explain your grievance and attempt to resolve the dispute informally. Most customer concerns can be resolved quickly and to the customer's satisfaction through this process. You agree to make a good faith effort for at least sixty (60) days to resolve the dispute informally before pursuing arbitration or small claims court as described below.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-primary mb-3">Binding Arbitration Agreement</h3>
                        <p className="text-muted-foreground mb-3 leading-relaxed"><strong>PLEASE READ THIS ARBITRATION AGREEMENT CAREFULLY – IT MAY SIGNIFICANTLY AFFECT YOUR LEGAL RIGHTS, INCLUDING YOUR RIGHT TO FILE A LAWSUIT IN COURT AND TO HAVE A JURY HEAR YOUR CLAIMS. IT CONTAINS PROCEDURES FOR MANDATORY BINDING ARBITRATION AND A CLASS ACTION WAIVER.</strong></p>
                        <p className="text-muted-foreground mb-3 leading-relaxed">Except for disputes that qualify for small claims court or disputes relating to the enforcement or validity of your or FiberSolution’s intellectual property rights (e.g., trademarks, copyrights, patents, trade secrets), you and FiberSolution agree that any and all past, present, or future disputes, claims, or controversies arising out of or relating to these Terms, the Services, any equipment or advertising, or your relationship with FiberSolution (collectively, "Disputes") shall be resolved exclusively and finally by BINDING ARBITRATION, rather than in court.</p>
                        <p className="text-muted-foreground mb-3 leading-relaxed">The arbitration will be administered by a nationally recognized arbitration provider mutually agreed upon by the parties (e.g., the American Arbitration Association - AAA, or JAMS) under its applicable Commercial Arbitration Rules (or Consumer Arbitration Rules, if you are an individual consumer and those rules are deemed applicable). The arbitrator's decision will be final and binding, and judgment on the award rendered by the arbitrator(s) may be entered in any court having jurisdiction thereof.</p>
                        <p className="text-muted-foreground mb-3 leading-relaxed">The Federal Arbitration Act will govern the interpretation and enforcement of this arbitration provision.</p>
                    </div>
                     <div>
                        <h3 className="text-xl font-semibold text-primary mb-3">Waiver of Jury Trial and Class Action Waiver</h3>
                        <p className="text-muted-foreground mb-3 leading-relaxed"><strong>BY AGREEING TO THESE TERMS, YOU AND FIBERSOLUTION ARE EACH WAIVING THE RIGHT TO A TRIAL BY JURY.</strong></p>
                        <p className="text-muted-foreground leading-relaxed"><strong>YOU AND FIBERSOLUTION ALSO AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS ACTION LAWSUIT, CLASS-WIDE ARBITRATION, PRIVATE ATTORNEY-GENERAL ACTION, OR ANY OTHER REPRESENTATIVE PROCEEDING.</strong> Unless both you and FiberSolution agree otherwise in writing, the arbitrator may not consolidate more than one person's claims and may not otherwise preside over any form of any class, consolidated, or representative proceeding. If this specific class action waiver is found to be unenforceable, then the entirety of this arbitration provision (except for the jury trial waiver) shall be null and void.</p>
                    </div>
                </div>
              </TermsSection>
              
              <TermsSection title="General Provisions" sectionNumber="9">
                 <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold text-primary mb-3">Entire Agreement</h3>
                        <p className="text-muted-foreground leading-relaxed">These Terms of Service, along with our Privacy Policy, Acceptable Use Policy (AUP), any specific service level agreements (SLAs) applicable to your plan, and any written service order forms or agreements signed by you for specific services, constitute the entire and exclusive understanding and agreement between you and FiberSolution regarding your use of and access to the Services. These documents supersede and replace all prior or contemporaneous oral or written understandings, communications, or agreements between FiberSolution and you regarding the Services.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-primary mb-3">Severability</h3>
                        <p className="text-muted-foreground leading-relaxed">If any provision of these Terms is found by a court of competent jurisdiction or an arbitrator to be unlawful, void, invalid, or for any reason unenforceable, then that provision shall be deemed severable from these Terms and shall not affect the validity and enforceability of any remaining provisions. The remaining portions of the Terms shall continue in full force and effect.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-primary mb-3">Waiver</h3>
                        <p className="text-muted-foreground leading-relaxed">The failure of FiberSolution to exercise or enforce any right or provision of these Terms shall not constitute a waiver of such right or provision in that or any other instance. Any waiver of any provision of these Terms by FiberSolution will be effective only if in writing and signed by an authorized representative of FiberSolution.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-primary mb-3">Assignment</h3>
                        <p className="text-muted-foreground leading-relaxed">You may not assign or transfer these Terms or any of your rights or obligations hereunder, whether by operation of law or otherwise, without FiberSolution's prior written consent. Any attempt by you to assign or transfer these Terms without such consent will be null and void. FiberSolution may freely assign or transfer these Terms without restriction. Subject to the foregoing, these Terms will bind and inure to the benefit of the parties, their successors, and permitted assigns.</p>
                    </div>
                     <div>
                        <h3 className="text-xl font-semibold text-primary mb-3">Force Majeure</h3>
                        <p className="text-muted-foreground leading-relaxed">FiberSolution shall not be liable for any delay or failure to perform resulting from causes outside its reasonable control, including, but not limited to, acts of God, war, terrorism, riots, embargos, acts of civil or military authorities, fire, floods, accidents, pandemics, epidemics, strikes, or shortages of transportation facilities, fuel, energy, labor, or materials, or failures of telecommunications or internet service providers.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-primary mb-3">Notices</h3>
                        <p className="text-muted-foreground leading-relaxed">Any notices or other communications permitted or required hereunder by FiberSolution, including those regarding modifications to these Terms, will be in writing and given by FiberSolution (i) via email (to the primary email address associated with your account); (ii) by posting on the FiberSolution website or within your customer portal; or (iii) by mail to the billing address on your account. For notices made by email, the date of receipt will be deemed the date on which such notice is transmitted. It is your responsibility to keep your contact information current.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-primary mb-3">Changes to Terms</h3>
                        <p className="text-muted-foreground leading-relaxed">FiberSolution reserves the right, at its sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least thirty (30) days' notice prior to any new terms taking effect, as described in the "Notices" section. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Services after those revisions become effective, you agree to be bound by the revised terms.</p>
                    </div>
                </div>
              </TermsSection>

              <TermsSection title="Contact Information" sectionNumber="10">
                <p className="text-muted-foreground mb-6 leading-relaxed">For questions about these Terms of Service, to report violations, or for any legal inquiries, please contact our Legal Department:</p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground"><strong className="text-foreground">Legal Email:</strong> <a href="mailto:legal@fibersolution.net" className="text-primary hover:underline">legal@fibersolution.net</a></span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground"><strong className="text-foreground">General Customer Service:</strong> <a href="tel:1-800-342-3763" className="text-primary hover:underline">1-800-FIBER-NET</a></span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground"><strong className="text-foreground">Mailing Address:</strong><br />FiberSolution Legal Department<br />123 Fiber Optic Avenue<br />Tech City, TC 12345, USA</span>
                  </div>
                </div>
                <Button
                  onClick={handleContactLegal}
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Legal Team
                </Button>
              </TermsSection>

              <TermsSection title="Acknowledgment">
                <p className="text-muted-foreground mb-4 leading-relaxed">By creating an account, ordering, or using FiberSolution services, you acknowledge that you have read these Terms of Service, understand them, and agree to be bound by all of the terms and conditions herein, as well as our Privacy Policy and Acceptable Use Policy, which are incorporated by reference.</p>
                <div className="bg-green-500/10 dark:bg-green-500/5 border border-green-500/30 rounded-lg p-4 mt-6">
                  <p className="text-green-600 dark:text-green-400 text-sm font-medium flex items-center"><CheckCircle className="w-5 h-5 inline mr-2 flex-shrink-0" />These Terms are effective as of the date you first use our services or the "Last updated" date shown at the top of this document, whichever is later.</p>
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