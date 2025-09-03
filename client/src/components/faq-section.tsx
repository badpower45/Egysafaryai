import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "هل الذكاء الاصطناعي متاح 24/7؟",
      answer: "نعم، مساعدنا الذكي متاح على مدار الساعة لمساعدتك في تخطيط مغامرتك المثالية في بورسعيد. سواء كنت تخطط قبل شهور أو تحتاج مساعدة فورية أثناء رحلتك، نحن هنا دائماً من أجلك."
    },
    {
      question: "هل يمكن للذكاء الاصطناعي حجز الجولات لي؟",
      answer: "حالياً، يقدم الذكاء الاصطناعي معلومات شاملة وتوصيات لمساعدتك في اختيار الجولات والتجارب المثالية. للحجز الفعلي، سيوجهك ذكاؤنا الاصطناعي إلى القسم ذي الصلة في موقعنا حيث يمكنك إكمال حجزك بأمان."
    },
    {
      question: "هل محادثتي مع الذكاء الاصطناعي خاصة؟",
      answer: "نحن نُعطي الأولوية لخصوصيتك وأمانك. جميع التفاعلات مع ذكائنا الاصطناعي يتم التعامل معها بأمان وسرية. محادثاتم تساعد في تحسين خدمتنا، لكن المعلومات الشخصية لا تُشارك مع أطراف ثالثة بدون موافقتك."
    },
    {
      question: "ما مدى دقة المعلومات التي يقدمها الذكاء الاصطناعي؟",
      answer: "ذكاؤنا الاصطناعي مُدرب على معلومات شاملة ومحدثة حول بورسعيد ويتعلم باستمرار من التفاعلات. بينما نسعى للدقة، نوصي دائماً بالتحقق من التفاصيل المهمة مثل مواعيد العمل والأسعار والتوفر قبل زيارتك."
    },
    {
      question: "ما اللغات التي يدعمها الذكاء الاصطناعي؟",
      answer: "يدعم ذكاؤنا الاصطناعي لغات متعددة بما في ذلك الإنجليزية والعربية والفرنسية والألمانية والإسبانية والإيطالية. يمكنك التواصل باللغة التي تفضلها للحصول على تجربة تخطيط سفر أكثر راحة وشخصية."
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">الأسئلة الشائعة حول إيجي سفاري AI</h2>
          <p className="text-xl text-muted-foreground">
            كل ما تحتاج لمعرفته حول مساعدك الذكي للسفر.
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
