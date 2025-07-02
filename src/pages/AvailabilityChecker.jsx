
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search, CheckCircle, X, Zap, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const AvailabilityChecker = () => {
  const [address, setAddress] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState(null);
  const { toast } = useToast();

  const handleCheck = async (e) => {
    e.preventDefault();
    if (!address.trim()) {
      toast({
        title: "📍 Address Required",
        description: "Please enter your address to check availability."
      });
      return;
    }

    setIsChecking(true);
    
    // Simulate API call
    setTimeout(() => {
      // Mock availability check - randomly determine if service is available
      const isAvailable = Math.random() > 0.3; // 70% chance of availability
      
      setResult({
        available: isAvailable,
        address: address,
        plans: isAvailable ? [
          { name: 'Essential', speed: '100 Mbps', price: '$39.99' },
          { name: 'Premium', speed: '500 Mbps', price: '$59.99' },
          { name: 'Ultra', speed: '1 Gigabit', price: '$79.99' }
        ] : [],
        estimatedInstall: isAvailable ? '3-5 business days' : null
      });
      setIsChecking(false);
    }, 2000);
  };

  const handleOrderNow = (planName) => {
    toast({
      title: `🚀 ${planName} Selected!`,
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleContactSales = () => {
    toast({
      title: "📞 Contact Sales",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900/20 via-cyan-900/20 to-slate-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Check Availability
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enter your address to see if our ultra-fast fiber internet is available in your area. 
              Get instant results and available plans.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Availability Checker */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass rounded-3xl p-8 mb-12 fiber-glow"
            >
              <form onSubmit={handleCheck} className="space-y-6">
                <div className="text-center mb-8">
                  <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-white mb-2">Enter Your Address</h2>
                  <p className="text-gray-400">We'll check if fiber internet is available at your location</p>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter your full address (e.g., 123 Main St, City, State, ZIP)"
                    className="w-full px-6 py-4 bg-slate-800 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 pr-16"
                    disabled={isChecking}
                  />
                  <Button
                    type="submit"
                    disabled={isChecking}
                    className="absolute right-2 top-2 bottom-2 px-6 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-full transition-all duration-300"
                  >
                    {isChecking ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Search className="w-5 h-5" />
                    )}
                  </Button>
                </div>

                <div className="text-center text-sm text-gray-400">
                  <p>We respect your privacy. Your address is only used to check service availability.</p>
                </div>
              </form>
            </motion.div>

            {/* Loading State */}
            {isChecking && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <h3 className="text-2xl font-bold text-white mb-2">Checking Availability...</h3>
                <p className="text-gray-400">Scanning our network coverage in your area</p>
              </motion.div>
            )}

            {/* Results */}
            {result && !isChecking && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Availability Status */}
                <div className={`glass rounded-2xl p-8 ${result.available ? 'border-2 border-green-500' : 'border-2 border-red-500'}`}>
                  <div className="flex items-center justify-center mb-6">
                    {result.available ? (
                      <CheckCircle className="w-16 h-16 text-green-400" />
                    ) : (
                      <X className="w-16 h-16 text-red-400" />
                    )}
                  </div>
                  
                  <div className="text-center">
                    <h3 className={`text-3xl font-bold mb-2 ${result.available ? 'text-green-400' : 'text-red-400'}`}>
                      {result.available ? 'Great News!' : 'Not Available Yet'}
                    </h3>
                    <p className="text-xl text-gray-300 mb-4">
                      {result.available 
                        ? 'Fiber internet is available at your location!'
                        : 'Fiber internet is not currently available at your address.'
                      }
                    </p>
                    <p className="text-gray-400">
                      <MapPin className="w-4 h-4 inline mr-1" />
                      {result.address}
                    </p>
                    
                    {result.available && result.estimatedInstall && (
                      <div className="mt-6 inline-flex items-center space-x-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2">
                        <Clock className="w-4 h-4 text-blue-400" />
                        <span className="text-blue-300">Installation: {result.estimatedInstall}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Available Plans */}
                {result.available && result.plans.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">Available Plans</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      {result.plans.map((plan, index) => (
                        <motion.div
                          key={plan.name}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="glass rounded-2xl p-6 hover:fiber-glow transition-all duration-300"
                        >
                          <div className="text-center mb-6">
                            <Zap className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                            <h4 className="text-xl font-bold text-white mb-2">{plan.name}</h4>
                            <div className="text-3xl font-bold text-blue-400 mb-1">{plan.speed}</div>
                            <div className="text-2xl font-bold text-white">
                              {plan.price}<span className="text-sm text-gray-400">/month</span>
                            </div>
                          </div>
                          
                          <Button
                            onClick={() => handleOrderNow(plan.name)}
                            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold py-3 rounded-full transition-all duration-300 hover:scale-105"
                          >
                            Order Now
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Not Available - Contact Options */}
                {!result.available && (
                  <div className="glass rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Don't Give Up!</h3>
                    <p className="text-gray-300 mb-6">
                      We're constantly expanding our fiber network. Contact us to learn about upcoming availability 
                      in your area or explore alternative solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        onClick={handleContactSales}
                        className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Contact Sales
                      </Button>
                      <Button
                        onClick={() => {
                          setResult(null);
                          setAddress('');
                        }}
                        variant="outline"
                        className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-3 rounded-full transition-all duration-300"
                      >
                        Check Another Address
                      </Button>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Our Growing Network
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're rapidly expanding our fiber network across the region. See our current coverage areas 
              and planned expansions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl p-8 fiber-glow"
          >
            <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center">
              <img 
                alt="Interactive coverage map showing fiber internet availability across different regions"
                className="w-full h-full object-cover rounded-2xl"
               src="https://images.unsplash.com/photo-1604869515882-4d10fa4b0492" />
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-400 mb-4">
                Interactive map showing current and planned fiber coverage areas
              </p>
              <Button
                onClick={() => toast({
                  title: "🗺️ Interactive Map",
                  description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
                })}
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
              >
                View Full Coverage Map
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Common Questions
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                question: "How accurate is the availability checker?",
                answer: "Our availability checker uses real-time data from our network infrastructure to provide accurate results. However, final confirmation is done during the installation appointment."
              },
              {
                question: "What if fiber isn't available in my area?",
                answer: "We're constantly expanding our network. Contact us to be notified when fiber becomes available in your area, or ask about alternative high-speed options."
              },
              {
                question: "How long does installation take?",
                answer: "Most installations are completed within 3-5 business days of ordering. The actual installation appointment typically takes 2-4 hours."
              },
              {
                question: "Is there a cost for checking availability?",
                answer: "No, checking availability is completely free with no obligation. We only require payment when you decide to order service."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AvailabilityChecker;
