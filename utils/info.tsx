import devProfiles1 from "@/assets/images/dev-profiles-1.png";
import devProfiles2 from "@/assets/images/dev-profiles-2.png";
import devProfiles3 from "@/assets/images/dev-profiles-3.png";
import onboarding from "@/assets/images/onboarding1.png";
import tileStack from "@/assets/images/tile-stack.svg";
import shopify from "@/assets/images/shopify.svg";
import dotNet from "@/assets/images/dot-net.svg";
import python from "@/assets/images/python.svg";
import figma from "@/assets/images/figma.svg";
import illustration from "@/assets/images/illustration.svg";
import magento from "@/assets/images/magento.svg";
import photoshop from "@/assets/images/photoshop.svg";
import unreal from "@/assets/images/unreal.svg";
import webflow from "@/assets/images/webflow.svg";
import cinema4d from "@/assets/images/cinema-4d.svg";

export const JOB_CATEGORY = [
  {
    name: "IT & Development",
    category: "it",
    description: "Find Dev and IT professionals to scale your business.",
    jobs: [
      { icon: tileStack, name: "Data Scientist" },
      { icon: shopify, name: "Shopify Developer" },
      { icon: dotNet, name: "Dot Net Developer" },
      { icon: python, name: "Python Developer" },
      { icon: webflow, name: "Webflow Developer" },
      { icon: magento, name: "MERN Stack Developer" },
      { icon: tileStack, name: "Data Scientist" },
      { icon: magento, name: "Front End Developer" },
      { icon: magento, name: "Front End Developer" },
      { icon: magento, name: "Full Stack Developer" },
      { icon: magento, name: "Front End Developer" },
      { icon: magento, name: "Python Developer" },
    ],
  },
  {
    name: "Design and Creative",
    category: "design",
    description: "Explore Creative individuals with a keen eye for detail.",
    jobs: [
      { icon: figma, name: "UX Designer" },
      { icon: photoshop, name: "Graphics Designer" },
      { icon: illustration, name: "Illustration Artist" },
      { icon: unreal, name: "Unreal Engine" },
      { icon: cinema4d, name: "Cinema 4D" },
      { icon: figma, name: "UX Designer" },
      { icon: photoshop, name: "Graphics Designer" },
      { icon: illustration, name: "Illustration Artist" },
      { icon: unreal, name: "Unreal Engine" },
      { icon: cinema4d, name: "Cinema 4D" },
      { icon: figma, name: "UX Designer" },
      { icon: photoshop, name: "Graphics Designer" },
    ],
  },
];

export const INTERVIEW_STEPS = [
  { header: "Resume Screening" },
  { header: "Video Interview" },
  { header: "Technical Evaluation" },
  { header: "Application Review" },
  { header: "Lets get to work" },
];

export const PROCESS_STEPS = [
  {
    header: "Find your next star performer.",
    summary:
      "Explore the vast Zwilt marketplace to find the candidate that meets your needs.",
    navText: "Join Now",
    devProfileSrc: devProfiles1,
    color: "#C7BAE7",
  },
  {
    header: "Evaluate to your heart’s content.",
    summary:
      "Assess the candidate through work history, transparent tests and video interviews.",
    navText: "Browse More",
    devProfileSrc: devProfiles2,
    color: "#FFE19C",
  },
  {
    header: "Start building your team.",
    summary:
      "Onboard your candidate right away and start creating the next big thing.",
    navText: "Join Now",
    devProfileSrc: devProfiles3,
    color: "#C3C3C3",
  },
];

export const WHY_CHOOSE_ZWILT = [
  {
    header: "Onboard without the risk.",
    points: [
      "We pick the best for you to select.",
      "Thousands of vetted candidates in dozens of categories.",
      "Risk-free resource swapping for the best fit.",
    ],
    image: onboarding,
    color: "#50589F",
  },
  {
    header: "An open book.",
    points: [
      "Easy and transparent one-to-one chat with candidates.",
      "Simple and convenient payment methods.",
      "Review past ratings.",
    ],
    image: onboarding,
    color: "#FFBE2E",
  },
  {
    header: "Stay in the loop.",
    points: [
      "Track your staff activity down to every minute with screenshots.",
      "Comprehensive timesheet data to process payments.",
      "Create projects to organize and assign tasks more effectively.",
    ],
    image: onboarding,
    color: "#C7F4C2",
  },
];

export const FAQS = [
  "I want to work part-time, is that possible",
  "How long are the average projects?",
  "How does the payment works?",
  "How much can I earn?",
];

export const QUICK_LINKS = [
  { header: "platform", links: ["Find work", "Find talent", "Categories"] },
  {
    header: "categories",
    links: ["Data Science", "IT & Networking", "Web & Mobile"],
  },
  { header: "help", links: ["FAQs", "Contact Us"] },
  { header: "get in touch", links: ["Instagram", "LinkedIn", "Twitter"] },
];