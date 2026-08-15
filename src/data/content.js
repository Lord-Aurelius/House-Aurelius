import { toGoogleDriveDownloadUrl } from '../utils/googleDrive'

export const heroImage =
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1400&q=80'

export const platformApps = [
  {
    id: 'haes',
    name: 'HAES',
    fullName: 'House Aurelius Education System',
    description:
      'School platform for registration, academics, and financial records.',
    url: 'https://haes-v1.vercel.app',
    marketplaceUrl: 'https://haes-v1.vercel.app',
    download: {
      android: {
        label: 'Android APK',
        url: toGoogleDriveDownloadUrl(
          'https://drive.google.com/file/d/1k2PyI_NO8DLTDAF5NtA5Y7iQn7rkfVxF/view?usp=drivesdk',
        ),
      },
    },
    image:
      'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1000&q=80',
    overview:
      'HAES centralizes admissions, academics, finance, and reporting for African schools in one workflow.',
    modules: [
      'Student registration and enrollment lifecycle',
      'Class setup, subjects, grading, and academic records',
      'Fee setup, billing, receipts, and balance tracking',
      'Parent/guardian communication and progress visibility',
      'Administrative and financial summary reporting',
      'AI-powered academic performance insights via AEGIS',
    ],
    audience: ['School owners', 'Administrators', 'Teachers', 'Bursars'],
    landing: {
      headline: 'Run Your Entire School From One System',
      subtext:
        'HAES centralizes student registration, academics, and financial records for African institutions. AEGIS adds AI-driven insights, automated reporting, and intelligent alerts.',
      primaryCta: 'Get Started',
      secondaryCta: 'Request Demo',
      capabilities: [
        {
          badge: 'SM',
          title: 'Student Management',
          text: 'Register and control student data across nursery, primary, and secondary levels.',
        },
        {
          badge: 'AT',
          title: 'Academic Tracking',
          text: 'Monitor performance, grades, and progression for teachers and school leaders.',
        },
        {
          badge: 'FC',
          title: 'Financial Control',
          text: 'Track fees, payments, and balances with full transparency.',
        },
        {
          badge: 'AI',
          title: 'AEGIS Intelligence',
          text: 'AI-powered insights, automated reports, and predictive alerts for data-driven decisions.',
        },
      ],
      highlights: [
        'One record per student from admission to graduation',
        'Teacher-friendly grade capture and academic oversight',
        'Bursar-ready finance workflows with instant visibility',
        'AEGIS-powered predictive analytics and automated reporting',
      ],
      impactMetrics: [
        { label: 'Admin turnaround', value: 'Faster daily operations' },
        { label: 'Record accuracy', value: 'Single source of truth' },
        { label: 'Decision speed', value: 'Real-time AI reporting' },
      ],
      testimonial: {
        quote:
          'Before HAES, we worked from separate sheets and delayed reports. Now everything runs from one system.',
        author: 'School Operations Team',
      },
      conversion:
        'Stop operating in fragments. Move your institution into a system designed for control.',
      conversionCta: 'Deploy HAES in Your School',
      gallery: [],
      storyBlocks: [
        {
          title: 'Classroom to Office Continuity',
          text: 'Teachers capture records while administrators monitor progress from one system.',
          image:
            'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'Campus-Wide Visibility',
          text: 'Every authorized role works from the same system with clear accountability.',
          image:
            'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'Finance Discipline',
          text: 'Fee tracking, bursary workflows, and reporting in one place.',
          image:
            'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80',
        },
      ],
    },
  },
  {
    id: 'hapos',
    name: 'HAPOS',
    fullName: 'House Aurelius Point of Sale',
    description:
      'POS for salons and spas with sales, expenses, payroll, and customer management.',
    url: 'https://hapos.vercel.app',
    marketplaceUrl: 'https://hapos.vercel.app',
    download: {
      android: {
        label: 'Android APK',
        url: toGoogleDriveDownloadUrl(
          'https://drive.google.com/file/d/1CPpTkz2ssaVWs9Ev9bMu8oeRQOueCINH/view?usp=drivesdk',
        ),
      },
    },
    image:
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=80',
    overview:
      'HAPOS manages appointments, services, inventory, and payments for African beauty shops and spas.',
    modules: [
      'Sales and invoicing workflow for salon and spa services',
      'Expense recording and operating-cost visibility',
      'Payroll preparation and payout tracking',
      'Customer profiles, treatment history, and repeat-visit tracking',
      'Business performance snapshots and operational summaries',
      'AI-powered sales trends and customer retention insights via AEGIS',
    ],
    audience: [
      'Beauty shop owners',
      'Salon and spa managers',
      'Reception and cashier staff',
      'Accounting staff',
    ],
    landing: {
      headline: 'Run Your Salon. Control Every Booking and Sale.',
      subtext:
        'HAPOS manages appointments, services, inventory, and payments for barbershops, salons, and spas. AEGIS surfaces AI insights on peak hours, top services, and retention.',
      primaryCta: 'Get Started',
      secondaryCta: 'Request Demo',
      capabilities: [
        {
          badge: 'AC',
          title: 'Appointment & Client Management',
          text: 'Schedule bookings, track client history, and manage walk-ins.',
        },
        {
          badge: 'SS',
          title: 'Service & Sales Processing',
          text: 'Handle service charges and product sales in one checkout flow.',
        },
        {
          badge: 'IC',
          title: 'Inventory Control',
          text: 'Track products, usage, and restocking to avoid shortages.',
        },
        {
          badge: 'FV',
          title: 'Financial Visibility',
          text: 'Monitor daily earnings, staff performance, and cash flow.',
        },
        {
          badge: 'AI',
          title: 'AEGIS Intelligence',
          text: 'AI-powered forecasting, retention scoring, and peak-hour analytics.',
        },
      ],
      highlights: [
        'Manage 50+ clients a day without losing track',
        'Instant view of daily earnings and top-performing services',
        'Real-time sales dashboard with staff performance breakdown',
        'AEGIS-powered customer retention and revenue forecasting',
      ],
      impactMetrics: [
        { label: 'Client throughput', value: 'Manage 50+ per day' },
        { label: 'Revenue clarity', value: 'AI-powered analytics' },
        { label: 'Booking control', value: 'Zero missed appointments' },
      ],
      conversion:
        'Stop relying on memory and paper. Run your shop on a system built for speed and control.',
      conversionCta: 'Deploy HAPOS in Your Shop',
      gallery: [],
      storyBlocks: [
        {
          title: 'Front Desk, Under Control',
          text: 'Walk-ins, bookings, and payments from a single screen—no double-booking.',
          image:
            'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'Every Sale Tracked',
          text: 'Every transaction is logged. Revenue reports are ready at day end.',
          image:
            'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'Stock That Doesn\'t Surprise You',
          text: 'Know what\'s running low before it runs out. Restocking is proactive.',
          image:
            'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
        },
      ],
      testimonial: {
        quote:
          'Before HAPOS, we tracked bookings in a notebook. Now every service, product, and payment is logged.',
        author: 'Salon Owner, Lagos',
      },
    },
  },
  {
    id: 'hare',
    name: 'HARE',
    fullName: 'House Aurelius Real Estate',
    description:
      'Real estate platform for tenant registration, collections, and property management.',
    url: 'https://hares.vercel.app',
    marketplaceUrl: 'https://hares.vercel.app',
    download: {
      android: {
        label: 'Android APK',
        url: toGoogleDriveDownloadUrl(
          'https://drive.google.com/file/d/1K9VOKhJ8Ix5jb3tornTKePGAmkLHdEVo/view?usp=drivesdk',
        ),
      },
    },
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80',
    overview:
      'HARE manages property operations from tenant onboarding to payment collections and occupancy visibility.',
    modules: [
      'Tenant registration and lease-profile management',
      'Rent billing, payment collection, and arrears tracking',
      'Property and maintenance expense recording',
      'Unit occupancy and tenancy status monitoring',
      'Owner-ready financial and operational reports',
      'AI-powered tenant risk scoring and occupancy prediction via AEGIS',
    ],
    audience: ['Property managers', 'Landlords', 'Facility accountants', 'Leasing officers'],
    landing: {
      headline: 'One System for Complete Property Control',
      subtext:
        'HARE unifies tenant registration, rent collection, communication, and property tracking. AEGIS adds AI-driven tenant risk scoring and occupancy optimization.',
      primaryCta: 'Get Started',
      secondaryCta: 'Request Demo',
      capabilities: [
        {
          badge: 'TR',
          title: 'Tenant Registration',
          text: 'Register tenants with structured profiles linked to each unit.',
        },
        {
          badge: 'RC',
          title: 'Rent Collection',
          text: 'Monitor payments, arrears, and receipts with real-time visibility.',
        },
        {
          badge: 'TL',
          title: 'Tenant–Landlord Communication',
          text: 'Direct messaging for notices, updates, and issue resolution.',
        },
        {
          badge: 'QR',
          title: 'QR-Based Verification',
          text: 'QR codes for tenant check-in, registration, and payment validation.',
        },
        {
          badge: 'MP',
          title: 'Marketplace Integration',
          text: 'List properties, vacancies, and rental opportunities in a built-in marketplace.',
        },
        {
          badge: 'AI',
          title: 'AEGIS Intelligence',
          text: 'AI-powered tenant risk scoring, lease renewal prediction, and occupancy optimization.',
        },
      ],
      highlights: [
        'Track every tenant and payment without spreadsheets',
        'Instant arrears visibility across all units',
        'QR-based verification for every registered tenant',
        'AEGIS-powered tenant risk scoring and lease forecasting',
      ],
      impactMetrics: [
        { label: 'Tenant visibility', value: 'Every unit, every status' },
        { label: 'Arrears tracking', value: 'AI-powered alerts' },
        { label: 'Admin overhead', value: 'Reduced to zero manual work' },
      ],
      conversion:
        'Manage your entire property portfolio through a single controlled system.',
      conversionCta: 'Deploy HARE for Your Properties',
      gallery: [],
      storyBlocks: [
        {
          title: 'Tenant Onboarding, Digitized',
          text: 'Register tenants digitally, link them to units, and generate QR verification in minutes.',
          image:
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'Rent Collection, Tracked',
          text: 'Know who has paid, who is overdue, and by how much—across every property.',
          image:
            'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'Smooth Operations',
          text: 'Direct communication resolves disputes faster and keeps occupancy high.',
          image:
            'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
        },
      ],
      testimonial: {
        quote:
          'Managing 12 units used to mean chasing tenants by phone. HARE changed that completely.',
        author: 'Property Manager, Accra',
      },
    },
  },
  {
    id: 'church-lib',
    name: 'Church-lib',
    fullName: 'Church-lib',
    description:
      'Church operations for member registration, tithes, newsletters, and media.',
    url: 'https://church-lib.vercel.app',
    marketplaceUrl: 'https://church-lib.vercel.app',
    download: {
      android: {
        label: 'Android APK',
        url: toGoogleDriveDownloadUrl(
          'https://drive.google.com/file/d/1m9MgjzW0J6x0PGead_Z-DOM9EBnakUWa/view?usp=drivesdk',
        ),
      },
    },
    image:
      'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1000&q=80',
    overview:
      'Church-lib combines membership records, giving workflows, communication, and media for church administration.',
    modules: [
      'Member and family registration records',
      'Tithes and offerings tracking with safe summaries',
      'Newsletter publishing and church announcements',
      'Service media library and content organization',
      'Administrative oversight for church leadership',
      'AI-powered member engagement and giving analytics via AEGIS',
    ],
    audience: ['Church administrators', 'Finance teams', 'Pastoral staff', 'Media teams'],
    landing: {
      headline: 'One System for a Fully Connected Church',
      subtext:
        'Church-Lib centralizes member registration, attendance, communication, media, and administration. AEGIS adds AI-driven insights on engagement and giving patterns.',
      primaryCta: 'Get Started',
      secondaryCta: 'Request Demo',
      capabilities: [
        {
          badge: 'MR',
          title: 'Member Registration',
          text: 'Structured member profiles for complete congregation visibility.',
        },
        {
          badge: 'QR',
          title: 'QR Attendance',
          text: 'Record attendance quickly with QR-based check-ins.',
        },
        {
          badge: 'MA',
          title: 'Media Access',
          text: 'Share sermons, teachings, and church content in-platform.',
        },
        {
          badge: 'NA',
          title: 'News & Activities',
          text: 'Distribute announcements, events, and updates in real time.',
        },
        {
          badge: 'SL',
          title: 'Staff Daily Logs',
          text: 'Track staff activity and duties for accountability.',
        },
        {
          badge: 'AI',
          title: 'AEGIS Intelligence',
          text: 'AI-powered member engagement scoring and giving pattern analysis.',
        },
      ],
      highlights: [
        'Full congregation visibility from a single registry',
        'QR-based attendance that replaces paper sign-in',
        'Sermons, media, and announcements in one platform',
        'AEGIS-powered member engagement and giving analytics',
      ],
      impactMetrics: [
        { label: 'Member records', value: 'Structured & searchable' },
        { label: 'Attendance capture', value: 'QR check-in, instant' },
        { label: 'Communication', value: 'Real-time announcements' },
        { label: 'AI insights', value: 'Member engagement scoring' },
      ],
      conversion:
        'Move from manual records to a unified church system built for clarity.',
      conversionCta: 'Deploy Church-Lib for Your Ministry',
      gallery: [],
      storyBlocks: [
        {
          title: 'Every Member, Registered',
          text: 'Build structured records for every member—names, family, contact details.',
          image:
            'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'Attendance Without the Clipboard',
          text: 'Members check in via QR code. Attendance captured instantly.',
          image:
            'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'Sermons Always Accessible',
          text: 'Upload and share service recordings through the platform.',
          image:
            'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80',
        },
      ],
      testimonial: {
        quote:
          'We had records in three places. Church-Lib brought it all into one system.',
        author: 'Church Administrator, Nairobi',
      },
    },
  },
  {
    id: 'hifathi',
    name: 'Hifathi',
    fullName: 'Hifathi Personal Finance',
    description:
      'Personal finance for tracking income, expenses, and money decisions.',
    url: 'https://hifathi.vercel.app',
    marketplaceUrl: 'https://hifathi.vercel.app',
    download: {
      android: {
        label: 'Android APK',
        url: toGoogleDriveDownloadUrl(
          'https://drive.google.com/file/d/1ZVb6iK_HyRmc4lNefD4E_TDyxHLewtyu/view?usp=drivesdk',
        ),
      },
    },
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=80',
    overview:
      'Hifathi helps individuals track income, control expenses, and receive practical money guidance in one place.',
    modules: [
      'Income tracking across salary, business, and side-hustle streams',
      'Expense recording with category-level visibility and history',
      'Money-management advice based on financial activity patterns',
      'Budget awareness and spending summaries for day-to-day decisions',
      'Built-in marketplace access for discovering and offering useful products and services',
      'AI-powered spending analysis and personalized financial coaching via AEGIS',
    ],
    audience: [
      'Individuals',
      'Families',
      'Side-hustle earners',
      'Small traders',
      'Budget-conscious households',
    ],
    landing: {
      headline: 'Take Control of Income, Expenses, and Everyday Decisions',
      subtext:
        'Hifathi helps users record what comes in, track what goes out, and receive practical advice. AEGIS adds AI-driven spending analysis and personalized coaching.',
      primaryCta: 'Open Hifathi',
      secondaryCta: 'Explore Marketplace',
      capabilities: [
        {
          badge: 'IT',
          title: 'Income Tracking',
          text: 'Capture salary, business revenue, and casual earnings in one view.',
        },
        {
          badge: 'EX',
          title: 'Expense Management',
          text: 'Track spending by category to see where money goes.',
        },
        {
          badge: 'FA',
          title: 'Financial Advice',
          text: 'Practical guidance on income management and spending discipline.',
        },
        {
          badge: 'BD',
          title: 'Budget Visibility',
          text: 'A working picture of financial movement for better weekly planning.',
        },
        {
          badge: 'AI',
          title: 'AEGIS Intelligence',
          text: 'AI-powered spending analysis, savings detection, and personalized coaching.',
        },
      ],
      highlights: [
        'Track income and expenses without spreadsheets',
        'See spending pressure before it becomes a problem',
        'Get practical guidance and marketplace access in one platform',
        'AEGIS-powered spending analysis and financial coaching',
      ],
      impactMetrics: [
        { label: 'Money visibility', value: 'AI-powered insights' },
        { label: 'Decision quality', value: 'Personalized coaching' },
        { label: 'User convenience', value: 'Tracking and marketplace together' },
      ],
      conversion:
        'Stop relying on memory to manage money. Use Hifathi to track and improve.',
      conversionCta: 'Start Using Hifathi',
      gallery: [],
      storyBlocks: [
        {
          title: 'Know What Comes In',
          text: 'Record every income source in one place to see what\'s actually available.',
          image:
            'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'See Where It Goes',
          text: 'Every expense categorized and reviewed for daily habit awareness.',
          image:
            'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'From Awareness to Action',
          text: 'Advice and marketplace access live inside the same platform.',
          image:
            'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1200&q=80',
        },
      ],
      testimonial: {
        quote:
          'Before Hifathi, I only guessed how much I earned and spent. Now I can see and control it.',
        author: 'Early User, Nairobi',
      },
    },
  },
  {
    id: 'mkulima',
    name: 'Mkulima',
    fullName: 'Mkulima Farm Management',
    description:
      'Farm management for produce records, livestock, workers, payroll, and marketplace.',
    url: 'https://mkulima-three.vercel.app',
    marketplaceUrl: 'https://mkulima-three.vercel.app',
    download: {
      android: {
        label: 'Android APK',
        url: toGoogleDriveDownloadUrl(
          'https://drive.google.com/file/d/1It0ZXCkDi_2BToHEK4xX3T1oyJrQaYfX/view?usp=drivesdk',
        ),
      },
    },
    image:
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1000&q=80',
    overview:
      'Mkulima helps farm owners manage produce records, livestock, workers, payroll, and marketplace activity from one system.',
    modules: [
      'Produce records for harvests, inventory, and farm output',
      'Livestock counts, health notes, and output tracking',
      'QR-based care tracking for animals and plants',
      'Worker daily logs, duty assignment, and task follow-up',
      'Payroll tracking for permanent and casual farm workers',
      'Worker education through newsletters and farm updates',
      'Marketplace access for farmers, produce, inputs, and services',
      'AI-powered yield forecasting and livestock health monitoring via AEGIS',
    ],
    audience: [
      'Farm owners',
      'Farm managers',
      'Livestock supervisors',
      'Field team leads',
      'Farm accountants',
    ],
    landing: {
      headline: 'Run Your Farm Records, Workers, and Output From One System',
      subtext:
        'Mkulima manages produce, animals, workers, payroll, and daily care routines. AEGIS adds AI-driven yield predictions, livestock health monitoring, and worker productivity insights.',
      primaryCta: 'Open Mkulima',
      secondaryCta: 'Explore Marketplace',
      capabilities: [
        {
          badge: 'PR',
          title: 'Produce Records',
          text: 'Track harvests, crop output, and farm production history.',
        },
        {
          badge: 'LO',
          title: 'Livestock Output',
          text: 'Monitor animal counts, care notes, milk, eggs, and weight.',
        },
        {
          badge: 'QR',
          title: 'QR Care Tracking',
          text: 'QR codes confirm daily care routines for animals and plants.',
        },
        {
          badge: 'WL',
          title: 'Worker Logs',
          text: 'Record daily attendance, duties, and field activity.',
        },
        {
          badge: 'PY',
          title: 'Payroll Control',
          text: 'Handle permanent and casual worker payroll with clear records.',
        },
        {
          badge: 'MP',
          title: 'Farmer Marketplace',
          text: 'Connect to produce, inputs, services, and farmer-to-farmer trade.',
        },
        {
          badge: 'AI',
          title: 'AEGIS Intelligence',
          text: 'AI-powered yield forecasting, livestock health monitoring, and worker analytics.',
        },
      ],
      highlights: [
        'Track produce, livestock, workers, payroll, and duties from one dashboard',
        'Use QR codes to verify animal and plant care routines',
        'Educate workers through newsletters while connecting to a marketplace',
        'AEGIS-powered yield forecasting and livestock health insights',
      ],
      impactMetrics: [
        { label: 'Farm visibility', value: 'AI-powered analytics' },
        { label: 'Care accountability', value: 'QR-tracked daily routines' },
        { label: 'Payroll clarity', value: 'Work logs tied to pay records' },
      ],
      conversion:
        'Bring your farm records, workers, and market access into one structured platform.',
      conversionCta: 'Start Managing With Mkulima',
      gallery: [],
      storyBlocks: [
        {
          title: 'Produce Records That Stay Usable',
          text: 'Record crop output and harvest movement as work happens.',
          image:
            'https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'Animal Care With QR Accountability',
          text: 'Connect daily care tasks to QR workflows for supervision.',
          image:
            'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'Workers and Payroll in Sync',
          text: 'Daily logs, duties, and payroll live in the same platform.',
          image:
            'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1200&q=80',
        },
      ],
      testimonial: {
        quote:
          'Before Mkulima, records lived in notebooks. Now everything is visible from one place.',
        author: 'Farm Manager, East Africa',
      },
    },
  },
  {
    id: 'pios',
    name: 'PIOS',
    fullName: 'PIOS Political Intelligence & Operations System',
    description:
      'Political analysis and campaign management with AI analytics and GIS mapping.',
    url: 'https://pios-three.vercel.app',
    marketplaceUrl: 'https://pios-three.vercel.app',
    image:
      'https://images.unsplash.com/photo-1541872705-1f73c6400ec9?auto=format&fit=crop&w=1000&q=80',
    overview:
      'PIOS supports campaigns with staff access, data control, media, communication, AI analytics, surveys, IEBC data, and GIS mapping.',
    modules: [
      'Campaign staff login and role-based data control',
      'Media asset management for campaign messaging and publicity',
      'Communication management for supporters, teams, and field networks',
      'AI analytics for voter, ward, and campaign intelligence',
      'Survey creation, response capture, and reporting',
      'IEBC data uploads for GIS political mapping',
      'Candidate visit tracking with people met and follow-up records',
      'Mass communication lists built from visits, surveys, and campaign segments',
      'AEGIS-powered predictive campaign intelligence and sentiment analysis',
    ],
    audience: [
      'Candidates',
      'Campaign managers',
      'Political analysts',
      'Communications teams',
      'Field coordinators',
      'Campaign data officers',
    ],
    landing: {
      headline: 'Turn Campaign Data Into Political Ground Intelligence',
      subtext:
        'PIOS gives campaigns one command center for staff access, media, communication, AI analytics, surveys, IEBC data, GIS maps, and visit follow-up.',
      primaryCta: 'Open PIOS',
      secondaryCta: 'Explore Campaign Intelligence',
      capabilities: [
        {
          badge: 'CI',
          title: 'Campaign Intelligence',
          text: 'Centralize campaign activity, field records, and constituency planning.',
        },
        {
          badge: 'SD',
          title: 'Staff Data Control',
          text: 'Secure login access with permissioned data and accountability.',
        },
        {
          badge: 'MM',
          title: 'Media Management',
          text: 'Manage campaign media, publicity assets, and message coordination.',
        },
        {
          badge: 'CM',
          title: 'Communication',
          text: 'Prepare supporter outreach and staff communication from real records.',
        },
        {
          badge: 'AI',
          title: 'AI Analytics',
          text: 'AI-supported analysis of campaign patterns, surveys, and field signals.',
        },
        {
          badge: 'SV',
          title: 'Survey Operations',
          text: 'Conduct surveys and turn public feedback into campaign intelligence.',
        },
        {
          badge: 'GIS',
          title: 'GIS Political Mapping',
          text: 'Upload IEBC data and generate political maps for area analysis.',
        },
        {
          badge: 'VT',
          title: 'Visit Tracking',
          text: 'Record candidate visits and people met for structured follow-up.',
        },
      ],
      highlights: [
        'Generate GIS political maps from IEBC data uploads',
        'Track candidate visits and record people met for follow-up',
        'Use AI analytics, surveys, media, and staff control in one system',
        'AEGIS-powered voter sentiment analysis and predictive modeling',
      ],
      impactMetrics: [
        { label: 'Ground intelligence', value: 'GIS maps and ward-level visibility' },
        { label: 'Campaign follow-up', value: 'Visits linked to contact records' },
        { label: 'Decision speed', value: 'AI-assisted campaign analysis' },
      ],
      conversion:
        'Bring political analysis, mapping, surveys, and communication into one structured system.',
      conversionCta: 'Open PIOS Campaign Command',
      gallery: [],
      storyBlocks: [
        {
          title: 'From IEBC Data to GIS Maps',
          text: 'Upload IEBC data and convert it into practical political maps.',
          image:
            'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'Visits Become Follow-Up Lists',
          text: 'Every visit recorded and connected to people met for later communication.',
          image:
            'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'AI Analytics for Decisions',
          text: 'Survey results and field updates feed AI-assisted analytics.',
          image:
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        },
      ],
      testimonial: {
        quote:
          'PIOS gives a campaign one place to see the map, the data, and who to contact next.',
        author: 'Campaign Strategy Team',
      },
    },
  },
  {
    id: 'aegis',
    name: 'AEGIS',
    fullName: 'AEGIS AI Governance & Intelligence System',
    description:
      'Central AI platform for identity management, intelligence, and document processing.',
    url: 'https://aegis-one-rust.vercel.app',
    marketplaceUrl: 'https://aegis-one-rust.vercel.app',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80',
    overview:
      'AEGIS is the central AI backbone connecting all House Aurelius products with identity management, intelligence, and orchestration.',
    modules: [
      'Multi-tenant identity management with role-based access control',
      'Conversational AI powered by Ollama with local model inference',
      'Document management with OCR and intelligent summarization',
      'Knowledge base search and retrieval across connected systems',
      'Agent orchestration and workflow automation',
      'Cognitive governance and predictive analytics',
      'Calendar, project, and task management',
      'Cross-application connectivity bridging all House Aurelius platforms',
    ],
    audience: [
      'Enterprise administrators',
      'System architects',
      'AI/ML engineers',
      'Operations teams',
      'Platform integrators',
    ],
    landing: {
      headline: 'The Central Intelligence Hub for Your Ecosystem',
      subtext:
        'AEGIS is the enterprise AI backbone that connects, orchestrates, and secures every House Aurelius application.',
      primaryCta: 'Explore AEGIS',
      secondaryCta: 'View Documentation',
      capabilities: [
        {
          badge: 'ID',
          title: 'Identity & Access',
          text: 'Multi-tenant identity governance with RBAC, SSO, and cross-platform authentication.',
        },
        {
          badge: 'AI',
          title: 'AI Intelligence Engine',
          text: 'Conversational AI, document analysis, and predictive insights.',
        },
        {
          badge: 'DM',
          title: 'Document Processing',
          text: 'OCR, summarization, and intelligent document management.',
        },
        {
          badge: 'OC',
          title: 'Orchestration',
          text: 'Agent workflows, automation pipelines, and real-time synchronization.',
        },
      ],
      highlights: [
        '436 live API endpoints across 34 modules',
        '66 database models with full audit trails',
        'Real-time cross-platform orchestration',
      ],
      impactMetrics: [
        { label: 'API Coverage', value: '436 endpoints' },
        { label: 'Integrations', value: '6+ connected apps' },
        { label: 'Intelligence', value: 'Real-time AI processing' },
      ],
      conversion:
        'Deploy AEGIS to connect, secure, and automate your entire ecosystem.',
      conversionCta: 'Deploy AEGIS',
      gallery: [],
      storyBlocks: [
        {
          title: 'Unified Identity',
          text: 'One identity layer connects staff, systems, and permissions across every app.',
          image:
            'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'AI That Understands Your Business',
          text: 'Contextual intelligence to every workflow without specialized AI expertise.',
          image:
            'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'Secure Orchestration',
          text: 'Every integration flows through audited channels with full traceability.',
          image:
            'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
        },
      ],
      testimonial: {
        quote:
          'AEGIS unified our entire ecosystem under one intelligence layer with complete visibility.',
        author: 'Platform Operations Team',
      },
    },
  },
  {
    id: 'nexus',
    name: 'NEXUS',
    fullName: 'NEXUS IoT Infrastructure',
    description:
      'IoT infrastructure for device pairing, telemetry, and smart device management.',
    url: 'https://nexus.vercel.app',
    marketplaceUrl: 'https://nexus.vercel.app',
    image:
      'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=1000&q=80',
    overview:
      'NEXUS provides production-grade IoT infrastructure for device pairing, telemetry ingestion, and real-time processing.',
    modules: [
      'HTTP telemetry ingestion with validation and enrichment',
      'MQTT topic bridge for tenant and device communication',
      'Real-time WebSocket streams for dashboards and maps',
      'AI-powered anomaly detection and threshold processing',
      'Leak probability estimation and predictive analytics',
      'Device authentication and secure command delivery',
      'Operations UI for monitoring devices, alerts, and infrastructure health',
      'Domain adapters for water, RFID, pressure, and custom telemetry',
      'AEGIS-powered predictive device health and anomaly intelligence',
    ],
    audience: [
      'IoT platform architects',
      'Smart city operators',
      'Water utility engineers',
      'Agriculture technology teams',
      'Industrial telemetry operators',
    ],
    landing: {
      headline: 'Connect Smart Devices to Intelligent Applications',
      subtext:
        'NEXUS provides production-grade IoT infrastructure for device pairing, telemetry, and real-time processing. AEGIS adds predictive maintenance and anomaly detection.',
      primaryCta: 'Explore NEXUS',
      secondaryCta: 'View Architecture',
      capabilities: [
        {
          badge: 'TI',
          title: 'Telemetry Ingestion',
          text: 'HTTP, MQTT, and WebSocket ingestion with validation and routing.',
        },
        {
          badge: 'AD',
          title: 'AI Detection',
          text: 'Anomaly detection, threshold processing, and leak probability estimation.',
        },
        {
          badge: 'RT',
          title: 'Real-Time Streams',
          text: 'WebSocket streams for live dashboards and monitoring.',
        },
        {
          badge: 'DA',
          title: 'Domain Adapters',
          text: 'Pluggable adapters for water, RFID, pressure, GPS, and custom domains.',
        },
        {
          badge: 'AI',
          title: 'AEGIS Intelligence',
          text: 'Predictive device health scoring, anomaly recognition, and cross-device correlation.',
        },
      ],
      highlights: [
        '8 microservice architecture with shared domain logic',
        'Tenant-scoped: APIs, MQTT topics, events, database',
        'AI-powered telemetry processing with anomaly detection',
        'AEGIS-powered predictive device health',
      ],
      impactMetrics: [
        { label: 'Microservices', value: '8 production services' },
        { label: 'Protocols', value: 'HTTP, MQTT, WebSocket' },
        { label: 'AI processing', value: 'Predictive anomaly detection' },
      ],
      conversion:
        'Deploy NEXUS to connect devices, process telemetry, and deliver intelligent insights.',
      conversionCta: 'Deploy NEXUS',
      gallery: [],
      storyBlocks: [
        {
          title: 'Device Pairing at Scale',
          text: 'Pair thousands of devices with secure authentication and auto-configuration.',
          image:
            'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'Raw Telemetry to Insights',
          text: 'AI-powered analysis surfaces anomalies and patterns that need attention.',
          image:
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'Real-Time Visibility',
          text: 'Live WebSocket streams push status and alerts to dashboards.',
          image:
            'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80',
        },
      ],
      testimonial: {
        quote:
          'NEXUS gave us the IoT backbone we needed without building from scratch.',
        author: 'Smart Utility Operations',
      },
    },
  },
  {
    id: 'paymentos',
    name: 'PaymentOS',
    fullName: 'PaymentOS Payment Gateway',
    description:
      'Multi-tenant M-Pesa payment gateway with webhook signing and admin portal.',
    url: 'https://payment-os.vercel.app',
    marketplaceUrl: 'https://payment-os.vercel.app',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80',
    overview:
      'PaymentOS is the central payment layer handling M-Pesa integrations with multi-tenant routing, idempotent payments, and signed webhooks.',
    modules: [
      'Multi-tenant payment routing with per-tenant M-Pesa configuration',
      'Daraja STK Push with automatic Paybill/Till routing',
      'Idempotent payments via unique tenant-invoice constraints',
      'HMAC-signed webhook delivery for payment confirmations',
      'Encrypted storage for Daraja consumer secrets and passkeys',
      'Admin portal for tenant management and revenue tracking',
      'API key validation and platform fee management',
      'Full audit trail for all payment transactions',
      'AI-powered fraud detection and transaction anomaly analysis via AEGIS',
    ],
    audience: [
      'Platform developers',
      'Fintech teams',
      'SaaS product owners',
      'Payment integrators',
      'Financial operations teams',
    ],
    landing: {
      headline: 'One Payment Gateway for Every Application',
      subtext:
        'PaymentOS is the centralized M-Pesa infrastructure powering all House Aurelius products. Apps call one endpoint and receive signed webhooks.',
      primaryCta: 'Explore PaymentOS',
      secondaryCta: 'View API Docs',
      capabilities: [
        {
          badge: 'PT',
          title: 'Payment Routing',
          text: 'Multi-tenant routing with per-tenant Paybill/Till and STK Push.',
        },
        {
          badge: 'SC',
          title: 'Security',
          text: 'HMAC-signed webhooks, encrypted secrets, and full auditing.',
        },
        {
          badge: 'ID',
          title: 'Idempotency',
          text: 'Unique constraints prevent duplicate payments and ensure reconciliation.',
        },
        {
          badge: 'AP',
          title: 'Admin Portal',
          text: 'Tenant management, revenue tracking, and configuration.',
        },
        {
          badge: 'AI',
          title: 'AEGIS Intelligence',
          text: 'AI-powered fraud detection and transaction anomaly scoring.',
        },
      ],
      highlights: [
        'Single endpoint for all M-Pesa STK Push integrations',
        'Platform fee management with automatic reconciliation',
        'Used by Church-Lib, Upesi, and all HA payment flows',
        'AEGIS-powered fraud detection and anomaly analysis',
      ],
      impactMetrics: [
        { label: 'Security', value: 'AI-powered fraud detection' },
        { label: 'Tenant isolation', value: 'Per-tenant credential routing' },
        { label: 'Integration', value: '4+ connected apps' },
      ],
      conversion:
        'Deploy PaymentOS to centralize, secure, and scale your M-Pesa integrations.',
      conversionCta: 'Deploy PaymentOS',
      gallery: [],
      storyBlocks: [
        {
          title: 'One Call, Every Payment',
          text: 'Apps send one API call and receive a signed response—no credentials exposed.',
          image:
            'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'Multi-Tenant Isolation',
          text: 'Each tenant gets their own configuration and webhook routing.',
          image:
            'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'Fully Auditable',
          text: 'Complete payment records with idempotency guarantees.',
          image:
            'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
        },
      ],
      testimonial: {
        quote:
          'PaymentOS unified our entire payment infrastructure. Every app routes through one system.',
        author: 'Platform Engineering Team',
      },
    },
  },
  {
    id: 'upesi',
    name: 'Upesi',
    fullName: 'Upesi Boda Boda Hailing',
    description:
      'Boda boda hailing and dispatch with fraud scoring and real-time tracking.',
    url: 'https://upesi.vercel.app',
    marketplaceUrl: 'https://upesi.vercel.app',
    image:
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=80',
    overview:
      'Upesi handles customer booking, rider management, dispatch, fare calculation, fraud scoring, and real-time tracking for African mobility markets.',
    modules: [
      'Customer booking with route selection and fare estimation',
      'Rider management with onboarding and availability tracking',
      'Intelligent dispatch algorithms with route optimization',
      'Dynamic fare calculation based on distance and demand',
      'Fraud scoring engine for detecting suspicious activity',
      'Payout and settlement system with M-Pesa integration',
      'Real-time rider tracking via Mapbox satellite maps',
      'SMS and communication through Africa\'s Talking',
      'AEGIS-powered demand prediction and dynamic pricing intelligence',
    ],
    audience: [
      'Mobility startups',
      'Transport operators',
      'Boda boda fleet managers',
      'Ride-hailing entrepreneurs',
      'African mobility innovators',
    ],
    landing: {
      headline: 'Hail, Dispatch, and Track Boda Bodas Across Africa',
      subtext:
        'Upesi is a complete boda boda hailing platform for African markets. AEGIS adds demand prediction, dynamic pricing, and fraud prevention.',
      primaryCta: 'Explore Upesi',
      secondaryCta: 'View Demo',
      capabilities: [
        {
          badge: 'BK',
          title: 'Smart Booking',
          text: 'Route selection, fare estimation, and instant rider matching.',
        },
        {
          badge: 'FS',
          title: 'Fraud Scoring',
          text: 'Detects suspicious activity and protects platform integrity.',
        },
        {
          badge: 'RT',
          title: 'Real-Time Tracking',
          text: 'Live rider tracking via Mapbox satellite maps.',
        },
        {
          badge: 'PY',
          title: 'Payout Settlement',
          text: 'Automated rider payouts with M-Pesa integration.',
        },
        {
          badge: 'AI',
          title: 'AEGIS Intelligence',
          text: 'AI-powered demand prediction, dynamic pricing, and fraud prevention.',
        },
      ],
      highlights: [
        'Fraud scoring engine protects platform integrity',
        'PaymentOS integration for cashless M-Pesa payments',
        'Monorepo architecture with web, API, and core engine',
        'AEGIS-powered demand prediction and dynamic pricing',
      ],
      impactMetrics: [
        { label: 'Rider tracking', value: 'Real-time Mapbox maps' },
        { label: 'Payment flow', value: 'AI-optimized pricing' },
        { label: 'Fraud protection', value: 'Intelligent prevention' },
      ],
      conversion:
        'Deploy Upesi to digitize your boda boda operations with smart dispatch and cashless payments.',
      conversionCta: 'Deploy Upesi',
      gallery: [],
      storyBlocks: [
        {
          title: 'One Tap to Book',
          text: 'Enter destination, see fare estimate, confirm—matched in seconds.',
          image:
            'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'Riders See Every Opportunity',
          text: 'Booking requests with route details and navigation maximize earnings.',
          image:
            'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'Operators See Everything',
          text: 'Active rides, locations, earnings, and platform health from one dashboard.',
          image:
            'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80',
        },
      ],
      testimonial: {
        quote:
          'Upesi transformed our operations from phone dispatch to a real-time digital platform.',
        author: 'Mobility Operations Team',
      },
    },
  },
  {
    id: 'maji-os',
    name: 'Maji OS',
    fullName: 'Maji OS Smart Water Utility',
    description:
      'Smart water utility intelligence and non-revenue water recovery platform.',
    url: 'https://maji-os.vercel.app',
    marketplaceUrl: 'https://maji-os.vercel.app',
    image:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=80',
    overview:
      'Maji OS provides tenant-aware water utility management, telemetry ingestion, AI anomaly detection, and NRW recovery for African water companies.',
    modules: [
      'Multi-tenant water utility management with tenant isolation',
      'Telemetry ingestion from smart meters, flow meters, and pressure sensors',
      'AI-powered anomaly detection and leak probability estimation',
      'Minimum night flow analysis and NRW forecasting',
      'Technician dispatch and repair tracking',
      'Revenue recovery with supplied vs. billed consumption analysis',
      'PostGIS spatial queries for utility asset management',
      'React Native mobile app with offline-first architecture',
      'AEGIS-powered leak prediction and demand forecasting intelligence',
    ],
    audience: [
      'Water utility companies',
      'Municipal water authorities',
      'Utility infrastructure operators',
      'Water engineers',
      'Utility management teams',
    ],
    landing: {
      headline: 'Intelligent Water Management for African Utilities',
      subtext:
        'Maji OS brings AI-powered intelligence to water utility operations. AEGIS adds leak prediction, demand forecasting, and infrastructure optimization.',
      primaryCta: 'Explore Maji OS',
      secondaryCta: 'View Architecture',
      capabilities: [
        {
          badge: 'TD',
          title: 'Telemetry & Devices',
          text: 'Ingest data from smart meters, flow sensors, and pressure monitors.',
        },
        {
          badge: 'AI',
          title: 'AI Intelligence',
          text: 'Anomaly detection, leak probability scoring, and predictive analytics.',
        },
        {
          badge: 'NR',
          title: 'NRW Recovery',
          text: 'Track non-revenue water, forecast losses, and measure recovery.',
        },
        {
          badge: 'TD',
          title: 'Technician Dispatch',
          text: 'Dispatch field teams with repair tracking and offline-first mobile.',
        },
        {
          badge: 'AI',
          title: 'AEGIS Intelligence',
          text: 'Leak prediction modeling, demand analysis, and infrastructure health scoring.',
        },
      ],
      highlights: [
        'AI-powered leak detection and anomaly scoring',
        'PostGIS spatial queries for asset management',
        'NEXUS IoT integration for real-time telemetry',
        'AEGIS-powered leak prediction and demand forecasting',
      ],
      impactMetrics: [
        { label: 'NRW recovery', value: 'AI-powered forecasting' },
        { label: 'Leak detection', value: 'Predictive modeling' },
        { label: 'Spatial assets', value: 'PostGIS-powered queries' },
      ],
      conversion:
        'Deploy Maji OS to bring AI-powered intelligence to your water utility.',
      conversionCta: 'Deploy Maji OS',
      gallery: [],
      storyBlocks: [
        {
          title: 'Smart Meters, Smarter Insights',
          text: 'Telemetry flows through NEXUS where AI analyzes patterns and surfaces anomalies.',
          image:
            'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'From Detection to Dispatch',
          text: 'Anomaly detected, leak scored, technicians dispatched automatically.',
          image:
            'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'Revenue Recovery Dashboard',
          text: 'Track supplied volume, billed consumption, and recovered revenue in real time.',
          image:
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        },
      ],
      testimonial: {
        quote:
          'Maji OS gave us visibility into our network we never had. The AI detected leaks we would have missed.',
        author: 'Water Utility Operations',
      },
    },
  },
]

export const publicStats = [
  { label: 'Platforms Connected', value: '12' },
  {
    label: 'Business Verticals',
    value:
      'Education, POS, Real Estate, Church, Personal Finance, Agriculture, Political Analytics, IoT Infrastructure, Payments, Mobility, Water Utilities, AI Governance',
  },
  { label: 'Public Data Policy', value: 'Aggregated metrics only' },
]

export const teamMembers = [
  {
    name: 'Kelvin Aurelius',
    role: 'Founder / Director',
    bio: 'Leads strategy and platform direction across all House Aurelius products.',
    image: '/images/Kelvin-aurelius.jpg',
  },
]
