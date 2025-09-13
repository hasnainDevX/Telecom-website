import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import StatsSection from '@/components/home/StatsSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import CtaSection from '@/components/home/CtaSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';

const Home = () => {
  return (
    <div className="bg-background text-foreground">
      <HeroSection />
      <FeaturesSection />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <TestimonialSection />
      <StatsSection />
      <CtaSection />
    </div>
  );
};

export default Home;