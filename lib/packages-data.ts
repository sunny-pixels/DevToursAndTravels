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
        description:
            "Embark on an unforgettable journey through the royal heart of India, where magnificent forts, grand palaces, vibrant bazaars, serene lakes, and endless golden deserts narrate stories of a glorious past. Discover the regal charm of Jaipur's architectural marvels, wander through the iconic blue lanes of Jodhpur, experience the magical sand dunes and desert culture of Jaisalmer, and soak in the romantic beauty of Udaipur's shimmering lakes and palaces. Continue your adventure to the peaceful hill station of Mount Abu, offering lush landscapes, scenic viewpoints, and ancient temples. From thrilling camel safaris and mesmerizing folk performances to authentic Rajasthani cuisine, colorful handicrafts, and timeless traditions, every moment of this journey reflects Rajasthan's rich heritage, warm hospitality, and unmatched cultural splendor, creating memories that will last a lifetime.",
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
            "Journey into the spiritual soul of India, where the sacred Ganga flows down from snow-capped Himalayan peaks, ancient temples echo with centuries of devotion, and misty hill stations offer breathtaking views of nature at its purest. Begin your pilgrimage in the holy city of Haridwar, witnessing the divine Ganga Aarti as thousands of lamps float upon the river. Continue to Rishikesh, the world capital of yoga, where the Himalayas meet spirituality amidst ashrams, suspension bridges, and the rush of the sacred river. Ascend to the serene lake district of Nainital, with its emerald waters and colonial charm nestled among the hills. Undertake the revered Char Dham pilgrimage, trekking to the towering Kedarnath Temple and paying homage at the sacred shrine of Badrinath. From tranquil ashrams and panoramic mountain vistas to age-old rituals and warm Pahari hospitality, every step of this journey through Uttarakhand offers a soulful escape into the majesty of the Himalayas and the timeless traditions of the hills.",
        image: "/packagesPage/uttarakhand/img1.jpg",
        images: [
            "/packagesPage/uttarakhand/img1.jpg",
            "/packagesPage/uttarakhand/img2.jpg",
            "/packagesPage/uttarakhand/img3.jpg",
        ],
        duration: 8,
        rating: 4.8,
        reviews: 76,
        bestTime: "May – Jun, Sep – Nov",
        groupSize: "4 – 20 People",

        highlights: [
            "Haridwar – Ganga Aarti at Har Ki Pauri",
            "Rishikesh – Laxman Jhula, Ashrams & River Rafting",
            "Nainital – Naini Lake & Snow View Point",
            "Kedarnath – Sacred Himalayan Temple Trek",
            "Badrinath – Char Dham Pilgrimage Site",
            "Traditional Puja Arrangements & Rituals",
            "Scenic Himalayan Hill Station Views",
            "Comfortable Guided Sightseeing Throughout the Tour",
        ],
    },
    {
        id: "p3",
        title: "Himachal Valleys & Mountain Passes Tour",
        destination: "Himachal Pradesh",
        description:
            "Set out on a breathtaking journey through the pine-scented valleys and snow-dusted mountain passes of Himachal Pradesh, where colonial hill towns, gushing rivers, and dramatic high-altitude landscapes come together in perfect harmony. Begin in Shimla, the former summer capital of British India, strolling along the iconic Mall Road and soaking in colonial-era architecture. Venture through the lush Kullu Valley to reach Manali, a haven of alpine beauty framed by the Beas river and towering deodar forests. Cross the legendary Rohtang Pass to catch a glimpse of Spiti's stark, lunar-like terrain, a world apart from the green valleys below. Wind down in the riverside hamlet of Kasol, known for its laid-back charm and Himalayan backdrop. With scenic mountain drives, ancient temples, hot springs, and cozy hillside villages along the way, this journey through Himachal Pradesh promises the perfect blend of adventure, tranquility, and natural splendor.",
        image: "/packagesPage/himachal/img1.jpg",
        images: [
            "/packagesPage/himachal/img1.jpg",
            "/packagesPage/himachal/img2.jpg",
            "/packagesPage/himachal/img3.jpg",
        ],
        duration: 6,
        rating: 4.7,
        reviews: 61,
        bestTime: "Mar – Jun, Sep – Nov",
        groupSize: "2 – 12 People",

        highlights: [
            "Shimla – Mall Road, Christ Church & The Ridge",
            "Kufri & Kasauli – Snow Views & Colonial Charm",
            "Manali – Hadimba Temple & Old Manali Village",
            "Vashisht Hot Springs",
            "Rohtang Pass – Gateway to Spiti Valley",
            "Spiti Valley – Stark Lunar Landscape Drive",
            "Kasol – Riverside Himalayan Hamlet",
            "Comfortable Guided Sightseeing Throughout the Tour",
        ],
    },
    {
        id: "p4",
        title: "Lonavala-Matheran Monsoon Getaway",
        destination: "Maharashtra",
        description:
            "Escape into a lush, misty retreat just a short distance from Mumbai and Pune, where cascading waterfalls, cloud-kissed viewpoints, and centuries-old hill forts come alive with the arrival of the monsoon. Begin in Lonavala, admiring the gushing waters of Bhushi Dam and taking in sweeping valley views from Tiger's Leap. Trek up to the historic Lohagad Fort, perched high above the Sahyadri ranges, then unwind by the tranquil waters of Pawna Lake, with the option of a memorable lakeside camping experience under the open sky. Conclude your getaway in Matheran, India's only car-free hill station, where red-earth trails, dense forests, and panoramic viewpoints offer a peaceful, pollution-free escape. With refreshing waterfalls, scenic forts, lakeside camping, and quiet nature walks, this short but rejuvenating trip captures the very best of Maharashtra's monsoon magic.",
        image: "/packagesPage/maharashtra/img1.jpg",
        images: [
            "/packagesPage/maharashtra/img1.jpg",
            "/packagesPage/maharashtra/img2.jpg",
            "/packagesPage/maharashtra/img3.jpg",
        ],
        duration: 3,
        rating: 4.5,
        reviews: 43,
        bestTime: "Jun – Sep",
        groupSize: "2 – 10 People",

        highlights: [
            "Lonavala – Bhushi Dam & Tiger's Leap",
            "Lohagad Fort Trek",
            "Pawna Lake Camping",
            "Rajmachi Fort & Panorama Point",
            "Matheran – Car-Free Hill Station",
            "Scenic Monsoon Waterfalls & Valleys",
            "Peaceful Nature Walks & Red-Earth Trails",
            "Comfortable Guided Sightseeing Throughout the Tour",
        ],
    },
    {
        id: "p5",
        title: "Goa Beach & Nightlife Getaway",
        destination: "Goa",
        description:
            "Sink your feet into golden sands and soak up the laid-back Portuguese charm of India's favorite coastal escape. Begin at the lively Baga Beach, where the sea meets vibrant beach shacks and buzzing nightlife along Tito's Lane. Explore the historic ramparts of Fort Aguada and watch a spectacular sunset from the cliffside Chapora Fort, made famous by Bollywood. Wander through Old Goa's UNESCO-listed churches, including the Basilica of Bom Jesus and Se Cathedral, then lose yourself in the colorful lanes of Fontainhas, Goa's charming Latin Quarter. Head south to the serene, palm-fringed shores of Palolem and Colva, where the pace slows and the sunsets over Benaulim beach paint the sky in brilliant hues. From sun-soaked beaches and heritage churches to buzzing nightlife and quiet coastal escapes, this getaway captures every shade of Goa's irresistible charm.",
        image: "/packagesPage/goa/img1.jpg",
        images: [
            "/packagesPage/goa/img1.jpg",
            "/packagesPage/goa/img2.jpg",
            "/packagesPage/goa/img3.jpg",
        ],
        duration: 5,
        rating: 4.6,
        reviews: 112,
        bestTime: "Nov – Feb",
        groupSize: "2 – 20 People",

        highlights: [
            "Baga & Anjuna Beaches",
            "Fort Aguada & Chapora Fort",
            "Old Goa – Basilica of Bom Jesus & Se Cathedral",
            "Fontainhas – Latin Quarter Heritage Walk",
            "Palolem & Colva Beaches",
            "Sunset at Benaulim Beach",
            "Tito's Lane Nightlife",
            "Comfortable Guided Sightseeing Throughout the Tour",
        ],
    },
    {
        id: "p6",
        title: "Ladakh Himalayan Road Trip",
        destination: "Ladakh",
        description:
            "Venture into the raw, breathtaking beauty of Ladakh, where high-altitude lakes shimmer in shades of turquoise, ancient Buddhist monasteries cling to rugged cliffs, and stark, moon-like peaks stretch endlessly under vast blue skies. Begin in Leh, acclimatizing to the thin mountain air before exploring the spiritual heritage of Hemis and Thiksey monasteries. Cross the legendary Khardung La, one of the world's highest motorable passes, descending into the surreal sand dunes of Nubra Valley for a memorable Bactrian camel safari. Journey onward to the iconic Pangong Lake, its ever-changing blue waters framed by barren mountains, before continuing to the remote and serene Tso Moriri. With dramatic high-altitude drives, star-filled desert nights, warm Ladakhi hospitality, and centuries-old monastic traditions, this road trip through Ladakh is an unforgettable adventure into one of the most awe-inspiring landscapes on Earth.",
        image: "/packagesPage/ladakh/img1.jpg",
        images: [
            "/packagesPage/ladakh/img1.jpg",
            "/packagesPage/ladakh/img2.jpg",
            "/packagesPage/ladakh/img3.jpg",
        ],
        duration: 8,
        rating: 4.9,
        reviews: 88,
        bestTime: "Jun – Sep",
        groupSize: "2 – 10 People",

        highlights: [
            "Leh – Hemis & Thiksey Monasteries",
            "Khardung La – World's Highest Motorable Pass",
            "Nubra Valley – Bactrian Camel Safari",
            "Pangong Tso – Turquoise Himalayan Lake",
            "Tso Moriri – Remote High-Altitude Lake",
            "Rancho School – 3 Idiots Filming Location",
            "Star-Filled Desert Camping Nights",
            "Comfortable Guided Sightseeing Throughout the Tour",
        ],
    },
    {
        id: "p7",
        title: "Darjeeling Hills & Toy Train Escape",
        destination: "Darjeeling",
        description:
            "Discover the timeless charm of Darjeeling, where mist-covered tea gardens roll across the hillsides, Himalayan sunrises paint the sky above Kanchenjunga, and a heritage mountain railway winds its way through the clouds. Begin your journey with an evening stroll along the bustling Mall Road, soaking in the colonial-era charm of this beloved hill station. Rise before dawn for the iconic Tiger Hill sunrise, witnessing the Himalayas glow gold, then visit the sacred Ghoom Monastery and the scenic Batasia Loop. Hop aboard the UNESCO World Heritage Darjeeling Himalayan Railway, better known as the Toy Train, for a nostalgic ride through the hills, followed by a visit to a working tea garden and factory to witness the art of tea-making up close. Wander through the tranquil Rock Garden and Ganga Maya Park before bidding farewell to this enchanting hill town. With sweeping mountain views, fragrant tea estates, heritage rail journeys, and warm hospitality, this Darjeeling escape offers a perfect blend of nature, nostalgia, and Himalayan serenity.",
        image: "/packagesPage/darjeeling/img1.jpg",
        images: [
            "/packagesPage/darjeeling/img1.jpg",
            "/packagesPage/darjeeling/img2.jpg",
            "/packagesPage/darjeeling/img3.jpg",
        ],
        duration: 4,
        rating: 4.7,
        reviews: 55,
        bestTime: "Mar – May, Sep – Nov",
        groupSize: "2 – 12 People",

        highlights: [
            "Tiger Hill – Himalayan Sunrise & Kanchenjunga Views",
            "Darjeeling Himalayan Railway – UNESCO Toy Train",
            "Batasia Loop & Ghoom Monastery",
            "Working Tea Garden & Factory Tour",
            "Mall Road – Colonial Hill Town Charm",
            "Rock Garden & Ganga Maya Park",
            "Scenic Himalayan Hill Station Views",
            "Comfortable Guided Sightseeing Throughout the Tour",
        ],
    },
    {
        id: "p8",
        title: "Kerala Backwaters & Hill Station Retreat",
        destination: "Kerala",
        description:
            "Immerse yourself in the serene beauty of God's Own Country, where emerald tea-clad hills, tranquil backwaters, and spice-scented forests come together to create a truly rejuvenating escape. Begin in Fort Kochi, wandering past the iconic Chinese fishing nets and exploring the antique-lined lanes of Jew Town, before soaking in the colonial charm of the Dutch Palace and St. Francis Church. Ascend into the misty hills of Munnar, where sprawling tea gardens stretch as far as the eye can see, and wildlife roams free in Eravikulam National Park beneath the panoramic views of Top Station. Descend to Alleppey, the Venice of the East, and drift along swaying palm-fringed canals aboard a traditional houseboat, spending a peaceful night surrounded by the calm waters of the backwaters. From heritage walks and fragrant spice plantations to scenic hill views and unforgettable houseboat cruises, this Kerala retreat offers the perfect harmony of nature, culture, and tranquility.",
        image: "/packagesPage/kerala/img1.jpg",
        images: [
            "/packagesPage/kerala/img1.jpg",
            "/packagesPage/kerala/img2.jpg",
            "/packagesPage/kerala/img3.jpg",
        ],
        duration: 6,
        rating: 4.8,
        reviews: 103,
        bestTime: "Sep – Mar",
        groupSize: "2 – 15 People",

        highlights: [
            "Fort Kochi – Chinese Fishing Nets & Heritage Walk",
            "Mattancherry – Dutch Palace & St. Francis Church",
            "Munnar Tea Gardens & TATA Tea Museum",
            "Eravikulam National Park & Top Station",
            "Vembanad Backwater Houseboat Cruise",
            "Alleppey – Palm-Fringed Canal Views",
            "Spice Plantation Tour",
            "Comfortable Guided Sightseeing Throughout the Tour",
        ],
    },
    {
        id: "p9",
        title: "Magical Maldives Honeymoon Escape",
        destination: "Maldives",
        description:
            "Escape into a dreamlike paradise where turquoise lagoons meet private overwater luxury, and every sunset feels like it was made just for you. Arrive to a warm welcome dinner by the ocean, before diving into a guided snorkeling adventure through vibrant coral reefs teeming with tropical marine life. Indulge in an intimate couples spa session, followed by a romantic sunset cruise complete with cocktails and endless ocean views. Witness the surreal glow of the Sea of Stars bioluminescence lighting up the shoreline after dark, then hop between pristine sandbank islands surrounded by crystal-clear waters. Celebrate your love with an exclusive candlelight dinner set up on the beach beneath a sky full of stars. With private resort beaches, luxurious overwater villas, and moments of pure romance at every turn, this Maldives escape is the ultimate honeymoon retreat, crafted for couples seeking paradise, privacy, and unforgettable memories.",
        image: "/packagesPage/maldives/img1.jpg",
        images: [
            "/packagesPage/maldives/img1.jpg",
            "/packagesPage/maldives/img2.jpg",
            "/packagesPage/maldives/img3.jpg",
        ],
        duration: 5,
        rating: 4.9,
        reviews: 128,
        bestTime: "Nov – Apr",
        groupSize: "2 – 12 People",

        highlights: [
            "Private Overwater Villa Stay",
            "Guided Snorkeling – Vibrant Coral Reefs",
            "Couples Spa Session & Sunset Cruise",
            "Sea of Stars Bioluminescence",
            "Sandbank Island Hopping",
            "Private Candlelight Beach Dinner",
            "Pristine Private Resort Beaches",
            "Romantic Getaway Crafted for Couples",
        ],
    },
    {
        id: "p10",
        title: "Thailand Island & City Explorer",
        destination: "Thailand",
        description:
            "Experience the perfect blend of vibrant city life and tropical island paradise on this unforgettable journey through Thailand. Begin in bustling Bangkok, exploring the ornate Grand Palace and Wat Pho, wandering through the colorful floating markets of Damnoen Saduak, and savoring street food delights in the lively lanes of Chinatown's Yaowarat. Fly south to the sun-soaked shores of Phuket, unwinding on the golden sands of Patong Beach before embarking on a thrilling speedboat tour to the iconic Phi Phi Islands, with a stop at the world-famous Maya Bay for snorkeling amid crystal-clear waters. Continue to Krabi, where the boat-only Railay Beach offers a secluded slice of paradise, framed by dramatic limestone cliffs. Discover the region's stunning four-island tour by traditional longtail boat, and glide through hidden limestone caves on a sea kayaking adventure. From ancient temples and buzzing markets to postcard-perfect beaches and dramatic island landscapes, this journey captures the very best of Thailand's vibrant culture and natural beauty.",
        image: "/packagesPage/thailand/img1.jpg",
        images: [
            "/packagesPage/thailand/img1.jpg",
            "/packagesPage/thailand/img2.jpg",
            "/packagesPage/thailand/img3.jpg",
        ],
        duration: 8,
        rating: 4.8,
        reviews: 97,
        bestTime: "Nov – Apr",
        groupSize: "2 – 16 People",

        highlights: [
            "Bangkok – Grand Palace & Wat Pho",
            "Damnoen Saduak Floating Markets",
            "Chatuchak Market & Yaowarat Chinatown",
            "Phuket – Patong Beach",
            "Phi Phi Islands & Maya Bay Boat Tour",
            "Krabi – Railay Beach & Limestone Cliffs",
            "Four-Island Tour & Sea Kayaking",
            "Comfortable Guided Sightseeing Throughout the Tour",
        ],
    },
    {
        id: "p11",
        title: "Singapore City & Sentosa Adventure",
        destination: "Singapore",
        description:
            "Discover the perfect fusion of futuristic innovation and rich cultural heritage in Singapore, a spotless city-state where gleaming skylines meet lush green gardens and thrilling island adventures. Begin your journey with an evening stroll along the iconic Orchard Road, before marveling at the architectural wonder of Marina Bay Sands and the enchanting Supertree Grove light show at Gardens by the Bay. Spend a full day of excitement at Sentosa Island, home to Universal Studios Singapore and the thrilling water slides of Adventure Cove Waterpark. Immerse yourself in the city's vibrant cultural quarters, wandering through the bustling streets of Chinatown and Little India, and the trendy, colorful lanes of Haji Lane, before ending the evening along the lively Clarke Quay riverfront. With a seamless blend of modern marvels, cultural diversity, thrilling entertainment, and world-class hospitality, this Singapore getaway offers something extraordinary for every kind of traveler.",
        image: "/packagesPage/singapore/img1.jpg",
        images: [
            "/packagesPage/singapore/img1.jpg",
            "/packagesPage/singapore/img2.jpg",
            "/packagesPage/singapore/img3.jpg",
        ],
        duration: 5,
        rating: 4.8,
        reviews: 82,
        bestTime: "Feb – Apr",
        groupSize: "2 – 20 People",

        highlights: [
            "Marina Bay Sands SkyPark & ArtScience Museum",
            "Gardens by the Bay – Supertree Grove Light Show",
            "Sentosa Island – Universal Studios Singapore",
            "Adventure Cove Waterpark",
            "Chinatown & Little India Heritage Walk",
            "Haji Lane – Trendy Cultural Quarter",
            "Clarke Quay Riverfront Nightlife",
            "Comfortable Guided Sightseeing Throughout the Tour",
        ],
    },
    {
        id: "p12",
        title: "Dubai Skyline & Desert Extravaganza",
        destination: "Dubai",
        description:
            "Step into a world where record-breaking towers rise above golden desert dunes, and futuristic luxury meets timeless Arabian tradition. Begin with an evening stroll along historic Dubai Creek, before marveling at the awe-inspiring Burj Khalifa, the world's tallest building, and shopping at the sprawling Dubai Mall while the mesmerizing Dubai Fountain dances below. Head into the desert for an exhilarating dune-bashing adventure in 4WD vehicles, followed by camel rides, sandboarding, and a traditional BBQ dinner beneath a blanket of stars. Ride the monorail to the iconic Palm Jumeirah and spend a thrilling day at Atlantis Aquaventure Waterpark, home to record-breaking slides and marine encounters. Wrap up your journey exploring the fragrant Spice Souk and glittering Gold Souk, where centuries-old trading traditions come alive. With futuristic skylines, golden desert thrills, man-made marvels, and vibrant souks, this Dubai extravaganza offers an unforgettable mix of adventure, luxury, and Arabian charm.",
        image: "/packagesPage/dubai/img1.jpg",
        images: [
            "/packagesPage/dubai/img1.jpg",
            "/packagesPage/dubai/img2.jpg",
            "/packagesPage/dubai/img3.jpg",
        ],
        duration: 5,
        rating: 4.8,
        reviews: 119,
        bestTime: "Nov – Mar",
        groupSize: "2 – 20 People",

        highlights: [
            "Burj Khalifa & Dubai Mall",
            "Dubai Fountain Show",
            "Desert Safari – Dune Bashing & BBQ Dinner",
            "Camel Ride & Sandboarding",
            "Palm Jumeirah & Atlantis Aquaventure",
            "Gold Souk & Spice Souk",
            "Dubai Creek Heritage Stroll",
            "Comfortable Guided Sightseeing Throughout the Tour",
        ],
    },
    {
        id: "p13",
        title: "Lakshadweep Coral Island Paradise",
        destination: "Lakshadweep",
        description:
            "Escape to India's most secluded island chain, where untouched coral atolls and lagoon-blue waters create a paradise far removed from the ordinary. Fly into the pristine shores of Agatti Island, settling into a lagoon-side resort before your first snorkeling session in its crystal-clear waters. Set sail to the uninhabited Bangaram Atoll, a haven of powdery white sand and pristine reefs perfect for beachcombing and snorkeling in solitude. Discover the vibrant coral gardens of Kadmat through guided snorkeling and a glass-bottom boat ride, then head to Kavaratti for an action-packed day of kayaking, windsurfing, and lagoon swimming. Unwind on the tranquil beaches of Agatti before setting off on a magical sunset dolphin cruise, watching pods glide alongside the boat as the sky turns gold. With untouched coral reefs, secluded island hopping, thrilling watersports, and serene lagoon views, this Lakshadweep getaway is the ultimate escape into unspoiled island paradise.",
        image: "/packagesPage/lakshadweep/img1.jpg",
        images: [
            "/packagesPage/lakshadweep/img1.jpg",
            "/packagesPage/lakshadweep/img2.jpg",
            "/packagesPage/lakshadweep/img3.jpg",
        ],
        duration: 6,
        rating: 4.8,
        reviews: 44,
        bestTime: "Oct – May",
        groupSize: "2 – 10 People",

        highlights: [
            "Agatti Island – Lagoon Resort & Snorkeling",
            "Bangaram Atoll – Uninhabited Island Escape",
            "Kadmat Coral Reefs & Glass-Bottom Boat Ride",
            "Kavaratti Lagoon Watersports",
            "Sunset Dolphin Cruise",
            "Pristine White Sand Beaches",
            "Untouched Coral Island Hopping",
            "Comfortable Guided Sightseeing Throughout the Tour",
        ],
    },
    {
        id: "p14",
        title: "Vietnam Heritage & Bay Discovery",
        destination: "Vietnam",
        description:
            "Travel the length of Vietnam, from the emerald limestone bays of the north to the bustling waterways of the south, discovering a country rich in history, culture, and natural beauty. Begin in Hanoi, wandering around Hoan Kiem Lake and savoring street food in the Old Quarter, before visiting the Ho Chi Minh Mausoleum and the historic Temple of Literature. Sail into the breathtaking Ha Long Bay aboard a traditional junk boat, cruising among nearly 2,000 towering limestone islets, kayaking through hidden lagoons, and exploring the mystical Sung Sot cave. Head south to the enchanting Hoi An Ancient Town, where lantern-lit streets, riverside charm, and skilled local tailors create an unforgettable atmosphere, complemented by a hands-on Vietnamese cooking class. Continue to the vibrant Ho Chi Minh City, exploring the historic Cu Chi Tunnels and the moving War Remnants Museum, before cruising through the Mekong Delta's floating markets and lush orchid gardens. With ancient towns, emerald bays, poignant history, and vibrant city life, this journey through Vietnam offers a rich and unforgettable tapestry of experiences from north to south.",
        image: "/packagesPage/vietnam/img1.jpg",
        images: [
            "/packagesPage/vietnam/img1.jpg",
            "/packagesPage/vietnam/img2.jpg",
            "/packagesPage/vietnam/img3.jpg",
        ],
        duration: 9,
        rating: 4.8,
        reviews: 71,
        bestTime: "Feb – Apr, Aug – Oct",
        groupSize: "2 – 16 People",

        highlights: [
            "Hanoi – Old Quarter & Temple of Literature",
            "Ha Long Bay Junk Boat Cruise",
            "Kayaking & Sung Sot Cave Exploration",
            "Hoi An Ancient Town – Lantern-Lit Streets",
            "Ho Chi Minh City & Cu Chi Tunnels",
            "War Remnants Museum",
            "Mekong Delta Floating Markets",
            "Comfortable Guided Sightseeing Throughout the Tour",
        ],
    },
    {
        id: "p15",
        title: "Russia Grand Rail & City Journey",
        destination: "Russia",
        description:
            "Embark on an epic adventure across the vast expanse of Russia, from the onion-domed skylines of Moscow to the wild, untouched shores of Siberia's Lake Baikal, aboard one of the world's most legendary rail journeys. Begin in Moscow, marveling at the grandeur of Red Square, St. Basil's Cathedral, and the historic Kremlin, before admiring masterpieces of Russian art at the Tretyakov Gallery and cruising along the Moskva River. Board a high-speed train to Saint Petersburg, Russia's cultural capital, spending a full day exploring the awe-inspiring Hermitage Museum and the opulent fountains of Peterhof Palace, followed by an evening canal cruise through the city fondly known as the 'Venice of the North.' Then embark on the iconic Trans-Siberian Railway, crossing the Ural Mountains into Asia as the landscape transforms into endless Siberian wilderness. Arrive at the shores of Lake Baikal, the world's deepest and oldest freshwater lake, hiking scenic trails and encountering the region's unique wildlife before exploring Irkutsk's charming wooden Siberian architecture. With grand imperial cities, world-class art, dramatic rail crossings, and pristine Siberian wilderness, this journey through Russia is a once-in-a-lifetime adventure across one of the world's most fascinating countries.",
        image: "/packagesPage/russia/img1.jpg",
        images: [
            "/packagesPage/russia/img1.jpg",
            "/packagesPage/russia/img2.jpg",
            "/packagesPage/russia/img3.jpg",
        ],
        duration: 12,
        rating: 4.7,
        reviews: 38,
        bestTime: "May – Sep",
        groupSize: "4 – 12 People",

        highlights: [
            "Moscow – Red Square, Kremlin & St. Basil's Cathedral",
            "Tretyakov Gallery & Moskva River Cruise",
            "Saint Petersburg – Hermitage Museum",
            "Peterhof Palace & Canal Cruise",
            "Trans-Siberian Railway – Ural Mountain Crossing",
            "Lake Baikal – Hiking & Seal Sanctuary",
            "Irkutsk – Siberian Wooden Architecture",
            "Comfortable Guided Sightseeing Throughout the Tour",
        ],
    },
];

export function getPackageById(id: string): Package | undefined {
    return PACKAGES.find((p) => p.id === id);
}
