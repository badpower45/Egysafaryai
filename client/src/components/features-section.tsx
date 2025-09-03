import { Heart, Zap, Route, Clock, Globe, MapPin } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Heart,
      title: "Personalized Recommendations",
      description: "Get tailored suggestions for restaurants, attractions, and activities based on your preferences, budget, and travel style."
    },
    {
      icon: Zap,
      title: "Instant Information",
      description: "Ask any question about Port Said – from historical facts to local tips – and get immediate, accurate answers."
    },
    {
      icon: Route,
      title: "Trip Planning Assistance",
      description: "Receive expert help in organizing your itinerary, finding the best routes, and discovering hidden gems."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Our AI is always available to assist you, anytime, anywhere – your travel companion never sleeps."
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Interact with the AI in multiple languages for a seamless experience, no matter where you're from."
    },
    {
      icon: MapPin,
      title: "Local Expertise",
      description: "Access insider knowledge about Port Said's culture, customs, and must-visit locations from local experts."
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">How Can Egy Safary AI Help You?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unlock the full potential of your Port Said adventure with AI-powered assistance tailored to your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-border"
                data-testid={`feature-card-${index}`}
              >
                <div className={`w-16 h-16 ${
                  index % 3 === 0 ? 'bg-primary/10' : 
                  index % 3 === 1 ? 'bg-accent/10' : 'bg-secondary/30'
                } rounded-lg flex items-center justify-center mb-6`}>
                  <IconComponent className={`text-2xl ${
                    index % 3 === 0 ? 'text-primary' : 
                    index % 3 === 1 ? 'text-accent' : 'text-secondary-foreground'
                  }`} size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
