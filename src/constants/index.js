import { kidsPlaying, threeCourts, craig } from "../assets/images";

export const cardPlans = [
  {
    name: "Standard",
    price: "£4 | £8",
    description:
      "Standard fees. Students £4, Adults £8. Enroll now to unlock your potential with us.",
  },
  {
    name: "Family Session",
    price: "£8",
    description:
      "Unforgettable family sessions: Kids £8, Adults £8. Join us for quality bonding time and lasting memories.",
  },
  {
    name: "Coached Session",
    price: "£8 | £15",
    description:
      "Level up your game with expert-led coached sessions. Kids: £8, Adults: £15. Join us and reach new heights in badminton.",
  },
];

export const aboutDescs = [
  {
    image: threeCourts,
    id: 1,
    description:
      "Founded by a group of passionate badminton enthusiasts, Badminton Excel originated in the borough of Barnet, North London. As a diverse and friendly community, we believe in creating an inclusive environment where everyone, regardless of their abilities, is warmly welcomed. With a range of players spanning from novices to intermediates and advanced athletes, our mission is to provide comprehensive coaching and guidance to all.",
  },
  {
    image: kidsPlaying,
    id: 2,
    description:
      "Moreover, we understand the importance of quality family time. That's why we proudly offer coached family sessions over the weekends, where both parents and children are invited to participate and bond over the sport under the expert guidance of our coaches.",
  },
  {
    image: kidsPlaying,
    id: 3,
    description:
      "At Badminton Excel, we are not just a badminton club; we are a supportive community dedicated to fostering growth, wellness, and a love for the sport. Come and be a part of our story as we strive to excel together in the realm of badminton and beyond.",
  },
];

export const teamMembers = [
  {
    name: "Craig McKay",
    image: craig,
  },
  {
    name: "Mable Cross",
    image: craig,
  },
  {
    name: "Chad Phelps",
    image: craig,
  },
  {
    name: "Jimmy Vargas",
    image: craig,
  },
  {
    name: "Gordon Santos",
    image: craig,
  },
  {
    name: "Vera Jones",
    image: craig,
  },
];

export const socialIcons = [
  {
    name: "Instagram",
    color: "rgb(220 38 38)",
    animation: "fa-beat",
  },
  {
    name: "Facebook",
    color: "#1877f2",
    animation: "fa-shake",
  },
  {
    name: "Twitter",
    color: "#1da1f2",
    animation: "fa-bounce",
  },
];

export const features = [
  "Impressive Track Record",
  "Strong Community Presence",
  "Welcoming Environment",
  "Professional Coaching",
  "Family-Centric Focus",
  "State-of-the-Art Facilities",
];

export const pricing = [
  {
    name: "Standard",
    desc: "Casual individual badminton with court access during regular hours.",
    price: 15,
    features: [
      "Court access during regular hours.",
      "Family-friendly for all skill levels.",
      "Bring your own or rent equipment.",
    ],
  },
  {
    name: "Family Plan",
    desc: "Exclusive family badminton, with complimentary racket rentals.",
    price: 30,
    features: [
      "Exclusive and unlimited parents and kids court access.",
      "Flexible playing hours.",
      "Complimentary racket rentals.",
    ],
  },
  {
    name: "Coached Session",
    desc: "Personalized training from a pro coach for improved skills and family bonding.",
    price: 45,
    features: [
      "Personalized training with coach.",
      "Focus on techniques and tactics.",
      "Strengthen family bonds.",
    ],
  },
];
