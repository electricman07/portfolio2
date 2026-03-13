export interface Service {
  id: number | string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  details: string;
  features: string[];
}

export interface FAQItem {
  id: number | string;
  question: string;
  answer: string;
}

export interface BlogPost {
  id: number | string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  tags: string[];
  date: string;
  gradient: string;
  image: string;
  alt: string;
}

export interface TechDefinition {
  name: number | string;
  definition: string;
}

export interface TechStack {
  id: number | string;
  title: string;
  intro: string;
  definition: string[];
  headline: string[];
}

export const services: Service[] = [
  {
    id: "1",
    slug: "webdesign",
    title: "Web Design",
    description:
      "Stunning, custom website designs that capture your brand's essence and engage visitors from the first click.",
    icon: "palette",
    details:
      "I craft visually compelling websites that don't just look beautiful—they perform. Every design starts with understanding your brand, audience, and goals. From wireframes to pixel-perfect mockups, I ensure every element serves a purpose. My designs are responsive, accessible, and optimized for conversion.",
    features: [
      "Custom mockups & wireframes",
      "Brand-aligned visual identity",
      "Responsive layouts",
      "Interactive prototypes",
      "Design system creation",
    ],
  },
  {
    id: "2",
    slug: "webdevelopment",
    title: "Web Development",
    description:
      "Clean, performant code that brings designs to life with modern technologies and best practices.",
    icon: "code",
    details:
      "I build websites and web applications using cutting-edge technologies like React, TypeScript, and Tailwind CSS. Every project is built with performance, scalability, and maintainability in mind. I write clean, well-documented code that your team can easily work with.",
    features: [
      "React & TypeScript development",
      "API integration",
      "Performance optimization",
      "Clean, maintainable code",
      "Version control with Git",
    ],
  },
  {
    id: "3",
    slug: "websitemaintenance",
    title: "Website Maintenance",
    description:
      "Keep your website running smoothly with regular updates, security patches, and performance monitoring.",
    icon: "wrench",
    details:
      "A website is never truly 'done.' I provide ongoing maintenance services to ensure your site stays secure, up-to-date, and performing at its best. From content updates to security patches, I handle the technical details so you can focus on your business.",
    features: [
      "Regular security updates",
      "Performance monitoring",
      "Content updates",
      "Backup management",
      "Uptime monitoring",
    ],
  },
  {
    id: "4",
    slug: "ecommercesolutions",
    title: "E-Commerce Solutions",
    description:
      "Full-featured online stores that drive sales and deliver seamless shopping experiences.",
    icon: "shopping-cart",
    details:
      "I build e-commerce solutions that convert visitors into customers. From product catalogs to payment processing, I create seamless shopping experiences that drive revenue. Every store is optimized for mobile, fast loading, and easy to manage.",
    features: [
      "Product catalog setup",
      "Secure payment processing",
      "Inventory management",
      "Order tracking",
      "Customer account portals",
    ],
  },
  {
    id: "5",
    slug: "seooptimization",
    title: "SEO Optimization",
    description:
      "Boost your visibility and drive organic traffic with data-driven SEO strategies.",
    icon: "search",
    details:
      "I implement comprehensive SEO strategies that help your website rank higher in search results. From technical SEO to content optimization, I use data-driven approaches to increase your organic visibility and drive qualified traffic to your site.",
    features: [
      "Technical SEO audits",
      "Keyword research & strategy",
      "On-page optimization",
      "Performance optimization",
      "Analytics & reporting",
    ],
  },
  {
    id: "6",
    slug: "uiuxdesign",
    title: "UI/UX Design",
    description:
      "User-centered design that creates intuitive, delightful digital experiences people love.",
    icon: "layers",
    details:
      "Great design is invisible—it just works. I create user interfaces and experiences that feel intuitive and natural. Through user research, prototyping, and testing, I ensure every interaction is purposeful and every journey is smooth.",
    features: [
      "User research & personas",
      "Information architecture",
      "Wireframing & prototyping",
      "Usability testing",
      "Interaction design",
    ],
  },
];

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

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "future-of-web-design-2024",
    title: "The Future of Web Design in 2024",
    excerpt:
      "Explore the emerging trends shaping web design—from AI-powered layouts to immersive 3D experiences.",
    content: `<h2>The Landscape is Changing</h2><p>Web design is evolving at an unprecedented pace. As we move through 2024, several key trends are reshaping how we think about digital experiences.</p><h3>AI-Powered Design</h3><p>Artificial intelligence is no longer just a buzzword—it's actively transforming how designers work. From automated layout suggestions to AI-generated color palettes, these tools are augmenting human creativity rather than replacing it.</p><h3>Immersive 3D Experiences</h3><p>WebGL and Three.js have matured to the point where stunning 3D experiences are accessible to more developers than ever. We're seeing brands use 3D elements not as gimmicks, but as integral parts of their storytelling.</p><h3>Micro-Interactions That Matter</h3><p>Subtle animations and micro-interactions continue to elevate user experiences. The key is intentionality—every animation should serve a purpose, whether it's providing feedback, guiding attention, or adding delight.</p><p>The future of web design is bold, dynamic, and deeply personal. As tools become more powerful and browsers more capable, the only limit is our imagination.</p>`,
    author: "Alex Morgan",
    tags: ["Web Design", "Trends", "AI", "UX"],
    date: "2024-12-01",
    gradient: "from-primary to-accent",
    image:
      "https://unsplash.com/photos/qC2n6RQU4Vw/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8d2ViJTIwZGVzaWdufGVufDB8fHx8MTcxNTExNjczOHww&force=true&w=640",
    alt: "alternative text",
  },
  {
    id: "2",
    slug: "responsive-design-best-practices",
    title: "Responsive Design Best Practices",
    excerpt:
      "Master the art of responsive design with these battle-tested strategies for fluid, adaptable layouts.",
    content: `<h2>Beyond Breakpoints</h2><p>Responsive design has evolved far beyond simple media query breakpoints. Modern responsive design is about creating fluid, adaptable layouts that work beautifully on any screen size.</p><h3>Container Queries</h3><p>Container queries represent a paradigm shift in responsive design. Instead of responding to viewport size, components can now adapt based on their container's dimensions.</p><h3>Fluid Typography</h3><p>Using clamp() and viewport units for typography ensures text scales smoothly across all screen sizes. No more jarring font size jumps at breakpoints.</p><p>The key takeaway: think fluid, not fixed. Design for content and flow, not for specific devices.</p>`,
    author: "Alex Morgan",
    tags: ["Responsive Design", "CSS", "Mobile"],
    date: "2024-11-15",
    gradient: "from-secondary to-primary",
    image:
      "https://unsplash.com/photos/OqtafYT5kTw/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fHdlYiUyMGR2ZWxvcG1lbnR8ZW58MHx8fHwxNzE1MTIwMzU0fDA&force=true&w=640",
    alt: "alternative text",
  },
  {
    id: "3",
    slug: "why-your-business-needs-website",
    title: "Why Every Business Needs a Professional Website",
    excerpt:
      "In today's digital world, a professional website isn't optional—it's essential for growth.",
    content: `<h2>Your Digital Storefront</h2><p>Think of your website as your digital storefront. It's often the first impression potential customers have of your business, and that impression matters more than ever.</p><h3>Credibility & Trust</h3><p>A professional website immediately establishes credibility. Studies show that 75% of consumers judge a company's credibility based on their website design.</p><h3>24/7 Availability</h3><p>Unlike a physical store, your website works for you around the clock. It's your tireless salesperson, customer service rep, and brand ambassador all in one.</p>`,
    author: "Alex Morgan",
    tags: ["Business", "Web Design", "Marketing"],
    date: "2024-10-20",
    gradient: "from-accent to-secondary",
    image:
      "https://unsplash.com/photos/KE0nC8-58MQ/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzB8fHdlYiUyMGR2ZWxvcG1lbnR8ZW58MHx8fHwxNzE1MTIwMzY4fDA&force=true&w=640",
    alt: "alternative text",
  },
  {
    id: "4",
    slug: "intro-to-tailwindcss",
    title: "Getting Started with Tailwind CSS",
    excerpt:
      "A beginner-friendly guide to Tailwind CSS—the utility-first framework changing how we style the web.",
    content: `<h2>Why Tailwind?</h2><p>Tailwind CSS takes a radically different approach to styling. Instead of writing custom CSS, you compose designs using small, single-purpose utility classes directly in your HTML.</p><h3>Utility-First Approach</h3><p>The utility-first approach might feel strange at first, but it offers incredible productivity once you get comfortable.</p><h3>Customization</h3><p>Tailwind is highly customizable through its configuration file. You can define your own color palette, spacing scale, typography, and more.</p>`,
    author: "Alex Morgan",
    tags: ["Tailwind CSS", "CSS", "Tutorial"],
    date: "2024-09-10",
    gradient: "from-primary via-accent to-secondary",
    image:
      "https://unsplash.com/photos/v9FQR4tbIq8/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8d2ViJTIwZGVzaWdufGVufDB8fHx8MTcxNTExNjczOHww&force=true&w=640",
    alt: "alternative text",
  },

  {
    id: "5",
    slug: "choosing-right-tech-stack",
    title: "How to Choose the Right Tech Stack",
    excerpt:
      "Navigate the overwhelming world of web technologies with this practical guide.",
    content: `<h2>There's No One-Size-Fits-All</h2><p>Choosing a tech stack is one of the most important decisions you'll make for your project. The right choice can set you up for success; the wrong one can lead to costly rewrites.</p><h3>Consider Your Requirements</h3><p>Start by understanding what your project needs. Is it a simple marketing site, a complex web app, or something in between?</p>`,
    author: "Alex Morgan",
    tags: ["Technology", "Development", "Strategy"],
    date: "2024-08-05",
    gradient: "from-secondary to-accent",
    image:
      "https://unsplash.com/photos/hGV2TfOh0ns/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8d2ViJTIwZGVzaWdufGVufDB8fHx8MTcxNTExNjczOHww&force=true&w=640",
    alt: "alternative text",
  },
  {
    id: "6",
    slug: "importance-of-website-speed",
    title: "Why Website Speed Matters More Than You Think",
    excerpt:
      "Slow websites kill conversions. Learn why performance should be your top priority.",
    content: `<h2>Speed is a Feature</h2><p>In the age of instant gratification, every millisecond counts. Studies consistently show that page load time directly impacts bounce rates, conversions, and SEO rankings.</p><h3>The Numbers Don't Lie</h3><p>A 1-second delay in page load time can result in a 7% reduction in conversions.</p>`,
    author: "Alex Morgan",
    tags: ["Performance", "SEO", "Development"],
    date: "2024-07-20",
    gradient: "from-accent to-primary",
    image:
      "https://unsplash.com/photos/npxXWgQ33ZQ/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTh8fHdlYiUyMGR2ZWxvcG1lbnR8ZW58MHx8fHwxNzE1MTIwMzU0fDA&force=true&w=640",
    alt: "alternative text",
  },
  {
    id: "7",
    slug: "web-accessibility-guide",
    title: "A Practical Guide to Web Accessibility",
    excerpt:
      "Make your websites inclusive and accessible to everyone with actionable strategies.",
    content: `<h2>Accessibility is Not Optional</h2><p>Web accessibility isn't just about compliance—it's about creating inclusive digital experiences that work for everyone.</p><h3>The POUR Principles</h3><p>WCAG guidelines are built on four principles: Perceivable, Operable, Understandable, and Robust.</p>`,
    author: "Alex Morgan",
    tags: ["Accessibility", "UX", "Best Practices"],
    date: "2024-06-15",
    gradient: "from-primary to-secondary",
    image:
      "https://unsplash.com/photos/qC2n6RQU4Vw/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8d2ViJTIwZGVzaWdufGVufDB8fHx8MTcxNTExNjczOHww&force=true&w=640",
    alt: "alternative text",
  },
  {
    id: "8",
    slug: "react-vs-vue-comparison",
    title: "React vs Vue: Which Should You Choose?",
    excerpt:
      "An honest, unbiased comparison of two of the most popular frontend frameworks.",
    content: `<h2>The Great Debate</h2><p>React and Vue are both excellent choices for building modern web applications. Rather than declaring a winner, let's look at where each shines.</p><h3>React: The Ecosystem Giant</h3><p>React's biggest strength is its ecosystem. With millions of developers and countless libraries, you'll rarely encounter a problem without a solution.</p><h3>Vue: The Approachable Alternative</h3><p>Vue's gentle learning curve and comprehensive documentation make it an excellent choice for teams of all sizes.</p>`,
    author: "Alex Morgan",
    tags: ["React", "Vue", "JavaScript", "Comparison"],
    date: "2024-05-01",
    gradient: "from-secondary via-primary to-accent",
    image:
      "https://unsplash.com/photos/OqtafYT5kTw/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fHdlYiUyMGR2ZWxvcG1lbnR8ZW58MHx8fHwxNzE1MTIwMzU0fDA&force=true&w=640",
    alt: "alternative text",
  },
];

export const techStack: TechStack[] = [
  {
    id: 1,
    title: "Front-End Development",
    intro:
      "Front-end development is concerned with the user interface and user experience aspects of a website. It involves the use of:",
    headline: ["HTML:", "CSS:", "JavaScript", "Frameworks and Libraies"],
    definition: [
      "The backbone of any website, used to structure content on the web.",
      "The styling language that describes how HTML elements should be displayed on screen.",
      " A scripting language that enables interactive features on websites",
      "Tools like React, Angular, and Vue.js that provide pre-written code to help build complex applications more efficiently.",
    ],
  },
  {
    id: 2,
    title: "Back-End Devlopment",
    intro:
      "The back-end, or server-side, is where the application runs, and data processing is performed. It typically involves:",
    headline: ["Server Languages:", "Server Frameworks:", "APIs:"],
    definition: [
      " Such as Node.js, Ruby, Python, PHP, and Java, which handle the logic of the application.",
      " Frameworks like Express.js, Django, Ruby on Rails, and Laravel that provide tools and libraries to simplify complex coding tasks.",
      "Application Programming Interfaces allow different software components to communicate with each other.",
    ],
  },
  {
    id: 3,
    title: "Databases",
    intro:
      "Databases store, retrieve, and manage data. They are an essential part of the back-end stack. Common databases include:",
    headline: ["SQL Databases:", "NoSQL Databases: ", "ORMs: "],
    definition: [
      "Such as MySQL, PostgreSQL, and Microsoft SQL Server, which use structured query language for managing data.",
      "Like MongoDB and Cassandra, which are designed for large sets of distributed data.",
      "Object-Relational Mapping tools like Sequelize and Mongoose that allow developers to interact with databases using programming languages.",
    ],
  },
  {
    id: 4,
    title: "Connecting Front-End and Back-End",
    intro: "Integration of the front-end and back-end is achieved through:",
    headline: ["HTTP Requests:", "RESTful Services:", "GraphQL: "],
    definition: [
      " The foundation of data exchange on the web, allowing clients and servers to communicate.",
      "Architectural style for designing networked applications, using HTTP to make calls between machines.",
      "A query language for APIs, providing a more efficient way to design and run queries.",
    ],
  },
];

export const techDefinitions: TechDefinition[] = [
  {
    name: "React",
    definition:
      "React is an open-source JavaScript library by Facebook for building user interfaces. It uses component-based architecture and a virtual DOM for efficient rendering.",
  },
  {
    name: "TypeScript",
    definition:
      "TypeScript is a strongly typed superset of JavaScript by Microsoft. It adds static type checking and interfaces for more maintainable code.",
  },
  {
    name: "Tailwind CSS",
    definition:
      "Tailwind CSS is a utility-first CSS framework providing low-level utility classes for building custom designs directly in markup.",
  },
  {
    name: "PostgreSQL",
    definition:
      "PostgreSQL is a powerful, open-source relational database known for reliability, data integrity, and advanced features like complex queries and JSON support.",
  },
  {
    name: "MongoDB",
    definition:
      "MongoDB is a NoSQL database storing data in flexible, JSON-like documents. Ideal for applications with evolving data schemas.",
  },
  {
    name: "Node.js",
    definition:
      "Node.js is a JavaScript runtime built on Chrome's V8 engine for server-side development, known for its event-driven, non-blocking I/O model.",
  },
  {
    name: "HTML",
    definition:
      "HTML (HyperText Markup Language) is the standard markup language for creating web pages, defining structure and content using elements and tags.",
  },
  {
    name: "CSS",
    definition:
      "CSS (Cascading Style Sheets) describes the presentation of HTML documents, controlling layout, colors, fonts, and visual appearance.",
  },
  {
    name: "JavaScript",
    definition:
      "JavaScript is a versatile, high-level programming language for adding interactivity to websites. Runs in browsers and on servers with Node.js.",
  },
  {
    name: "Framer Motion",
    definition:
      "Framer Motion is a production-ready animation library for React, providing declarative APIs for fluid animations and gestures.",
  },
  {
    name: "Stripe",
    definition:
      "Stripe provides payment processing infrastructure, enabling businesses to accept payments, manage subscriptions, and handle financial operations.",
  },
  {
    name: "Cloudinary",
    definition:
      "Cloudinary is a cloud-based media management platform for image and video upload, storage, optimization, and delivery.",
  },
  {
    name: "WebSocket",
    definition:
      "WebSocket provides full-duplex communication over a single TCP connection for real-time, bidirectional client-server communication.",
  },
  {
    name: "Recharts",
    definition:
      "Recharts is a composable charting library built with React components for creating data visualizations.",
  },
  {
    name: "Mapbox",
    definition:
      "Mapbox provides custom maps, geocoding, navigation, and location services for web and mobile applications.",
  },
  {
    name: "Google Maps API",
    definition:
      "Google Maps API allows developers to embed customizable Google Maps with markers, routes, and interactive features.",
  },
  {
    name: "Git",
    definition:
      "Git is a distributed version control system tracking source code changes, enabling collaboration while maintaining complete change history.",
  },
];
