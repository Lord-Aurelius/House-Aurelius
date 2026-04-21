import { toGoogleDriveDownloadUrl } from '../utils/googleDrive'

export const heroImage =
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1400&q=80'

export const platformApps = [
  {
    id: 'haes',
    name: 'HAES',
    fullName: 'House Aurelius Education System',
    description:
      'Complete school platform for student registration, academics, and financial records.',
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
      'HAES is an end-to-end school operations system for African schools, centralizing admissions, academics, finance, and reporting in one workflow.',
    modules: [
      'Student registration and enrollment lifecycle',
      'Class setup, subjects, grading, and academic records',
      'Fee setup, billing, receipts, and balance tracking',
      'Parent/guardian communication and progress visibility',
      'Administrative and financial summary reporting',
    ],
    audience: ['School owners', 'Administrators', 'Teachers', 'Bursars'],
    landing: {
      headline: 'Run Your Entire School From One System',
      subtext:
        'HAES centralizes student registration, academics, and financial records into a single, controlled platform for African institutions. No fragmentation. No blind spots. Full operational visibility.',
      primaryCta: 'Get Started',
      secondaryCta: 'Request Demo',
      valueBlock:
        'HAES eliminates scattered tools and manual processes. Every student, every record, every transaction-tracked, structured, and accessible in real time.',
      capabilities: [
        {
          badge: 'SM',
          title: 'Student Management',
          text: 'Register, update, and control student data from a single interface across nursery, primary, and secondary levels.',
        },
        {
          badge: 'AT',
          title: 'Academic Tracking',
          text: 'Monitor performance, grades, and progression with precision for teachers, heads of department, and school leaders.',
        },
        {
          badge: 'FC',
          title: 'Financial Control',
          text: 'Track fees, payments, and balances with full transparency for bursars and school finance offices.',
        },
      ],
      authority:
        'Built for institutions that require discipline in their systems. HAES enforces structure, reduces administrative load, and exposes the data needed to make decisions without delay.',
      highlights: [
        'One record per student from admission to graduation',
        'Teacher-friendly grade capture and academic oversight',
        'Bursar-ready finance workflows with instant visibility',
      ],
      impactMetrics: [
        { label: 'Admin turnaround', value: 'Faster daily operations' },
        { label: 'Record accuracy', value: 'Single source of truth' },
        { label: 'Decision speed', value: 'Real-time reporting access' },
      ],
      testimonial: {
        quote:
          'Before HAES, we worked from separate sheets and delayed reports. Now our teachers, admins, and finance office run from one reliable system.',
        author: 'School Operations Team',
      },
      conversion:
        'Stop operating in fragments. Move your institution into a system designed for control and scale.',
      conversionCta: 'Deploy HAES in Your School',
      gallery: [],
      storyBlocks: [
        {
          title: 'Classroom to Office Continuity',
          text: 'Teachers capture academic records while administrators monitor progress centrally, so learning data and school operations stay connected.',
          image:
            'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'Campus-Wide Visibility',
          text: 'From admissions desks to departmental heads, every authorized role works from the same system with clear accountability.',
          image:
            'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'Finance Discipline for School Growth',
          text: 'Bursary workflows, fee tracking, and reporting come together in one place for better planning and confident decision-making.',
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
      'POS for African beauty shops, salons, and spas, with sales, expenses, payroll, and customer management.',
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
      'HAPOS is a point-of-sale platform tailored for African beauty shops, salons, and spas, built for daily operations, customer relationships, and financial control.',
    modules: [
      'Sales and invoicing workflow for salon and spa services',
      'Expense recording and operating-cost visibility',
      'Payroll preparation and payout tracking',
      'Customer profiles, treatment history, and repeat-visit tracking',
      'Business performance snapshots and operational summaries',
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
        'HAPOS is built for barbershops, salons, and spas—managing appointments, services, inventory, and payments in one system. Keep operations tight. Keep revenue visible.',
      primaryCta: 'Get Started',
      secondaryCta: 'Request Demo',
      valueBlock:
        'HAPOS replaces appointment books, manual records, and scattered payment tracking. Every client, every service, every transaction—organized and accessible in real time.',
      capabilities: [
        {
          badge: 'AC',
          title: 'Appointment & Client Management',
          text: 'Schedule bookings, track client history, and manage walk-ins without confusion.',
        },
        {
          badge: 'SS',
          title: 'Service & Sales Processing',
          text: 'Handle service charges and product sales in a single, fast checkout flow.',
        },
        {
          badge: 'IC',
          title: 'Inventory Control',
          text: 'Track products, usage, and restocking to avoid shortages and leakage.',
        },
        {
          badge: 'FV',
          title: 'Financial Visibility',
          text: 'Monitor daily earnings, staff performance, and cash flow with precision.',
        },
      ],
      authority:
        'Built for high-traffic service environments. HAPOS enforces structure at the front desk, reduces missed bookings, and keeps revenue tracking exact.',
      highlights: [
        'Manage 50+ clients a day without losing track',
        'Instant view of daily earnings and top-performing services',
        'Real-time sales dashboard with staff performance breakdown',
      ],
      impactMetrics: [
        { label: 'Client throughput', value: 'Manage 50+ per day' },
        { label: 'Revenue clarity', value: 'Daily earnings, live' },
        { label: 'Booking control', value: 'Zero missed appointments' },
      ],
      conversion:
        'Stop relying on memory and paper. Run your shop on a system designed for speed, accuracy, and control.',
      conversionCta: 'Deploy HAPOS in Your Shop',
      gallery: [],
      storyBlocks: [
        {
          title: 'Front Desk, Under Control',
          text: 'Receptionists handle walk-ins, bookings, and payments from a single screen—no double-booking, no lost records, no delays.',
          image:
            'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'Every Service, Every Sale Tracked',
          text: 'From a haircut to a product sale, HAPOS captures every transaction. At the end of the day, your revenue report is ready—no manual tallying needed.',
          image:
            'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'Stock Levels That Don\'t Surprise You',
          text: 'Know what products are running low before they run out. HAPOS ties inventory directly to sales so restocking is proactive, not reactive.',
          image:
            'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
        },
      ],
      testimonial: {
        quote:
          'Before HAPOS, we tracked bookings in a notebook and counted cash at the end of the day with no real record. Now every service, every product, every payment is logged. We actually know what our shop earns each day.',
        author: 'Salon Owner, Lagos',
      },
    },
  },
  {
    id: 'hare',
    name: 'HARE',
    fullName: 'House Aurelius Real Estate',
    description:
      'Real estate platform for tenant registration, collections, expenses, and management.',
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
      'HARE manages property operations from tenant onboarding to payment collections, expenses, and occupancy visibility.',
    modules: [
      'Tenant registration and lease-profile management',
      'Rent billing, payment collection, and arrears tracking',
      'Property and maintenance expense recording',
      'Unit occupancy and tenancy status monitoring',
      'Owner-ready financial and operational reports',
    ],
    audience: ['Property managers', 'Landlords', 'Facility accountants', 'Leasing officers'],
    landing: {
      headline: 'One System for Complete Property Control',
      subtext:
        'HARE is a real estate management platform that unifies tenant registration, rent collection, communication, and property tracking. From onboarding to payments, everything is structured, traceable, and accessible in real time.',
      primaryCta: 'Get Started',
      secondaryCta: 'Request Demo',
      valueBlock:
        'HARE removes fragmented property management processes. Tenant records, rent status, and landlord communication are centralized in one system—reducing delays, disputes, and missing data.',
      capabilities: [
        {
          badge: 'TR',
          title: 'Tenant Registration & Management',
          text: 'Register tenants with structured profiles linked to each unit and property.',
        },
        {
          badge: 'RC',
          title: 'Rent Collection & Tracking',
          text: 'Monitor payments, arrears, and receipts with real-time financial visibility.',
        },
        {
          badge: 'TL',
          title: 'Tenant–Landlord Communication',
          text: 'Direct messaging system for notices, updates, and issue resolution.',
        },
        {
          badge: 'QR',
          title: 'QR-Based Verification System',
          text: 'Use QR codes for tenant check-in, registration confirmation, and payment validation at the property level.',
        },
        {
          badge: 'MP',
          title: 'Marketplace Integration',
          text: 'List and discover properties, vacancies, and rental opportunities within a built-in marketplace.',
        },
      ],
      authority:
        'Built for structured property ecosystems. HARE enforces accountability between tenants and landlords, reduces administrative friction, and creates a transparent rental flow from listing to occupancy.',
      highlights: [
        'Track every tenant and payment without spreadsheets',
        'Instant arrears visibility across all units',
        'QR-based verification for every registered tenant',
      ],
      impactMetrics: [
        { label: 'Tenant visibility', value: 'Every unit, every status' },
        { label: 'Arrears tracking', value: 'Instant across all units' },
        { label: 'Admin overhead', value: 'Reduced to zero manual work' },
      ],
      conversion:
        'Eliminate manual tracking and disconnected records. Manage your entire property portfolio through a single controlled system.',
      conversionCta: 'Deploy HARE for Your Properties',
      gallery: [],
      storyBlocks: [
        {
          title: 'Tenant Onboarding Without the Paperwork',
          text: 'Register tenants digitally, link them to specific units, and generate QR verification—all in minutes. Every record is searchable and always up to date.',
          image:
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'Rent Collection, Tracked to the Day',
          text: 'Know who has paid, who is overdue, and by how much—across every property you manage. HARE gives landlords a real-time rent ledger with no manual tallying.',
          image:
            'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'Happy Tenants, Smooth Operations',
          text: 'When tenants can communicate issues directly and landlords respond through the platform, disputes resolve faster and occupancy stays high.',
          image:
            'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
        },
      ],
      testimonial: {
        quote:
          'Managing 12 units across two properties used to mean chasing tenants by phone and writing receipts by hand. HARE changed that completely. I can see who has paid, who owes, and what each unit looks like—all from one screen.',
        author: 'Property Manager, Accra',
      },
    },
  },
  {
    id: 'church-lib',
    name: 'Church-lib',
    fullName: 'Church-lib',
    description:
      'Church operations for newsletters, member registration, tithes, offerings, and media.',
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
      'Church-lib supports church administration by combining membership records, giving workflows, communication, and media organization.',
    modules: [
      'Member and family registration records',
      'Tithes and offerings tracking with safe summaries',
      'Newsletter publishing and church announcements',
      'Service media library and content organization',
      'Administrative oversight for church leadership',
    ],
    audience: ['Church administrators', 'Finance teams', 'Pastoral staff', 'Media teams'],
    landing: {
      headline: 'One System for a Fully Connected Church',
      subtext:
        'Church-Lib centralizes church operations into a single platform—member registration, attendance tracking, communication, media, and administration. Structured, transparent, and easy to manage.',
      primaryCta: 'Get Started',
      secondaryCta: 'Request Demo',
      valueBlock:
        'Church-Lib replaces fragmented church records and manual processes. Membership, attendance, announcements, and internal coordination are unified in one controlled system.',
      capabilities: [
        {
          badge: 'MR',
          title: 'Member Registration & Management',
          text: 'Collect and maintain structured member profiles for complete congregation visibility.',
        },
        {
          badge: 'QR',
          title: 'QR Attendance System',
          text: 'Record attendance quickly and accurately using QR-based check-ins.',
        },
        {
          badge: 'MA',
          title: 'Media Access',
          text: 'Share sermons, teachings, and church content directly within the platform.',
        },
        {
          badge: 'NA',
          title: 'Church News & Activities',
          text: 'Distribute announcements, events, and updates in real time.',
        },
        {
          badge: 'SL',
          title: 'Staff Daily Logs',
          text: 'Track staff activity, duties, and operational updates for accountability.',
        },
        {
          badge: 'MP',
          title: 'Marketplace Integration',
          text: 'Enable a shared marketplace for church-related goods, services, and community exchange.',
        },
      ],
      authority:
        'Built for structured ministry operations. Church-Lib improves coordination, strengthens communication, and ensures every aspect of church management is documented and accessible.',
      highlights: [
        'Full congregation visibility from a single member registry',
        'QR-based attendance that replaces paper sign-in sheets',
        'Sermons, media, and announcements in one accessible platform',
      ],
      impactMetrics: [
        { label: 'Member records', value: 'Structured & searchable' },
        { label: 'Attendance capture', value: 'QR check-in, instant' },
        { label: 'Communication', value: 'Real-time announcements' },
      ],
      conversion:
        'Move from manual records to a unified church system designed for clarity, accountability, and growth.',
      conversionCta: 'Deploy Church-Lib for Your Ministry',
      gallery: [],
      storyBlocks: [
        {
          title: 'Every Member, Properly Registered',
          text: 'Build a structured record for every congregation member—names, family units, contact details, and history—so your church always knows who it serves.',
          image:
            'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'Attendance Without the Clipboard',
          text: 'Members check in via QR code on their phone. Attendance is captured instantly—no paper, no manual entry, no missing records.',
          image:
            'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'Sermons and Media, Always Accessible',
          text: 'Upload and share service recordings, teaching series, and church media through the platform—so no member misses what matters.',
          image:
            'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80',
        },
      ],
      testimonial: {
        quote:
          'We had member records in three different places—a register, a WhatsApp group, and the finance team\'s notebook. Church-Lib brought it all into one system. Our pastors, admin, and media team now work from the same platform without confusion.',
        author: 'Church Administrator, Nairobi',
      },
    },
  },
  {
    id: 'hifathi',
    name: 'Hifathi',
    fullName: 'Hifathi Personal Finance',
    description:
      'Personal finance platform for tracking income, expenses, money advice, and marketplace access.',
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
      'Hifathi gives individuals and households one place to track income, control expenses, receive practical money guidance, and participate in a marketplace built into the platform.',
    modules: [
      'Income tracking across salary, business, and side-hustle streams',
      'Expense recording with category-level visibility and history',
      'Money-management advice based on financial activity patterns',
      'Budget awareness and spending summaries for day-to-day decisions',
      'Built-in marketplace access for discovering and offering useful products and services',
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
        'Hifathi is a personal finance platform that helps users record what comes in, track what goes out, and receive practical advice for managing money with clarity. It keeps daily finances visible and usable.',
      primaryCta: 'Open Hifathi',
      secondaryCta: 'Explore Marketplace',
      valueBlock:
        'Hifathi replaces guesswork and scattered notes with one clear system for income tracking, expense control, and better money decisions. Users can understand their financial position quickly and act with confidence.',
      capabilities: [
        {
          badge: 'IT',
          title: 'Income Tracking',
          text: 'Capture salary, business revenue, casual earnings, and other inflows in one organized view.',
        },
        {
          badge: 'EX',
          title: 'Expense Management',
          text: 'Track spending by category so users can see where money goes and where pressure is building.',
        },
        {
          badge: 'FA',
          title: 'Financial Advice',
          text: 'Offer users practical guidance on how to manage income, spending discipline, and everyday choices.',
        },
        {
          badge: 'BD',
          title: 'Budget Visibility',
          text: 'Give a working picture of financial movement so users can plan better from week to week.',
        },
        {
          badge: 'MP',
          title: 'Marketplace Access',
          text: 'Connect users to a marketplace experience within the platform for useful goods and services.',
        },
      ],
      authority:
        'Built for users who need discipline in personal finance without complexity. Hifathi helps people see patterns, control habits, and make better financial decisions from one connected system.',
      highlights: [
        'Track income and expenses without spreadsheets',
        'See spending pressure before it becomes a problem',
        'Get practical guidance and marketplace access in one platform',
      ],
      impactMetrics: [
        { label: 'Money visibility', value: 'Daily income and expense clarity' },
        { label: 'Decision quality', value: 'Advice tied to financial activity' },
        { label: 'User convenience', value: 'Tracking and marketplace together' },
      ],
      conversion:
        'Stop relying on memory to manage money. Use Hifathi to track movement, improve habits, and make better financial decisions with confidence.',
      conversionCta: 'Start Using Hifathi',
      gallery: [],
      storyBlocks: [
        {
          title: 'Know What Comes In',
          text: 'Users can record every income source in one place, making it easier to see how much money is actually available across the month.',
          image:
            'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'See Where It Goes',
          text: 'Every expense can be categorized and reviewed, helping users understand daily habits and identify avoidable spending quickly.',
          image:
            'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'Turn Tracking Into Better Decisions',
          text: 'Because advice and marketplace access live inside the same platform, users can move from awareness to action without leaving the system.',
          image:
            'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1200&q=80',
        },
      ],
      testimonial: {
        quote:
          'Before Hifathi, I only guessed how much I earned and spent each week. Now I can see my income, control my expenses, and make better decisions before money disappears.',
        author: 'Early User, Nairobi',
      },
    },
  },
]

export const publicStats = [
  { label: 'Platforms Connected', value: '5' },
  { label: 'Business Verticals', value: 'Education, POS, Real Estate, Church, Personal Finance' },
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
