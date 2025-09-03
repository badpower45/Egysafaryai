import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "Is the AI available 24/7?",
      answer: "Yes, our AI assistant is available around the clock to help you plan your perfect Port Said adventure. Whether you're planning months ahead or need immediate assistance during your trip, we're always here for you."
    },
    {
      question: "Can the AI book tours for me?",
      answer: "Currently, the AI provides comprehensive information and recommendations to help you choose the perfect tours and experiences. For actual booking, our AI will direct you to the relevant section of our website where you can complete your reservation securely."
    },
    {
      question: "Is my conversation with the AI private?",
      answer: "We prioritize your privacy and security. All interactions with our AI are handled securely and confidentially. Your conversations help improve our service, but personal information is never shared with third parties without your consent."
    },
    {
      question: "How accurate is the information provided by the AI?",
      answer: "Our AI is trained on comprehensive, up-to-date information about Port Said and continuously learns from interactions. While we strive for accuracy, we always recommend verifying important details like opening hours, prices, and availability before your visit."
    },
    {
      question: "What languages does the AI support?",
      answer: "Our AI supports multiple languages including English, Arabic, French, German, Spanish, and Italian. You can communicate in your preferred language for a more comfortable and personalized travel planning experience."
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked Questions About Egy Safary AI</h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about your AI travel assistant.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card rounded-lg border border-border"
              data-testid={`faq-item-${index}`}
            >
              <AccordionTrigger className="px-6 py-5 text-left hover:bg-muted/30 transition-colors">
                <h3 className="font-semibold text-lg">{faq.question}</h3>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5">
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
