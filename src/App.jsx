import React from 'react';
import { UserRound } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogOverlay } from '@/components/ui/dialog';

export default function App() {
  const handleLogin = () => {
    let dashboardURL;

    if (window.location.hostname === 'localhost') {
      // Redirect to localhost:5173 if running locally
      dashboardURL = 'http://localhost:5173/';
    } else {
      // Redirect to live dashboard if in production
      dashboardURL = 'https://your-dashboard-domain.com/';
    }

    window.location.href = dashboardURL; // Perform the redirection
  };

  return (
    <main className="min-h-screen">
      <section id="home" className="relative min-h-[80vh] w-full bg-white">
        <div className="container mx-auto px-4 py-6">
          {/* Navbar */}
          <nav className="flex items-center justify-between">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <h1 className="text-xl font-bold text-black ml-2">Civic Platform</h1>
            </div>

            {/* Center: Navigation Links */}
            <ul className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
              <li><a href="#home" className="hover:text-black transition">Home</a></li>
              <li><a href="#pricing" className="hover:text-black transition">Pricing</a></li>
              <li><a href="#about" className="hover:text-black transition">About</a></li>
              <li>
                <Dialog>
                  <DialogTrigger>
                    <a href="#contact" className="hover:text-black transition">Contact</a>
                  </DialogTrigger>

                  {/* Make background blurred and darker */}
                  <DialogOverlay className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" />

                  <DialogContent className="backdrop-blur-sm">
                    <DialogHeader>
                      <DialogTitle className="text-center font-bold text-2xl">Contact Us</DialogTitle>
                      <DialogDescription className="text-center text-gray-500 text-sm mb-4">
                        Fill out the form below and we'll get back to you soon.
                      </DialogDescription>

                      <form className="flex flex-col gap-4">
                        <div className="flex flex-col text-left">
                          <label className="text-sm font-semibold mb-1">Name</label>
                          <input
                            type="text"
                            placeholder="Your name"
                            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black-400 focus:border-transparent"
                          />
                        </div>

                        <div className="flex flex-col text-left">
                          <label className="text-sm font-semibold mb-1">Email</label>
                          <input
                            type="email"
                            placeholder="your.email@example.com"
                            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black-400 focus:border-transparent"
                          />
                        </div>

                        <div className="flex flex-col text-left">
                          <label className="text-sm font-semibold mb-1">Message</label>
                          <textarea
                            placeholder="How can we help you?"
                            rows="4"
                            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black-400 focus:border-transparent"
                          />
                        </div>

                        <button
                          type="submit"
                          className="bg-black text-white p-3 rounded-md hover:bg-gray-700 transition font-semibold"
                        >
                          Send Message
                        </button>
                      </form>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </li>
            </ul>

            {/* Right: Login Button */}
            <button
              className="flex items-center gap-2 border px-4 py-2 rounded hover:bg-black hover:text-white transition duration-200"
              onClick={handleLogin} // Add the onClick handler here
            >
              <UserRound size={18} />
              <span>Login</span>
            </button>
          </nav>
        </div>

        {/* Quotes Carousel Section */}
        <div className="mt-6 flex flex-col items-center justify-center">
          <QuotesCarousel />
        </div>
      </section>

      <GallerySection />
      <section id="about"><WhyUsSection /></section>
      <section id="pricing"><PricingSection /></section>
      <Footer />
    </main>
  );
}
