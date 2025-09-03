import { Compass, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Features", id: "features" },
    { name: "Technology", id: "technology" },
    { name: "Chat with AI", id: "chat" },
    { name: "FAQ", id: "faq" }
  ];

  const supportLinks = [
    { name: "Main Website", url: "https://egy-safary.odoo.com", external: true },
    { name: "Contact Us", url: "#", external: false },
    { name: "Privacy Policy", url: "#", external: false },
    { name: "Terms of Service", url: "#", external: false }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Compass className="text-2xl text-primary mr-3" size={28} />
              <span className="text-xl font-bold">Egy Safary AI</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Your intelligent travel companion for discovering the wonders of Port Said, Egypt. Powered by advanced AI technology for personalized travel experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="social-facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="social-twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="social-instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="social-youtube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-primary transition-colors"
                    data-testid={`footer-link-${link.id}`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-muted-foreground">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url}
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="hover:text-primary transition-colors"
                    data-testid={`footer-support-${index}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Egy Safary AI. All rights reserved. Powered by Google Gemini AI.</p>
        </div>
      </div>
    </footer>
  );
}
