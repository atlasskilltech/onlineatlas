import TestimonialCarousel from "./TestimonialCarousel";

const IMAGE_BASE = "/fourtheen-section/hr-leaders";

// Single source testimonial. The shared carousel duplicates it across slides
// until more real testimonials are supplied.
const TESTIMONIALS = [
  {
    slug: "alok-sheopurkar",
    quote:
      "HDFC AMC’s engagement with ATLAS SkillTech University has been truly enriching. The level of preparedness displayed by the students is a testament to the university’s forward-thinking approach.",
    name: "Alok Sheopurkar",
    designation: "Head of HR",
    company: "HDFC Mutual Fund",
    logoW: 222,
    logoH: 72,
  },
];

// Homepage testimonials — reuses the shared TestimonialCarousel.
export default function HrTestimonials() {
  return (
    <TestimonialCarousel
      ariaLabelledBy="hr-testimonials-heading"
      heading="What HR Leaders Say About Us"
      testimonials={TESTIMONIALS}
      imageBase={IMAGE_BASE}
      ariaLabel="HR leader testimonials"
    />
  );
}
