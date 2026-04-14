export const heroImage =
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80'

export const platformApps = [
  {
    id: 'haes',
    name: 'HAES',
    fullName: 'House Aurelius Education System',
    description:
      'Complete school platform for student registration, academics, and financial records.',
    url: 'https://haes-v1.vercel.app',
    marketplaceUrl: 'https://haes-v1.vercel.app',
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
    image:
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80',
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
  },
  {
    id: 'hare',
    name: 'HARE',
    fullName: 'House Aurelius Real Estate',
    description:
      'Real estate platform for tenant registration, collections, expenses, and management.',
    url: 'https://hares.vercel.app',
    marketplaceUrl: 'https://hares.vercel.app',
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
  },
  {
    id: 'church-lib',
    name: 'Church-lib',
    fullName: 'Church-lib',
    description:
      'Church operations for newsletters, member registration, tithes, offerings, and media.',
    url: 'https://church-lib.vercel.app',
    marketplaceUrl: 'https://church-lib.vercel.app',
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
  },
]

export const publicStats = [
  { label: 'Platforms Connected', value: '4' },
  { label: 'Business Verticals', value: 'Education, POS, Real Estate, Church' },
  { label: 'Public Data Policy', value: 'Aggregated metrics only' },
]

export const teamMembers = [
  {
    name: 'Kelvin Aurelius',
    role: 'Founder / Director',
    bio: 'Leads strategy and platform direction across all House Aurelius products.',
    image:'/images/kelvin-aurelius.jpg',
  },
  {
    name: 'Staff Profile 2',
    role: 'Operations Lead',
    bio: 'Coordinates implementation, onboarding, and support delivery.',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'Staff Profile 3',
    role: 'Finance and Compliance',
    bio: 'Oversees financial controls, reporting standards, and compliance workflows.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80',
  },
]

export const apkInfo = {
  version: 'v1.0.0',
  size: '4 MB',
  releaseDate: 'Apr 13, 2026',
  checksum: 'SHA256: replace-with-real-checksum',
  url: 'https://drive.google.com/uc?export=download&id=1CCuaUOsRSg4-I6TxXiEIFqsW_EYBK0PO',
}
