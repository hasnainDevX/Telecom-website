
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';
import { ArrowRight, Facebook, Instagram, Linkedin, Mail, Phone, Twitter, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { toast } = useToast();

  const handleSocialClick = (platform) => {
    toast({
      title: `🌐 ${platform} Coming Soon!`,
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email) {
      toast({
        title: "📧 Newsletter Signup",
        description: `Thanks for subscribing, ${email}! (This is a demo)`
      });
      e.target.reset();
    } else {
      toast({
        title: "⚠️ Email Required",
        description: "Please enter your email address to subscribe.",
        variant: "destructive"
      });
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQ', path: '/faq' }
  ];

  const serviceLinks = [
    { name: 'Residential Fiber', path: '/services' },
    { name: 'Business Solutions', path: '/services' },
    { name: 'Fiber TV', path: '/services' },
    { name: 'Fiber Phone', path: '/services' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
  ];

  const socialIcons = [
    { icon: Facebook, name: 'Facebook', href: '#' },
    { icon: Twitter, name: 'Twitter', href: '#' },
    { icon: Instagram, name: 'Instagram', href: '#' },
    { icon: Linkedin, name: 'LinkedIn', href: '#' }
  ];

  return (
    <footer className="bg-background border-t border-border/30 text-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10 mb-12">
          <div className="space-y-4 xl:col-span-2">
            <Link to="/" className="flex items-center space-x-2 group mb-3">
              <div className="relative p-1.5 bg-primary/10 rounded-full">
                <Zap className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                Go Quality Networks
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Delivering ultra-fast fiber optic internet solutions to homes and businesses. 
              Experience the future of connectivity with our cutting-edge technology and dedicated support.
            </p>
            <div className="flex space-x-3 pt-2">
              {socialIcons.map(({ icon: Icon, name, href }) => (
                <motion.a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => { e.preventDefault(); handleSocialClick(name); }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 bg-muted/50 hover:bg-primary text-muted-foreground hover:text-primary-foreground rounded-full transition-all duration-200"
                  aria-label={name}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-sm font-semibold text-foreground tracking-wider uppercase">Quick Links</span>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <span className="text-sm font-semibold text-foreground tracking-wider uppercase">Our Services</span>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <span className="text-sm font-semibold text-foreground tracking-wider uppercase">Stay Connected</span>
            <form onSubmit={handleNewsletterSubmit} className="mt-2 flex flex-col space-y-3">
              <label htmlFor="footer-email" className="text-xs text-muted-foreground">Subscribe to our newsletter for updates.</label>
              <div className="flex">
                <input
                  id="footer-email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className="flex-1 px-3.5 py-2.5 text-sm bg-input border border-border rounded-l-md text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  required
                />
                <Button
                  type="submit"
                  size="icon"
                  className="px-3.5 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-r-md transition-colors"
                  aria-label="Subscribe to newsletter"
                >
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </form>
             <div className="pt-2 space-y-2.5">
                <a href="tel:1-800-342-3763" className="flex items-center space-x-2.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 text-primary/80" />
                  <span>713-382-9770</span>
                </a>
                <a href="mailto:support@goqualitynetworks.com" className="flex items-center space-x-2.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-4 h-4 text-primary/80" />
                  <span>support@goqualitynetworks.com</span>
                </a>
              </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border/30 mt-8">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Go Quality Networks. All rights reserved.
            </p>
            <div className="flex space-x-4 text-xs">
              {legalLinks.map(link => (
                <Link key={link.path} to={link.path} className="text-muted-foreground hover:text-primary hover:underline underline-offset-2 transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
