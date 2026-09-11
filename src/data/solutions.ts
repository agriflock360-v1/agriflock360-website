import {
  Activity,
  AlertTriangle,
  BarChart3,
  Calculator,
  GitBranch,
  GraduationCap,
  ShoppingBag,
  Sprout,
  Stethoscope,
  Tractor,
} from "lucide-react";

export const appSolutions = [
  {
    id: "farm-management",
    title: "Farm & Flock Management",
    description: "Organise your farms, houses and batches. Track bird numbers, house capacity and each batch from start to completion.",
    icon: Tractor,
    href: "/features#farm-management",
    action: "Learn More",
  },
  {
    id: "feeding",
    title: "Feeding Plans & Inventory",
    description: "Follow feeding recommendations for your birds’ type and age. Record feed used, track stock and compare bird weights with the recommended plan.",
    icon: Sprout,
    href: "/features#feeding",
    action: "Learn More",
  },
  {
    id: "flock-health",
    title: "Vaccination & Flock Health",
    description: "Keep up with vaccination schedules and reminders. Record vaccinations, medication and mortality to maintain your flock’s health history.",
    icon: Activity,
    href: "/features#flock-health",
    action: "Learn More",
  },
  {
    id: "farm-reports",
    title: "Farm Records & Financial Reports",
    description: "Record eggs, bird weights, expenses and income. Review production and financial reports for individual batches or your whole farm.",
    icon: BarChart3,
    href: "/features#farm-reports",
    action: "Learn More",
  },
  {
    id: "farm-planning",
    title: "Housing & Production Planning",
    description: "Explore housing material estimates and production costs. Adjust inputs to estimate potential income and plan before you spend.",
    icon: Calculator,
    href: "/features#farm-planning",
    action: "Learn More",
  },
  {
    id: "veterinary-support",
    title: "Find Veterinary Support",
    description: "Browse veterinary officers, view their qualifications, experience and location, and start a booking through the app.",
    icon: Stethoscope,
    href: "/features#veterinary-support",
    action: "Learn More",
  },
];

export const upcomingSolutions = [
  { title: "AI Disease Detection", icon: AlertTriangle },
  { title: "Direct Market Linkages", icon: ShoppingBag },
  { title: "Blockchain Traceability", icon: GitBranch },
  { title: "Farmer Training & Advisory", icon: GraduationCap },
];
