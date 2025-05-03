import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";

const pricingPlans = {
  free: {
    name: "Free Plan",
    monthly: 0,
    annually: 0,
    features: [
      { name: "Basic access", included: true },
      { name: "Up to 5 projects", included: true },
      { name: "Community support", included: true },
      { name: "Basic analytics", included: false },
      { name: "Priority support", included: false },
      { name: "Advanced features", included: false },
    ],
    ctaText: "Get Started",
    highlight: false,
  },
  premium: {
    name: "Premium Plan",
    monthly: 49,
    annually: 299,
    features: [
      { name: "Full access", included: true },
      { name: "Unlimited projects", included: true },
      { name: "Community support", included: true },
      { name: "Advanced analytics & features", included: true },
      { name: "Priority support", included: true },
      { name: "Custom branding", included: true },
    ],
    ctaText: "Start Free Trial",
    highlight: true,
  },
};

function PricingCard({ plan, billing }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`rounded-2xl p-8 flex flex-col h-full ${
        plan.highlight
          ? "bg-slate-900 text-white shadow-xl border-0"
          : "bg-white border border-slate-200 shadow-lg"
      }`}
    >
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
        <div className="flex items-end gap-1">
          <span className="text-3xl font-bold">
            ₹{billing === "monthly" ? plan.monthly : plan.annually}
          </span>
          <span className={`text-sm ${plan.highlight ? "text-slate-300" : "text-slate-500"}`}>
            /{billing === "monthly" ? "month" : "annually billed "}
          </span>
        </div>
      </div>

      <ul className="space-y-4 mb-8 flex-1">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            {feature.included ? (
              <Check
                className={`h-5 w-5 ${
                  plan.highlight ? "text-emerald-400" : "text-emerald-500"
                }`}
              />
            ) : (
              <X
                className={`h-5 w-5 ${
                  plan.highlight ? "text-slate-500" : "text-slate-400"
                }`}
              />
            )}
            <span
              className={
                feature.included
                  ? ""
                  : plan.highlight
                  ? "text-slate-400"
                  : "text-slate-400"
              }
            >
              {feature.name}
            </span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 rounded-lg font-medium transition-all duration-200 ${
          plan.highlight
            ? "bg-white text-slate-900 hover:bg-slate-100"
            : "bg-slate-900 text-white hover:bg-slate-800"
        }`}
      >
        {plan.ctaText}
      </button>
    </motion.div>
  );
}

export default function PricingSection() {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className="py-16 bg-slate-50" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-slate-900 mb-4">
            Empowering Civic Change, Transparently
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the campaign plan that drives your community impact. Scale up or adapt your initiatives effortlessly with CivicSpark.
          </p>

          <div className="mt-8 inline-flex items-center p-1 bg-slate-100 rounded-lg">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                billing === "monthly"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "bg-transparent text-slate-600 hover:text-slate-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("annually")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                billing === "annually"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "bg-transparent text-slate-600 hover:text-slate-900"
              }`}
            >
              Annually
              <span className="ml-1 text-xs py-0.5 px-1.5 bg-emerald-100 text-emerald-700 rounded-full">
                Save 49%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <PricingCard key="free" plan={pricingPlans.free} billing={billing} />
            <PricingCard key="premium" plan={pricingPlans.premium} billing={billing} />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

