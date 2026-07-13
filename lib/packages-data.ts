export interface PackageItineraryDay {
  day: number;
  title: string;
  desc: string;
}

export interface Package {
  id: string;
  title: string;
  destination: string;
  description: string;
  image: string;
  images: string[];
  duration: number;
  rating: number;
  reviews: number;
  bestTime: string;
  groupSize: string;
  highlights: string[];
}

export const PACKAGES: Package[] = [
  {
    id: "p1",
    title: "Royal Rajasthan Desert & Palace Trail",
    destination: "Rajasthan",
description: "Embark on an unforgettable journey through the royal heart of India, where magnificent forts, grand palaces, vibrant bazaars, serene lakes, and endless golden deserts narrate stories of a glorious past. Discover the regal charm of Jaipur's architectural marvels, wander through the iconic blue lanes of Jodhpur, experience the magical sand dunes and desert culture of Jaisalmer, and soak in the romantic beauty of Udaipur's shimmering lakes and palaces. Continue your adventure to the peaceful hill station of Mount Abu, offering lush landscapes, scenic viewpoints, and ancient temples. From thrilling camel safaris and mesmerizing folk performances to authentic Rajasthani cuisine, colorful handicrafts, and timeless traditions, every moment of this journey reflects Rajasthan's rich heritage, warm hospitality, and unmatched cultural splendor, creating memories that will last a lifetime.",
    image: "/packagesPage/rajasthan/img1.jpg",
    images: [
      "/packagesPage/rajasthan/img1.jpg",
      "/packagesPage/rajasthan/img2.jpg",
      "/packagesPage/rajasthan/img3.jpg",
    ],
    duration: 7,
    rating: 4.8,
    reviews: 94,
    bestTime: "October – March",
    groupSize: "2 – 15 People",

highlights: [
  "Jaipur – Amber Fort, Hawa Mahal & City Palace",
  "Jodhpur – Mehrangarh Fort & Blue City Walk",
  "Jaisalmer – Golden Fort & Desert Camel Safari",
  "Udaipur – Lake Pichola Boat Ride & City Palace",
  "Mount Abu – Nakki Lake & Dilwara Temples",
  "Traditional Rajasthani Folk Dance & Music",
  "Authentic Local Cuisine & Shopping",
  "Comfortable Guided Sightseeing Throughout the Tour",
],
  },
  {
    id: "p2",
    title: "Uttarakhand Himalayan Pilgrimage & Hills",
    destination: "Uttarakhand",
    description:
      "Sacred rivers, misty hill stations, and snow-lined peaks in the lap of the Himalayas.",
    image: "https://images.unsplash.com/photo-1626621341169-7a1935ec6533",
    images: [
      "https://images.unsplash.com/photo-1626621341169-7a1935ec6533",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      "https://images.unsplash.com/photo-1561731216-c3a4d99437d5",
    ],
    price: 749,
    duration: 8,
    rating: 4.8,
    reviews: 76,
    bestTime: "May – Jun, Sep – Nov",
    groupSize: "4 – 20 People",
    highlights: [
      "Rishikesh Ganga Aarti",
      "Nainital Lake Views",
      "Kedarnath & Badrinath Temples",
    ],
    included: [
      "Accommodation",
      "All Meals",
      "Transport",
      "Puja Arrangements",
      "Guide",
    ],
    excluded: [
      "Flights",
      "Personal Puja Items",
      "Travel Insurance",
      "Helicopter Tickets",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Haridwar",
        desc: "Arrive in Haridwar, check-in to your hotel, and attend the magical Ganga Aarti at Har Ki Pauri.",
      },
      {
        day: 2,
        title: "Rishikesh Exploration",
        desc: "Visit Laxman Jhula, Ram Jhula, and yoga ashrams. Optional white-water rafting on the Ganges.",
      },
      {
        day: 3,
        title: "Drive to Nainital",
        desc: "Scenic drive to the lake district of Nainital. Evening boat ride on Naini Lake.",
      },
      {
        day: 4,
        title: "Nainital Sightseeing",
        desc: "Visit Naina Devi Temple, Snow View Point, and the charming Mall Road.",
      },
      {
        day: 5,
        title: "Journey to Kedarnath Base",
        desc: "Travel to Gaurikund for overnight stay before the Kedarnath trek.",
      },
      {
        day: 6,
        title: "Kedarnath Darshan",
        desc: "Trek to the sacred Kedarnath Temple at 3,583 m. Evening prayers and return.",
      },
      {
        day: 7,
        title: "Badrinath Darshan",
        desc: "Drive to Badrinath Temple, one of the Char Dham pilgrimage sites.",
      },
      {
        day: 8,
        title: "Return & Departure",
        desc: "Return journey to Haridwar / Dehradun for onward departure.",
      },
    ],
  },
  {
    id: "p3",
    title: "Himachal Valleys & Mountain Passes Tour",
    destination: "Himachal Pradesh",
    description:
      "Pine-scented valleys, colonial hill towns, and high-altitude roads through the mountains.",
    image: "https://images.unsplash.com/photo-1626624340642-d055c26e0af0",
    images: [
      "https://images.unsplash.com/photo-1626624340642-d055c26e0af0",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c",
    ],
    price: 799,
    duration: 6,
    rating: 4.7,
    reviews: 61,
    bestTime: "Mar – Jun, Sep – Nov",
    groupSize: "2 – 12 People",
    highlights: ["Shimla Mall Road", "Manali & Kasol", "Spiti Valley Drive"],
    included: [
      "Hotel & Homestay",
      "Breakfast & Dinner",
      "AC Vehicle",
      "Sightseeing",
      "Driver",
    ],
    excluded: ["Flights", "Lunch", "Personal Expenses", "Travel Insurance"],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Shimla",
        desc: "Arrive in Shimla, walk the famous Mall Road, and visit Christ Church and The Ridge.",
      },
      {
        day: 2,
        title: "Shimla to Kasauli & Kufri",
        desc: "Day trips to Kufri for snow views and Kasauli for colonial-era charm.",
      },
      {
        day: 3,
        title: "Drive to Manali",
        desc: "Scenic drive through Kullu Valley along the Beas river. Arrive in Manali.",
      },
      {
        day: 4,
        title: "Manali Sightseeing",
        desc: "Visit Hadimba Temple, Vashisht Hot Springs, and Old Manali village.",
      },
      {
        day: 5,
        title: "Spiti Valley Day Drive",
        desc: "Drive through Rohtang Pass to glimpse the stark, lunar landscape of Spiti.",
      },
      {
        day: 6,
        title: "Kasol & Departure",
        desc: "Morning stop at Kasol riverside hamlet; afternoon departure.",
      },
    ],
  },
  {
    id: "p4",
    title: "Lonavala-Matheran Monsoon Getaway",
    destination: "Maharashtra",
    description:
      "Cascading waterfalls, viewpoint trails, and forested hill forts near Mumbai and Pune.",
    image: "https://images.unsplash.com/photo-1580889240911-96b3f5cf5b4b",
    images: [
      "https://images.unsplash.com/photo-1580889240911-96b3f5cf5b4b",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    ],
    price: 349,
    duration: 3,
    rating: 4.5,
    reviews: 43,
    bestTime: "Jun – Sep",
    groupSize: "2 – 10 People",
    highlights: [
      "Tiger & Panorama Points",
      "Lohagad & Rajmachi Forts",
      "Pawna Lake Camping",
    ],
    included: [
      "Resort / Camping Stay",
      "Breakfast",
      "Transport",
      "Trekking Guide",
    ],
    excluded: [
      "Flights / Trains",
      "Dinner",
      "Personal Expenses",
      "Travel Insurance",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Lonavala",
        desc: "Check-in to resort, visit Bhushi Dam and Tiger's Leap viewpoint.",
      },
      {
        day: 2,
        title: "Fort Trek & Pawna Lake",
        desc: "Morning trek to Lohagad Fort; afternoon at Pawna Lake with optional camping.",
      },
      {
        day: 3,
        title: "Matheran & Departure",
        desc: "Morning nature walk in car-free Matheran; return in the afternoon.",
      },
    ],
  },
  {
    id: "p5",
    title: "Goa Beach & Nightlife Getaway",
    destination: "Goa",
    description:
      "Golden beaches, beach shacks, and laid-back Portuguese charm.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
    images: [
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
    ],
    price: 599,
    duration: 5,
    rating: 4.6,
    reviews: 112,
    bestTime: "Nov – Feb",
    groupSize: "2 – 20 People",
    highlights: [
      "Baga & Anjuna Beaches",
      "Fort Aguada & Chapora Fort",
      "Tito's Lane Nightlife",
    ],
    included: [
      "Beach Resort Stay",
      "Daily Breakfast",
      "Airport Transfers",
      "North & South Goa Tour",
    ],
    excluded: [
      "Flights",
      "Lunch & Dinner",
      "Water Sports",
      "Personal Expenses",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Goa",
        desc: "Airport pickup, check-in to beachside resort. Evening at Baga Beach.",
      },
      {
        day: 2,
        title: "North Goa Tour",
        desc: "Visit Fort Aguada, Calangute, Anjuna, and Vagator beaches. Sunset at Chapora Fort.",
      },
      {
        day: 3,
        title: "Old Goa & Heritage",
        desc: "Explore the Basilica of Bom Jesus, Se Cathedral, and Fontainhas Latin Quarter.",
      },
      {
        day: 4,
        title: "South Goa Beaches",
        desc: "Relax on the serene sands of Palolem and Colva beaches; sunset at Benaulim.",
      },
      {
        day: 5,
        title: "Leisure & Departure",
        desc: "Morning leisure at the beach; afternoon airport transfer for departure.",
      },
    ],
  },
  {
    id: "p6",
    title: "Ladakh Himalayan Road Trip",
    destination: "Ladakh",
    description:
      "High-altitude lakes and Buddhist monasteries amid stark, moon-like peaks.",
    image: "https://images.unsplash.com/photo-1626621341169-7a1935ec6533",
    images: [
      "https://images.unsplash.com/photo-1626621341169-7a1935ec6533",
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    ],
    price: 1099,
    duration: 8,
    rating: 4.9,
    reviews: 88,
    bestTime: "Jun – Sep",
    groupSize: "2 – 10 People",
    highlights: [
      "Pangong & Tso Moriri Lakes",
      "Khardung La Pass",
      "Nubra Valley Sand Dunes",
    ],
    included: [
      "Guesthouse & Hotel Stays",
      "All Meals",
      "4WD Transport",
      "Permits",
      "Guide",
    ],
    excluded: [
      "Flights to Leh",
      "Travel Insurance",
      "Personal Expenses",
      "Oxygen Cylinder",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Leh – Acclimatize",
        desc: "Arrive in Leh (3,500 m). Rest and acclimatize. Light walk in the local market.",
      },
      {
        day: 2,
        title: "Leh Monastery Trail",
        desc: "Visit Hemis, Thiksey, and Rancho School (3 Idiots filming location).",
      },
      {
        day: 3,
        title: "Khardung La & Nubra Valley",
        desc: "Cross Khardung La (world's highest motorable pass) into Nubra Valley.",
      },
      {
        day: 4,
        title: "Bactrian Camel Safari – Hunder",
        desc: "Sand dunes of Hunder with double-humped Bactrian camel ride.",
      },
      {
        day: 5,
        title: "Nubra to Pangong Lake",
        desc: "Epic drive to turquoise Pangong Tso (4,350 m); night in tent camp.",
      },
      {
        day: 6,
        title: "Pangong Sunrise & Tso Moriri",
        desc: "Sunrise over the lake then drive to Tso Moriri for overnight.",
      },
      {
        day: 7,
        title: "Return to Leh",
        desc: "Scenic return through Mahe Bridge and Upshi. Evening at leisure in Leh.",
      },
      {
        day: 8,
        title: "Departure",
        desc: "Morning airport transfer for departure.",
      },
    ],
  },
  {
    id: "p7",
    title: "Darjeeling Hills & Toy Train Escape",
    destination: "Darjeeling",
    description:
      "Tea-covered slopes, Himalayan sunrise views, and a heritage mountain railway.",
    image: "https://images.unsplash.com/photo-1544634076-a90160ddf22e",
    images: [
      "https://images.unsplash.com/photo-1544634076-a90160ddf22e",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c",
    ],
    price: 649,
    duration: 4,
    rating: 4.7,
    reviews: 55,
    bestTime: "Mar – May, Sep – Nov",
    groupSize: "2 – 12 People",
    highlights: [
      "Tiger Hill Sunrise",
      "Darjeeling Himalayan Railway",
      "Batasia Loop & Ghoom Monastery",
    ],
    included: [
      "Heritage Hotel Stay",
      "Breakfast & Dinner",
      "Toy Train Ride",
      "Sightseeing",
      "Guide",
    ],
    excluded: [
      "Flights / Trains to NJP",
      "Lunch",
      "Personal Expenses",
      "Travel Insurance",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive & Mall Road Walk",
        desc: "Arrive in Darjeeling, check-in to a heritage hotel, evening on Mall Road.",
      },
      {
        day: 2,
        title: "Tiger Hill Sunrise",
        desc: "Early-morning drive to Tiger Hill for views of Kanchenjunga; visit Ghoom Monastery and Batasia Loop.",
      },
      {
        day: 3,
        title: "Toy Train & Tea Garden",
        desc: "Joyride on the UNESCO World Heritage Toy Train; tour a working tea garden and factory.",
      },
      {
        day: 4,
        title: "Rock Garden & Departure",
        desc: "Visit Rock Garden and Ganga Maya Park; afternoon departure.",
      },
    ],
  },
  {
    id: "p8",
    title: "Kerala Backwaters & Hill Station Retreat",
    destination: "Kerala",
    description:
      "Tea-clad hills, tranquil backwaters, and spice-scented forests in God's Own Country.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
    images: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000",
    ],
    price: 999,
    duration: 6,
    rating: 4.8,
    reviews: 103,
    bestTime: "Sep – Mar",
    groupSize: "2 – 15 People",
    highlights: [
      "Munnar Tea Gardens",
      "Vembanad Backwater Cruise",
      "Fort Kochi Heritage Walk",
    ],
    included: [
      "Resort & Houseboat Stay",
      "All Meals",
      "AC Transport",
      "Spice Plantation Tour",
      "Guide",
    ],
    excluded: [
      "Flights",
      "Personal Expenses",
      "Travel Insurance",
      "Ayurvedic Treatments",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Kochi",
        desc: "Arrive in Fort Kochi; explore the Chinese Fishing Nets and Jew Town antique market.",
      },
      {
        day: 2,
        title: "Fort Kochi Heritage Walk",
        desc: "Walk through colonial Mattancherry, visit Dutch Palace and St. Francis Church.",
      },
      {
        day: 3,
        title: "Drive to Munnar",
        desc: "Scenic drive through rubber and spice plantations to the hill station of Munnar.",
      },
      {
        day: 4,
        title: "Munnar Tea & Nature",
        desc: "Visit TATA Tea Museum, Eravikulam National Park, and Top Station viewpoint.",
      },
      {
        day: 5,
        title: "Alleppey Houseboat Cruise",
        desc: "Drive to Alleppey; board a traditional houseboat for an overnight backwater cruise.",
      },
      {
        day: 6,
        title: "Houseboat Morning & Departure",
        desc: "Morning cruise through palm-fringed canals; disembark and depart.",
      },
    ],
  },
  {
    id: "p9",
    title: "Magical Maldives Honeymoon Escape",
    destination: "Maldives",
    description: "Where turquoise lagoons meet private overwater luxury.",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
    images: [
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
    ],
    price: 1299,
    duration: 5,
    rating: 4.9,
    reviews: 128,
    bestTime: "Nov – Apr",
    groupSize: "2 – 12 People",
    highlights: [
      "Sea of Stars Bioluminescence",
      "Private Resort Beaches",
      "Sandbank Island Hopping",
    ],
    included: [
      "Airport Transfers",
      "Overwater Villa Stay",
      "All Meals",
      "Snorkeling Equipment",
      "Welcome Spa Session",
    ],
    excluded: [
      "International Flights",
      "Personal Expenses",
      "Travel Insurance",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Paradise",
        desc: "Arrive at Malé airport and transfer via speedboat to your luxury resort. Check-in and welcome dinner by the ocean.",
      },
      {
        day: 2,
        title: "Snorkeling Adventure",
        desc: "Guided snorkeling tour of the house reef to see vibrant marine life, colorful coral, and tropical fish.",
      },
      {
        day: 3,
        title: "Spa & Relaxation",
        desc: "Enjoy an indulgent couples spa session followed by a romantic sunset cruise with cocktails.",
      },
      {
        day: 4,
        title: "Private Beach Dinner",
        desc: "A special candlelight dinner setup exclusively for you on the pristine white sand beach under the stars.",
      },
      {
        day: 5,
        title: "Departure",
        desc: "Leisurely breakfast at the villa, then speedboat transfer back to Malé airport.",
      },
    ],
  },
  {
    id: "p10",
    title: "Thailand Island & City Explorer",
    destination: "Thailand",
    description:
      "Buzzing temples and markets in Bangkok give way to limestone cliffs and island beaches down south.",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a",
    images: [
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    ],
    price: 999,
    duration: 8,
    rating: 4.8,
    reviews: 97,
    bestTime: "Nov – Apr",
    groupSize: "2 – 16 People",
    highlights: [
      "Bangkok Grand Palace",
      "Phuket & Krabi Beaches",
      "Phi Phi Islands Boat Tour",
    ],
    included: [
      "Hotel Stays",
      "Breakfast",
      "Airport Transfers",
      "Island Tour",
      "City Tour Guide",
    ],
    excluded: [
      "International Flights",
      "Visa Fees",
      "Lunch & Dinner",
      "Personal Expenses",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Bangkok",
        desc: "Arrive in Bangkok, check-in, and explore the vibrant street food scene of Silom.",
      },
      {
        day: 2,
        title: "Bangkok Temples & Markets",
        desc: "Visit the Grand Palace, Wat Pho, and the floating markets of Damnoen Saduak.",
      },
      {
        day: 3,
        title: "Chatuchak & Chinatown",
        desc: "Morning at Chatuchak weekend market; evening street food tour of Yaowarat Chinatown.",
      },
      {
        day: 4,
        title: "Fly to Phuket",
        desc: "Morning flight to Phuket; afternoon at Patong Beach.",
      },
      {
        day: 5,
        title: "Phi Phi Islands Tour",
        desc: "Full-day speedboat tour to Phi Phi Islands, Maya Bay, and snorkeling spots.",
      },
      {
        day: 6,
        title: "Phuket to Krabi",
        desc: "Ferry to Krabi; afternoon at Railay Beach accessible only by boat.",
      },
      {
        day: 7,
        title: "Krabi Kayaking & 4-Island Tour",
        desc: "Four-island tour by longtail boat; sea kayaking through limestone caves.",
      },
      {
        day: 8,
        title: "Departure",
        desc: "Morning leisure; afternoon flight back to Bangkok for international departure.",
      },
    ],
  },
  {
    id: "p11",
    title: "Singapore City & Sentosa Adventure",
    destination: "Singapore",
    description:
      "Futuristic skylines, lush gardens, and island theme parks in a spotless city-state.",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd",
    images: [
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
    ],
    price: 1099,
    duration: 5,
    rating: 4.8,
    reviews: 82,
    bestTime: "Feb – Apr",
    groupSize: "2 – 20 People",
    highlights: [
      "Marina Bay Sands & Gardens by the Bay",
      "Sentosa Universal Studios",
      "Chinatown & Haji Lane",
    ],
    included: [
      "Hotel Stay",
      "Breakfast",
      "Airport Transfers",
      "City Tour",
      "Universal Studios Entry",
    ],
    excluded: [
      "International Flights",
      "Visa",
      "Lunch & Dinner",
      "Personal Expenses",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Singapore",
        desc: "Arrive via Changi Airport (voted world's best); check-in and evening on Orchard Road.",
      },
      {
        day: 2,
        title: "Marina Bay & Gardens by the Bay",
        desc: "Visit Marina Bay Sands SkyPark, ArtScience Museum, and the Supertree Grove light show.",
      },
      {
        day: 3,
        title: "Sentosa Island – Universal Studios",
        desc: "Full day at Universal Studios Singapore and Adventure Cove Waterpark.",
      },
      {
        day: 4,
        title: "Cultural Quarters",
        desc: "Explore Chinatown, Little India, and Haji Lane; evening at Clarke Quay riverfront.",
      },
      {
        day: 5,
        title: "Departure",
        desc: "Morning leisure at Jewel Changi Airport; afternoon international departure.",
      },
    ],
  },
  {
    id: "p12",
    title: "Dubai Skyline & Desert Extravaganza",
    destination: "Dubai",
    description:
      "Record-breaking towers, golden dunes, and man-made islands in the heart of the desert.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    images: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
      "https://images.unsplash.com/photo-1539635278303-d4002c07eae3",
      "https://images.unsplash.com/photo-1548813395-7b5f49945a62",
    ],
    price: 1399,
    duration: 5,
    rating: 4.8,
    reviews: 119,
    bestTime: "Nov – Mar",
    groupSize: "2 – 20 People",
    highlights: [
      "Burj Khalifa & Dubai Mall",
      "Desert Safari",
      "Palm Jumeirah & Atlantis Aquaventure",
    ],
    included: [
      "Hotel Stay",
      "Breakfast",
      "Airport Transfers",
      "Desert Safari BBQ",
      "City Tour",
    ],
    excluded: [
      "International Flights",
      "Visa Fees",
      "Lunch & Dinner",
      "Personal Expenses",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Dubai",
        desc: "Arrive at DXB Airport; transfer to hotel. Evening stroll at Dubai Creek.",
      },
      {
        day: 2,
        title: "Downtown & Burj Khalifa",
        desc: "Visit the world's tallest building, Dubai Mall, and the Dubai Fountain show.",
      },
      {
        day: 3,
        title: "Desert Safari",
        desc: "Afternoon dune bashing in 4WDs; camel ride, sandboarding, and BBQ dinner under the stars.",
      },
      {
        day: 4,
        title: "Palm Jumeirah & Atlantis",
        desc: "Monorail ride to Palm Jumeirah; enjoy Aquaventure Waterpark at Atlantis.",
      },
      {
        day: 5,
        title: "Gold Souk & Departure",
        desc: "Morning visit to Gold and Spice Souks; afternoon airport transfer.",
      },
    ],
  },
  {
    id: "p13",
    title: "Lakshadweep Coral Island Paradise",
    destination: "Lakshadweep",
    description:
      "Untouched coral atolls and lagoon-blue waters in India's most secluded island chain.",
    image: "https://images.unsplash.com/photo-1586500036706-41963de24d8b",
    images: [
      "https://images.unsplash.com/photo-1586500036706-41963de24d8b",
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    ],
    price: 1249,
    duration: 6,
    rating: 4.8,
    reviews: 44,
    bestTime: "Oct – May",
    groupSize: "2 – 10 People",
    highlights: [
      "Agatti & Bangaram Islands",
      "Kadmat Coral Reefs",
      "Kavaratti Lagoon Watersports",
    ],
    included: [
      "Flight Kochi–Agatti",
      "Beach Resort Stay",
      "All Meals",
      "Snorkeling & Kayaking",
      "Island Tour",
    ],
    excluded: [
      "Flights to Kochi",
      "Alcohol",
      "Scuba Diving (extra)",
      "Personal Expenses",
    ],
    itinerary: [
      {
        day: 1,
        title: "Fly to Agatti Island",
        desc: "Flight from Kochi to Agatti; arrive at lagoon resort. Afternoon snorkeling.",
      },
      {
        day: 2,
        title: "Bangaram Atoll Day Trip",
        desc: "Boat trip to uninhabited Bangaram for pristine snorkeling and beachcombing.",
      },
      {
        day: 3,
        title: "Kadmat Coral Reef Dive",
        desc: "Guided snorkeling over Kadmat's famous coral garden; glass-bottom boat ride.",
      },
      {
        day: 4,
        title: "Kavaratti Watersports",
        desc: "Speedboat to Kavaratti; kayaking, windsurfing, and lagoon swimming.",
      },
      {
        day: 5,
        title: "Leisure & Sunset Cruise",
        desc: "Full leisure day on Agatti beach; evening sunset dolphin cruise.",
      },
      {
        day: 6,
        title: "Departure",
        desc: "Morning flight back to Kochi for onward journey.",
      },
    ],
  },
  {
    id: "p14",
    title: "Vietnam Heritage & Bay Discovery",
    destination: "Vietnam",
    description:
      "Emerald limestone bays, ancient towns, and vibrant cities from north to south.",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592",
    images: [
      "https://images.unsplash.com/photo-1528127269322-539801943592",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    ],
    price: 1149,
    duration: 9,
    rating: 4.8,
    reviews: 71,
    bestTime: "Feb – Apr, Aug – Oct",
    groupSize: "2 – 16 People",
    highlights: [
      "Ha Long Bay Cruise",
      "Hoi An Ancient Town",
      "Ho Chi Minh City & Mekong Delta",
    ],
    included: [
      "Hotel & Cruise Stay",
      "Breakfast & Dinner",
      "Internal Flights",
      "City Tours",
      "Guide",
    ],
    excluded: [
      "International Flights",
      "Visa on Arrival Fees",
      "Lunch",
      "Personal Expenses",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Hanoi",
        desc: "Arrive in Hanoi; explore Hoan Kiem Lake and the Old Quarter's street food.",
      },
      {
        day: 2,
        title: "Hanoi City Tour",
        desc: "Visit Ho Chi Minh Mausoleum, Temple of Literature, and the Puppet Theatre.",
      },
      {
        day: 3,
        title: "Ha Long Bay Cruise Embark",
        desc: "Drive to Ha Long; board a junk boat and cruise among 2,000 limestone islets.",
      },
      {
        day: 4,
        title: "Ha Long Bay – Kayaking & Caves",
        desc: "Morning kayaking through hidden lagoons; explore Sung Sot cave.",
      },
      {
        day: 5,
        title: "Fly to Da Nang & Hoi An",
        desc: "Disembark and fly south; afternoon exploring Hoi An Ancient Town.",
      },
      {
        day: 6,
        title: "Hoi An Lanterns & Tailors",
        desc: "Morning cooking class; evening lantern-lit riverside walk in Hoi An.",
      },
      {
        day: 7,
        title: "Fly to Ho Chi Minh City",
        desc: "Morning flight to HCMC; afternoon Cu Chi Tunnels tour.",
      },
      {
        day: 8,
        title: "Mekong Delta Day Trip",
        desc: "Boat through the Mekong Delta; visit floating markets and orchid gardens.",
      },
      {
        day: 9,
        title: "HCMC & Departure",
        desc: "Morning visit to War Remnants Museum; afternoon international departure.",
      },
    ],
  },
  {
    id: "p15",
    title: "Russia Grand Rail & City Journey",
    destination: "Russia",
    description:
      "Onion-domed skylines, Siberian wilderness, and one of the world's great rail journeys.",
    image: "https://images.unsplash.com/photo-1547448415-e9f5b28e570d",
    images: [
      "https://images.unsplash.com/photo-1547448415-e9f5b28e570d",
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    ],
    price: 2199,
    duration: 12,
    rating: 4.7,
    reviews: 38,
    bestTime: "May – Sep",
    groupSize: "4 – 12 People",
    highlights: [
      "Moscow & Saint Petersburg",
      "Lake Baikal",
      "Trans-Siberian Railway",
    ],
    included: [
      "Hotel Stays",
      "Breakfast & Dinner",
      "Train Passes",
      "City Tours",
      "English Guide",
    ],
    excluded: [
      "International Flights",
      "Visa Fees",
      "Lunch",
      "Personal Expenses",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Moscow",
        desc: "Arrive in Moscow; Red Square, St. Basil's Cathedral, and GUM department store.",
      },
      {
        day: 2,
        title: "Kremlin & Tretyakov Gallery",
        desc: "Inside the Kremlin; world-class Russian art at Tretyakov Gallery.",
      },
      {
        day: 3,
        title: "Moscow River Cruise & Metro",
        desc: "Boat cruise on the Moskva River; tour the ornate Moscow Metro stations.",
      },
      {
        day: 4,
        title: "High-Speed Train to St. Petersburg",
        desc: "Sapsan express train (4 hrs) to Russia's cultural capital.",
      },
      {
        day: 5,
        title: "Hermitage Museum",
        desc: "Full day at the Winter Palace / Hermitage, one of the world's greatest museums.",
      },
      {
        day: 6,
        title: "Peterhof & Canals",
        desc: "Visit the Peterhof Palace fountains; evening canal boat tour of 'Venice of the North'.",
      },
      {
        day: 7,
        title: "Trans-Siberian Departs",
        desc: "Board the Trans-Siberian Railway for the epic journey eastward.",
      },
      {
        day: 8,
        title: "Train – Ural Crossing",
        desc: "Cross the Ural Mountains, the natural boundary between Europe and Asia.",
      },
      {
        day: 9,
        title: "Arrive at Lake Baikal",
        desc: "Arrive at Irkutsk; transfer to Listvyanka on the shores of Lake Baikal.",
      },
      {
        day: 10,
        title: "Lake Baikal Exploration",
        desc: "Hike the Great Baikal Trail; visit the Baikal Museum and seal sanctuary.",
      },
      {
        day: 11,
        title: "Baikal to Irkutsk",
        desc: "Final morning on the lake; afternoon exploring Irkutsk's Siberian wooden architecture.",
      },
      {
        day: 12,
        title: "Departure",
        desc: "Transfer to Irkutsk airport for return international flight.",
      },
    ],
  },
];

export function getPackageById(id: string): Package | undefined {
  return PACKAGES.find((p) => p.id === id);
}
