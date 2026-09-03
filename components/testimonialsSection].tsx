import TestimonialCard from "./testimonialsCard";

const testimonials = [
  {
    name: "Sarah Martin",
    role: "Marketing Manager",
    company: "NovaTech",
    quote: "DataPilot makes our data much easier to understand and act on.",
    imageSrc: "/assets/sarah.jpg",
  },
  {
    name: "Alex Bold",
    role: "Sales Manager",
    company: "Vertex Labs",
    quote: "We now have answers every week without spending hours building reports.",
    imageSrc: "/assets/alex.jpg",
  },
  {
    name: "Emma Carter",
    role: "Product Manager",
    company: "BrightCore",
    quote: "DataPilot helps us turn complex data into clear decisions.",
    imageSrc: "/assets/emma.jpg",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      aria-labelledby="stories-title"
      className="bg-[#F0F0F0] px-7 py-3 transition-colors duration-300 dark:bg-slate-900 sm:px-10"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center">
          <h2
            id="stories-title"
            className="text-[30px] font-bold leading-none text-dp-navy dark:text-white"
          >
            Customer Stories
          </h2>
          <p className="mt-1 text-[20px] font-medium text-dp-bluee dark:text-[#F1F5F9]/[64%] sm:text-[25px]">
            Data that speaks for itself
          </p>
        </div>

        {/* ⚠️ fixed: no min-w-[300px] on cards, gap-6 instead of 170px */}
        <div className="mx-auto mt-3 grid max-w-[1000px] grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}