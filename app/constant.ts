export const NavLinkss = [
  { key: 1, name: "HOME", route: "/" },
  {key:7,name:"ABOUT US",route:"/AboutUs"},
 
 
  { key: 5, name: "OUR TEAM", route: "/Team" },
  { key: 6, name: "CONTACT US", route: "/ContactMe" },
  { key: 2, name: "CHAPTERS", route: "/chapters" },
];

  export const chapters = [
    { key: 'aiAndML', href: '/chapters/AI&ML', label: 'AI/ML', chapter:'/assets/Chapters/aiml.png' },
    { key: 'arVrWebAppDev', href: '/chapters/ARVR&WebAppDev', label: 'AR/VR & Web & App Development', chapter:'/assets/Chapters/arvrwebapp.png' },
    { key: 'competitiveProgrammingDSA', href: '/chapters/CompetativeProgrammingDSA', label: 'Competitive Programming and DSA', chapter:'/assets/Chapters/cp_dsa.png' },
    { key: 'ethicalDevSecOps', href: '/chapters/EthicalDevSecOps', label: 'Ethical DevSecOps', chapter:'/assets/Chapters/devsecops.png' },
    { key: 'gateIgnite', href: '/chapters/GateIgnite', label: 'Gate Ignite', chapter:'/assets/Chapters/gateignite.png' },
    { key: 'industry4', href: '/chapters/Industry4.0', label: 'Industry 4.0', chapter:'/assets/Chapters/industry4.png' },
    { key: 'womenTechies', href: '/chapters/WomenTechies', label: 'Women Techies', chapter:'/assets/Chapters/womentechies.png' },
    { key: 'internationalAUTechies', href: '/chapters/InternationalAUTechies', label: 'International AU Techies', chapter:'/assets/Chapters/internationalau.png' },
    { key: 'marketingEventManagement', href: '/chapters/MarketingEventManagement', label: 'Marketing And Event Management', chapter:'/assets/Chapters/marketing_event.png' }
  ];
  export const testimonials = [
    {
      ImageUrl: "https://example.com/images/testimonial1.jpg",
      Name: "Alice Johnson",
      TestimonialText: "Codeiam has transformed my coding skills! The interactive courses and hands-on projects are fantastic.",
      FallbackText: "AJ"
    },
    {
      ImageUrl: "https://example.com/images/testimonial2.jpg",
      Name: "Bob Smith",
      TestimonialText: "I learned so much about web development in a short time. The community support is amazing!",
      FallbackText: "BS"
    },
    {
      ImageUrl: "https://example.com/images/testimonial3.jpg",
      Name: "Charlie Brown",
      TestimonialText: "The mentors at Codeiam are incredibly knowledgeable and always ready to help. Highly recommend!",
      FallbackText: "CP"
    },
    {
      ImageUrl: "https://example.com/images/testimonial4.jpg",
      Name: "Diana Prince",
      TestimonialText: "Thanks to Codeiam, I landed my dream job as a front-end developer! The curriculum is top-notch.",
      FallbackText: "DP"
    },
    {
      ImageUrl: "https://example.com/images/testimonial5.jpg",
      Name: "Ethan H",
      TestimonialText: "Codeiam offers a unique blend of theory and practice. I've never felt more prepared for the industry.",
      FallbackText: "EH"
    }
  ];
  
  export const chapterscomp = [
    {
      title: "AI/ML AND DATA SCIENCE",
      description: "AI/ML and Data Science are revolutionizing industries by automating processes, enabling predictive analytics, and improving decision-making. This chapter focuses on equipping students with knowledge of machine learning algorithms, data handling, and deep learning frameworks like TensorFlow and PyTorch, preparing them for a data-driven future.",
      image: "/aiml.png"
    },
    {
      title: "AR & VR WEB APP",
      description: "Augmented Reality (AR) and Virtual Reality (VR) are transforming how we interact with digital content. This chapter covers the development of immersive experiences in the web space, using technologies like WebXR and Three.js, allowing students to create engaging, interactive 3D applications.",
      image: "/arvr.png"
    },
    {
      title: "ETHICAL DEVSECOPS",
      description: "Ethical DevSecOps integrates security practices into the DevOps workflow, promoting a culture of secure software development. This chapter emphasizes secure coding, vulnerability testing, and compliance, helping students ensure that security is considered from the start of the software lifecycle.",
      image: "/devsec.png"
    },
    {
      title: "Gate Ignite",
      description: "Gate Ignite is designed to help students crack competitive exams like GATE, focusing on the fundamental principles of engineering and technology. The chapter provides a strong foundation in problem-solving and conceptual knowledge required to succeed in graduate-level entrance exams.",
      image: "/aiml.png"
    },
    {
      title: "Industry 4.0",
      description: "Industry 4.0 represents the next phase of the industrial revolution, where automation, IoT, and smart manufacturing technologies drive efficiencies. This chapter explores the integration of cyber-physical systems, robotics, and cloud computing, shaping the future of manufacturing and supply chain management.",
      image: "/ind.png"
    },
    {
      title: "Women Techies",
      description: "Women Techies is a chapter dedicated to empowering women in technology, promoting gender diversity in STEM fields. The chapter provides mentorship, networking opportunities, and resources to support women in pursuing careers in technology and overcoming challenges in the industry.",
      image: "/wom.png"
    },
    {
      title: "Marketing And Event Management",
      description: "Marketing and Event Management are critical for branding and outreach in today’s digital age. This chapter delves into strategies for effective communication, digital marketing, social media engagement, and organizing impactful events, allowing students to develop soft skills crucial for business growth.",
      image: "/aiml.png"
    },
    {
      title: "Competitive Programming and DSA",
      description: "Competitive Programming and Data Structures & Algorithms (DSA) are essential for solving complex problems efficiently. This chapter prepares students for coding competitions and technical interviews, helping them improve their problem-solving abilities through optimized algorithms and data structure usage.",
      image: "/devsec.png"
    },
    {
      title: "International AU Techies",
      description: "International AU Techies chapter promotes global collaboration by engaging with international tech communities and organizing cross-border hackathons, tech talks, and projects. It opens doors for students to interact with global peers and learn about international trends in technology.",
      image: "/arvr.png"
    },
    
  ];
  
  export const competitiveProgrammingChapter = {
    category: "Competitive Programming",
    title: "Competitive Programming Chapter",
    src: "/competitive-programming.png",
    content: {
      title: "Competitive Programming Chapter",
      description: "Sharpening problem-solving skills and preparing for coding competitions worldwide",
      images: ["/car4.jpg", "/car2.jpg", "/car3.jpg"],
      teamMembers: [
        { name: "Alex Johnson", role: "Lead", image: "/placeholder-user.jpg" },
        { name: "Maria Lopez", role: "Co Lead", image: "/placeholder-user.jpg" },
        { name: "Chris Taylor", role: "Secretary", image: "/placeholder-user.jpg" },
      ],
      whatsappLink: "https://whatsapp.com/group/example-competitive",
      previousEvents: [
        {
          title: "Coding Marathon",
          date: "2023-11-15",
          description: "A 12-hour non-stop coding challenge to test problem-solving skills.",
        },
        {
          title: "Algorithm Mastery Workshop",
          date: "2023-09-10",
          description: "A hands-on workshop focused on mastering advanced algorithms.",
        },
      ],
    },
  };
  export const industry4Chapter = {
    category: "Industry 4.0",
    title: "Industry 4.0 Chapter",
    src: "/industry4.png",
    content: {
      title: "Industry 4.0 Chapter",
      description: "Driving innovation and preparing for the future of smart industries and automation",
      images: ["/car4.jpg", "/car2.jpg", "/car3.jpg"],
      teamMembers: [
        { name: "Sophia Williams", role: "Lead", image: "/placeholder-user.jpg" },
        { name: "Liam Brown", role: "Co Lead", image: "/placeholder-user.jpg" },
        { name: "Emily Davis", role: "Secretary", image: "/placeholder-user.jpg" },
      ],
      whatsappLink: "https://whatsapp.com/group/example-industry4",
      previousEvents: [
        {
          title: "Smart Manufacturing Webinar",
          date: "2023-10-20",
          description: "Insights into the latest trends in smart manufacturing technologies.",
        },
        {
          title: "IoT for Industry Workshop",
          date: "2023-12-05",
          description: "Hands-on sessions on leveraging IoT for industrial applications.",
        },
      ],
    },
  };
  export const internationalAuTechiesChapter = {
    category: "International AU Techies",
    title: "International AU Techies Chapter",
    src: "/international-techies.png",
    content: {
      title: "International AU Techies Chapter",
      description: "Connecting tech enthusiasts worldwide to foster innovation and collaboration",
      images: ["/car3.jpg", "/car4.jpg", "/car2.jpg"],
      teamMembers: [
        { name: "Oliver Carter", role: "Lead", image: "/placeholder-user.jpg" },
        { name: "Amelia Scott", role: "Co Lead", image: "/placeholder-user.jpg" },
        { name: "Ethan Moore", role: "Secretary", image: "/placeholder-user.jpg" },
      ],
      whatsappLink: "https://whatsapp.com/group/example-international-techies",
      previousEvents: [
        {
          title: "Global Tech Conference",
          date: "2023-11-30",
          description: "A global platform for techies to share insights and showcase projects.",
        },
        {
          title: "Cross-Border Hackathon",
          date: "2023-09-15",
          description: "An international hackathon uniting participants to solve global challenges.",
        },
      ],
    },
  };
  
  export const marketingEventChapter = {
    category: "Marketing Events",
    title: "Marketing Event Chapter",
    src: "/marketing-event.png",
    content: {
      title: "Marketing Event Chapter",
      description: "Empowering creative minds to strategize and lead impactful marketing campaigns",
      images: ["/car3.jpg", "/car4.jpg", "/car2.jpg"],
      teamMembers: [
        { name: "Mia Rodriguez", role: "Lead", image: "/placeholder-user.jpg" },
        { name: "James Anderson", role: "Co Lead", image: "/placeholder-user.jpg" },
        { name: "Charlotte Wilson", role: "Secretary", image: "/placeholder-user.jpg" },
      ],
      whatsappLink: "https://whatsapp.com/group/example-marketing-event",
      previousEvents: [
        {
          title: "Digital Marketing Bootcamp",
          date: "2023-08-20",
          description: "A comprehensive workshop on SEO, social media marketing, and analytics.",
        },
        {
          title: "Brand Strategy Summit",
          date: "2023-10-15",
          description: "An event focused on building and managing brand identity effectively.",
        },
      ],
    },
  };
  export const womenTechiesChapter = {
    category: "Women in Tech",
    title: "Women Techies Chapter",
    src: "/women-techies.png",
    content: {
      title: "Women Techies Chapter",
      description: "Empowering women in technology through innovation, mentorship, and leadership",
      images: ["/car3.jpg", "/car4.jpg", "/car2.jpg"],
      teamMembers: [
        { name: "Sophia Brown", role: "Lead", image: "/placeholder-user.jpg" },
        { name: "Emma Garcia", role: "Co Lead", image: "/placeholder-user.jpg" },
        { name: "Ava Martinez", role: "Secretary", image: "/placeholder-user.jpg" },
      ],
      whatsappLink: "https://whatsapp.com/group/example-women-techies",
      previousEvents: [
        {
          title: "Women in STEM Workshop",
          date: "2023-05-12",
          description: "A workshop highlighting opportunities and challenges for women in STEM.",
        },
        {
          title: "Tech Leadership Summit",
          date: "2023-07-18",
          description: "An event featuring inspiring talks from leading women in tech.",
        },
      ],
    },
  };
  
  export const chapter = [
    {
      category: "AI/ML AND DATA SCIENCE",
      title: "AI/ML Chapter",
      src: "/aiml.png",
      content: {
        title: "AI/ML Chapter",
        description: "Exploring the frontiers of Artificial Intelligence and Machine Learning",
        images: ["/car3.jpg", "/car4.jpg", "/car2.jpg"],
        teamMembers: [
          { name: "John Doe", role: "Lead", image: "/placeholder-user.jpg" },
          { name: "Jane Smith", role: "Co Lead", image: "/placeholder-user.jpg" },
          { name: "Alice Johnson", role: "Secretary", image: "/placeholder-user.jpg" },
        ],
        whatsappLink: "https://whatsapp.com/group/example",
        previousEvents: [
          {
            title: "AI Ethics Workshop",
            date: "2023-05-15",
            description: "A workshop discussing the ethical implications of AI in society.",
          },
          {
            title: "Machine Learning Hackathon",
            date: "2023-07-22",
            description: "A 24-hour hackathon focused on solving real-world problems using ML.",
          },
        ],
      },
    },
    {
      category: "AR & VR WEB APP",
      title: "AR/VR Chapter",
      src: "/arvr.png",
      content: {
        title: "AR/VR Chapter",
        description: "Creating immersive experiences with Augmented and Virtual Reality",
        images: ["/car3.jpg", "/car4.jpg", "/car2.jpg"],
        teamMembers: [
          { name: "John Doe", role: "Lead", image: "/placeholder-user.jpg" },
          { name: "Jane Smith", role: "Co Lead", image: "/placeholder-user.jpg" },
          { name: "Alice Johnson", role: "Secretary", image: "/placeholder-user.jpg" },
        ],
        whatsappLink: "https://whatsapp.com/group/example",
        previousEvents: [
          {
            title: "AR Hackathon",
            date: "2023-06-12",
            description: "A competition to create AR applications.",
          },
          {
            title: "VR Development Workshop",
            date: "2023-08-08",
            description: "An interactive workshop on VR tools and techniques.",
          },
        ],
      },
    },
    {
      category: "ETHICAL DEVSECOPS",
      title: "DevSecOps Chapter",
      src: "/devsec.png",
      content: {
        title: "DevSecOps Chapter",
        description: "Integrating security practices into DevOps workflows",
        images: ["/car3.jpg", "/car4.jpg", "/car2.jpg"],
        teamMembers: [
          { name: "John Doe", role: "Lead", image: "/placeholder-user.jpg" },
          { name: "Jane Smith", role: "Co Lead", image: "/placeholder-user.jpg" },
          { name: "Alice Johnson", role: "Secretary", image: "/placeholder-user.jpg" },
        ],
        whatsappLink: "https://whatsapp.com/group/example",
        previousEvents: [
          {
            title: "Secure Coding Workshop",
            date: "2023-03-18",
            description: "An introduction to secure software development practices.",
          },
          {
            title: "Vulnerability Testing Webinar",
            date: "2023-04-25",
            description: "Best practices in vulnerability testing and management.",
          },
        ],
      },
    },
    {
      category: "Gate Ignite",
      title: "Gate Ignite Chapter",
      src: "/aiml.png",
      content: {
        title: "Gate Ignite Chapter",
        description: "Preparing students for competitive exams like GATE",
        images: ["/car3.jpg", "/car4.jpg", "/car2.jpg"],
        teamMembers: [
          { name: "John Doe", role: "Lead", image: "/placeholder-user.jpg" },
          { name: "Jane Smith", role: "Co Lead", image: "/placeholder-user.jpg" },
          { name: "Alice Johnson", role: "Secretary", image: "/placeholder-user.jpg" },
        ],
        whatsappLink: "https://whatsapp.com/group/example",
        previousEvents: [
          {
            title: "GATE Prep Bootcamp",
            date: "2023-09-01",
            description: "Comprehensive GATE preparation sessions.",
          },
          {
            title: "Mock Test Marathon",
            date: "2023-10-05",
            description: "A series of mock tests for GATE aspirants.",
          },
        ],
      },
    },
    // Repeat similar structure for remaining chapters...
  ];
  export const aiMlChapter = {
    category: "AI/ML AND DATA SCIENCE",
    title: "AI/ML Chapter",
    src: "/aiml.png",
    content: {
      title: "AI/ML Chapter",
      description: "Exploring the frontiers of Artificial Intelligence and Machine Learning",
      images: ["/car3.jpg", "/car4.jpg", "/car2.jpg"],
      teamMembers: [
        { name: "John Doe", role: "Lead", image: "/placeholder-user.jpg" },
        { name: "Jane Smith", role: "Co Lead", image: "/placeholder-user.jpg" },
        { name: "Alice Johnson", role: "Secretary", image: "/placeholder-user.jpg" },
      ],
      whatsappLink: "https://whatsapp.com/group/example",
      previousEvents: [
        {
          title: "AI Ethics Workshop",
          date: "2023-05-15",
          description: "A workshop discussing the ethical implications of AI in society.",
        },
        {
          title: "Machine Learning Hackathon",
          date: "2023-07-22",
          description: "A 24-hour hackathon focused on solving real-world problems using ML.",
        },
      ],
    },
  };
  export const arVrChapter = {
    category: "AR & VR WEB APP",
    title: "AR/VR Chapter",
    src: "/arvr.png",
    content: {
      title: "AR/VR Chapter",
      description: "Creating immersive experiences with Augmented and Virtual Reality",
      images: ["/car3.jpg", "/car4.jpg", "/car4.jpg"],
      teamMembers: [
        { name: "John Doe", role: "Lead", image: "/placeholder-user.jpg" },
        { name: "Jane Smith", role: "Co Lead", image: "/placeholder-user.jpg" },
        { name: "Alice Johnson", role: "Secretary", image: "/placeholder-user.jpg" },
      ],
      whatsappLink: "https://whatsapp.com/group/example",
      previousEvents: [
        {
          title: "AR Hackathon",
          date: "2023-06-12",
          description: "A competition to create AR applications.",
        },
        {
          title: "VR Development Workshop",
          date: "2023-08-08",
          description: "An interactive workshop on VR tools and techniques.",
        },
      ],
    },
  };
  export const devSecOpsChapter = {
    category: "ETHICAL DEVSECOPS",
    title: "DevSecOps Chapter",
    src: "/devsec.png",
    content: {
      title: "DevSecOps Chapter",
      description: "Integrating security practices into DevOps workflows",
      images: ["/car4.jpg", "/car3.jpg", "/car2.jpg"],
      teamMembers: [
        { name: "John Doe", role: "Lead", image: "/placeholder-user.jpg" },
        { name: "Jane Smith", role: "Co Lead", image: "/placeholder-user.jpg" },
        { name: "Alice Johnson", role: "Secretary", image: "/placeholder-user.jpg" },
      ],
      whatsappLink: "https://whatsapp.com/group/example",
      previousEvents: [
        {
          title: "Secure Coding Workshop",
          date: "2023-03-18",
          description: "An introduction to secure software development practices.",
        },
        {
          title: "Vulnerability Testing Webinar",
          date: "2023-04-25",
          description: "Best practices in vulnerability testing and management.",
        },
      ],
    },
  };
  export const gateIgniteChapter = {
    category: "Gate Ignite",
    title: "Gate Ignite Chapter",
    src: "/aiml.png",
    content: {
      title: "Gate Ignite Chapter",
      description: "Preparing students for competitive exams like GATE",
      images: ["/car3.jpg", "/car4.jpg", "/car4.jpg"],
      teamMembers: [
        { name: "John Doe", role: "Lead", image: "/placeholder-user.jpg" },
        { name: "Jane Smith", role: "Co Lead", image: "/placeholder-user.jpg" },
        { name: "Alice Johnson", role: "Secretary", image: "/placeholder-user.jpg" },
      ],
      whatsappLink: "https://whatsapp.com/group/example",
      previousEvents: [
        {
          title: "GATE Prep Bootcamp",
          date: "2023-09-01",
          description: "Comprehensive GATE preparation sessions.",
        },
        {
          title: "Mock Test Marathon",
          date: "2023-10-05",
          description: "A series of mock tests for GATE aspirants.",
        },
      ],
    },
  };
  
  export const CarouselItems= [
    {
      id:1,
      carouselimg:"/car1.jpg"
    },
    {
      id:2,
      carouselimg:"/car2.jpg"
    },
    {
      id:3,
      carouselimg:"/car3.jpg"
    
    },
    {
      id:4,
      carouselimg:"/car4.jpg" 
    }
  ]
  export const partners = [
    {
        name: "Andhra University Allumni Association",
        imgurl: "/partner3.jpg",
        link: "https://andhrauniversityalumni.com/"
      },
    {
      name: "Institute Innovation Council",
      imgurl: "/partner1.jpeg",
      link: "https://iic.mic.gov.in/assets/html/index.html"
    },
    {
      name: "e4 Club",
      imgurl: "/partner2.png",
      link: "https://www.instagram.com/aue4club/"
    },
   
    {
      name: "AICTE",
      imgurl: "/partner4.jpeg",
      link: "https://www.aicte-india.org/"
    },
    {
      name: "MOE innovation cell",
      imgurl: "/partner5.png",
      link: "https://mic.gov.in/&lang=en"
    },
    {
      name: "Codeiam Club",
      imgurl: "/partner6.jpeg",
      link: "https://www.instagram.com/codeiam.club/"
    },
    {
      name: "Kalam Dream Labs",
      imgurl: "/partner7.jpeg",
      link: "https://www.kalamdreamlabs.com/"
    },
    {
        name: "A hub",
        imgurl: "/partner8.jpeg",
        link: "https://www.a-hub.co/"
      },
      
  ];
  