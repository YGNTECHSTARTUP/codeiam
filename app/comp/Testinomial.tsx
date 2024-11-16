import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonial() {
    const testimonials = [
        {
          quote:
            "Codeiam's pre-incubation hackathon cluster is a game-changer! It provides an incredible platform to explore innovative ideas, collaborate with like-minded individuals, and transform concepts into impactful projects.",
          name: "Shazin Hijazy",
          designation: "Founder of Cross Roads With Shazin Hijazy",
          src: "/team2.jpeg",
        },
        {
          quote:
            "The pre-incubation hackathon cluster at Codeiam seamlessly integrates mentorship, innovation, and teamwork. It’s the perfect ecosystem for fostering creativity and launching scalable solutions.",
          name: "Gautam Kushwaha",
          designation: "President of Codeiam",
          src: "/team1.jpeg",
        },
        {
          quote:
            "Codeiam’s pre-incubation hackathon cluster has redefined how tech enthusiasts approach problem-solving. The experience is both exhilarating and rewarding, enabling participants to learn, innovate, and grow.",
          name: "Raghavendra Varma",
          designation: "Secretary of Codeiam",
          src: "/team3.jpeg",
        },
      ];
      
      
  return <div className="container">
    <div className="text-xl md:text-2xl lg:text-4xl xl:text-6xl">Testinomials</div>
    <AnimatedTestimonials testimonials={testimonials} />;
    </div>
}
