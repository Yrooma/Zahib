export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "أحمد محمد",
    location: "الطائف",
    text: "تجربة رائعة مع زاهي للخياطة. تم تفصيل الثوب بسرعة وجودة عالية. أنصح الجميع بالتعامل معهم.",
    image: ""
  },
  {
    id: 2,
    name: "خالد العتيبي",
    location: "الطائف",
    text: "خدمة ممتازة وسرعة في التنفيذ. الثوب كان مضبوط تماماً وبجودة عالية. سأعود للتعامل معهم مرة أخرى.",
    image: ""
  },
  {
    id: 3,
    name: "سعد الغامدي",
    location: "مكة",
    text: "زرت المحل أثناء تواجدي في الطائف، وتم تفصيل الثوب في وقت قياسي. شكراً لفريق زاهي على الاحترافية العالية.",
    image: ""
  }
];

export default testimonials;
