import { toGoogleDriveDownloadUrl } from '../utils/googleDrive'

export const heroImage =
  'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1400&q=80'

export const platformApps = [
  {
    id: 'haes',
    name: 'HAES',
    fullName: 'House Aurelius Education System',
    description:
      'Complete school platform for student registration, academics, and financial records. Powered by AEGIS.',
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
      'HAES is an end-to-end school operations system for African schools, centralizing admissions, academics, finance, and reporting in one workflow. Powered by AEGIS, the central AI backbone that connects all House Aurelius platforms with intelligent automation, document processing, and cross-system analytics.',
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
        'HAES centralizes student registration, academics, and financial records into a single, controlled platform for African institutions. Powered by AEGIS, the school gains AI-driven academic insights, automated reporting, and intelligent alerts—turning raw data into actionable decisions for school leaders.',
      primaryCta: 'Get Started',
      secondaryCta: 'Request Demo',
      valueBlock:
        'HAES eliminates scattered tools and manual processes. Every student, every record, every transaction—tracked, structured, and accessible in real time. AEGIS intelligence layer adds predictive analytics for student performance, automated fee reminders, and smart document processing across the entire school.',
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
        {
          badge: 'AI',
          title: 'AEGIS Intelligence',
          text: 'AI-powered academic insights, automated report generation, and predictive alerts that help school leaders make faster, data-driven decisions.',
        },
      ],
      authority:
        'Built for institutions that require discipline in their systems. HAES enforces structure, reduces administrative load, and exposes the data needed to make decisions without delay. AEGIS integration means every report, alert, and document flows through a unified intelligence layer—giving school administrators AI-powered visibility they never had before.',
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
      'POS for African beauty shops, salons, and spas, with sales, expenses, payroll, and customer management. Powered by AEGIS.',
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
      'HAPOS is a point-of-sale platform tailored for African beauty shops, salons, and spas, built for daily operations, customer relationships, and financial control. Powered by AEGIS, it delivers AI-driven sales analytics, customer behavior insights, and intelligent inventory forecasting.',
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
        'HAPOS is built for barbershops, salons, and spas—managing appointments, services, inventory, and payments in one system. Powered by AEGIS, the platform surfaces AI-driven insights on peak hours, top services, customer retention patterns, and revenue forecasting.',
      primaryCta: 'Get Started',
      secondaryCta: 'Request Demo',
      valueBlock:
        'HAPOS replaces appointment books, manual records, and scattered payment tracking. Every client, every service, every transaction—organized and accessible in real time. AEGIS intelligence layer transforms raw sales data into actionable business insights: which services drive revenue, when peak hours hit, and which customers are due for a return visit.',
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
        {
          badge: 'AI',
          title: 'AEGIS Intelligence',
          text: 'AI-powered sales forecasting, customer retention scoring, and peak-hour analytics that help salon owners optimize pricing, staffing, and inventory.',
        },
      ],
      authority:
        'Built for high-traffic service environments. HAPOS enforces structure at the front desk, reduces missed bookings, and keeps revenue tracking exact. AEGIS integration turns every transaction into intelligence—predicting demand, identifying loyal customers, and surfacing revenue opportunities before they slip away.',
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
      'Real estate platform for tenant registration, collections, expenses, and management. Powered by AEGIS.',
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
      'HARE manages property operations from tenant onboarding to payment collections, expenses, and occupancy visibility. Powered by AEGIS, it delivers AI-driven occupancy forecasting, tenant risk scoring, and intelligent lease management across entire property portfolios.',
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
        'HARE is a real estate management platform that unifies tenant registration, rent collection, communication, and property tracking. Powered by AEGIS, landlords gain AI-driven insights on tenant risk, lease renewal predictions, and occupancy optimization—turning property data into smarter decisions.',
      primaryCta: 'Get Started',
      secondaryCta: 'Request Demo',
      valueBlock:
        'HARE removes fragmented property management processes. Tenant records, rent status, and landlord communication are centralized in one system. AEGIS intelligence layer adds predictive lease analytics, automated arrears alerts, and tenant risk scoring—helping landlords reduce vacancies and collect rent faster.',
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
        {
          badge: 'AI',
          title: 'AEGIS Intelligence',
          text: 'AI-powered tenant risk scoring, lease renewal prediction, and occupancy optimization that help landlords maximize rental income and reduce vacancies.',
        },
      ],
      authority:
        'Built for structured property ecosystems. HARE enforces accountability between tenants and landlords, reduces administrative friction, and creates a transparent rental flow from listing to occupancy. AEGIS integration means every tenant, every payment, and every lease feeds into predictive analytics—helping landlords make smarter, faster property decisions.',
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
      'Church operations for newsletters, member registration, tithes, offerings, and media. Powered by AEGIS.',
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
      'Church-lib supports church administration by combining membership records, giving workflows, communication, and media organization. Powered by AEGIS, it delivers AI-driven member engagement insights, sermon content management, and intelligent giving analytics.',
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
        'Church-Lib centralizes church operations into a single platform—member registration, attendance tracking, communication, media, and administration. Powered by AEGIS, church leaders gain AI-driven insights on member engagement, giving patterns, and community health—turning operational data into stronger ministry decisions.',
      primaryCta: 'Get Started',
      secondaryCta: 'Request Demo',
      valueBlock:
        'Church-Lib replaces fragmented church records and manual processes. Membership, attendance, announcements, and internal coordination are unified in one controlled system. AEGIS intelligence layer adds member engagement scoring, giving trend analysis, and automated sermon content tagging—helping pastors and administrators serve their congregation more effectively.',
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
        {
          badge: 'AI',
          title: 'AEGIS Intelligence',
          text: 'AI-powered member engagement scoring, giving pattern analysis, and sermon content management that help church leaders understand and serve their congregation better.',
        },
      ],
      authority:
        'Built for structured ministry operations. Church-Lib improves coordination, strengthens communication, and ensures every aspect of church management is documented and accessible. AEGIS integration means member patterns, giving trends, and community health metrics flow through a unified intelligence layer—giving pastors and administrators data-driven clarity.',
      highlights: [
        'Full congregation visibility from a single member registry',
        'QR-based attendance that replaces paper sign-in sheets',
        'Sermons, media, and announcements in one accessible platform',
        'AEGIS-powered member engagement and giving analytics',
      ],
      impactMetrics: [
        { label: 'Member records', value: 'Structured & searchable' },
        { label: 'Attendance capture', value: 'QR check-in, instant' },
        { label: 'Communication', value: 'Real-time announcements' },
        { label: 'AI insights', value: 'Member engagement scoring' },
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
      'Personal finance platform for tracking income, expenses, money advice, and marketplace access. Powered by AEGIS.',
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
      'Hifathi gives individuals and households one place to track income, control expenses, receive practical money guidance, and participate in a marketplace built into the platform. Powered by AEGIS, it delivers AI-driven spending insights, personalized financial advice, and predictive budget alerts.',
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
        'Hifathi is a personal finance platform that helps users record what comes in, track what goes out, and receive practical advice for managing money with clarity. Powered by AEGIS, users get AI-driven spending analysis, personalized financial coaching, and predictive budget alerts—turning everyday transactions into smarter money decisions.',
      primaryCta: 'Open Hifathi',
      secondaryCta: 'Explore Marketplace',
      valueBlock:
        'Hifathi replaces guesswork and scattered notes with one clear system for income tracking, expense control, and better money decisions. AEGIS intelligence layer analyzes spending patterns, identifies savings opportunities, and delivers personalized coaching—helping users build financial discipline without complexity.',
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
        {
          badge: 'AI',
          title: 'AEGIS Intelligence',
          text: 'AI-powered spending pattern analysis, savings opportunity detection, and personalized financial coaching that helps users build better money habits.',
        },
      ],
      authority:
        'Built for users who need discipline in personal finance without complexity. Hifathi helps people see patterns, control habits, and make better financial decisions from one connected system. AEGIS integration means every transaction feeds into personalized AI coaching—turning raw spending data into actionable financial guidance.',
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
  {
    id: 'mkulima',
    name: 'Mkulima',
    fullName: 'Mkulima Farm Management',
    description:
      'Farm management platform for produce records, livestock output, worker logs, payroll, QR care tracking, newsletters, duties, and farmer marketplace access. Powered by AEGIS.',
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
      'Mkulima helps farm owners and managers run produce records, livestock tracking, worker logs, payroll, duty assignment, QR-based care routines, newsletters, and farmer marketplace activity from one connected system. Powered by AEGIS, it delivers AI-driven crop yield predictions, livestock health insights, and worker productivity analytics.',
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
        'Mkulima is built for farm owners and managers who need clear control over produce, animals, workers, payroll, duties, and daily care routines. Powered by AEGIS, the platform gains AI-driven crop yield predictions, livestock health monitoring, and worker productivity insights—turning farm data into smarter agricultural decisions.',
      primaryCta: 'Open Mkulima',
      secondaryCta: 'Explore Marketplace',
      valueBlock:
        'Mkulima replaces farm notebooks, scattered spreadsheets, and verbal follow-ups with one operating system for the farm. AEGIS intelligence layer analyzes produce patterns, predicts yield trends, monitors livestock health indicators, and surfaces worker efficiency insights—helping farm owners optimize output and reduce waste.',
      capabilities: [
        {
          badge: 'PR',
          title: 'Produce Records',
          text: 'Track harvests, crop output, stock movement, and farm production history in one organized place.',
        },
        {
          badge: 'LO',
          title: 'Livestock Output',
          text: 'Monitor animal counts, care notes, milk, eggs, weight, and other farm output tied to each livestock group.',
        },
        {
          badge: 'QR',
          title: 'QR Care Tracking',
          text: 'Use QR codes to confirm daily care routines for animals and plants, creating accountability across the farm.',
        },
        {
          badge: 'WL',
          title: 'Worker Logs',
          text: 'Record daily worker attendance, assigned duties, completed work, and field activity without paper registers.',
        },
        {
          badge: 'PY',
          title: 'Payroll Control',
          text: 'Handle permanent and casual worker payroll with clearer records of days worked, duties completed, and pay due.',
        },
        {
          badge: 'MP',
          title: 'Farmer Marketplace',
          text: 'Connect farm owners and managers to a marketplace for produce, inputs, services, and farmer-to-farmer trade.',
        },
        {
          badge: 'AI',
          title: 'AEGIS Intelligence',
          text: 'AI-powered crop yield forecasting, livestock health monitoring, and worker productivity analytics that help farm owners optimize operations and maximize output.',
        },
      ],
      authority:
        'Built for farms where daily discipline matters. Mkulima gives owners and managers traceability across people, crops, animals, money, and market activity without slowing down field work. AEGIS integration means every harvest, every animal, every worker action feeds into predictive analytics—helping farmers anticipate yield, prevent livestock issues, and optimize labor.',
      highlights: [
        'Track produce, livestock, workers, payroll, and duties from one dashboard',
        'Use QR codes to verify animal and plant care routines',
        'Educate workers through newsletters while connecting farmers to a marketplace',
        'AEGIS-powered yield forecasting and livestock health insights',
      ],
      impactMetrics: [
        { label: 'Farm visibility', value: 'AI-powered analytics' },
        { label: 'Care accountability', value: 'QR-tracked daily routines' },
        { label: 'Payroll clarity', value: 'Work logs tied to pay records' },
      ],
      conversion:
        'Stop running farm operations from memory, notebooks, and disconnected chats. Bring your farm records, workers, care routines, and market access into one structured platform.',
      conversionCta: 'Start Managing With Mkulima',
      gallery: [],
      storyBlocks: [
        {
          title: 'Produce Records That Stay Usable',
          text: 'Farm managers can record crop output, harvest movement, and produce history as work happens, giving owners a clearer picture of what the farm is producing.',
          image:
            'https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'Animal Care With QR Accountability',
          text: 'Each daily care task can be connected to a QR-based workflow, helping supervisors confirm that animals and plants received the right attention at the right time.',
          image:
            'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'Workers, Payroll, and Duties in Sync',
          text: 'Daily logs, assigned duties, payroll records, and worker newsletters live in the same platform so field teams stay coordinated and owners can review operations quickly.',
          image:
            'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1200&q=80',
        },
      ],
      testimonial: {
        quote:
          'Before Mkulima, farm records lived in notebooks and worker updates came through calls. Now produce, animals, duties, and payroll are visible from one place.',
        author: 'Farm Manager, East Africa',
      },
    },
  },
  {
    id: 'pios',
    name: 'PIOS',
    fullName: 'PIOS Political Intelligence & Operations System',
    description:
      'Political analysis and campaign-management platform for staff data control, media, communications, AI analytics, surveys, IEBC data uploads, GIS political maps, and candidate visit tracking. Powered by AEGIS.',
    url: 'https://pios-three.vercel.app',
    marketplaceUrl: 'https://pios-three.vercel.app',
    image:
      'https://images.unsplash.com/photo-1541872705-1f73c6400ec9?auto=format&fit=crop&w=1000&q=80',
    overview:
      'PIOS supports campaign teams with secure staff access, political data control, media and communication workflows, AI analytics, surveys, IEBC data imports, GIS political mapping, candidate visit records, and targeted mass communication follow-up. Powered by AEGIS, it delivers advanced AI-driven voter sentiment analysis, predictive campaign intelligence, and automated field reporting.',
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
        'PIOS gives campaign teams one command center for staff access, media, communication, AI analytics, surveys, IEBC data uploads, GIS political maps, and candidate visit follow-up. Powered by AEGIS, the platform delivers advanced AI-driven voter sentiment analysis, predictive campaign modeling, and automated field intelligence—turning raw campaign data into winning strategies.',
      primaryCta: 'Open PIOS',
      secondaryCta: 'Explore Campaign Intelligence',
      valueBlock:
        'PIOS replaces scattered campaign files, disconnected field notes, and delayed political reports with a controlled operating system for campaign intelligence. AEGIS intelligence layer analyzes voter sentiment patterns, predicts campaign outcomes, and automates field reporting—helping campaign teams move faster and make smarter decisions.',
      capabilities: [
        {
          badge: 'CI',
          title: 'Campaign Intelligence',
          text: 'Centralize campaign activity, field records, political insights, and constituency-level planning in one operating view.',
        },
        {
          badge: 'SD',
          title: 'Staff Data Control',
          text: 'Give staff secure login access while keeping campaign data organized, permissioned, and accountable.',
        },
        {
          badge: 'MM',
          title: 'Media Management',
          text: 'Manage campaign media, publicity assets, communication material, and message coordination from one workspace.',
        },
        {
          badge: 'CM',
          title: 'Communication Management',
          text: 'Prepare supporter outreach, staff communication, and later mass messaging based on real campaign records.',
        },
        {
          badge: 'AI',
          title: 'AI Analytics',
          text: 'Use AI-supported analysis to interpret campaign patterns, survey results, field signals, and political opportunities.',
        },
        {
          badge: 'SV',
          title: 'Survey Operations',
          text: 'Conduct surveys, capture responses, and turn public feedback into practical campaign intelligence.',
        },
        {
          badge: 'GIS',
          title: 'GIS Political Mapping',
          text: 'Upload IEBC data and generate GIS political maps for area analysis, planning, and ground coordination.',
        },
        {
          badge: 'VT',
          title: 'Candidate Visit Tracking',
          text: 'Mark candidate visits, record people met, and preserve those contacts for structured follow-up communication.',
        },
      ],
      authority:
        'Built for campaigns that need discipline, speed, and traceability. PIOS connects political data, field movement, communication, media, and AI analysis so teams can move from information to action without losing control. AEGIS integration means every survey, every visit, every field report feeds into predictive modeling—giving campaign teams AI-powered intelligence they never had before.',
      highlights: [
        'Generate GIS political maps from IEBC data uploads',
        'Track candidate visits and record people met for later communication',
        'Use AI analytics, surveys, media, and staff control in one campaign system',
        'AEGIS-powered voter sentiment analysis and predictive campaign modeling',
      ],
      impactMetrics: [
        { label: 'Ground intelligence', value: 'GIS maps and ward-level visibility' },
        { label: 'Campaign follow-up', value: 'Visits linked to contact records' },
        { label: 'Decision speed', value: 'AI-assisted campaign analysis' },
      ],
      conversion:
        'Stop managing campaigns from disconnected chats, spreadsheets, and memory. Bring political analysis, mapping, surveys, visits, media, and communication into one structured system.',
      conversionCta: 'Open PIOS Campaign Command',
      gallery: [],
      storyBlocks: [
        {
          title: 'From IEBC Data to GIS Political Maps',
          text: 'Campaign teams can upload IEBC data and convert it into practical political maps for area analysis, constituency planning, and ground strategy.',
          image:
            'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'Candidate Visits Become Follow-Up Lists',
          text: 'Every candidate visit can be marked, recorded, and connected to the people met, making later communication more structured and more targeted.',
          image:
            'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'AI Analytics for Campaign Decisions',
          text: 'Survey results, field updates, media activity, and campaign records can feed AI-assisted analytics so teams can understand patterns before acting.',
          image:
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        },
      ],
      testimonial: {
        quote:
          'PIOS gives a campaign team one place to see the map, the data, the candidate movement, and the people to contact next.',
        author: 'Campaign Strategy Team',
      },
    },
  },
  {
    id: 'aegis',
    name: 'AEGIS',
    fullName: 'AEGIS AI Governance & Intelligence System',
    description:
      'Central AI-powered platform for identity management, intelligence, document processing, and multi-application orchestration.',
    url: 'https://aegis-one-rust.vercel.app',
    marketplaceUrl: 'https://aegis-one-rust.vercel.app',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80',
    overview:
      'AEGIS is the central AI-powered platform for House Aurelius, providing enterprise-grade identity management, AI intelligence, document processing, and cross-application orchestration across all House Aurelius products.',
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
      headline: 'The Central Intelligence Hub for Your Entire Platform Ecosystem',
      subtext:
        'AEGIS is the enterprise-grade AI backbone that connects, orchestrates, and secures every House Aurelius application. From identity governance to intelligent automation, AEGIS provides the intelligence layer your operations need.',
      primaryCta: 'Explore AEGIS',
      secondaryCta: 'View Documentation',
      valueBlock:
        'AEGIS eliminates siloed data and disconnected workflows. Every identity, document, insight, and cross-platform interaction flows through one controlled intelligence layer—ensuring security, compliance, and operational clarity.',
      capabilities: [
        {
          badge: 'ID',
          title: 'Identity & Access Management',
          text: 'Multi-tenant identity governance with RBAC, SSO, and cross-platform authentication.',
        },
        {
          badge: 'AI',
          title: 'AI Intelligence Engine',
          text: 'Conversational AI, document analysis, and predictive insights powered by local and cloud models.',
        },
        {
          badge: 'DM',
          title: 'Document Processing',
          text: 'OCR, summarization, and intelligent document management across all connected systems.',
        },
        {
          badge: 'OC',
          title: 'Orchestration & Connectivity',
          text: 'Agent workflows, automation pipelines, and real-time synchronization across the platform ecosystem.',
        },
      ],
      authority:
        'Built for enterprises requiring centralized AI governance. AEGIS provides the intelligence backbone that connects every House Aurelius product into a unified, secure, and auditable system.',
      highlights: [
        '436 live API endpoints across 34 modules',
        '66 database models with full audit trails',
        'Real-time cross-platform orchestration and intelligence',
      ],
      impactMetrics: [
        { label: 'API Coverage', value: '436 endpoints' },
        { label: 'Platform integrations', value: '6+ connected apps' },
        { label: 'Intelligence layer', value: 'Real-time AI processing' },
      ],
      conversion:
        'Move from disconnected tools to a unified intelligence platform. Deploy AEGIS to connect, secure, and automate your entire operational ecosystem.',
      conversionCta: 'Deploy AEGIS',
      gallery: [],
      storyBlocks: [
        {
          title: 'Unified Identity Across Every Platform',
          text: 'One identity layer connects staff, systems, and permissions across every House Aurelius application—eliminating duplicate accounts and scattered access control.',
          image:
            'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'AI That Understands Your Business',
          text: 'From document processing to predictive analytics, AEGIS brings contextual intelligence to every operational workflow without requiring specialized AI expertise.',
          image:
            'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'Secure Cross-Platform Orchestration',
          text: 'Every integration, workflow, and data exchange flows through audited channels with full traceability—ensuring compliance while maintaining operational speed.',
          image:
            'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
        },
      ],
      testimonial: {
        quote:
          'AEGIS unified our entire platform ecosystem under one intelligence layer. We now have complete visibility across every application with centralized security and AI-powered automation.',
        author: 'Platform Operations Team',
      },
    },
  },
  {
    id: 'nexus',
    name: 'NEXUS',
    fullName: 'NEXUS IoT Infrastructure',
    description:
      'Production-grade device pairing, telemetry ingestion, and IoT infrastructure for smart devices and enterprise systems. Powered by AEGIS.',
    url: 'https://nexus.vercel.app',
    marketplaceUrl: 'https://nexus.vercel.app',
    image:
      'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=1000&q=80',
    overview:
      'NEXUS is the shared IoT infrastructure that bridges smart devices and applications. It provides production-grade device pairing, telemetry ingestion, and real-time processing for water metering, RFID, agriculture, smart buildings, energy, GPS, drones, and industrial telemetry. Powered by AEGIS, it delivers advanced AI-driven anomaly detection, predictive device health monitoring, and intelligent telemetry analysis.',
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
        'NEXUS provides the production-grade IoT infrastructure that bridges smart meters, sensors, and devices to your applications. Powered by AEGIS, the platform gains advanced AI-driven anomaly detection, predictive device health monitoring, and intelligent telemetry analysis—turning raw sensor data into actionable operational intelligence.',
      primaryCta: 'Explore NEXUS',
      secondaryCta: 'View Architecture',
      valueBlock:
        'NEXUS eliminates the complexity of building IoT infrastructure from scratch. Device pairing, telemetry processing, anomaly detection, and real-time streaming are handled by one scalable, tenant-isolated system. AEGIS intelligence layer adds predictive maintenance scoring, anomaly pattern recognition, and cross-device correlation—helping operators prevent failures before they happen.',
      capabilities: [
        {
          badge: 'TI',
          title: 'Telemetry Ingestion',
          text: 'HTTP, MQTT, and WebSocket ingestion with validation, enrichment, and event routing.',
        },
        {
          badge: 'AD',
          title: 'AI Detection',
          text: 'Anomaly detection, threshold processing, and leak probability estimation from device telemetry.',
        },
        {
          badge: 'RT',
          title: 'Real-Time Streams',
          text: 'WebSocket streams for live dashboards, maps, and operational monitoring.',
        },
        {
          badge: 'DA',
          title: 'Domain Adapters',
          text: 'Pluggable adapters for water, RFID, pressure, GPS, and custom IoT domains.',
        },
        {
          badge: 'AI',
          title: 'AEGIS Intelligence',
          text: 'AI-powered predictive device health scoring, anomaly pattern recognition, and cross-device correlation that help operators prevent failures and optimize infrastructure.',
        },
      ],
      authority:
        'Built for enterprises requiring reliable IoT infrastructure. NEXUS provides the scalable, secure, and intelligent device-to-application bridge that powers smart cities, utilities, and industrial operations. AEGIS integration means every device, every telemetry stream, every alert feeds into predictive models—helping operators move from reactive maintenance to proactive prevention.',
      highlights: [
        '8 microservice architecture with shared domain logic',
        'Tenant-scoped throughout: APIs, MQTT topics, events, database',
        'AI-powered telemetry processing with anomaly and leak detection',
        'AEGIS-powered predictive device health and anomaly intelligence',
      ],
      impactMetrics: [
        { label: 'Microservices', value: '8 production services' },
        { label: 'Device protocols', value: 'HTTP, MQTT, WebSocket' },
        { label: 'AI processing', value: 'Predictive anomaly detection' },
      ],
      conversion:
        'Stop building IoT infrastructure from scratch. Deploy NEXUS to connect your devices, process telemetry, and deliver intelligent insights at scale.',
      conversionCta: 'Deploy NEXUS',
      gallery: [],
      storyBlocks: [
        {
          title: 'Device Pairing at Scale',
          text: 'Pair thousands of smart meters, sensors, and devices with secure authentication and automatic configuration—no manual onboarding required.',
          image:
            'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'From Raw Telemetry to Actionable Insights',
          text: 'NEXUS processes device data through AI-powered analysis, surfacing anomalies, thresholds, and patterns that require immediate attention.',
          image:
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'Real-Time Visibility Across Operations',
          text: 'Live WebSocket streams push device status, alerts, and telemetry to dashboards and maps—giving operators complete situational awareness.',
          image:
            'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80',
        },
      ],
      testimonial: {
        quote:
          'NEXUS gave us the IoT backbone we needed without building from scratch. Our smart meters feed telemetry through one system that handles pairing, processing, and real-time alerting.',
        author: 'Smart Utility Operations',
      },
    },
  },
  {
    id: 'paymentos',
    name: 'PaymentOS',
    fullName: 'PaymentOS Payment Gateway',
    description:
      'Production-ready multi-tenant M-Pesa payment gateway with webhook signing, idempotency, and admin portal. Powered by AEGIS.',
    url: 'https://payment-os.vercel.app',
    marketplaceUrl: 'https://payment-os.vercel.app',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80',
    overview:
      'PaymentOS is the central payment layer for all House Aurelius external applications. It handles M-Pesa Daraja STK Push integrations with multi-tenant routing, idempotent payments, HMAC-signed webhooks, and a full admin portal. Powered by AEGIS, it delivers AI-driven fraud detection, transaction anomaly analysis, and payment intelligence across the entire platform ecosystem.',
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
        'PaymentOS is the centralized M-Pesa payment infrastructure that powers all House Aurelius products. External apps call a single endpoint and receive signed webhooks—never touching Daraja credentials or payment logic. Powered by AEGIS, the gateway gains AI-driven fraud detection, transaction anomaly analysis, and cross-tenant payment intelligence—making every payment more secure and every transaction more transparent.',
      primaryCta: 'Explore PaymentOS',
      secondaryCta: 'View API Docs',
      valueBlock:
        'PaymentOS eliminates the risk and complexity of embedding payment credentials in every application. Multi-tenant routing, idempotent transactions, and signed webhooks ensure every payment is secure, traceable, and reliable. AEGIS intelligence layer adds fraud pattern detection, anomaly scoring, and cross-tenant analytics—helping platform operators catch issues before they become losses.',
      capabilities: [
        {
          badge: 'PT',
          title: 'Payment Routing',
          text: 'Multi-tenant routing with per-tenant Paybill/Till configuration and automatic STK Push delivery.',
        },
        {
          badge: 'SC',
          title: 'Security',
          text: 'HMAC-signed webhooks, encrypted secrets, API key validation, and full transaction auditing.',
        },
        {
          badge: 'ID',
          title: 'Idempotency',
          text: 'Unique tenant-invoice constraints prevent duplicate payments and ensure reliable reconciliation.',
        },
        {
          badge: 'AP',
          title: 'Admin Portal',
          text: 'Full tenant management, revenue tracking, and configuration portal for platform operators.',
        },
        {
          badge: 'AI',
          title: 'AEGIS Intelligence',
          text: 'AI-powered fraud detection, transaction anomaly scoring, and cross-tenant payment intelligence that help platform operators prevent losses and ensure payment integrity.',
        },
      ],
      authority:
        'Built for platforms requiring secure, multi-tenant payment processing. PaymentOS provides the centralized payment infrastructure that every House Aurelius application relies on. AEGIS integration means every transaction feeds into fraud detection models—identifying suspicious patterns, scoring anomalies, and alerting operators before losses occur.',
      highlights: [
        'Single endpoint for all M-Pesa STK Push integrations',
        'Platform fee management with automatic reconciliation',
        'Used by Church-Lib, Upesi, and all HA payment flows',
        'AEGIS-powered fraud detection and transaction anomaly analysis',
      ],
      impactMetrics: [
        { label: 'Payment security', value: 'AI-powered fraud detection' },
        { label: 'Tenant isolation', value: 'Per-tenant credential routing' },
        { label: 'Platform integration', value: '4+ connected apps' },
      ],
      conversion:
        'Stop embedding payment credentials in every application. Deploy PaymentOS to centralize, secure, and scale your M-Pesa integrations.',
      conversionCta: 'Deploy PaymentOS',
      gallery: [],
      storyBlocks: [
        {
          title: 'One Call, Every Payment',
          text: 'External apps send a single API call to PaymentOS and receive a signed webhook response—no Daraja credentials, no payment SDKs, no security risk.',
          image:
            'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'Multi-Tenant Payment Isolation',
          text: 'Each tenant gets their own payment configuration, credentials, and webhook routing—ensuring complete separation while sharing one infrastructure.',
          image:
            'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'Every Transaction, Fully Auditable',
          text: 'PaymentOS maintains complete payment records with idempotency guarantees, making reconciliation and auditing straightforward and reliable.',
          image:
            'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
        },
      ],
      testimonial: {
        quote:
          'PaymentOS unified our entire payment infrastructure. Every app now routes through one system with signed webhooks and complete audit trails.',
        author: 'Platform Engineering Team',
      },
    },
  },
  {
    id: 'upesi',
    name: 'Upesi',
    fullName: 'Upesi Boda Boda Hailing',
    description:
      'Boda boda hailing and dispatch platform for African mobility markets with fraud scoring and real-time tracking. Powered by AEGIS.',
    url: 'https://upesi.vercel.app',
    marketplaceUrl: 'https://upesi.vercel.app',
    image:
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=80',
    overview:
      'Upesi is a boda boda hailing and dispatch platform designed for African mobility markets. It handles customer booking, rider management, dispatch algorithms, fare calculation, fraud scoring, payout settlement, and real-time tracking with Mapbox integration. Powered by AEGIS, it delivers AI-driven demand prediction, dynamic pricing optimization, and intelligent fraud prevention.',
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
        'Upesi is a complete boda boda hailing platform built for African markets. Powered by AEGIS, the platform gains AI-driven demand prediction, dynamic pricing optimization, and intelligent fraud prevention—turning ride data into smarter dispatch decisions and better rider earnings.',
      primaryCta: 'Explore Upesi',
      secondaryCta: 'View Demo',
      valueBlock:
        'Upesi replaces manual dispatch, cash-only operations, and rider uncertainty with a complete digital hailing platform. AEGIS intelligence layer analyzes demand patterns, optimizes pricing in real time, and detects fraud attempts—helping operators maximize revenue while keeping riders and customers safe.',
      capabilities: [
        {
          badge: 'BK',
          title: 'Smart Booking',
          text: 'Customer booking with route selection, fare estimation, and instant rider matching.',
        },
        {
          badge: 'FS',
          title: 'Fraud Scoring',
          text: 'Dedicated fraud detection engine that identifies suspicious activity and protects platform integrity.',
        },
        {
          badge: 'RT',
          title: 'Real-Time Tracking',
          text: 'Live rider tracking via Mapbox satellite maps with turn-by-turn visibility for customers.',
        },
        {
          badge: 'PY',
          title: 'Payout Settlement',
          text: 'Automated rider payouts with M-Pesa integration through PaymentOS for cashless operations.',
        },
        {
          badge: 'AI',
          title: 'AEGIS Intelligence',
          text: 'AI-powered demand prediction, dynamic pricing optimization, and intelligent fraud prevention that help operators maximize revenue and protect platform integrity.',
        },
      ],
      authority:
        'Built for African mobility markets. Upesi understands the unique challenges of boda boda operations—cash payments, rider trust, route efficiency, and real-time coordination. AEGIS integration means every ride, every route, every transaction feeds into predictive models—helping operators optimize pricing, prevent fraud, and improve rider earnings.',
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
        'Stop dispatching by phone and managing cash manually. Deploy Upesi to digitize your boda boda operations with real-time tracking, smart dispatch, and cashless payments.',
      conversionCta: 'Deploy Upesi',
      gallery: [],
      storyBlocks: [
        {
          title: 'One Tap to Book a Ride',
          text: 'Customers open the app, enter their destination, see the fare estimate, and confirm—matched with the nearest available rider in seconds.',
          image:
            'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'Riders See Every Opportunity',
          text: 'Available riders receive booking requests with route details, fare estimates, and navigation—maximizing their earnings while minimizing idle time.',
          image:
            'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'Operators See Everything',
          text: 'From a single dashboard, operators monitor active rides, rider locations, earnings, and platform health—giving complete operational visibility.',
          image:
            'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80',
        },
      ],
      testimonial: {
        quote:
          'Upesi transformed our boda boda operations from phone dispatch to a real-time digital platform. Our riders earn more and our customers trust the system.',
        author: 'Mobility Operations Team',
      },
    },
  },
  {
    id: 'maji-os',
    name: 'Maji OS',
    fullName: 'Maji OS Smart Water Utility',
    description:
      'AI-powered smart water utility intelligence and non-revenue water recovery platform for African water companies. Powered by AEGIS.',
    url: 'https://maji-os.vercel.app',
    marketplaceUrl: 'https://maji-os.vercel.app',
    image:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=80',
    overview:
      'Maji OS is an AI-powered smart water utility intelligence platform designed for African water companies. It provides tenant-aware water utility management, telemetry ingestion from smart meters, AI-powered anomaly detection, non-revenue water recovery, and comprehensive reporting. Powered by AEGIS, it delivers advanced AI-driven leak prediction, demand forecasting, and intelligent infrastructure optimization.',
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
        'Maji OS brings AI-powered intelligence to water utility operations. Powered by AEGIS, the platform gains advanced AI-driven leak prediction, demand forecasting, and intelligent infrastructure optimization—turning raw telemetry into smarter water management decisions.',
      primaryCta: 'Explore Maji OS',
      secondaryCta: 'View Architecture',
      valueBlock:
        'Maji OS eliminates blind spots in water utility operations. Smart meter data, anomaly detection, leak probability, and revenue recovery flow through one intelligent system. AEGIS intelligence layer adds predictive leak modeling, demand pattern analysis, and infrastructure health scoring—helping utilities prevent losses and optimize water distribution.',
      capabilities: [
        {
          badge: 'TD',
          title: 'Telemetry & Devices',
          text: 'Ingest data from smart meters, flow sensors, and pressure monitors with NEXUS IoT integration.',
        },
        {
          badge: 'AI',
          title: 'AI Intelligence',
          text: 'Anomaly detection, leak probability scoring, and predictive analytics from telemetry windows.',
        },
        {
          badge: 'NR',
          title: 'NRW Recovery',
          text: 'Track non-revenue water, forecast losses, and measure revenue recovery with precision.',
        },
        {
          badge: 'TD',
          title: 'Technician Dispatch',
          text: 'Dispatch field teams with repair tracking and offline-first mobile capabilities.',
        },
        {
          badge: 'AI',
          title: 'AEGIS Intelligence',
          text: 'AI-powered leak prediction modeling, demand pattern analysis, and infrastructure health scoring that help utilities prevent losses and optimize water distribution.',
        },
      ],
      authority:
        'Built for water utilities requiring intelligent infrastructure management. Maji OS provides the AI-powered intelligence layer that transforms raw telemetry into actionable insights and measurable recovery. AEGIS integration means every meter, every pipe, every pressure reading feeds into predictive models—helping utilities prevent leaks before they happen and optimize distribution across entire networks.',
      highlights: [
        'AI-powered leak detection and anomaly scoring',
        'PostGIS spatial queries for utility asset management',
        'NEXUS IoT integration for real-time telemetry',
        'AEGIS-powered leak prediction and demand forecasting',
      ],
      impactMetrics: [
        { label: 'NRW recovery', value: 'AI-powered forecasting' },
        { label: 'Leak detection', value: 'Predictive modeling' },
        { label: 'Spatial assets', value: 'PostGIS-powered queries' },
      ],
      conversion:
        'Stop losing revenue to undetected leaks and manual operations. Deploy Maji OS to bring AI-powered intelligence to your water utility infrastructure.',
      conversionCta: 'Deploy Maji OS',
      gallery: [],
      storyBlocks: [
        {
          title: 'Smart Meters, Smarter Insights',
          text: 'Telemetry from thousands of smart meters flows through NEXUS into Maji OS, where AI analyzes patterns and surfaces anomalies before they become losses.',
          image:
            'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'From Detection to Dispatch',
          text: 'When an anomaly is detected, Maji OS scores the leak probability and can dispatch technicians automatically—reducing response time from days to hours.',
          image:
            'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80',
        },
        {
          title: 'Revenue Recovery Dashboard',
          text: 'Track supplied volume, billed consumption, lost water, and recovered revenue in real time—giving utility managers complete financial visibility.',
          image:
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        },
      ],
      testimonial: {
        quote:
          'Maji OS gave us visibility into our water network we never had before. The AI detected leaks we would have missed and helped us recover significant revenue.',
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
