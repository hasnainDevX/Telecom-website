import { motion } from "framer-motion";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const TestimonialSection = () => {
const testimonials = [
  {
    name: "Emily T.",
    location: "Austin, TX",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "I’m not great with tech stuff, but FiberSolution helped me figure out the best internet plan for my house without the usual headache. Everything was explained in plain English, and now we’re paying less than before. Super helpful!",
    rating: 5,
    imageAlt:
      "Emily T., a mom in her 30s, relieved after getting guidance for setting up home internet.",
  },
  {
    name: "Jason R.",
    location: "Denver, CO",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
    quote:
      "I just moved and had no clue which provider worked best here. FiberSolution showed me options in minutes, and even pointed out which ones had hidden fees. Honestly saved me hours of frustration.",
    rating: 5,
    imageAlt:
      "Jason R., a young man in his late 20s, relieved after finding the right internet provider quickly.",
  },
  {
    name: "Priya M.",
    location: "Phoenix, AZ",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
    quote:
      "I almost signed up for a plan that looked good but had awful reviews. FiberSolution helped me compare providers and pointed me to one that actually works well in my area. Totally worth it.",
    rating: 5,
    imageAlt:
      "Priya M., a work-from-home mom in her early 30s, thankful for honest advice on choosing internet.",
  },
  {
    name: "Laura G.",
    location: "San Diego, CA",
    img: "https://randomuser.me/api/portraits/women/33.jpg",
    quote:
      "Between school Zoom calls, Netflix, and my husband working remote, we needed reliable internet. FiberSolution helped us pick a solid plan without all the confusing tech stuff. Took 10 minutes and we’ve had no problems since.",
    rating: 5,
    imageAlt:
      "Laura G., a mom in her late 30s, smiling after her family upgraded their internet setup smoothly.",
  },
  {
    name: "Carlos D.",
    location: "Miami, FL",
    img: "https://randomuser.me/api/portraits/men/29.jpg",
    quote:
      "I didn’t know there were that many providers in my area. FiberSolution gave me a clear comparison and made the decision super easy. Ended up getting faster service for less money.",
    rating: 5,
    imageAlt:
      "Carlos D., a man in his 30s, satisfied after switching to a better internet plan with help.",
  },
];



  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-14 md:mb-20"
        >
          <h2 className="section-title mb-4">What Our Users Say</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Hear from people who found their ideal telecom solutions with
            FiberSolution's guidance.
          </p>
        </motion.div>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
};

export default TestimonialSection;
