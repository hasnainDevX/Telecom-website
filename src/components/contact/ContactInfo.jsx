
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

const ContactInfo = () => {
  const contactDetails = [
    { icon: Phone, label: 'Sales & Support', value: '1-800-FIBER-NET', href: 'tel:1-800-342-3763' },
    { icon: Mail, label: 'General Inquiries', value: 'info@fibersolution.net', href: 'mailto:info@fibersolution.net' },
    { icon: MessageSquare, label: 'Support Email', value: 'support@fibersolution.net', href: 'mailto:support@fibersolution.net' },
    { icon: MapPin, label: 'Corporate Office', value: '123 Fiber Optic Ave, Tech City, TC 12345' },
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '8 AM - 9 PM EST' },
    { day: 'Saturday', hours: '9 AM - 7 PM EST' },
    { day: 'Sunday', hours: '10 AM - 6 PM EST (Support)' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
      className="space-y-6 md:space-y-8"
    >
      <div className="bg-card rounded-xl p-6 md:p-8 shadow-lg border border-border/50">
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-5 flex items-center">
          <Clock className="w-6 h-6 text-primary mr-2.5 flex-shrink-0" />
          Our Availability
        </h3>
        <div className="space-y-2.5 mb-3">
          {businessHours.map((item, index) => (
            <div key={index} className="flex justify-between items-center text-xs sm:text-sm">
              <span className="text-muted-foreground">{item.day}</span>
              <span className="text-foreground font-medium">{item.hours}</span>
            </div>
          ))}
        </div>
        <div className="mt-5 p-3 bg-green-500/10 dark:bg-green-400/10 border border-green-500/30 dark:border-green-400/30 rounded-lg">
          <p className="text-green-700 dark:text-green-300 text-xs sm:text-sm font-medium text-center">
            24/7 Technical Support via Phone & Email
          </p>
        </div>
      </div>

      <div className="bg-card rounded-xl p-6 md:p-8 shadow-lg border border-border/50">
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6">Direct Contact Methods</h3>
        <div className="space-y-5">
          {contactDetails.map((detail, index) => (
            <div key={index} className="flex items-start space-x-3.5">
              <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mt-0.5">
                <detail.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground">{detail.label}</p>
                {detail.href ? (
                  <a href={detail.href} className="text-sm sm:text-base font-medium text-foreground hover:text-primary transition-colors break-all">
                    {detail.value}
                  </a>
                ) : (
                  <p className="text-sm sm:text-base font-medium text-foreground break-all">{detail.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
