export interface GeoSample {
  name: string;
  url: string;
  industry: string;
  text: string;
}

export const GEO_SAMPLES: GeoSample[] = [
  {
    name: "Apex Global Logistics",
    url: "https://apexlogistics-example.com/services/freight",
    industry: "SaaS & Logistics",
    text: `We provide stellar logistics and supply chain services across the country. Our company aims to streamline your business shipping requirements through our customized approaches. We have been working in this area for quite some time, and our team of experts understands the details of shipping packages securely.
    If you want to ship something, we are here for you. Our freight solutions are very cost-effective, saving you time and money. We focus on providing high quality service to all of our global clients. Our network covers many destinations and we can help you get where you want to go.`,
  },
  {
    name: "Bahria Heights Premium Condos",
    url: "https://bahriaheights-estate.com/properties/phase7",
    industry: "Real Estate",
    text: `Bahria heights Real Estate Opportunities. This premium project in Phase 7 offers wonderful living apartments for families who want class and convenience. Our location is near the commercial center, which means you can walk to nearby shopping centers, grocery stores, and local attractions. Our project has modern facilities like parking spaces, reliable electricity, and 24/7 security systems.
    We are dedicated to building long term relations with buyers. Our flexible payment plans are designed to make ownership easy. If you are looking to invest in a growing region with great potential returns, this is the perfect opportunity.`,
  },
  {
    name: "MediHealth Urgent Care",
    url: "https://medihealthurgent.com/clinics/austin-central",
    industry: "Healthcare",
    text: `Your Local Neighborhood Clinic Group. At our urgent care clinic, we treat our patients like family. We offer medical support for a lot of different common illnesses and injuries. We have state of the art clinics with clean waiting rooms and fully certified doctors. We are located right in the center of town and you don't even need an appointment to walk in.
    We accept most major insurance plans and keep our treatment rates extremely low for self-paying patients too.`,
  },
];

export interface SupportTicket {
  id: string;
  customer: string;
  company: string;
  tier: string;
  subject: string;
  body: string;
  sentiment: string;
}

export const SUPPORT_TICKETS: SupportTicket[] = [
  {
    id: "TCK-2041",
    customer: "Sarah Jenkins",
    company: "Sarah Jenkins Designs",
    tier: "Free",
    sentiment: "Anxious",
    subject: "Double charge on standard monthly subscription",
    body: `I noticed I was charged twice ($15.00 each) on June 25th for my monthly standard subscription. I only signed up for a single plan. Could you check my account, refund the duplicate charge, and ensure my billing cycle is correct?
    Logs: duplicate Stripe webhook event received with transaction reference tx_82937 (evt_charge_succeeded_abc123). Redundant charge registered.`,
  },
  {
    id: "TCK-5092",
    customer: "Marcus Chen",
    company: "Acme Corporation",
    tier: "Enterprise",
    sentiment: "Neutral",
    subject: "Webhook signature verification fails consistently with 401",
    body: `Every webhook delivery dispatch fails signature verification, returning a 401. We configured 'WH_SECRET' from the dashboard but comparing HMAC-SHA256 to your X-Signature-SHA256 header fails. Are you using a different algorithm, or is the secret rotating?
    Logs: Request header X-Signature-SHA256: 8a90fd3fb2938a103c8928de. Delivery attempt 1 failed. Verification mismatch logged.`,
  },
  {
    id: "TCK-9011",
    customer: "Evelyn Martinez",
    company: "Global Logistics Inc.",
    tier: "Enterprise",
    sentiment: "Frustrated",
    subject: "Severe API latency spikes & continuous 504 Gateway Timeouts",
    body: `Our dispatch dashboard is broken. Every API call hangs 30s+ then fails with 504. This is a production incident — logistics teams cannot route trucks. No changes on our side. Need immediate investigation.
    Logs: DB connection pool exhaustion 100/100. Connection acquire timeout after 15000ms. PSQLException: Cannot get connection from source. Locked by uncommitted write transaction #8912.`,
  },
];

export interface SkuRow {
  sku: string;
  segment: string;
  cost: number;
  price: number;
  units: number;
}

export const SKU_ROWS: SkuRow[] = [
  { sku: "S1", segment: "Starter", cost: 12, price: 19, units: 410 },
  { sku: "S2", segment: "Growing", cost: 34, price: 59, units: 122 },
  { sku: "S3", segment: "Scale", cost: 58, price: 99, units: 64 },
  { sku: "S4", segment: "Enterprise", cost: 88, price: 149, units: 41 },
  { sku: "S5", segment: "Add-on seat", cost: 4, price: 9, units: 640 },
];