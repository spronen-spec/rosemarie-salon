import serviceNails from "@/assets/service-nails.jpg";
import serviceLashes from "@/assets/service-lashes.jpg";
import serviceFacial from "@/assets/service-facial.jpg";
import serviceMassage from "@/assets/service-massage.jpg";
import serviceBrows from "@/assets/service-brows.jpg";
import serviceHair from "@/assets/service-hair.jpg";
import serviceWaxing from "@/assets/service-waxing.jpg";
import serviceFoot from "@/assets/service-foot.jpg";

export interface SubService {
  name: string;
  price: string;
  duration: string;
  description: string;
}

export interface Therapist {
  name: string;
  role: string;
  rating: number;
  reviews: number;
  avatar: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  price: string;
  duration: string;
  image: string;
  therapists: Therapist[];
  subServices: SubService[];
}

export const services: Service[] = [
  {
    id: "nails",
    name: "Nails",
    description: "Discover manicure and pedicure services designed to keep your nails looking neat and polished.",
    shortDescription: "Manicure, pedicure, gel & extensions",
    price: "From AED 26",
    duration: "15 min – 2 hr",
    image: serviceNails,
    therapists: [
      { name: "Aanu", role: "Nail Technician", rating: 4.0, reviews: 1, avatar: "" },
      { name: "Camyl", role: "Eyelash & Nail Technician", rating: 5.0, reviews: 4, avatar: "" },
    ],
    subServices: [
      { name: "Classic Manicure", price: "from AED 52", duration: "50 min", description: "Gentle nail shaping, cuticle care, and a polished finish." },
      { name: "Classic Pedicure", price: "from AED 60", duration: "1 hr", description: "Foot soaking, nail shaping, cuticle care, and a foot scrub." },
      { name: "Classic Manicure & Pedicure", price: "from AED 103", duration: "1 hr", description: "Complete hand and foot care combo." },
      { name: "Gel Manicure", price: "from AED 77", duration: "1 hr", description: "Long-lasting gel polish with shaping and cuticle care." },
      { name: "Gel Pedicure", price: "from AED 82", duration: "1 hr", description: "Gel polish pedicure for a vibrant, durable finish." },
      { name: "Gelish Manicure & Pedicure", price: "from AED 138", duration: "1 hr", description: "Gel manicure and pedicure combo for lasting shine." },
      { name: "Hard Gel Extension", price: "from AED 155", duration: "2 hr", description: "Durable gel extensions for length and strength." },
      { name: "Soft Gel Extensions", price: "from AED 155", duration: "2 hr", description: "Lightweight, natural-looking gel nail enhancements." },
      { name: "Acrylic Extension (Full Set)", price: "from AED 172", duration: "2 hr", description: "Full set of acrylic nail extensions." },
      { name: "Polygel Extensions (Full Set)", price: "from AED 163", duration: "2 hr", description: "Polygel nail extensions for a perfect blend of strength and flexibility." },
      { name: "Overly / Refill", price: "from AED 129", duration: "2 hr", description: "Overlay or builder manicure for added strength." },
      { name: "Japanese Manicure Treatment", price: "from AED 77", duration: "1 hr", description: "Traditional treatment for natural nail health and shine." },
      { name: "Foot Spa W/ Pedicure", price: "from AED 95", duration: "50 min", description: "Soothing foot spa with classic pedicure." },
      { name: "Hand Spa W/ Manicure", price: "from AED 77", duration: "40 min", description: "Relaxing hand spa with classic manicure." },
      { name: "Paraffin Hand W/ Classic Manicure", price: "from AED 77", duration: "50 min", description: "Paraffin treatment paired with classic manicure." },
      { name: "French Gel Polish Application", price: "from AED 43", duration: "50 min", description: "Timeless French finish with durable gel polish." },
      { name: "French Classic Polish", price: "from AED 43", duration: "1 hr", description: "Classic French polish for a sophisticated look." },
      { name: "Gel Polish Application", price: "from AED 34", duration: "30 min", description: "Vibrant gel polish application." },
      { name: "Change Polish Classic", price: "from AED 26", duration: "30 min", description: "Quick classic polish change." },
      { name: "Gel Removal", price: "from AED 26", duration: "15 min", description: "Professional gel polish removal." },
      { name: "Nail Extension Removal", price: "from AED 43", duration: "30 min", description: "Safe removal of nail extensions." },
      { name: "Cat Eye Effect Add-on", price: "from AED 43", duration: "1 hr", description: "Striking cat eye shimmer effect." },
      { name: "Chrome Effect Add-on", price: "from AED 43", duration: "1 hr", description: "Mirror-like chrome finish." },
      { name: "Ombre Effect", price: "from AED 43", duration: "1 hr", description: "Soft gradient color blend." },
      { name: "Nail Repair", price: "from AED 13", duration: "30 min", description: "Fix cracks, splits, or imperfections." },
      { name: "Stickers / Decals", price: "from AED 9", duration: "40 min", description: "Fun nail art stickers and decals." },
    ],
  },
  {
    id: "hair",
    name: "Hair",
    description: "Discover a range of professional hair services designed to refresh your look and style.",
    shortDescription: "Cut, color, blowout, keratin & more",
    price: "From AED 43",
    duration: "30 min – 2 hr",
    image: serviceHair,
    therapists: [
      { name: "Wesam", role: "Senior Hairdresser", rating: 5.0, reviews: 0, avatar: "" },
      { name: "Fedaa", role: "Senior Hair Dresser", rating: 5.0, reviews: 1, avatar: "" },
    ],
    subServices: [
      { name: "Hair Cut", price: "from AED 129", duration: "30 min", description: "Professional haircut tailored to your style." },
      { name: "Hair Trim", price: "from AED 95", duration: "30 min", description: "Gentle trim to maintain shape and remove split ends." },
      { name: "Hair Bangs", price: "from AED 43", duration: "30 min", description: "Stylish fringe shaping." },
      { name: "Blow Dry", price: "from AED 86", duration: "50 min", description: "Smooth, sleek professional blow dry." },
      { name: "Wash & Blow Dry", price: "from AED 112", duration: "1 hr", description: "Hair wash followed by a voluminous blow dry." },
      { name: "Hair Wash", price: "from AED 43", duration: "30 min", description: "Gentle cleanse with rough dry." },
      { name: "Hair Oil Treatment", price: "from AED 69", duration: "1 hr", description: "Nourishing oil treatment for hydration and shine." },
      { name: "Hair Mask", price: "from AED 86", duration: "1 hr 30 min", description: "Deep conditioning mask for softness." },
      { name: "Hair Spa (15 Min Massage)", price: "from AED 86", duration: "40 min", description: "Head massage paired with nourishing hair spa." },
      { name: "Keratin", price: "from AED 344", duration: "2 hr", description: "Smoothing treatment to reduce frizz. Price starts at 400 AED, varies by length." },
      { name: "Protein Treatment", price: "from AED 301", duration: "2 hr", description: "Protein-rich formula to restore strength." },
      { name: "Roots Colour", price: "from AED 172", duration: "1 hr 30 min", description: "Expert root coverage for consistent color." },
      { name: "Full Hair Colour", price: "from AED 344", duration: "2 hr", description: "All-over hair color transformation." },
      { name: "Highlight (Medium Length)", price: "from AED 344", duration: "1 hr", description: "Sun-kissed highlights for medium hair." },
      { name: "Half Head Highlights", price: "from AED 430", duration: "2 hr", description: "Highlights on upper sections for subtle contrast." },
      { name: "Full Highlights", price: "from AED 516", duration: "2 hr", description: "All-over highlights for radiant dimension." },
      { name: "Balayage", price: "from AED 516", duration: "2 hr", description: "Hand-painted highlights for a natural sun-kissed effect." },
      { name: "Ombre", price: "from AED 516", duration: "2 hr", description: "Gradual color transition from root to tip." },
      { name: "Colour Melting", price: "from AED 172", duration: "1 hr 30 min", description: "Seamless blend of colors from root to tip." },
      { name: "Toner", price: "from AED 172", duration: "1 hr 30 min", description: "Color toner to balance and enhance shade." },
      { name: "Refill Hair Extension", price: "from AED 215", duration: "1 hr", description: "Reapply extensions for fresh length and volume." },
    ],
  },
  {
    id: "lashes",
    name: "Lashes & Brows",
    description: "Enhance your natural beauty with a range of services for fuller-looking lashes and well-defined brows.",
    shortDescription: "Extensions, lifting, lamination & tinting",
    price: "From AED 26",
    duration: "20 min – 2 hr 30 min",
    image: serviceLashes,
    therapists: [
      { name: "Camyl", role: "Eyelash Technician", rating: 5.0, reviews: 4, avatar: "" },
      { name: "Salie", role: "Facial Therapist", rating: 5.0, reviews: 4, avatar: "" },
    ],
    subServices: [
      { name: "Eyelash Extension Classic", price: "from AED 129", duration: "1 hr", description: "Classic lash extensions for a natural, elegant look." },
      { name: "Eyelash Extension 2D Form", price: "from AED 155", duration: "1 hr", description: "Two extensions per lash for extra volume." },
      { name: "Eyelash Extension 3D–4D Form", price: "from AED 155", duration: "1 hr", description: "Multi-dimensional volume lash extensions." },
      { name: "Eyelash Lifting", price: "from AED 129", duration: "1 hr", description: "Natural lash lift for a curled, open look." },
      { name: "Eyelash Refill", price: "from AED 86", duration: "1 hr", description: "Replace lost lash extensions." },
      { name: "Eyelash Removal", price: "from AED 26", duration: "30 min", description: "Safe removal of lash extensions." },
      { name: "Eyelash Tinting", price: "from AED 30", duration: "30 min", description: "Darker, more defined lashes." },
      { name: "Eyebrow Lamination", price: "from AED 129", duration: "1 hr", description: "Sleek, full brows that stay in place." },
      { name: "Eyebrow Tinting", price: "from AED 30", duration: "30 min", description: "Color enhancement for fuller-looking brows." },
      { name: "Eyebrow Wax / Threading", price: "from AED 26", duration: "20 min", description: "Precise brow shaping." },
    ],
  },
  {
    id: "facial",
    name: "Facial Treatments",
    description: "Discover a range of facial treatments designed to refresh and care for your skin.",
    shortDescription: "HydraFacial, deep cleansing & anti-aging",
    price: "From AED 86",
    duration: "1 hr",
    image: serviceFacial,
    therapists: [
      { name: "Salie", role: "Facial Therapist", rating: 5.0, reviews: 4, avatar: "" },
    ],
    subServices: [
      { name: "Basic Treatment Facial", price: "from AED 86", duration: "1 hr", description: "Cleansing and refreshing facial for a radiant complexion." },
      { name: "Deep Cleansing Facial", price: "from AED 155", duration: "1 hr", description: "Deep cleansing to remove impurities and purify skin." },
      { name: "Signature HydraFacial", price: "from AED 172", duration: "1 hr", description: "Deep-cleansing facial for radiant, hydrated skin." },
      { name: "Brightening Facial", price: "from AED 172", duration: "1 hr", description: "Revive dull skin for a luminous complexion." },
      { name: "Sensitive Facial", price: "from AED 172", duration: "1 hr", description: "Gentle care for sensitive, reactive skin." },
      { name: "Acne Facial", price: "from AED 172", duration: "1 hr", description: "Specialized care for acne-prone skin." },
      { name: "Anti-Aging Facial", price: "from AED 172", duration: "1 hr", description: "Targets visible signs of aging for smoother skin." },
      { name: "Harmony Facial", price: "from AED 172", duration: "1 hr", description: "Balancing and renewing facial for healthy-looking skin." },
      { name: "Facial Massage", price: "from AED 129", duration: "1 hr", description: "Soothing massage to ease facial tension." },
    ],
  },
  {
    id: "massage",
    name: "Massage Therapy",
    description: "Experience a range of relaxing and rejuvenating massage services tailored for your comfort.",
    shortDescription: "Swedish, deep tissue, Thai & more",
    price: "From AED 52",
    duration: "30 min – 1 hr 30 min",
    image: serviceMassage,
    therapists: [
      { name: "Elena", role: "Massage Therapist", rating: 5.0, reviews: 2, avatar: "" },
    ],
    subServices: [
      { name: "Relaxing Massage", price: "from AED 155", duration: "1 hr", description: "Gentle, soothing full-body massage." },
      { name: "Swedish Massage", price: "from AED 155", duration: "1 hr", description: "Classic flowing movements for total relaxation." },
      { name: "Deep Tissue Massage", price: "from AED 155", duration: "1 hr", description: "Targets tension and tight muscles." },
      { name: "Sports Massage", price: "from AED 155", duration: "1 hr", description: "Focused relief for an active lifestyle." },
      { name: "Aromatherapy Massage", price: "from AED 155", duration: "1 hr", description: "Essential oil massage for mind and body." },
      { name: "Thai & Swedish Combination", price: "from AED 155", duration: "1 hr", description: "Blend of Thai stretching and Swedish techniques." },
      { name: "Thai & Swedish Combination (90 min)", price: "from AED 215", duration: "1 hr 30 min", description: "Extended Thai-Swedish blend for deeper relaxation." },
      { name: "Ventosa (Cupping) Massage", price: "from AED 155", duration: "1 hr", description: "Suction cup therapy for circulation and tension relief." },
      { name: "Pregnancy Massage", price: "from AED 155", duration: "1 hr", description: "Gentle therapy designed for expectant mothers." },
      { name: "Lymphatic Massage", price: "from AED 155", duration: "1 hr", description: "Light rhythmic movements for natural balance." },
      { name: "Slimming Massage", price: "from AED 155", duration: "1 hr", description: "Full body massage for a lighter, refreshed feel." },
      { name: "Head Massage", price: "from AED 52", duration: "30 min", description: "Soothing scalp and head massage." },
      { name: "Shoulder Massage", price: "from AED 52", duration: "30 min", description: "Targeted shoulder tension relief." },
      { name: "Foot Massage", price: "from AED 138", duration: "1 hr", description: "Soothing relaxation for tired feet." },
      { name: "Foot Reflexology", price: "from AED 69", duration: "30 min", description: "Pressure point therapy for overall well-being." },
      { name: "Reflexology (1 hr)", price: "from AED 138", duration: "1 hr", description: "Extended foot reflexology session." },
    ],
  },
  {
    id: "waxing",
    name: "Waxing",
    description: "Discover smooth, hair-free skin with a range of professional waxing services.",
    shortDescription: "Face, body & Brazilian waxing",
    price: "From AED 13",
    duration: "15 min – 1 hr",
    image: serviceWaxing,
    therapists: [
      { name: "Salie", role: "Facial Therapist", rating: 5.0, reviews: 4, avatar: "" },
    ],
    subServices: [
      { name: "Eyebrow Wax / Threading", price: "from AED 26", duration: "20 min", description: "Precise brow shaping with wax or thread." },
      { name: "Upper Lip Waxing", price: "from AED 22", duration: "15 min", description: "Quick upper lip hair removal." },
      { name: "Side Face Thread/Wax", price: "from AED 22", duration: "20 min", description: "Clean, polished side face." },
      { name: "Full Face Waxing / Threading", price: "from AED 86", duration: "1 hr", description: "Complete facial hair removal." },
      { name: "Full Face without Eyebrow", price: "from AED 65", duration: "30 min", description: "Facial waxing leaving eyebrows untouched." },
      { name: "Brazilian Waxing", price: "from AED 77", duration: "30 min", description: "Professional bikini area waxing." },
      { name: "Underarm Waxing", price: "from AED 34", duration: "20 min", description: "Smooth, fresh underarms." },
      { name: "Half Arm Waxing", price: "from AED 39", duration: "20–30 min", description: "Lower arm hair removal." },
      { name: "Leg Waxing", price: "from AED 47", duration: "20–30 min", description: "Smooth, hair-free legs." },
      { name: "Full Back Waxing", price: "from AED 69", duration: "30 min", description: "Complete back waxing." },
      { name: "Stomach with Chest", price: "from AED 69", duration: "30 min", description: "Chest and stomach waxing." },
      { name: "Full Body Wax (without Bikini)", price: "from AED 155", duration: "1 hr", description: "Head-to-toe waxing excluding bikini area." },
      { name: "Full Body Wax with Brazilian", price: "from AED 172", duration: "1 hr", description: "Complete body waxing including Brazilian." },
      { name: "Finger Waxing", price: "from AED 13", duration: "15 min", description: "Smooth, hair-free fingers." },
      { name: "Nose Waxing", price: "from AED 22", duration: "15 min", description: "Quick nose hair removal." },
    ],
  },
  {
    id: "foot-treatment",
    name: "Foot Treatment",
    description: "Discover specialized care and soothing treatments designed to refresh and revive your feet.",
    shortDescription: "Paraffin, callus care & foot scrub",
    price: "From AED 26",
    duration: "20 min – 1 hr",
    image: serviceFoot,
    therapists: [
      { name: "Aanu", role: "Nail Technician", rating: 4.0, reviews: 1, avatar: "" },
    ],
    subServices: [
      { name: "Foot Paraffin", price: "from AED 52", duration: "1 hr", description: "Warm therapeutic wax to hydrate and soften feet." },
      { name: "Callus Treatment", price: "from AED 43", duration: "30 min", description: "Gentle callus reduction for smoother feet." },
      { name: "Foot Scrub", price: "from AED 26", duration: "20 min", description: "Exfoliating treatment for soft, smooth skin." },
    ],
  },
  {
    id: "brows",
    name: "Brow Styling",
    description: "Achieve perfectly shaped brows with our expert brow styling services including threading, waxing, tinting, and lamination.",
    shortDescription: "Threading, tinting & lamination",
    price: "From AED 26",
    duration: "20–60 min",
    image: serviceBrows,
    therapists: [
      { name: "Salie", role: "Facial Therapist", rating: 5.0, reviews: 4, avatar: "" },
      { name: "Camyl", role: "Eyelash Technician", rating: 5.0, reviews: 4, avatar: "" },
    ],
    subServices: [
      { name: "Eyebrow Wax / Threading", price: "from AED 26", duration: "20 min", description: "Precise shaping with wax or thread." },
      { name: "Eyebrow Lamination", price: "from AED 129", duration: "1 hr", description: "Sleek, full brows that stay in place." },
      { name: "Eyebrow Tinting", price: "from AED 30", duration: "30 min", description: "Color for fuller-looking brows." },
    ],
  },
];

export const FRESHA_URL = "https://www.fresha.com/a/rosemarie-beauty-centre-dubai-rosemarie-beauty-centre-fortune-tower-1409-cluster-c-jumeirah-lake-towers-dubai-i2102sjr/booking?allOffer=true&cartId=693fe547-811e-49af-849b-f386c2e5275c";
export const WHATSAPP_NUMBER = "971588029012";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Rosemarie%20Beauty%20Centre!%20I'd%20like%20to%20book%20an%20appointment.`;
export const INSTAGRAM_URL = "https://www.instagram.com/rosemariebeautycentre/";
export const ADDRESS = "Fortune Tower 1409, Cluster C, JLT, Dubai, UAE";
export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/wCEMwPF7HB26S9Zf8";
