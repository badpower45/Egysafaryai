import { Heart, Zap, Route, Clock, Globe, MapPin } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Heart,
      title: "توصيات شخصية",
      description: "احصل على اقتراحات مُخصصة للمطاعم والمعالم والأنشطة بناءً على تفضيلاتك وميزانيتك وأسلوب سفرك."
    },
    {
      icon: Zap,
      title: "معلومات فورية",
      description: "اسأل أي سؤال عن بورسعيد - من الحقائق التاريخية إلى النصائح المحلية - واحصل على إجابات فورية ودقيقة."
    },
    {
      icon: Route,
      title: "مساعدة في تخطيط الرحلة",
      description: "احصل على مساعدة خبيرة في تنظيم برنامجك، وإيجاد أفضل المسارات، واكتشاف الكنوز المخفية."
    },
    {
      icon: Clock,
      title: "دعم 24/7",
      description: "ذكاؤنا الاصطناعي متاح دائماً لمساعدتك، في أي وقت وأي مكان - رفيق سفرك لا ينام أبداً."
    },
    {
      icon: Globe,
      title: "دعم متعدد اللغات",
      description: "تفاعل مع الذكاء الاصطناعي بلغات متعددة للحصول على تجربة سلسة، بغض النظر عن البلد الذي تأتي منه."
    },
    {
      icon: MapPin,
      title: "خبرة محلية",
      description: "احصل على معرفة داخلية حول ثقافة بورسعيد وعاداتها والأماكن التي يجب زيارتها من خبراء محليين."
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">كيف يمكن لـ إيجي سفاري AI مساعدتك؟</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            اطلق العنان لكامل إمكانيات مغامرتك في بورسعيد مع المساعدة المدعومة بالذكاء الاصطناعي والمصممة خصيصاً لاحتياجاتك.
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
