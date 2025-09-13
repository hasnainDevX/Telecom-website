import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, Phone, Mail, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useTheme } from "@/components/theme/ThemeProvider";
import logo from "../../assets/gqnlogo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { toast } = useToast();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    // Scroll to top when route changes
    window.scrollTo(0, 0);
  }, [location]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "FAQ", path: "/faq" },
  ];

  const handleGetConnected = () => {
    toast({
      title: "Get Connected",
      description:
        "Fill out the form and we will get back to you shortly.",
    });
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <motion.header
      initial={{ y: -120 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/80 dark:bg-background/70 backdrop-blur-lg shadow-lg border-b border-border/20`}
    >
      <div
        className={`bg-primary/5 dark:bg-primary/10 text-primary py-1.5 px-4 text-xs transition-all duration-300 ${
          isScrolled
            ? "opacity-0 -translate-y-full"
            : "opacity-100 translate-y-0"
        }`}
      >
        <div className="container mx-auto flex flex-wrap justify-center sm:justify-between items-center gap-2 sm:gap-4">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <Phone className="w-3.5 h-3.5" />
              <span>713-382-9770</span>
            </div>
            <div className="hidden sm:flex items-center space-x-1">
              <Mail className="w-3.5 h-3.5" />
              <span>goqualitynetworks@gmail.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="font-medium">
              🚀 Get Go Quality Networks - Limited Time Offer!
            </span>
          </div>
        </div>
      </div>

      <nav className="container mx-auto px-4 py-3.5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <img src={logo} alt="Go Quality Networks Logo" className="w-12 h-12 scale-125"/>
            <span className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
              Go Quality Networks
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ease-out
                   hover:bg-primary/10 hover:text-primary
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background
                   ${
                     isActive
                       ? "text-primary bg-primary/10"
                       : "text-muted-foreground"
                   }`
                }
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeDesktopTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
            <div className="hidden lg:block ml-2">
              <Link to="/contact">
                <Button
                  onClick={handleGetConnected}
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
                >
                  Get Connected
                </Button>
              </Link>
            </div>
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                className="text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden mt-3 border-t border-border/50 pt-3"
            >
              <div className="space-y-1.5">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `block px-3 py-2.5 text-base font-medium rounded-md transition-colors duration-150
                       hover:bg-primary/10 hover:text-primary
                       ${
                         isActive
                           ? "bg-primary/10 text-primary"
                           : "text-muted-foreground"
                       }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
                <Button
                  onClick={() => handleNavigation('/contact')}
                  className="w-full mt-3 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-3 rounded-md"
                >
                  Get Connected
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;