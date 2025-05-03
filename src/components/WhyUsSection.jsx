import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function WhyUsSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 bg-white" id="why-us">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-slate-900">
              Why Choose Us?
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
             We empower communities with smart tools, ignite collective action, and transform civic concerns into real solutions through collaboration, innovation, and impact.
            </p>
            <ul className="space-y-4">
              {[
                "Empowering citizens to drive change.",
                "AI-powered tools for smarter action.",
                "Transforming concerns into real impact.",
                "Building stronger, united communities together.",
              ].map((point, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  variants={itemVariants}
                >
                  <span className="flex-shrink-0 mt-1 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.5 6L5.5 8L8.5 4"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-slate-700">{point}</span>
                </motion.li>
              ))}
            </ul>
            <motion.div variants={itemVariants}>
              <button className="mt-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition duration-300">
                Learn More
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl"
          >
            <img
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/70 to-transparent p-6">
              <p className="text-white font-medium text-lg">Ignite Community Power</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
