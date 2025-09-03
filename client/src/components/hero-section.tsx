import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="gradient-bg text-white py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Meet Your Personal Travel Assistant: 
            <span className="text-secondary"> Egy Safary AI</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Powered by advanced Gemini AI, your journey through Port Said just got smarter.
          </p>
          <p className="text-lg mb-10 text-white/80 max-w-2xl mx-auto">
            Discover Port Said like never before with your intelligent travel companion. Get personalized recommendations, instant answers, and expert guidance for an unforgettable Egyptian adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection('chat')}
              className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-lg"
              data-testid="button-start-chat"
            >
              Start Chatting Now
            </Button>
            <Button
              onClick={() => scrollToSection('features')}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all"
              data-testid="button-learn-more"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1539650116574-75c0c6d2d167?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800" 
          alt="Port Said waterfront" 
          className="w-full h-full object-cover" 
        />
      </div>
    </section>
  );
}
