import { motion } from "framer-motion";

const items = [
  "CIVIC PLATFORM", "CIVIC PLATFORM", "CIVIC PLATFORM", "CIVIC PLATFORM", "CIVIC PLATFORM", "CIVIC PLATFORM", "CIVIC PLATFORM", 
]
// Duplicate items for seamless loop
const loopedItems = [...items, ...items];

export default function HorizontalLoop() {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full h-[16vh] p-4 bg-gray-700">
      <motion.div
        className="inline-block"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 20
        }}
      >
        {loopedItems.map((item, index) => (
          <span
            key={index}
            className={`inline-block mx-6 text-7xl font-bold text-${index % 2 === 0 ? 'white' : 'green-400'}`}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
