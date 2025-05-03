import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github,
  Mail,
  MapPin,
  Phone
} from "lucide-react";

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-slate-500 hover:text-slate-900 transition-colors duration-200"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-bold text-lg mb-4 text-slate-900">Civic Platform</h3>
            <ul className="space-y-3">
              <li><FooterLink href="#about">Our Story</FooterLink></li>
              <li><FooterLink href="#careers">Join us</FooterLink></li>
              <li><FooterLink href="#press">Media</FooterLink></li>
              <li><FooterLink href="#blog">Community Updates</FooterLink></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1">
            <h3 className="font-bold text-lg mb-4 text-slate-900">Solutions</h3>
            <ul className="space-y-3">
              <li><FooterLink href="#products">Campaigns</FooterLink></li>
              <li><FooterLink href="#solutions">Impact Initiatives</FooterLink></li>
              <li><FooterLink href="#pricing">Support Plans</FooterLink></li>
              <li><FooterLink href="#enterprise">Civic Partnerships</FooterLink></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1">
            <h3 className="font-bold text-lg mb-4 text-slate-900">Community Tools</h3>
            <ul className="space-y-3">
              <li><FooterLink href="#documentation">How It Works</FooterLink></li>
              <li><FooterLink href="#guides">Action Guides</FooterLink></li>
              <li><FooterLink href="#api">Platform Insights</FooterLink></li>
              <li><FooterLink href="#support">Get Help</FooterLink></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1">
            <h3 className="font-bold text-lg mb-4 text-slate-900">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-slate-500">
                <Mail size={16} />
                <span>contact@civicplatform.com</span>
              </li>
              <li className="flex items-center gap-2 text-slate-500">
                <Phone size={16} />
                <span>+91 9555631308</span>
              </li>
              <li className="flex items-center gap-2 text-slate-500">
                <MapPin size={16} />
                <span>KIET Group Of Institution,Meerut-Delhi</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="text-slate-500">
              &copy; {currentYear} Civic Platform. All rights reserved.
            </div>

            <div className="flex space-x-5">
              <FooterLink href="https://twitter.com">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </FooterLink>
              <FooterLink href="https://facebook.com">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </FooterLink>
              <FooterLink href="https://instagram.com">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </FooterLink>
              <FooterLink href="https://linkedin.com">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </FooterLink>
              <FooterLink href="https://github.com">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </FooterLink>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-500">
            <FooterLink href="#terms">Terms of Service</FooterLink>
            <FooterLink href="#privacy">Privacy Policy</FooterLink>
            <FooterLink href="#cookies">Cookie Policy</FooterLink>
            <FooterLink href="#accessibility">Accessibility</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
