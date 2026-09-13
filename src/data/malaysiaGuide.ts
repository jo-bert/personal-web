export interface GuideTopic {
  id: string;
  category: "neighborhoods" | "transit" | "finances" | "lifestyle" | "visas";
  title: string;
  badge: string;
  summary: string;
  tips: string[];
  recommendedAppsOrLinks: { name: string; url: string; note: string }[];
}

export const MALAYSIA_GUIDE_DATA: GuideTopic[] = [
  {
    id: "neighborhoods-guide",
    category: "neighborhoods",
    title: "Where to Live in KL for Techies & Expats",
    badge: "Housing & Vibes",
    summary: "Kuala Lumpur offers incredible value for high-rise living with rooftop pools, gym amenities, and quick transit access. Here is the curated breakdown of top areas for remote workers and engineering leads.",
    tips: [
      "Bangsar South (Kerinchi): The tech corridor. Home to numerous MNC tech offices, MSC-status buildings, superb dining at The Sphere, and direct LRT access via Universiti / Kerinchi stations.",
      "Mont Kiara: Expat-dense haven with upscale grocery stores (Jaya Grocer, Qra, Village Grocer) and walkable cafe rows. Requires a car or Grab as rail transit is a short drive away.",
      "KLCC & Bukit Bintang: High-density city living, walkable to Petronas Towers, major malls, and MRT/LRT interchanges. Ideal if you want buzzing city nightlife and zero commute.",
      "Petaling Jaya (Damansara / TTDI): Leafy, culinary epicenter of Selangor with lush parks (Taman Rimba Kiara), indie specialty coffee roasters, and direct MRT Kajang line access."
    ],
    recommendedAppsOrLinks: [
      { name: "PropertyGuru MY", url: "https://www.propertyguru.com.my", note: "Best portal for condo rentals" },
      { name: "iProperty", url: "https://www.iproperty.com.my", note: "Comprehensive property listings" },
      { name: "Speedhome", url: "https://speedhome.com", note: "Zero-deposit rental platform" }
    ]
  },
  {
    id: "transit-guide",
    category: "transit",
    title: "Mastering KL Transit & Toll Highways",
    badge: "Commuting",
    summary: "KL's rail network has expanded dramatically with the MRT Putrajaya and Kajang lines. When driving or taking rideshares, smart transit cards are essential.",
    tips: [
      "Get a Touch 'n Go NFC card immediately: Tap to pay for LRT, MRT, Monorail, and buses. You can reload it directly via NFC on your phone with the TnG eWallet.",
      "My50 Unlimited Travel Pass: If you are a Malaysian citizen or long-term pass holder commuting daily, RM50/month gives unlimited RapidKL rail and bus rides.",
      "TnG RFID for Cars: Install an RFID toll sticker to breeze through toll plazas without winding down windows in heavy tropical rain.",
      "Grab & AirAsia Ride: Grab is ubiquitous for rides and food delivery, while AirAsia Ride can be 10-20% cheaper during off-peak hours."
    ],
    recommendedAppsOrLinks: [
      { name: "Touch 'n Go eWallet", url: "https://www.touchngo.com.my", note: "Essential for transit, tolls & DuitNow QR" },
      { name: "Pulse by RapidKL", url: "https://myrapid.com.my", note: "Real-time LRT/MRT train schedules" },
      { name: "Grab", url: "https://www.grab.com/my", note: "Superapp for rides, food, and parcel delivery" }
    ]
  },
  {
    id: "cashless-finances",
    category: "finances",
    title: "Cashless Society & Banking Setup",
    badge: "Finances & DuitNow",
    summary: "Malaysia is almost entirely cashless. From roadside night markets (Pasar Malam) to premier dining, DuitNow QR code payments are universally accepted.",
    tips: [
      "DuitNow QR is King: Any local banking app (Maybank MAE, CIMB OCTO) or eWallet (TnG) can scan the pink DuitNow QR code anywhere in the country.",
      "Wise Multi-Currency Account: Outstanding for expat transfers and paying with local MYR without excessive bank FX fees.",
      "High-speed Fiber for Cheap: 500 Mbps fiber internet (TIME DotCom or Unifi) is standard and costs only ~RM139/month (~$30 USD). Perfect for home engineering labs.",
      "Utilities in Your Phone: Pay electricity (TNB) and water bills directly in banking apps or via the myTNB app."
    ],
    recommendedAppsOrLinks: [
      { name: "Wise", url: "https://wise.com", note: "Low-fee MYR conversion and international debit card" },
      { name: "MAE by Maybank", url: "https://www.maybank2u.com.my", note: "Top digital banking app in Malaysia" },
      { name: "TIME Internet", url: "https://www.time.com.my", note: "Ultra-fast low-latency fiber for engineers" }
    ]
  },
  {
    id: "food-lifestyle",
    category: "lifestyle",
    title: "The Ultimate Food & Night-Owl Coding Scene",
    badge: "Food & Culture",
    summary: "Malaysia's food scene is among the world's most vibrant, fusing Malay, Chinese, Indian, and Peranakan traditions. Plus, 24-hour mamak stalls are legendary meeting spots.",
    tips: [
      "Mamak Culture: 24/7 eateries like Restoran Devi's Corner or Pelita. Order Roti Canai Banjir, Teh Tarik Kurang Manis (less sweet), and Mee Goreng Mamak.",
      "Legendary Nasi Lemak: Visit Village Park in Damansara Utama (crispy spiced fried chicken) or Nasi Lemak Wanjo in Kampung Baru for authentic sambal.",
      "Banana Leaf Rice: Sri Nirwana Maju in Bangsar or Vishalatchi in Brickfields for soul-warming curry rice on fresh banana leaves.",
      "Work-friendly Cafes: Check out Feeka Coffee Roasters (Changkat), VCR (Pudu), or Bean Brothers (Sunway Damansara) for stable Wi-Fi and artisan flat whites."
    ],
    recommendedAppsOrLinks: [
      { name: "Burpple KL", url: "https://www.burpple.com/my", note: "Food reviews and cafe guides" },
      { name: "EatDrinkKL", url: "https://www.eatdrinkkl.com", note: "New restaurant openings & dining reviews" },
      { name: "Common Ground", url: "https://www.commonground.work", note: "Coworking spaces across KL" }
    ]
  },
  {
    id: "visas-passes",
    category: "visas",
    title: "Visas & Tech Employment Passes",
    badge: "Immigration",
    summary: "Key visa pathways for engineering talent, digital nomads, and expats looking to base themselves in Malaysia.",
    tips: [
      "Employment Pass (EP Category I & II): Sponsored by hiring companies (e.g. MNCs like Accenture). Provides 2 to 5 years duration with dependent pass eligibility.",
      "DE Rantau Nomad Pass: Introduced by MDEC for remote tech workers and digital nomads. Requires proof of remote income ($24,000/yr minimum) and grants up to 2 years stay.",
      "MDEC Tech Placement: For MSC-status technology companies, fast-tracked processing for foreign tech professionals is available through MDEC expat portals."
    ],
    recommendedAppsOrLinks: [
      { name: "MDEC DE Rantau", url: "https://mdec.my/derantau", note: "Official digital nomad visa portal" },
      { name: "ESD Immigration MY", url: "https://esd.imi.gov.my", note: "Expatriate Services Division portal" }
    ]
  }
];
