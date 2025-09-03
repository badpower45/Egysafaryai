import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import TechnologySection from "@/components/technology-section";
import ChatSection from "@/components/chat-section";
import FAQSection from "@/components/faq-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TechnologySection />
        <ChatSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
