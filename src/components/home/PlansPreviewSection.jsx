
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { CheckCircle, ArrowRight, Search, Star, Package } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { useToast } from '@/components/ui/use-toast';

// const PlansPreviewSection = () => {
//   const { toast } = useToast();

//   const handleViewDetails = (planName) => {
//     toast({
//       title: `🔍 Viewing Details for ${planName}`,
//       description: "Redirecting you to more information. (This is a demo)"
//     });
//   };

//   const plans = [
//     {
//       name: 'Popular Internet Deals',
//       type: 'Internet',
//       description: 'Discover highly-rated internet plans with various speeds and features to suit your streaming, gaming, and browsing needs.',
//       features: ['Compare Speeds (e.g., 100 Mbps, 500 Mbps, 1 Gbps)', 'Check Data Cap Information', 'See Contract Length Options', 'Read User Reviews'],
//       icon: Search,
//       color: 'text-primary',
//       popular: true,
//       imageAlt: 'Icon representing searching for internet deals.'
//     },
//     {
//       name: 'Top TV Packages',
//       type: 'TV',
//       description: 'Explore TV packages offering a wide range of channels, streaming app integrations, and DVR options for your entertainment.',
//       features: ['Compare Channel Lineups', 'Check HD/4K Availability', 'Explore On-Demand Content', 'Find Bundled Offers'],
//       icon: Package,
//       color: 'text-accent',
//       popular: false,
//       imageAlt: 'Icon representing TV packages and bundles.'
//     }
//   ];

//   const sectionVariants = {
//     hidden: { opacity: 0 },
//     visible: { 
//       opacity: 1,
//       transition: { staggerChildren: 0.15, duration: 0.5 }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30, scale: 0.95 },
//     visible: { 
//       opacity: 1, 
//       y: 0, 
//       scale: 1,
//       transition: { type: 'spring', stiffness: 100, damping: 12 }
//     }
//   };

//   return (
//     <section className="py-20 md:py-28 bg-muted/30 dark:bg-muted/10">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//           className="text-center mb-14 md:mb-20"
//         >
//           <h2 className="section-title mb-4">
//             Explore Featured Service Options
//           </h2>
//           <p className="section-subtitle max-w-2xl mx-auto">
//             Get an overview of popular telecom service types and what to look for when comparing.
//           </p>
//         </motion.div>

//         <motion.div 
//           className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch"
//           variants={sectionVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           {plans.map((plan) => (
//             <motion.div
//               key={plan.name}
//               variants={itemVariants}
//               className={`relative flex flex-col bg-card rounded-xl overflow-hidden shadow-card-hover dark:shadow-card-hover-dark hover:shadow-lg dark:hover:shadow-primary/20 transition-all duration-300 group ${
//                 plan.popular ? 'border-2 border-primary animate-pulse-glow' : 'border border-border'
//               }`}
//             >
//               {plan.popular && (
//                 <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
//                   <span className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-5 py-1.5 rounded-full text-xs font-semibold shadow-md">
//                     <Star className="w-3.5 h-3.5 inline mr-1 -mt-0.5" /> Popular Choice
//                   </span>
//                 </div>
//               )}
              
//               <div className="p-6 md:p-8 flex flex-col flex-grow">
//                 <div className="mb-5 text-center">
//                   <plan.icon className={`w-14 h-14 mx-auto mb-3 ${plan.color}`} />
//                   <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-1">{plan.name}</h3>
//                   <p className={`text-xs font-medium ${plan.color} min-h-[30px]`}>{plan.description}</p>
//                 </div>
                
//                 <div className="text-center mb-5">
//                   <span className="text-2xl font-semibold text-muted-foreground">Starting from</span>
//                   <span className="block text-4xl font-extrabold text-primary">Compare Prices</span>
//                   <p className="text-xs text-muted-foreground mt-0.5">Varies by provider and location</p>
//                 </div>

//                 <ul className="space-y-2.5 mb-6 flex-grow">
//                   {plan.features.map((feature, featureIndex) => (
//                     <li key={featureIndex} className="flex items-center space-x-2.5">
//                       <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 flex-shrink-0" />
//                       <span className="text-sm text-muted-foreground">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 <Button
//                   onClick={() => handleViewDetails(plan.name)}
//                   size="lg"
//                   className={`w-full mt-auto py-3 text-base font-semibold rounded-md transition-all duration-300 group-hover:scale-[1.02] ${
//                     plan.popular
//                       ? 'bg-gradient-to-r from-primary to-accent hover:opacity-95 text-primary-foreground'
//                       : 'bg-primary/10 text-primary hover:bg-primary/20'
//                   }`}
//                 >
//                   View {plan.type} Details
//                   <ArrowRight className="ml-2 w-4 h-4" />
//                 </Button>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
//           className="text-center mt-14 md:mt-20"
//         >
//           <Link to="/services">
//             <Button
//               variant="outline"
//               size="lg"
//               className="text-primary border-primary hover:bg-primary/10 text-base font-semibold group px-7 py-3 rounded-full"
//             >
//               Explore All Guidance Topics
//               <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default PlansPreviewSection;
