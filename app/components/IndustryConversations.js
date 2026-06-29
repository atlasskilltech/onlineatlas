import TestimonialCarousel from "./TestimonialCarousel";

const IMAGE_BASE = "/twenty-four/conversation-industry-leaders";

// Programs-page testimonials — same shared carousel as the Homepage, different
// data. `slug` matches the asset folder (logo.png / person.png).
const TESTIMONIALS = [
  {
    slug: "piyush-bansal",
    quote:
      "Conducted an interactive session on entrepreneurship, digital disruption, and building scalable modern brands, focusing on innovation, business growth, and sustainable branding.",
    name: "Peyush Bansal",
    designation: "CEO",
    company: "Lenskart",
    logoW: 198,
    logoH: 134,
  },
];

export default function IndustryConversations() {
  return (
    <TestimonialCarousel
      ariaLabelledBy="industry-conversations-heading"
      heading="Conversations with Industry Leaders"
      testimonials={TESTIMONIALS}
      imageBase={IMAGE_BASE}
      ariaLabel="Conversations with industry leaders"
      // Person PNG is transparent — sit it on a premium navy→lime gradient,
      // matching the reference. Logo is scaled up to the reference's weight.
      imageBgClassName="bg-[linear-gradient(180deg,#15244c_0%,#2c4243_42%,#6b8a46_72%,#cfe070_100%)]"
      logoClassName="h-12 w-auto shrink-0 object-contain object-right sm:h-14"
    />
  );
}
