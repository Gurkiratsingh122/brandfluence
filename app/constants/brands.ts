import {
  WhyUsCard,
  Step,
  Feature,
  CampaignResult,
  FAQ,
} from "@/app/types/brands";

export const WHY_US_CARDS: WhyUsCard[] = [
  {
    title: "Agency Integration",
    description:
      "If you work with an agency, they earn 5% of your deposit; they manage campaigns, you collect results.",
    chartType: "pie",
  },
  {
    title: "Deal at Your Pace",
    description:
      "Track campaign performance with real-time metrics and comprehensive analytics dashboards.",
    chartType: "line",
  },
  {
    title: "Zero Verify Metrics",
    description:
      "Get verified views and engagement metrics with transparent reporting and performance tracking.",
    chartType: "metrics",
  },
];

export const HOW_IT_WORKS_STEPS: Step[] = [
  {
    number: 1,
    title: "Create & Deposit",
    description: "Launch your campaign in minutes",
    details: [
      "Set Your Budget",
      "Define campaign goals and target audience",
      "Add Funds",
      "Top-up campaign and let agencies take 5% if applicable",
      "Set Preferences",
      "Outline content, niche, brand aesthetics",
    ],
  },
  {
    number: 2,
    title: "Review & Approve",
    description: "Quality control at your fingertips",
    details: [
      "View Submissions",
      "Filter posts by niche, reach, or past performance",
      "Approve or Reject",
      "Only pay for content that aligns with your brand",
      "Real-Time Metrics",
      "See verified view counts before final approval",
    ],
  },
  {
    number: 3,
    title: "Measure Performance &",
    description: "Transparent results",
    details: [
      "Comprehensive Dashboard",
      "Monitor impressions, reach, engagement, and conversions",
      "Automated Verification",
      "Every 1,000 verified views triggers payment",
      "Performance Insights",
      "Data-driven insights for future campaigns",
    ],
  },
];

export const FEATURES: Feature[] = [
  {
    title: "Pay-Per-View Billing",
    description: "Only pay for verified views with transparent pricing",
    icon: "billing",
  },
  {
    title: "Real-Time Analytics",
    description: "Track performance with live data and insights",
    icon: "analytics",
  },
  {
    title: "Fraud-Free Views",
    description: "Advanced verification ensures genuine engagement",
    icon: "shield",
  },
  {
    title: "Agency Email Integration",
    description: "Seamlessly collaborate with your marketing agency",
    icon: "mail",
  },
  {
    title: "Campaign Dashboard",
    description: "Manage all your campaigns in one centralized hub",
    icon: "dashboard",
  },
  {
    title: "Instant Setup",
    description: "Launch campaigns in minutes, no complex onboarding",
    icon: "rocket",
  },
];

export const CAMPAIGN_RESULTS: CampaignResult[] = [
  {
    campaignName: "Summer Fashion 2025",
    influencer: "Sarah Johnson",
    views: "125.3K",
    reach: "98.2K",
    engagement: "12.5%",
    ctr: "3.8%",
    conversions: 342,
  },
  {
    campaignName: "Tech Product Launch",
    influencer: "Mike Chen",
    views: "89.7K",
    reach: "76.4K",
    engagement: "15.2%",
    ctr: "4.2%",
    conversions: 189,
  },
  {
    campaignName: "Fitness Challenge",
    influencer: "Jessica Martinez",
    views: "156.8K",
    reach: "142.1K",
    engagement: "18.9%",
    ctr: "5.1%",
    conversions: 523,
  },
];

export const FAQS: FAQ[] = [
  {
    question: "What exactly do I pay for?",
    answer:
      "You only pay for verified, actual views. Every 1,000 views on approved influencer content triggers a payment. No hidden fees, no engagement guesses—just transparent pay-per-view billing.",
  },
  {
    question: "How do I know the views are real?",
    answer:
      "Our advanced verification system cross-references multiple data points to ensure every view is genuine. We filter out bots, fake accounts, and suspicious activity before counting any views toward your campaign metrics.",
  },
  {
    question: "What if my influencer videos don't work out?",
    answer:
      "You have full control! Review and approve all content before it goes live. If a submission doesn't align with your brand, simply reject it—no payment required. You only pay for content you approve.",
  },
  {
    question: "Can I pause or stop a campaign mid-way?",
    answer:
      "Absolutely! You have complete flexibility to pause, modify, or stop campaigns at any time through your dashboard. Any remaining budget stays in your account for future campaigns.",
  },
  {
    question: "How do agencies fit in?",
    answer:
      "If you work with a marketing agency, simply add their email during setup. They'll earn 5% of your campaign deposit and can manage everything on your behalf while you maintain oversight and approval rights.",
  },
  {
    question: "Do I need to sign a long-term contract?",
    answer:
      "No contracts required! BrandFluence operates on a flexible, pay-as-you-go model. Start and stop campaigns whenever you want, with no long-term commitments or cancellation fees.",
  },
];
