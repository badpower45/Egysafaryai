import { Heart, Zap, Route, Clock, Globe, MapPin } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Heart,
      title: "نصايح على مزاجك",
      description: "هتاخد اقتراحات مناسبة ليك للمطاعم والأماكن والحاجات اللي تحبها على حسب ذوقك وفلوسك وأسلوبك في السفر."
    },
    {
      icon: Zap,
      title: "معلومات في نفس اللحظة",
      description: "اسأل عن أي حاجة في بورسعيد - من الحاجات التاريخية للنصايح المحلية - وهتاخد رد سريع ومظبوط."
    },
    {
      icon: Route,
      title: "مساعدة في تنظيم الرحلة",
      description: "هتاخد مساعدة من خبرا في ترتيب برنامجك وتعرف أحسن طرق وتاخد بالك على أماكن حلوة محدش يعرفها."
    },
    {
      icon: Clock,
      title: "موجود 24 ساعة",
      description: "الذكاء الاصطناعي بتاعنا موجود علطول يساعدك، في أي وقت وفي أي حتة - صاحبك في السفر مش بينام خالص."
    },
    {
      icon: Globe,
      title: "خبرة محلية",
      description: "هتاخد معلومات من جوه حول ثقافة بورسعيد وعاداتها والأماكن اللي لازم تزورها من ناس محليين فاهمين."
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">إيجي سفاري AI يقدر يساعدك إزاي؟</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            استفيد بأقصى حاجة من رحلتك في بورسعيد بمساعدة ذكية معمولة خصيصاً علشانك.
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
