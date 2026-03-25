export type ProjectCategory = 'Web' | 'Mobile' | 'Software';

export interface ProjectCaseStudy {
  challenge: string;
  solution: string;
  architecture: string[];
  outcomes: Array<{ label: string; value: string }>;
}

export interface ProjectItem {
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl: string;
  caseStudy: ProjectCaseStudy;
}

export const projectCategories: Array<'All' | ProjectCategory> = ['All', 'Web', 'Mobile', 'Software'];

export const projects: ProjectItem[] = [
  {
    slug: 'hrms-human-resource-management-system',
    title: 'HRMS (Human Resource Management System)',
    category: 'Software',
    description:
      'A full-stack HR management platform built to centralize employee administration, attendance monitoring, leave workflows, and payroll operations in one secure system. The project combines a React.js and Vite frontend with a Django backend and PostgreSQL database to replace fragmented manual processes with a structured, role-aware digital workflow. It improves data accuracy, reduces repetitive HR tasks, and gives administrators a reliable way to manage day-to-day workforce operations.',
    image:
      '/hrms-software.jpeg',
    tech: ['React.js', 'Vite', 'Python', 'Django', 'JavaScript', 'PostgreSQL', 'REST API', 'Git'],
    liveUrl: '#',
    githubUrl: 'https://github.com/PoojaBai-K/HRMS-NEW',
    caseStudy: {
      challenge:
        'HR teams often manage employee records, attendance logs, leave approvals, and payroll data across disconnected spreadsheets or manual registers. That setup makes approvals slow, increases the chance of data inconsistencies, and makes it difficult to maintain a trustworthy source of employee information.',
      solution:
        'Built a centralized HRMS with dedicated modules for employee lifecycle management, attendance tracking, leave request handling, and payroll support. The platform exposes REST APIs for structured data exchange and uses a clean frontend dashboard so HR staff can review records, process requests, and keep operational data up to date from a single interface.',
      architecture: [
        'React.js and Vite frontend delivering a fast, modular dashboard experience',
        'Django backend with REST APIs for employee, attendance, leave, and payroll workflows',
        'PostgreSQL schema designed for normalized HR records, department mapping, and payroll-related data',
        'Form-driven UI and API validation to maintain consistency across critical employee operations',
        'Centralized data model that supports approvals, reporting, and day-to-day HR administration'
      ],
      outcomes: [
        { label: 'Core Modules', value: 'Employees, attendance, leave, and payroll in one platform' },
        { label: 'Process Efficiency', value: 'Reduced manual HR coordination through centralized workflows' },
        { label: 'Data Reliability', value: 'Structured PostgreSQL-backed records for consistent operations' }
      ]
    }
  },
  {
    slug: 'optimus-overseas-website',
    title: 'Optimus Overseas Website',
    category: 'Web',
    description:
      'A responsive full-stack website developed for an overseas education consultancy to present services, improve credibility, and streamline student enquiries. The platform highlights visa categories, universities, and consultancy offerings through dynamic pages backed by Django, while the React.js and Vite frontend delivers a modern browsing experience. It was designed to strengthen the consultancy\'s online presence and make it easier for prospective students to discover programs and connect with the team.',
    image:
      '/optimus.png',
    tech: ['React.js', 'Vite', 'Python', 'Django', 'JavaScript', 'PostgreSQL', 'Git'],
    liveUrl: 'https://www.optimusoverseasedu.com/',
    githubUrl: 'https://github.com/PoojaBai-K/Optimus_overseas_consultancy_site',
    caseStudy: {
      challenge:
        'Education consultancies need to communicate a large amount of service information clearly while also capturing genuine student enquiries securely. A static or outdated site can make services harder to understand and reduce trust among prospective applicants.',
      solution:
        'Created a full-stack consultancy website with service-focused content sections, dynamic pages for visa and university information, and backend-powered enquiry handling. The system validates submissions, supports secure user interactions, and gives the business a clearer digital channel for attracting and converting student interest.',
      architecture: [
        'React.js and Vite frontend for responsive service pages and smooth navigation',
        'Django backend managing form submissions, data validation, and server-side logic',
        'Dynamic content sections for consultancy offerings, visa categories, and study destinations',
        'PostgreSQL persistence for storing enquiry-related data and structured business content',
        'Full-stack integration focused on usability, maintainability, and professional presentation'
      ],
      outcomes: [
        { label: 'Online Presence', value: 'Stronger digital identity for the consultancy business' },
        { label: 'Student Enquiries', value: 'Simplified lead capture through validated enquiry workflows' },
        { label: 'Service Clarity', value: 'Clear presentation of visas, universities, and consultancy support' }
      ]
    }
  },
  {
    slug: 'cafe-billing-software',
    title: 'Cafe Billing Software',
    category: 'Software',
    description:
      'A billing and invoicing application created for cafe operations, focused on fast order handling, accurate price calculations, and a simple point-of-sale style experience. Built with React.js and Vite on the frontend and integrated with REST APIs, the system supports product selection, invoice creation, tax calculation, and billing data processing. The project helps streamline counter workflows and reduces manual effort in preparing and managing customer bills.',
    image:
      '/bill.jpeg',
    tech: ['React.js', 'Vite', 'Python', 'Django', 'JavaScript', 'REST API', 'Git'],
    liveUrl: '#',
    githubUrl: 'https://github.com/PoojaBai-K/BillingSoftware_frontend',
    caseStudy: {
      challenge:
        'Manual cafe billing is time-consuming and error-prone, especially when staff need to handle multiple products, calculate totals and taxes quickly, and generate clean invoices during peak hours.',
      solution:
        'Developed a responsive cafe billing interface that allows staff to select products, prepare invoices, calculate totals in real time, and connect billing actions with backend services. The system was structured to support smoother order management and faster checkout handling.',
      architecture: [
        'React.js and Vite frontend optimized for quick billing interactions and modular UI screens',
        'Invoice and product-selection flows designed for responsive desktop-friendly usage',
        'Real-time calculation logic for totals, taxes, and invoice summaries',
        'REST API integration with backend services for billing data exchange and order processing',
        'Frontend architecture focused on maintainable forms and reusable billing components'
      ],
      outcomes: [
        { label: 'Billing Speed', value: 'Faster invoice preparation with responsive UI workflows' },
        { label: 'Calculation Accuracy', value: 'Automated totals and tax calculations during checkout' },
        { label: 'Operational Support', value: 'Improved day-to-day order and billing management' }
      ]
    }
  },
  {
    slug: 'twiggy-app',
    title: 'Twiggy App',
    category: 'Mobile',
    description:
      'A Swiggy-inspired mobile food delivery application built with React Native and Expo, focused on responsive mobile flows, smooth navigation, and a familiar ordering experience. The app was designed to showcase food discovery, restaurant browsing, menu exploration, cart handling, and checkout-oriented UI patterns in a polished cross-platform interface. It demonstrates strong mobile component structuring and user-first interaction design for modern app experiences.',
    image:
      '/twiggy.jpeg',
    tech: ['React Native', 'Expo', 'JavaScript', 'Mobile UI', 'API Integration', 'Git'],
    liveUrl: '#',
    githubUrl: 'https://github.com/PoojaBai-K/MyFirstApp1',
    caseStudy: {
      challenge:
        'Food delivery apps require fast browsing, intuitive cart flows, and smooth mobile navigation to keep users engaged. Recreating that experience in a cross-platform app means balancing performance, reusable UI, and a clean ordering journey.',
      solution:
        'Built a Swiggy-like mobile application with structured restaurant listings, menu pages, cart management, and checkout-oriented screens. The app uses React Native with Expo to deliver a consistent experience across devices while keeping the UI modular and easy to extend.',
      architecture: [
        'React Native and Expo setup for rapid cross-platform mobile development',
        'Component-based mobile screens for home, restaurant listing, menu, and cart flows',
        'Navigation-driven user journey for browsing and ordering interactions',
        'Reusable UI blocks for food cards, banners, categories, and action controls',
        'Frontend-ready architecture that can integrate with delivery or restaurant APIs'
      ],
      outcomes: [
        { label: 'Mobile Experience', value: 'Smooth Swiggy-style browsing and ordering flow' },
        { label: 'Cross-Platform UI', value: 'Reusable React Native components built with Expo' },
        { label: 'Portfolio Value', value: 'Strong showcase of modern mobile commerce design' }
      ]
    }
  },
  {
    slug: 'zoom-app',
    title: 'Zoom App',
    category: 'Mobile',
    description:
      'A Zoom-inspired meeting application created with the same modern toolset approach, focused on virtual meeting flows, clean mobile interactions, and collaboration-oriented UI design. The project simulates key video meeting experiences such as joining rooms, managing participants, and navigating meeting-related screens. It highlights mobile app architecture, real-time oriented interface thinking, and scalable design for communication products.',
    image:
      'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=1200&q=80',
    tech: ['React Native', 'Expo', 'JavaScript', 'Mobile UI', 'Realtime Concepts', 'Git'],
    liveUrl: '#',
    githubUrl: 'https://github.com/PoojaBai-K/Myapp',
    caseStudy: {
      challenge:
        'Meeting apps need clear user flows for joining, managing, and participating in sessions without overwhelming the user. Designing such an interface requires careful attention to navigation, control visibility, and layout clarity.',
      solution:
        'Developed a Zoom-like mobile experience with meeting room entry screens, participant-focused layouts, and meeting control interfaces. The project emphasizes usability and scalable screen organization for communication-based products.',
      architecture: [
        'React Native and Expo mobile stack for rapid interface development',
        'Screen structure covering login, meeting join flow, room views, and control panels',
        'Reusable UI components for participant tiles, session actions, and navigation',
        'Interface patterns designed to support future real-time integrations',
        'Mobile-first architecture with a focus on clarity during live interactions'
      ],
      outcomes: [
        { label: 'Meeting UX', value: 'Clear and familiar virtual meeting experience' },
        { label: 'Screen Design', value: 'Well-structured mobile communication flows' },
        { label: 'Scalability', value: 'Frontend base prepared for richer realtime features' }
      ]
    }
  },
  {
    slug: 'food-beverage-and-gaming-site',
    title: 'Food Beverage and Gaming Site',
    category: 'Web',
    description:
      'A frontend-focused web platform combining food ordering and gaming reservation experiences in one interface. The site was designed to let users browse food and beverage options while also booking entertainment slots such as PS5 sessions, snooker tables, and gaming tables. It blends e-commerce style browsing with reservation-driven interactions to create a lively, multi-purpose digital experience.',
    image:
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
    tech: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Responsive Design', 'Git'],
    liveUrl: 'https://gamingandfoodlounge.netlify.app/',
    githubUrl: 'https://github.com/PoojaBai-K/Food-And-Beverages-site',
    caseStudy: {
      challenge:
        'Combining food ordering and gaming reservations in one platform requires a layout that feels cohesive while still supporting two different user intents. The interface must make ordering and booking feel equally accessible without becoming visually cluttered.',
      solution:
        'Created a frontend-only website that presents food categories, beverage selections, and gaming booking options through clear sections and interactive UI elements. Users can explore menu items and review booking-oriented screens for PS5, snooker, and table reservations in a single unified experience.',
      architecture: [
        'React-based frontend with modular sections for ordering and booking workflows',
        'Responsive layouts for food menus, featured offers, and reservation cards',
        'Interactive UI components for slot selection, calls to action, and product exploration',
        'Frontend state patterns suitable for future backend booking and cart integration',
        'Visual structure focused on entertainment, speed, and browsing clarity'
      ],
      outcomes: [
        { label: 'Dual Experience', value: 'Supports both food ordering and gaming booking flows' },
        { label: 'Frontend Design', value: 'Interactive and engaging responsive UI' },
        { label: 'Booking Showcase', value: 'Clear presentation of PS5 and snooker reservations' }
      ]
    }
  },
  {
    slug: 'insightstream-news',
    title: 'InsightStream - Navigates the News Landscape',
    category: 'Web',
    description:
      'A news-focused web application built to help users explore current events through an organized, readable, and category-driven interface. InsightStream brings together news discovery patterns with clean frontend design so readers can navigate headlines, topics, and article groupings more efficiently. The project highlights information architecture, dynamic rendering, and content-first user experience design.',
    image:
      'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=80',
    tech: ['JavaScript', 'React', 'Tailwind CSS', 'REST API', 'Responsive Design',],
    liveUrl: '#',
    githubUrl: 'https://github.com/PoojaBai-K/InsightStream-Navigate-News-Landscape',
    caseStudy: {
      challenge:
        'News readers often struggle with information overload when stories are scattered across multiple sources and categories. The interface must prioritize readability, filtering, and structure to make daily news consumption feel efficient.',
      solution:
        'Built a news discovery application that organizes articles into a navigable interface with category-based presentation and dynamic content loading. The project focuses on making news exploration cleaner and more accessible for users who want a quick understanding of the current landscape.',
      architecture: [
        'Dynamic frontend rendering for article cards and categorized content sections',
        'REST API integration for retrieving news data from external sources',
        'Responsive layout supporting comfortable reading on desktop and mobile',
        'Information hierarchy designed for fast scanning and topic exploration',
        'Clean UI structure emphasizing readability and content discovery'
      ],
      outcomes: [
        { label: 'News Discovery', value: 'Centralized and structured article browsing experience' },
        { label: 'Readability', value: 'Clean layout for easier headline and topic scanning' },
        { label: 'Content Flow', value: 'Organized navigation across multiple news categories' }
      ]
    }
  },
  {
    slug: 'software-company-site',
    title: 'Software Company Site',
    category: 'Web',
    description:
      'A full-stack company website designed to represent a software business online with strong branding, service presentation, and backend-powered enquiry handling. The project includes a polished frontend for showcasing services, projects, and business value, along with backend functionality to support dynamic content and communication workflows. It was built to improve digital trust and create a more professional client-facing presence.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    tech: ['React.js', 'Vite', 'Python', 'Django', 'JavaScript', 'REST API', 'Git'],
    liveUrl: 'https://www.manovate.co.in/',
    githubUrl: 'https://github.com/PoojaBai-K/Manovate_site',
    caseStudy: {
      challenge:
        'A software company website must do more than look professional. It needs to clearly explain services, communicate credibility, and support enquiries without becoming too generic or difficult to manage.',
      solution:
        'Developed a company website with a strong service-oriented frontend and backend features for managing enquiry flows and structured content. The result is a scalable business website that supports branding, lead generation, and content updates.',
      architecture: [
        'React.js and Vite frontend for service pages, case-study sections, and business storytelling',
        'Django backend for contact workflows, validation, and dynamic content handling',
        'Reusable page sections for services, portfolio, about, and enquiry touchpoints',
        'REST-oriented data flow between UI components and backend actions',
        'Responsive structure optimized for both credibility and usability'
      ],
      outcomes: [
        { label: 'Brand Presence', value: 'Professional software business presentation online' },
        { label: 'Lead Capture', value: 'Backend-supported enquiry and contact workflows' },
        { label: 'Scalable Content', value: 'Structure ready for future business growth and updates' }
      ]
    }
  },
  {
    slug: 'cafe-website',
    title: 'Cafe Website',
    category: 'Web',
    description:
      'A frontend-only cafe website created to showcase menu offerings, ambience, featured products, and brand personality through an inviting and responsive visual experience. The project focuses on strong layout composition, food presentation, and modern landing-page design. It was built to help a cafe strengthen its online identity and present its menu in a way that feels warm, appetizing, and easy to browse.',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
    tech: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Responsive Design', 'Git'],
    liveUrl: '#',
    githubUrl: 'https://github.com/PoojaBai-K/Cafe_Website',
    caseStudy: {
      challenge:
        'Cafe websites need to capture brand atmosphere quickly while still making menu content easy to browse. The frontend must feel visually rich without sacrificing readability or mobile usability.',
      solution:
        'Designed and developed a frontend-only cafe site with menu highlights, promotional sections, brand storytelling, and contact-oriented calls to action. The interface emphasizes visual appeal, smooth browsing, and a polished hospitality-oriented presentation.',
      architecture: [
        'Responsive frontend layout designed for menu discovery and cafe branding',
        'Structured content sections for hero banners, featured menu items, and offers',
        'Reusable UI blocks for product cards, testimonials, and contact prompts',
        'Visual-first design approach tailored to food presentation and hospitality themes',
        'Frontend architecture ready for future reservation or ordering integrations'
      ],
      outcomes: [
        { label: 'Visual Appeal', value: 'Stronger digital branding for a cafe business' },
        { label: 'Menu Showcase', value: 'Clear presentation of food and beverage offerings' },
        { label: 'Responsive Experience', value: 'Smooth browsing across desktop and mobile' }
      ]
    }
  },
  {
    slug: 'face-recognition-attendance-system',
    title: 'Face Recognition Attendance System with Gender Prediction',
    category: 'Software',
    description:
      'A full-stack intelligent attendance system that combines face recognition with gender prediction to automate attendance marking and enrich monitoring workflows. The project includes both frontend and backend layers, enabling users to manage attendance records, process recognition events, and review system outputs through a structured interface. It demonstrates the integration of computer vision concepts with practical administrative software.',
    image:
      '/face.jpeg',
    tech: ['Python', 'Django', 'React.js', 'JavaScript', 'Computer Vision', 'REST API', 'Git'],
    liveUrl: '#',
    githubUrl: 'https://github.com/PoojaBai-K/Face-Recognition-with-Gender-Prediction',
    caseStudy: {
      challenge:
        'Traditional attendance systems are vulnerable to manual errors and proxy entries, while intelligent attendance platforms require accurate recognition workflows and usable administrative interfaces.',
      solution:
        'Built a full-stack attendance system that uses face recognition for automated presence marking and includes gender prediction as part of the analytical workflow. The frontend enables administrators to review attendance records, while the backend manages recognition processing and structured data handling.',
      architecture: [
        'Frontend dashboard for attendance review, user records, and system monitoring',
        'Backend services coordinating recognition events and attendance persistence',
        'Computer vision workflow integrated into an administrative web application',
        'REST APIs connecting the UI with recognition and attendance processing layers',
        'Structured data management for attendance history and user-based records'
      ],
      outcomes: [
        { label: 'Automation', value: 'Reduced manual attendance handling through recognition-based marking' },
        { label: 'System Intelligence', value: 'Integrated vision-driven attendance and gender insights' },
        { label: 'Administrative Control', value: 'Frontend and backend support for record management' }
      ]
    }
  },
  {
    slug: 'tazviro-technologies-company-site',
    title: 'Tazviro Technologies Company Site',
    category: 'Web',
    description:
      'A frontend company website developed for Tazviro Technologies to present its services, brand identity, and business value through a modern and professional web presence. The project focuses on clean UI composition, strong section flow, and a polished service-led layout that helps the company communicate credibility to potential clients. It was built as a showcase-driven business website with a responsive user experience.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    tech: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Responsive Design', 'Git'],
    liveUrl: 'https://www.tazvirotechnologies.com/',
    githubUrl: 'https://github.com/PoojaBai-K/Tazviro_site',
    caseStudy: {
      challenge:
        'A technology company website needs to communicate professionalism quickly while keeping service information approachable and easy to scan. The frontend must balance brand presentation with clarity and trust.',
      solution:
        'Created a frontend-only company site with well-structured sections for services, company profile, calls to action, and brand presentation. The design focuses on readability, credibility, and a polished visual hierarchy suitable for a technology business.',
      architecture: [
        'Responsive frontend layout with dedicated sections for company storytelling and services',
        'Reusable UI elements for cards, banners, contact prompts, and feature highlights',
        'Clean content flow optimized for business communication and conversion',
        'Visual hierarchy designed to support professionalism and easy page scanning',
        'Maintainable component structure for future content and branding updates'
      ],
      outcomes: [
        { label: 'Business Presence', value: 'Professional frontend website for a technology brand' },
        { label: 'Service Clarity', value: 'Clear communication of offerings and company value' },
        { label: 'Responsive Design', value: 'Consistent experience across desktop and mobile devices' }
      ]
    }
  },
  {
    slug: 'salon-appointment-booking',
    title: 'Salon Appointment Booking',
    category: 'Web',
    description:
      'A frontend-only salon booking website designed to help customers browse services, view available styling categories, and move through an appointment-oriented booking journey. The project focuses on a clean beauty and wellness aesthetic, easy service discovery, and user-friendly scheduling screens. It showcases how a service business can offer a more convenient digital booking experience through strong frontend design.',
    image:
      'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80',
    tech: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Responsive Design', 'Git'],
    liveUrl: '#',
    githubUrl: 'https://github.com/PoojaBai-K/Appointment',
    caseStudy: {
      challenge:
        'Salon customers need a booking experience that feels simple and visually reassuring, while the business needs a frontend that presents services clearly and encourages appointment conversion.',
      solution:
        'Designed a salon booking interface with dedicated sections for services, beauty packages, booking prompts, and appointment-related actions. The frontend emphasizes clarity, elegance, and a low-friction user journey from exploration to booking intent.',
      architecture: [
        'Frontend-only booking layout with service cards, time-selection concepts, and call-to-action sections',
        'Responsive design tailored to mobile-first service browsing',
        'Reusable UI components for appointment cards, offers, and service highlights',
        'Visual styling aligned with salon and wellness branding',
        'Structure suitable for future backend scheduling integration'
      ],
      outcomes: [
        { label: 'Booking Flow', value: 'Clear frontend journey for salon appointment intent' },
        { label: 'Brand Experience', value: 'Elegant visual design suited for beauty services' },
        { label: 'Usability', value: 'Easy browsing of services and appointment options' }
      ]
    }
  },
  {
    slug: 'supermarket-platform',
    title: 'Supermarket',
    category: 'Web',
    description:
      'A full-stack supermarket web application built to support digital product browsing, cart management, and structured customer interactions. The platform combines a responsive frontend with backend services to manage product data, category organization, and shopping-related workflows. It was designed to simulate a modern online grocery or supermarket experience with a focus on accessibility, convenience, and clean product discovery.',
    image:
      'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80',
    tech: ['React.js', 'JavaScript', 'Python', 'Django', 'REST API', 'MySQL', 'Git'],
    liveUrl: '#',
    githubUrl: 'https://github.com/PoojaBai-K/SuperMarket',
    caseStudy: {
      challenge:
        'Online supermarket platforms must make product browsing and cart interactions feel effortless even when handling many categories, items, and customer actions. The experience needs to stay clear, responsive, and easy to extend.',
      solution:
        'Developed a full-stack supermarket application with product listings, category browsing, cart workflows, and backend integration for managing store data. The system offers a structured e-commerce experience while keeping the interface straightforward for everyday users.',
      architecture: [
        'React.js frontend for category navigation, product cards, and shopping interactions',
        'Django backend exposing APIs for product retrieval and shopping-related operations',
        'MySQL-backed data storage for product and category information',
        'Responsive UI layout optimized for browsing and cart usability',
        'Full-stack structure prepared for additional e-commerce enhancements'
      ],
      outcomes: [
        { label: 'Shopping Experience', value: 'Smooth product browsing and cart-oriented flows' },
        { label: 'Full-Stack Build', value: 'Frontend and backend integration for supermarket operations' },
        { label: 'Scalable Structure', value: 'Organized product architecture for future expansion' }
      ]
    }
  }
];
