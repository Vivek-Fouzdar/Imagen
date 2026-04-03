import { UploadIcon, VideoIcon, ZapIcon } from 'lucide-react';

export const featuresData = [
    {
        icon: <UploadIcon className="w-6 h-6" />,
        title: 'Smart Uplod',
        desc: 'Drag & Drop Only.'
    },
    {
        icon: <ZapIcon className="w-6 h-6" />,
        title: 'Instent Genration',
        desc: 'High-quality design and usability.'
    },
    {
        icon: <VideoIcon className="w-6 h-6" />,
        title: 'Video Synthesis',
        desc: 'Bring Your Product To Life.'
    }
];

export const plansData = [
    {
        id: 'starter',
        name: 'Starter',
        price: '$10',
        desc: 'Best for early-stage .',
        credits: 30,
        features: [
            '30 Creadits',
            'Standerd quality',
            'No Water-Mark',
            'Slow Genration',
            'Email support'
        ]
    },
    {
        id: 'pro',
        name: 'Pro',
        price: '$29',
        desc: 'Growing teams and businesses.',
        credits: 80,
        features: [
            '80 Creadits',
            'HD quality',
            'No Water-Mark',
            'Video Genration',
            'Priority support'
        ],
        popular: true
    },
    {
        id: 'ultra',
        name: 'Ultra',
        price: '$99',
        desc: 'For brands ready to scale fast.',
        credits: 1000,
        features: [
            '1000 Creadits',
            'FHD quality',
            'No Water-Mark',
            'Fast Video Genration',
            'Direct support'
        ]
    }
];

export const faqData = [
  {
    question: 'What does this AI platform do?',
    answer: 'Our platform helps you create short AI-powered UGC ads and reel-style content instantly. Simply provide your idea, and our AI generates high-quality video content for marketing and social media.'
  },
  {
    question: 'Who can use this platform?',
    answer: 'This platform is perfect for businesses, content creators, marketers, startups, and individuals who want to create engaging short-form video content quickly and affordably.'
  },
  {
    question: 'What type of content can I create?',
    answer: 'You can create UGC-style ads, Instagram reels, TikTok videos, product promotions, brand ads, and short-form marketing videos using AI.'
  },
  {
    question: 'Do I need video editing skills?',
    answer: 'No. Our AI handles everything automatically. You just enter your idea or product details, and the platform generates ready-to-use reel content.'
  },
  {
    question: 'Can I download and use the content commercially?',
    answer: 'Yes. All generated content can be downloaded and used for commercial purposes including ads, social media marketing, and brand promotions.'
  }
]

export const footerLinks = [
    {
        title: "Company",
        links: [
            { name: "Home", url: "#" },
            { name: "Services", url: "#" },
            { name: "Work", url: "#" },
            { name: "Contact", url: "#" }
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", url: "#" },
            { name: "Terms of Service", url: "#" }
        ]
    },
    {
        title: "Connect",
        links: [
            { name: "Twitter", url: "#" },
            { name: "LinkedIn", url: "#" },
            { name: "GitHub", url: "#" }
        ]
    }
];