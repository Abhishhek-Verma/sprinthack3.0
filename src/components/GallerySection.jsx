import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import myImage from '../assets/farmer.jpg';
import Delhi from '../assets/delhi.png';
import road from '../assets/pune.jpg';
import forest from '../assets/hyderabad.png';


const slides = [
  {
    id: 1,
    title: "A Voice for Agricultural Rights",
    content: "CivicSpark can support the Farmer Protest by helping organize and mobilize communities. Through micro-campaigns, users can raise awareness, share petitions, and plan rallies to advocate for farmers' rights. The platform enables tracking of issues, organizing local events, and connecting activists, farmers, and local governments. By offering real-time feedback and crowdSourced data, CivicSpark empowers citizens to take action, push for policy change, and hold governments accountable, ultimately fostering greater civic participation and driving meaningful change",
 
    image: myImage,
  },
  {
    id: 2,
    title: "Hyderabad’s Forest Preservation Victory",
    content: "In January 2025, deforestation in Hyderabad's Kancha Gachibowli for IT parks ignited student protests. Satellite imagery revealed rapid forest loss, fueling public outrage. On March 3, 2025, the Supreme Court intervened, halting construction and preserving 600 acres of forest. CivicSpark’s AI-powered campaign tools helped mobilize activists, amplify voices, and organize efforts, ultimately securing this significant victory in protecting Hyderabad’s green spaces against urban encroachment.",
    // image: "https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?q=80&w=1000&auto=format&fit=crop",
    image:forest,
  },
  {
    id: 3,
    title: "Delhi’s Neighborhood Safety Patrols",
    content: "In February 2025, rising nighttime crime in Delhi’s Kalkaji area prompted residents to initiate community patrols. Over 200 volunteers participated, reducing crime incidents by 15%. The success led to the police adopting the model citywide. CivicSpark’s map view played a crucial role by coordinating patrols and ensuring efficient coverage. This collaborative effort empowered citizens to take action, improving safety in the neighborhood and inspiring a broader, citywide initiative for safer communities.",
    // image: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&w=1000&auto=format&fit=crop",
    image: Delhi,
  },
  {
    id: 4,
    title: "Pune’s Elderly Care Initiative",
    content: " In April 2025, neglect towards Pune’s elderly in Kothrud sparked volunteers to create care programs for 1,000 seniors. Free health camps and social events were organized by March, addressing physical and emotional well-being. CivicSpark’s platform played a key role in scaling these welfare efforts, streamlining volunteer coordination and resource management. The initiative fostered strong community support, ensuring that the elderly received the care, attention, and respect they deserved in their later years.",
    // image: "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?q=80&w=1000&auto=format&fit=crop",
    image: road,
  },
];

export default function GallerySection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12 md:text-4xl">Civic Surge Gallery</h2>

        <div className="relative overflow-hidden rounded-xl shadow-lg bg-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[currentSlide].id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2"
            >
              <div className="flex flex-col justify-center p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-4 md:text-3xl">{slides[currentSlide].title}</h3>
                <p className="text-lg text-muted-foreground">{slides[currentSlide].content}</p>
              </div>

              <div className="relative h-[300px] md:h-[400px]">
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="object-cover w-full h-full"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentSlide ? "bg-slate-800" : "bg-slate-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
