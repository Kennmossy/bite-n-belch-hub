/**
 * Single source of truth for site content.
 * Change WHATSAPP_NUMBER here and every WhatsApp link/message updates.
 */

import heroCake from "@/assets/hero-cake.jpg";
import kitchen from "@/assets/kitchen.jpg";
import founder from "@/assets/founder.jpg";
import smallChops from "@/assets/small-chops.jpg";
import dessertTable from "@/assets/dessert-table.jpg";
import pastriesImg from "@/assets/pastries.jpg";

export const images = {
  heroCake,
  kitchen,
  founder,
  smallChops,
  dessertTable,
  pastries: pastriesImg,
};

export const business = {
  name: "Bite n Belch Baking Home",
  tagline: "Beautifully crafted cakes and treats, baked fresh in Kaduna.",
  phoneLocal: "08150816997",
  whatsappNumber: "2348150816997",
  email: "Bite-n-Belch-Bakery-Home@gmail.com",
  address: "Kaduna, Kaduna State, Nigeria",
  hours: "Monday to Saturday, 8am to 7pm",
  instagram: "https://instagram.com/",
  mapsEmbed:
    "https://www.google.com/maps?q=Kaduna,%20Nigeria&output=embed",
};

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi Bite n Belch, I'd like to place an order.";

export function waLink(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function waProductLink(productName: string) {
  return waLink(
    `Hi Bite n Belch, I'd like to order the ${productName}. Please share the details.`,
  );
}

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Menu", to: "/menu" },
  { label: "Gallery", to: "/gallery" },
  { label: "Pricing", to: "/pricing" },
  { label: "Blog", to: "/blog" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
] as const;

export type ProductCategory = "Cakes" | "Pastries" | "Small Chops" | "Dessert Tables";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  price: string;
  description: string;
  image: string;
  badge?: "Bestseller" | "Budget-Friendly";
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: "classic-vanilla",
    name: "Classic Vanilla Celebration Cake",
    category: "Cakes",
    price: "from N18,000",
    description: "Moist vanilla sponge with silky buttercream and fresh florals.",
    image: heroCake,
    badge: "Bestseller",
    featured: true,
  },
  {
    id: "red-velvet",
    name: "Red Velvet Layer Cake",
    category: "Cakes",
    price: "from N22,000",
    description: "Deep red layers with tangy cream cheese frosting.",
    image: heroCake,
    featured: true,
  },
  {
    id: "budget-birthday",
    name: "Simple Birthday Cake",
    category: "Cakes",
    price: "from N9,000",
    description: "A neat single-tier cake with a personalised message.",
    image: kitchen,
    badge: "Budget-Friendly",
    featured: true,
  },
  {
    id: "wedding-tiers",
    name: "Custom Wedding Cake",
    category: "Cakes",
    price: "from N75,000",
    description: "Multi-tier statement cake designed around your theme.",
    image: heroCake,
  },
  {
    id: "meat-pies",
    name: "Meat Pies and Doughnuts Box",
    category: "Pastries",
    price: "from N6,500",
    description: "Golden, flaky pastries baked the morning of delivery.",
    image: pastriesImg,
    badge: "Budget-Friendly",
    featured: true,
  },
  {
    id: "croissants",
    name: "Butter Croissant Tray",
    category: "Pastries",
    price: "from N8,000",
    description: "Twelve buttery croissants, perfect for brunch or meetings.",
    image: pastriesImg,
  },
  {
    id: "cupcake-box",
    name: "Frosted Cupcake Box",
    category: "Pastries",
    price: "from N7,500",
    description: "A dozen cupcakes in your chosen flavour and colour palette.",
    image: dessertTable,
    featured: true,
  },
  {
    id: "small-chops-platter",
    name: "Party Small Chops Platter",
    category: "Small Chops",
    price: "from N12,000",
    description: "Puff puff, samosa, spring rolls, and peppered chicken.",
    image: smallChops,
    badge: "Bestseller",
    featured: true,
  },
  {
    id: "small-chops-mini",
    name: "Mini Small Chops Pack",
    category: "Small Chops",
    price: "from N5,000",
    description: "A compact pack for small gatherings and movie nights.",
    image: smallChops,
    badge: "Budget-Friendly",
  },
  {
    id: "dessert-table-classic",
    name: "Classic Dessert Table",
    category: "Dessert Tables",
    price: "from N85,000",
    description: "Styled table with cake, cupcakes, tarts, and macarons.",
    image: dessertTable,
    badge: "Bestseller",
  },
  {
    id: "dessert-table-lux",
    name: "Luxury Event Dessert Table",
    category: "Dessert Tables",
    price: "from N150,000",
    description: "Full styling, premium props, and a bespoke dessert lineup.",
    image: dessertTable,
  },
];

export const productCategories: ProductCategory[] = [
  "Cakes",
  "Pastries",
  "Small Chops",
  "Dessert Tables",
];

export const testimonials = [
  {
    quote:
      "The cake was the centrepiece of my daughter's party. Beautiful design and it tasted even better than it looked.",
    name: "Amina",
    event: "Birthday Cake",
  },
  {
    quote:
      "They delivered our small chops on time for a corporate event in Kaduna. Everything was fresh and well packaged.",
    name: "Suleiman",
    event: "Corporate Event",
  },
  {
    quote:
      "I had a tight budget and they still made something lovely. Very honest pricing and great communication on WhatsApp.",
    name: "Grace",
    event: "Wedding Dessert Table",
  },
];

export type GalleryItem = {
  id: string;
  image: string;
  alt: string;
  category: "Weddings" | "Birthdays" | "Corporate" | "Small Chops";
};

export const galleryItems: GalleryItem[] = [
  { id: "g1", image: heroCake, alt: "Two-tier wedding cake with gold accents", category: "Weddings" },
  { id: "g2", image: dessertTable, alt: "Blush and gold dessert table setup", category: "Weddings" },
  { id: "g3", image: kitchen, alt: "Buttercream birthday cake being piped", category: "Birthdays" },
  { id: "g4", image: pastriesImg, alt: "Tray of pastries for a corporate order", category: "Corporate" },
  { id: "g5", image: smallChops, alt: "Party platter of Nigerian small chops", category: "Small Chops" },
  { id: "g6", image: heroCake, alt: "Floral celebration cake for a birthday", category: "Birthdays" },
  { id: "g7", image: dessertTable, alt: "Corporate dessert display", category: "Corporate" },
  { id: "g8", image: smallChops, alt: "Small chops packs ready for delivery", category: "Small Chops" },
];

export const pricingTiers = [
  {
    name: "Everyday Treats",
    badge: "Budget-Friendly",
    badgeTone: "gold" as const,
    price: "from N5,000",
    blurb: "Simple cakes, pastries, and small packs for everyday cravings.",
    features: [
      "Single-tier cakes and cupcake boxes",
      "Pastry boxes and mini small chops packs",
      "Personalised message card included",
      "Kaduna delivery available",
    ],
  },
  {
    name: "Celebration Package",
    badge: "Most Popular",
    badgeTone: "blush" as const,
    price: "from N35,000",
    blurb: "Birthday and small event cakes paired with small chops.",
    features: [
      "Custom-designed birthday cake",
      "Party small chops platter",
      "Free recipe and flavour consultation",
      "Priority baking slot",
      "Delivery within Kaduna included",
    ],
  },
  {
    name: "Premium Event Package",
    badge: "Premium",
    badgeTone: "gold" as const,
    price: "from N150,000",
    blurb: "Luxury custom cakes and fully styled dessert tables.",
    features: [
      "Multi-tier bespoke cake",
      "Full dessert table styling and props",
      "Tasting session before the event",
      "Setup on site by our team",
      "Dedicated event coordinator",
    ],
    premium: true,
  },
];

export const addOns = [
  { name: "Delivery within Kaduna", price: "from N1,500" },
  { name: "Custom cake topper", price: "from N3,000" },
  { name: "Extra cake tier", price: "from N12,000" },
  { name: "Personalised message card", price: "N500" },
  { name: "Rush order handling", price: "from N5,000" },
  { name: "Event setup and styling", price: "from N20,000" },
];

export const budgetRanges = [
  "Under N10,000",
  "N10,000 to N35,000",
  "N35,000 to N100,000",
  "Above N100,000",
];

export const blogPosts = [
  {
    slug: "keep-cake-moist-hot-weather",
    title: "How to Keep Your Cake Moist in Hot Weather",
    category: "Baking Tips",
    date: "12 August 2026",
    excerpt:
      "Kaduna heat can dry out a cake fast. Here is how we keep every layer soft from our kitchen to your table.",
    image: kitchen,
    featured: true,
  },
  {
    slug: "budget-friendly-cake-ideas",
    title: "5 Budget-Friendly Cake Ideas for Small Birthdays",
    category: "Budget Baking",
    date: "2 August 2026",
    excerpt:
      "Beautiful does not have to be expensive. Five simple designs that look far pricier than they are.",
    image: heroCake,
  },
  {
    slug: "choosing-flavours-for-your-event",
    title: "Choosing Cake Flavours Your Guests Will Actually Love",
    category: "Planning",
    date: "24 July 2026",
    excerpt:
      "A quick guide to pairing flavours and fillings for weddings, birthdays, and corporate events.",
    image: dessertTable,
  },
  {
    slug: "small-chops-quantities",
    title: "How Much Small Chops Do You Need Per Guest?",
    category: "Event Planning",
    date: "15 July 2026",
    excerpt:
      "Our simple portion formula so you never over order or leave guests hungry.",
    image: smallChops,
  },
];

export const faqGroups = [
  {
    title: "Ordering",
    items: [
      {
        q: "How far in advance should I place my order?",
        a: "We recommend at least 48 hours for standard cakes and pastries, and one to two weeks for wedding cakes and dessert tables so we can plan the design properly.",
      },
      {
        q: "Can I customise the flavour, size, and design?",
        a: "Yes. Send us your idea, reference photo, or theme colours on WhatsApp and we will suggest the best flavour, size, and design for your budget.",
      },
    ],
  },
  {
    title: "Delivery",
    items: [
      {
        q: "Which areas do you deliver to?",
        a: "We deliver across Kaduna metropolis and surrounding areas. Deliveries to Abuja and nearby states can be arranged for larger orders.",
      },
      {
        q: "Is same-day delivery available?",
        a: "Same-day delivery is available for ready items when you order before 11am, subject to our baking schedule for that day.",
      },
      {
        q: "How much is the delivery fee?",
        a: "Delivery starts from N1,500 within Kaduna and depends on distance and order size. We confirm the exact fee before you pay.",
      },
    ],
  },
  {
    title: "Payment",
    items: [
      {
        q: "How do I pay?",
        a: "We accept payment on delivery or by bank transfer. Bank details are shared on WhatsApp once your order is confirmed.",
      },
      {
        q: "Do you accept online card payments?",
        a: "Not at this time. There is no online payment gateway on this site, so all payments happen on delivery or by transfer.",
      },
    ],
  },
  {
    title: "Rush Orders",
    items: [
      {
        q: "Do you accept rush orders?",
        a: "Yes, when our schedule allows. Rush orders attract a handling fee starting from N5,000 depending on the design and turnaround time.",
      },
    ],
  },
];
