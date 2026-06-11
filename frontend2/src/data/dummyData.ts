export interface Doctor {
  id: string;
  name: string;
  qualification: string;
  specialization: string;
  experience: string;
  languages: string[];
  fee: number;
  availability: string;
  image: string;
}

export interface Department {
  id: string;
  name: string;
  overview: string;
  icon: string;
}

export interface Package {
  id: string;
  name: string;
  price: number;
  features: string[];
  benefits: string;
}

export const doctors: Doctor[] = [
  {
    id: 'd1',
    name: 'Dr. Sarah Johnson',
    qualification: 'MD, DM - Cardiology',
    specialization: 'Cardiology',
    experience: '15+ Years',
    languages: ['English', 'Spanish'],
    fee: 150,
    availability: 'Mon-Fri, 9AM-5PM',
    image: 'https://i.pravatar.cc/300?img=1',
  },
  {
    id: 'd2',
    name: 'Dr. Michael Chen',
    qualification: 'MS - Orthopedics',
    specialization: 'Orthopedics',
    experience: '12+ Years',
    languages: ['English', 'Mandarin'],
    fee: 120,
    availability: 'Tue-Sat, 10AM-6PM',
    image: 'https://i.pravatar.cc/300?img=11',
  },
  {
    id: 'd3',
    name: 'Dr. Emily Davis',
    qualification: 'MD - Pediatrics',
    specialization: 'Pediatrics',
    experience: '10+ Years',
    languages: ['English'],
    fee: 100,
    availability: 'Mon-Wed-Fri, 9AM-2PM',
    image: 'https://i.pravatar.cc/300?img=5',
  },
  {
    id: 'd4',
    name: 'Dr. Robert Wilson',
    qualification: 'MD - Neurology',
    specialization: 'Neurology',
    experience: '20+ Years',
    languages: ['English', 'French'],
    fee: 200,
    availability: 'Mon-Thu, 10AM-4PM',
    image: 'https://i.pravatar.cc/300?img=14',
  },
];

export const departments: Department[] = [
  {
    id: 'dep1',
    name: 'Cardiology',
    overview: 'Comprehensive care for the heart and cardiovascular system.',
    icon: 'Favorite',
  },
  {
    id: 'dep2',
    name: 'Neurology',
    overview: 'Advanced diagnosis and treatment for neurological disorders.',
    icon: 'Psychology',
  },
  {
    id: 'dep3',
    name: 'Orthopedics',
    overview: 'Specialized care for bones, joints, and muscles.',
    icon: 'AccessibilityNew',
  },
  {
    id: 'dep4',
    name: 'Pediatrics',
    overview: 'Dedicated healthcare for infants, children, and adolescents.',
    icon: 'ChildCare',
  },
  {
    id: 'dep5',
    name: 'Emergency Medicine',
    overview: '24/7 critical care and emergency response.',
    icon: 'MedicalServices',
  },
  {
    id: 'dep6',
    name: 'Oncology',
    overview: 'State-of-the-art cancer diagnosis and treatment facilities.',
    icon: 'LocalHospital',
  },
];

export const healthPackages: Package[] = [
  {
    id: 'p1',
    name: 'Basic Health Checkup',
    price: 99,
    features: ['Complete Blood Count', 'Blood Sugar Fasting', 'Lipid Profile', 'ECG'],
    benefits: 'Essential tests to monitor your basic health parameters.',
  },
  {
    id: 'p2',
    name: 'Comprehensive Heart Check',
    price: 199,
    features: ['ECG', 'ECHO', 'TMT', 'Cardiology Consultation', 'Lipid Profile'],
    benefits: 'Detailed assessment of cardiovascular health for at-risk individuals.',
  },
  {
    id: 'p3',
    name: 'Senior Citizen Package',
    price: 149,
    features: ['Bone Density', 'Vision Check', 'Hearing Test', 'Complete Blood Panel', 'Physician Consult'],
    benefits: 'Tailored specifically for the health needs of older adults.',
  },
];
