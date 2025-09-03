import { Brain, Database, RefreshCw } from "lucide-react";

export default function TechnologySection() {
  const technologies = [
    {
      icon: Brain,
      title: "تقنية Google Gemini",
      description: "الذكاء الاصطناعي بتاعنا بيشتغل بأحدث تقنية Gemini من جوجل علشان يفهم اللغة الطبيعية ويعمل محادثات زي البني آدمين عن احتياجاتك في السفر."
    },
    {
      icon: Database,
      title: "معرفة كبيرة جداً",
      description: "بيشتغل على كم معلومات رهيب عن بورسعيد، من الأماكن التاريخية للأماكن الحديثة والمطاعم والثقافة المحلية."
    },
    {
      icon: RefreshCw,
      title: "بيتعلم علطول",
      description: "الذكاء الاصطناعي بيتحسن كل ما يتكلم مع ناس، علشان يرد بطريقة أاحسن وأصح للمسافرين الجايين بعد كده."
    }
  ];

  return (
    <section id="technology" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">الذكاء اللي بيقف ورا رحلتك</h2>
            <div className="space-y-6">
              {technologies.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-8 h-8 ${
                      index === 0 ? 'bg-primary/10' : 
                      index === 1 ? 'bg-accent/10' : 'bg-secondary/30'
                    } rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                      <IconComponent className={`${
                        index === 0 ? 'text-primary' : 
                        index === 1 ? 'text-accent' : 'text-secondary-foreground'
                      } text-sm`} size={16} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{tech.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="AI technology visualization" 
              className="rounded-2xl shadow-2xl w-full" 
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
