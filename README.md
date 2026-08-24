# Kaduna Bake Connect

1. PROJECT SUMMARY

Build a mobile-first, fast-loading marketing and ordering website for Bite n Belch Baking Home, a home bakery in Kaduna, Nigeria specializing in custom cakes, pastries, small chops, and event dessert tables. The site's core job is to convert visitors into WhatsApp orders and online inquiries, build trust with no existing web presence, and rank for "cakes in Kaduna" and "baking services Kaduna."

Priorities: mobile performance on low data connections, clear visible pricing, a persistent WhatsApp ordering channel, and a warm, premium-but-approachable visual feel.

2. TECH STACK

Framework: React (functional components, hooks)

Styling: Tailwind CSS (utility-first, mobile-first breakpoints)

Components: shadcn/ui for forms, dialogs, accordions, cards, tabs, navigation menu

Icons: lucide-react only. No emojis anywhere in copy or UI.

Routing: React Router with distinct pages (not a single-page scroll site)

Forms: shadcn/ui form components with client-side validation

Images: lazy-loaded, responsive srcset, compressed for low-data mobile users

Analytics: placeholder integration point for Google Analytics (gtag script slot in root layout)

Maps: embedded Google Maps iframe on Contact page, scoped to Kaduna delivery area

Punctuation rule: never use an em dash. Use commas, periods, or separate sentences instead.


3. BRAND SYSTEM

Colors (use as Tailwind custom theme tokens)

Token	Hex	Usage

blush (primary)	#F4C2D7	Buttons, section backgrounds, badges
blush-deep (primary hover/accent)	#E88CAE	Hover states, active links, highlights
cream (base background)	#FFF8F0	Page background, card backgrounds
gold (accent)	#C9A227	Dividers, icon accents, price highlights, borders on premium items
charcoal (text)	#332821	Body copy, headings on light backgrounds
white	#FFFFFF	Card surfaces, nav background on scroll
success-green (order confirmation states)	#4CAF50	Form success states only


Do not introduce any other brand colors. Neutral grays (Tailwind's default gray scale) are permitted only for subtle borders and disabled states.

Typography

Headings (H1 to H4): Playfair Display (serif, elegant, bakery-premium feel). Weight 600 to 700.

Body text, buttons, nav, forms: Poppins (clean, rounded, highly legible on mobile). Weight 400 for body, 500 to 600 for buttons and labels.

Load both via Google Fonts with font-display: swap to avoid render blocking on slow connections.

Base body size 16px minimum for mobile readability. H1 scales from 32px (mobile) to 56px (desktop).


Visual and Motion Style

Rounded corners throughout (rounded-2xl on cards, buttons, images) to feel soft and homely rather than corporate.

Generous whitespace, warm cream backgrounds broken up by blush-tinted sections, never stark white walls of text.

Subtle drop shadows on cards (shadow-md to shadow-lg on hover) to create depth without heaviness.

Animations: fade-and-slide-up on scroll for section entries (use CSS transitions or Framer Motion, staggered by 100ms for grids), smooth 200 to 300ms ease-in-out transitions on all hover states, image zoom-on-hover (scale 1.05) for gallery and product cards, button hover states that shift background from blush to blush-deep with a slight lift (translate-y-[-2px]) and shadow increase.

No heavy parallax or anything that slows mobile load. Motion should feel light and premium, not gimmicky.

Gold accent used sparingly: thin dividers between sections, small icon underlines, price tags, "bestseller" or "budget-friendly" badges.


Iconography

Use lucide-react icons exclusively: MessageCircle for WhatsApp actions, MapPin for location, Phone, Mail, Clock, Truck for delivery, Star for testimonials/ratings, Cake, ChefHat, Instagram, Search, ChevronDown for FAQ accordions, ShoppingBag for order actions. Icons should be outlined style, colored gold or blush-deep depending on context, never default black.

4. GLOBAL COMPONENTS (appear on every page)

Sticky WhatsApp Button

Fixed position, bottom-right on all screen sizes, circular, blush-deep background, white MessageCircle icon, subtle pulse animation on load to draw attention, links to https://wa.me/[PHONE_NUMBER] with a pre-filled message: "Hi Bite n Belch, I'd like to place an order." Always visible above the fold on scroll, z-index above all other content.

Navigation Bar

Sticky top nav, transparent over the hero on Home and becomes solid white with subtle shadow on scroll. Logo left (uses provided brand logo asset). Menu items: Home, About, Menu, Gallery, Pricing, Blog, FAQ, Contact. A distinct "Order Now" button on the far right, blush background, charcoal text, rounded-full, hover shifts to blush-deep. Collapses into a slide-in drawer menu on mobile, triggered by a hamburger icon, drawer background cream with Poppins nav links.

Footer

charcoal background, cream text. Four columns on desktop (stacked on mobile): Logo and one-line tagline, Quick Links (page list), Contact Info (phone, WhatsApp, email, Kaduna address with MapPin icon), Social (Instagram icon linked, WhatsApp Business icon linked). Bottom bar with copyright line and small text: "Baked fresh in Kaduna, Nigeria."

5. PAGE-BY-PAGE BUILD

PAGE 1: HOME

Section 1, Hero
Full-width hero, cream background with a soft blush gradient at the base. Large Playfair Display headline: "Kaduna's Go-To Home Bakery for Cakes That Taste as Good as They Look." Subheadline in Poppins: "Custom cakes, pastries, small chops, and dessert tables made with premium ingredients, delivered fresh to your door." Two CTA buttons side by side: primary "Order on WhatsApp" (blush-deep background, MessageCircle icon) and secondary "View Menu" (outlined, gold border). Right side or background: rotating or static high-quality photo of a best-selling cake, image has a soft rounded-2xl frame with subtle shadow. Fade-in animation on load for text, image slides in from the right.

Section 2, Trust Bar
Thin blush strip beneath the hero with four short trust points in a row (stacked 2x2 on mobile), each with a lucide icon: Truck "Same-Day Delivery in Kaduna," Star "Premium Ingredients, Fair Prices," Clock "Baked Fresh to Order," ChefHat "Personalized Recipe Consultations."

Section 3, Bestsellers
Heading: "Our Bestsellers." Grid of 4 to 6 product cards (2 columns mobile, 4 desktop), each card: image (zoom on hover), product name, price in gold text, short one-line description, small "Order This" button linking to WhatsApp with product name pre-filled in the message. Cards fade-and-slide-up on scroll, staggered.

Section 4, About Snapshot
Two-column section (stacks on mobile): left is a warm kitchen or founder photo, right is a short brand story excerpt: "Bite n Belch Baking Home is Kaduna's go-to home bakery for beautifully crafted, delicious baked goods made with premium ingredients. We combine professional quality with the warmth of a home kitchen." Button: "Read Our Story" linking to About page. blush-tinted background block behind the image for visual interest.

Section 5, How Ordering Works
Heading: "Ordering Is Simple." Three-step horizontal process (stacked on mobile) with numbered circles in gold: 1. "Browse Our Menu or Chat on WhatsApp," 2. "Confirm Your Order and Delivery Date," 3. "Pay on Delivery or Bank Transfer, Then Enjoy." Icons: Search, MessageCircle, Truck.

Section 6, Testimonials
Heading: "What Our Customers Say." Carousel or grid of 3 testimonial cards, white cards on cream background, each with a Star rating row (filled gold stars), a short quote, and customer first name plus event type (for example "Amina, Birthday Cake"). Auto-rotating carousel on mobile with swipe gesture support, dot indicators below.

Section 7, Budget-Friendly Highlight
blush-tinted full-width band: Heading "Treats for Every Budget." Copy: "From simple everyday treats to luxury custom cakes, we have options that fit your budget without compromising on taste or presentation." Button: "See Pricing and Packages" linking to Pricing page.

Section 8, Final CTA
Centered charcoal background section with cream text. Headline: "Ready to Order Something Delicious?" Subtext: "Chat with us on WhatsApp or browse our full menu." Two buttons: "Order on WhatsApp" and "View Menu."


---

PAGE 2: ABOUT US

Section 1, Page Header
Small cream banner with breadcrumb (Home / About) and page title "Our Story" in Playfair Display.

Section 2, Our Story
Two-column layout: left is a large kitchen or baking-in-progress photo (rounded-2xl, shadow), right is narrative copy expanding on the brand description from the brief: how Bite n Belch balances professional quality with home warmth, serving Kaduna and its environs.

Section 3, Our Values
Three or four value cards in a row (stacked mobile), each with a gold icon, short title, and one-line description. Suggested values: Quality Ingredients, Fair and Flexible Pricing, Reliability and On-Time Delivery, Personalized Service.

Section 4, Meet the Founder
Photo of the founder/head baker in a circular frame, name and title "Founder and Head Baker," a short personal quote about why the bakery started.

Section 5, Gallery Preview
A 4 to 6 image masonry preview grid of past work with a "View Full Gallery" button linking to the Gallery page. Images zoom slightly on hover.

Section 6, CTA Band
blush background: "Want to Work With Us for Your Next Event?" with "Order on WhatsApp" button.


---

PAGE 3: MENU / PRODUCTS

Section 1, Page Header
cream banner, title "Our Menu," subtext "Fresh, made-to-order treats for every occasion and every budget."

Section 2, Category Tabs
Sticky horizontal tab bar (shadcn Tabs component) beneath the header: Cakes, Pastries, Small Chops, Dessert Tables. Active tab underlined in gold, smooth transition when switching categories, no page reload.

Section 3, Product Grid
For each category, a responsive grid (2 columns mobile, 3 to 4 desktop) of product cards: image, name, price (or "from ₦9,000" for customizable items), short description, ShoppingBag icon button "Order This" that opens WhatsApp with the item name pre-filled. Cards have hover lift and shadow increase. Include a small gold "Budget-Friendly" badge on lower-priced items and a blush-deep "Bestseller" badge on top items, badges rounded-full and positioned top-left of the image.

Section 4, Custom Order Callout
Full-width blush-tinted band: "Don't See What You're Looking For? We Do Custom Orders Too." Button: "Request a Custom Quote" linking to the Order Now page.


---

PAGE 4: GALLERY / PORTFOLIO

Section 1, Page Header
Title "Our Portfolio," subtext "A look at the cakes, pastries, and dessert tables we've created for weddings, birthdays, and corporate events across Kaduna and Abuja."

Section 2, Filterable Gallery
Filter pill buttons at top: All, Weddings, Birthdays, Corporate, Small Chops. Masonry or grid layout of photos below, filtering happens instantly client-side with a fade transition when the filter changes. Clicking any image opens a lightbox (shadcn Dialog) with a larger view and left/right navigation arrows.

Section 3, CTA Band
"Loved What You See? Let's Create Something for Your Event." Button to WhatsApp.


---

PAGE 5: ORDER NOW

Section 1, Page Header
Title "Place Your Order," subtext "Fill out the form below or message us directly on WhatsApp. We'll confirm your order and delivery details within a few hours."

Section 2, Two-Path Ordering
Two side-by-side cards (23408150816997): Card 1, "Order via WhatsApp," MessageCircle icon, "Fastest way to order, chat with us directly," button opens WhatsApp. Card 2, "Order via Form," ShoppingBag icon, "Fill out the details below and we'll reach out to confirm."

Section 3, Order Form
shadcn form with fields: Full Name, Phone Number, WhatsApp Number (08150816997), Email (Bite-n-Belch-Bakery-Home@gmail.com), Product/Category (dropdown: Cake, Pastries, Small Chops, Dessert Table, Custom), Event Type (dropdown: Birthday, Wedding, Corporate, Other), Delivery Date (date picker), Delivery Address or Pickup, Budget Range (dropdown matching Pricing page tiers), Additional Notes (textarea for flavor, size, design requests). Submit button "Send My Order Request" in blush-deep. On submit, show a success state (shadcn Alert in success-green tones) confirming the request was received and that the team will follow up on WhatsApp.

Section 4, Delivery Info
Small info block with Truck icon: delivery areas covered within Kaduna, note that same-day delivery is available for orders placed before a certain time, and that payment is on delivery or via bank transfer only (no online payment gateway).


---

PAGE 6: PRICING & PACKAGES

Section 1, Page Header
Title "Pricing and Packages," subtext "Transparent pricing for every budget. No hidden costs."

Section 2, Pricing Tiers
Three-column pricing cards (stacked mobile): "Everyday Treats" (budget-friendly badge in gold, entry price point, simple cakes and pastries), "Celebration Package" (most popular badge in blush-deep, mid-tier, birthday and small event cakes plus small chops), "Premium Event Package" (gold-bordered card, luxury custom cakes, full dessert tables, weddings and corporate). Each card lists 4 to 5 included features with a Star or checkmark icon, and a price or "starting from ₦9,000." Each card has an "Order This Package" WhatsApp button.

Section 3, Add-Ons
Simple list or small grid of optional add-ons (delivery, custom toppers, extra tiers, personalized message cards) with individual small prices.

Section 4, Note on Payment
Small callout: "We accept payment on delivery or bank transfer. No online payment required at this time."


---

PAGE 7: BLOG / BAKING TIPS

Section 1, Page Header
Title "Baking Tips and Stories," subtext "Tips, behind-the-scenes stories, and everything sweet from the Bite n Belch kitchen."

Section 2, Featured Post
Large card for the most recent or featured article: image, title, short excerpt, "Read More" link.

Section 3, Article Grid
Responsive grid (1 column mobile, 3 desktop) of blog post cards: thumbnail image, category tag (gold pill), title in Playfair Display, short excerpt, publish date. Cards lift slightly on hover.

Section 4, Newsletter/Follow CTA
Small blush band: "Follow Us on Instagram for Daily Baking Inspiration" with Instagram icon button.

(Note: build this as a functioning template with 3 to 4 placeholder articles using realistic baking-tip titles such as "How to Keep Your Cake Moist in Hot Weather" and "5 Budget-Friendly Cake Ideas for Small Birthdays," since final content will be supplied later.)


---

PAGE 8: CONTACT

Section 1, Page Header
Title "Get In Touch," subtext "We'd love to hear from you. Reach out for orders, questions, or custom quotes."

Section 2, Contact Info and Form Split
Two-column layout (stacks mobile): Left column, contact details list with icons (Phone, MessageCircle, Mail, MapPin for Kaduna location, Clock for business hours), plus social icons. Right column, a simple contact form (Name, Email, Message) with a "Send Message" button.

Section 3, Map
Full-width embedded Google Maps iframe showing the Kaduna location and general delivery coverage area, rounded-2xl container with shadow.

Section 4, WhatsApp CTA Band
"Prefer to Chat? Message Us Directly on WhatsApp" with button.


---

PAGE 9: FAQ

Section 1, Page Header
Title "Frequently Asked Questions," subtext "Everything you need to know about ordering, delivery, and payment."

Section 2, Accordion FAQ
shadcn Accordion component, grouped by category with small subheadings: Ordering (how far in advance to order, how to customize a cake), Delivery (areas covered, same-day delivery availability, delivery fees), Payment (payment on delivery, bank transfer details, no online payment gateway currently), Rush Orders (whether rush orders are accepted and any surcharge). Each accordion item expands smoothly with a ChevronDown icon that rotates 180 degrees on open, gold accent line on the active item.

Section 3, Still Have Questions
Centered band: "Still Have Questions? We're Happy to Help." Button to WhatsApp.


---

6. PERFORMANCE AND TECHNICAL NOTES FOR LOVABLE

Optimize all images for fast load on mobile data (compressed, lazy-loaded below the fold).

Keep JavaScript bundle lean, avoid unnecessary heavy libraries beyond what's specified.

All pages must be fully responsive and tested at mobile (375px), tablet (768px), and desktop (1280px+) widths.

The WhatsApp button and its pre-filled messages must be easy to update by changing a single phone number variable.

Structure the codebase so the Founder's team can eventually plug in a lightweight CMS or edit product/pricing data from a single data file (for example a products.js or JSON file) without touching layout code, since they will manage content after launch.

No payment gateway integration. No emojis anywhere in UI copy. No em dashes anywhere in generated copy.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://bite-n-belch-hub.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3eaf595f-7512-435d-919a-d7a9ec491416).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
