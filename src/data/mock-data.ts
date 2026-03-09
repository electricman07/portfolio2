export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "What is web design?",
    answer:
      "Web design is the process of creating websites. It encompasses several different aspects, including webpage layout, content  production, and graphic design.",
  },
  {
    id: 2,
    question: "How much does a new website cost?",
    answer:
      "The cost of a website can vary depending on various factors, including the complexity of the design, the number of pages, and any additional features required.",
  },
  {
    id: 3,
    question: "How long does it take to build a website?",
    answer:
      "The time it takes to build a website depends on the complexity of the site. A basic website typically takes around 4-6 weeks from   beginning to end.",
  },
  {
    id: 4,
    question: "Do I need to provide my own content for the website?",
    answer:
      "Yes, you will need to provide the content for your website. However, we can help guide you on the type of content that will be most effective for your goals.",
  },
  {
    id: 5,
    question: "Can you help me update my existing website?",
    answer:
      "Absolutely! We can help you refresh your current website, fix issues, and add new features to improve its performance and design.",
  },
  {
    id: 6,
    question: "Will my website be mobile-friendly?",
    answer:
      "Yes, all our websites are designed to be responsive, which means they will work on a variety of devices, including desktops, tablets, and smartphones.",
  },
  {
    id: 7,
    question: "What is SEO and do I need it for my website?",
    answer:
      "SEO stands for Search Engine Optimization. It's the practice of optimizing your website to rank higher in search engine results, which increases your website's visibility.",
  },
  {
    id: 8,
    question: "Do you offer e-commerce solutions?",
    answer:
      "Yes, we offer a range of e-commerce solutions that can be tailored to your specific needs, whether you're selling a few products or a large catalog of items.",
  },
  {
    id: 9,
    question: "Can you provide web hosting and domain services?",
    answer:
      "While we don't directly provide hosting and domain services, we can certainly assist you in setting them up with reputable providers.",
  },
  {
    id: 10,
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes, we offer ongoing support and maintenance packages to ensure your website continues to run smoothly after launch.",
  },
];
