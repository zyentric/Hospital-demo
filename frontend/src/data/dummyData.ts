export const departments = [
  "Cardiology",
  "Neurology",
  "Orthopedics",
  "Pediatrics",
  "Oncology",
  "General Surgery",
  "Dermatology",
  "Psychiatry"
];

export const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Jenkins",
    specialty: "Cardiology",
    experience: "15+ years",
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300",
    availability: ["Monday", "Wednesday", "Friday"],
    bio: "Expert in interventional cardiology and heart failure management.",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurology",
    experience: "12 years",
    imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300",
    availability: ["Tuesday", "Thursday", "Saturday"],
    bio: "Specializes in neurodegenerative diseases and stroke recovery.",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrics",
    experience: "8 years",
    imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    availability: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    bio: "Dedicated pediatrician focusing on early childhood development and preventive care.",
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Orthopedics",
    experience: "20 years",
    imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300",
    availability: ["Monday", "Thursday"],
    bio: "Board-certified orthopedic surgeon specializing in joint replacement and sports injuries.",
  },
];

export const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
];

export const testimonials = [
  {
    id: 1,
    name: "John Smith",
    text: "The care I received at Our Hospital was exceptional. The doctors were attentive, and the facilities are state-of-the-art. Highly recommended!",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 2,
    name: "Sarah Williams",
    text: "From the moment I walked in, the staff made me feel comfortable. The pediatric department is wonderful with children.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 3,
    name: "Michael Brown",
    text: "I had a knee replacement surgery here. Dr. Wilson and the entire orthopedics team were fantastic. My recovery was smooth and fast.",
    rating: 4,
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

export const stats = [
  { label: "Patients Recovered", value: "10k+" },
  { label: "Expert Doctors", value: "50+" },
  { label: "Years of Excellence", value: "15+" },
  { label: "Awards Won", value: "25+" }
];

export const detailedServices = [
  {
    title: "Emergency Care",
    description: "24/7 emergency services with a dedicated trauma center and rapid response teams ready for any critical situation.",
    icon: "Emergency",
  },
  {
    title: "Diagnostic Imaging",
    description: "Advanced MRI, CT scans, X-rays, and ultrasounds providing precise diagnostics for accurate treatment planning.",
    icon: "Scanner",
  },
  {
    title: "Surgical Procedures",
    description: "Minimally invasive and complex surgeries performed by world-class surgeons in state-of-the-art operating theaters.",
    icon: "Surgery",
  },
  {
    title: "Laboratory Services",
    description: "Comprehensive in-house pathology and laboratory testing ensuring quick and accurate test results.",
    icon: "Science",
  },
  {
    title: "Maternity Care",
    description: "Comprehensive care for mothers and newborns, featuring luxurious maternity suites and experienced obstetricians.",
    icon: "ChildCare",
  },
  {
    title: "Pharmacy",
    description: "Fully stocked 24-hour pharmacy ensuring patients have immediate access to prescribed medications.",
    icon: "Medication",
  }
];
