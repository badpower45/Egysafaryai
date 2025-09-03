import { Compass } from "lucide-react";

export default function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-card/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Compass className="text-2xl text-primary mr-3" size={28} />
            <span className="text-xl font-bold">Egy Safary AI</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-features"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('technology')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-technology"
            >
              Technology
            </button>
            <button
              onClick={() => scrollToSection('chat')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-chat"
            >
              Chat
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-faq"
            >
              FAQ
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
