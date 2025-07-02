import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
// import PlansPreviewSection from '@/components/home/PlansPreviewSection';
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
      {/* <PlansPreviewSection /> */}
      <TestimonialSection />
      <StatsSection />
      <CtaSection />
    </div>
  );
};

export default Home;