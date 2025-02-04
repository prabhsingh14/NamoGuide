const cityData = [
    {
        id: 1,
        cityName: "Amritsar",
        tagline: "The Golden City of Spirituality and Timeless Flavor!",
        mainImage: "../../assets/harmandar-sahib-tour-card.png",
        
        tours: [
            {
                id: 101,
                tourImage: "../../assets/harmandar-sahib.png",
                tourTitle: "Sri Harmandar Sahib Experience",
                tourDescription: "Explore the serene beauty of Sri Harmandar Sahib, a symbol of peace and spirituality. Learn about its historical significance and architectural magnificence. Experience the calming ambiance of the sacred Golden Temple.",
                tourPrice: "₹4,000",
                tourReviews: "4.9 (1,500 reviews)",
                tourDuration: "2 days and 1 night",
                guideAvailability: "Available",
                allowedItems: ["Camera", "Water Bottle", "Clothes for 'Snan'", "Comfortable Shoes but not inside Gurudwara"],
                notAllowedItems: ["Pets", "Alcohol", "Photography (only inside Gurudwara)", "Short clothes"],
                activities: ["Darshan", "Sightseeing", "Historical Learning"],
                partnerAgency: {
                    name: "Amritsar Travel Co.",
                    address: "Bazar Mai Sewan, Amritsar, Punjab, India",
                    email: "contact@amritsartravelco.com",
                    phone: "+91 98765 43210",
                    description: "Explore the best spiritual and historical tours in Amritsar with Amritsar Travel Co."
                }
            },
            {
                id: 102,
                tourImage: "../../assets/jb-3.jpg",
                tourTitle: "Jallianwala Bagh Heritage Tour",
                tourDescription: "Walk through the historical grounds of Jallianwala Bagh and relive India's freedom struggle. Visit the martyrs' memorial and learn about the tragic events that occurred here. A must-see for history enthusiasts and patriots.",
                tourPrice: "₹2,500",
                tourReviews: "4.8 (1,200 reviews)",
                tourDuration: "1 day",
                guideAvailability: "Available",
                allowedItems: ["Camera", "Water Bottle"],
                notAllowedItems: ["Pets", "Food", "Loud Music"],
                activities: ["Sightseeing", "Learning History"],
                partnerAgency: {
                    name: "Amritsar Travel Co.",
                    address: "Bazar Mai Sewan, Amritsar, Punjab, India",
                    email: "contact@amritsartravelco.com",
                    phone: "+91 98765 43210",
                    description: "Explore the best spiritual and historical tours in Amritsar with Amritsar Travel Co."
                }
            },
            {
                id: 103,
                tourImage: "../../assets/amritsar-market.webp",
                tourTitle: "Amritsar City and Market Tour",
                tourDescription: "Explore the bustling markets of Amritsar, known for its vibrant culture and local crafts. Visit the famous Katra Jaimal Singh market, offering traditional Punjabi garments and accessories. Enjoy the local delicacies along the way.",
                tourPrice: "₹1,800",
                tourReviews: "4.7 (850 reviews)",
                tourDuration: "Half-day",
                guideAvailability: "Available",
                allowedItems: ["Cash", "Comfortable Shoes", "Shopping Bags"],
                notAllowedItems: ["Pets", "Food"],
                activities: ["Shopping", "Cultural Experience", "Food Tasting"],
                partnerAgency: {
                    name: "Amritsar Travel Co.",
                    address: "Bazar Mai Sewan, Amritsar, Punjab, India",
                    email: "contact@amritsartravelco.com",
                    phone: "+91 98765 43210",
                    description: "Explore the best spiritual and historical tours in Amritsar with Amritsar Travel Co."
                }
            }
        ]
    },
    {
        id: 2,
        cityName: "Patiala",
        tagline: "Royal Heritage of the Punjab Kingdom",
        mainImage: "../../assets/patiala-main.webp",

        tours: [
            {
                id: 201,
                tourImage: "../../assets/qila-mubarak.webp",
                tourTitle: "Qila Mubarak Fort Tour",
                tourDescription: "Discover the majestic Qila Mubarak complex, showcasing rich royal architecture and history. Visit the palaces, temples, and grand structures that highlight Patiala’s glorious past. The tour also includes a visit to the museum inside the fort.",
                tourPrice: "₹3,500",
                tourReviews: "4.7 (900 reviews)",
                tourDuration: "2 days and 1 night",
                guideAvailability: "Available",
                allowedItems: ["Camera", "Comfortable Shoes", "Water Bottle"],
                notAllowedItems: ["Pets", "Alcohol", "Food"],
                activities: ["Historical Learning", "Photography", "Sightseeing"],
                partnerAgency: {
                    name: "Patiala Heritage Tours",
                    address: "Qila Mubarak Complex, Patiala, Punjab, India",
                    email: "info@patialaheritage.com",
                    phone: "+91 87654 32100",
                    description: "Experience the regal history of Patiala with expert heritage tours."
                }
            },
            {
                id: 202,
                tourImage: "../../assets/patiala-local-market.webp",
                tourTitle: "Patiala Cultural Walk",
                tourDescription: "Immerse yourself in the cultural vibrance of Patiala with local markets and cuisine. Explore historical sites like the Sheesh Mahal and the Moti Bagh Palace. Taste the royal Patiala food and learn about its rich cultural heritage.",
                tourPrice: "₹2,000",
                tourReviews: "4.6 (800 reviews)",
                tourDuration: "1 day",
                guideAvailability: "Available",
                allowedItems: ["Camera", "Comfortable Shoes"],
                notAllowedItems: ["Pets", "Food"],
                activities: ["Cultural Learning", "Sightseeing", "Food Tasting"],
                partnerAgency: {
                    name: "Patiala Heritage Tours",
                    address: "Qila Mubarak Complex, Patiala, Punjab, India",
                    email: "info@patialaheritage.com",
                    phone: "+91 87654 32100",
                    description: "Experience the regal history of Patiala with expert heritage tours."
                }
            },
            {
                id: 203,
                tourImage: "../../assets/patiala-royal-gardens.png",
                tourTitle: "Patiala Royal Gardens Tour",
                tourDescription: "Visit the beautiful gardens of Patiala, including the famous Baradari Gardens. Stroll through lush green landscapes, enjoy the tranquility, and visit some of the well-maintained gardens with historical significance. The tour also includes a visit to the Gurdwara Dukh Nivaran Sahib.",
                tourPrice: "₹2,800",
                tourReviews: "4.7 (1,100 reviews)",
                tourDuration: "Half-day",
                guideAvailability: "Available",
                allowedItems: ["Camera", "Comfortable Shoes"],
                notAllowedItems: ["Pets", "Food"],
                activities: ["Nature Walk", "Photography", "Spiritual Learning"],
                partnerAgency: {
                    name: "Patiala Heritage Tours",
                    address: "Qila Mubarak Complex, Patiala, Punjab, India",
                    email: "info@patialaheritage.com",
                    phone: "+91 87654 32100",
                    description: "Experience the regal history of Patiala with expert heritage tours."
                }
            }
        ]
    },
    {
        id: 3,
        cityName: "Jalandhar",
        tagline: "Vibrant City with a Blend of Culture",
        mainImage: "../../assets/jalandhar-main.jpg",

        tours: [
            {
                id: 301,
                tourImage: "../../assets/jalandhar-main.jpg",
                tourTitle: "Devi Talab Mandir Visit",
                tourDescription: "Visit the ancient Devi Talab Mandir, one of the holiest Hindu temples in Punjab. Discover its rich history, beautiful architecture, and sacred ponds. Experience the spiritual atmosphere and learn about the religious practices.",
                tourPrice: "₹2,800",
                tourReviews: "4.8 (1,000 reviews)",
                tourDuration: "1 day",
                guideAvailability: "Available",
                allowedItems: ["Camera", "Comfortable Shoes but not inside Mandir", "Water Bottle"],
                notAllowedItems: ["Pets", "Food", "Loud Music"],
                activities: ["Sightseeing", "Spiritual Learning", "Photography"],
                partnerAgency: {
                    name: "Jalandhar Spiritual Tours",
                    address: "Devi Talab, Jalandhar, Punjab, India",
                    email: "contact@jalandharspiritualtours.com",
                    phone: "+91 76543 21098",
                    description: "Explore the spiritual wonders of Jalandhar with expert guides."
                }
            },
            {
                id: 302,
                tourImage: "../../assets/jalandhar-sports-market.jpg",
                tourTitle: "Sports Industry Heritage Tour",
                tourDescription: "Explore Jalandhar’s renowned sports goods industry with a behind-the-scenes factory tour. Learn about the city's legacy in producing high-quality sports equipment. Meet the craftsmen and experience the process of manufacturing sporting goods.",
                tourPrice: "₹3,200",
                tourReviews: "4.5 (700 reviews)",
                tourDuration: "1 day",
                guideAvailability: "Available",
                allowedItems: ["Camera", "Comfortable Shoes", "Notebook"],
                notAllowedItems: ["Pets", "Food"],
                activities: ["Factory Tour", "Cultural Learning", "Shopping"],
                partnerAgency: {
                    name: "Jalandhar Sports Tours",
                    address: "Devi Talab, Jalandhar, Punjab, India",
                    email: "contact@jalandharsportstours.com",
                    phone: "+91 77533 21098",
                    description: "Explore the sports wonders of Jalandhar with expert guides."
                }
            },
            {
                id: 303,
                tourImage: "../../assets/jalandhar-card.webp",
                tourTitle: "Jalandhar Cultural Heritage Tour",
                tourDescription: "Discover the rich culture of Jalandhar, from its folk music to its traditional crafts. Visit the local art galleries, witness live performances of traditional Punjabi music, and explore the vibrant local markets.",
                tourPrice: "₹2,500",
                tourReviews: "4.6 (950 reviews)",
                tourDuration: "1 day",
                guideAvailability: "Available",
                allowedItems: ["Camera", "Comfortable Shoes"],
                notAllowedItems: ["Pets", "Food"],
                activities: ["Cultural Learning", "Art Viewing", "Music Performances"],
                partnerAgency: {
                    name: "Jalandhar Spiritual Tours",
                    address: "Devi Talab, Jalandhar, Punjab, India",
                    email: "contact@jalandharspiritualtours.com",
                    phone: "+91 76543 21098",
                    description: "Explore the spiritual wonders of Jalandhar with expert guides."
                }
            }
        ]
    },
    {
        id: 4,
        cityName: "Anandpur Sahib",
        tagline: "The Birthplace of the Khalsa",
        mainImage: "../../assets/anandpur-sahib-main.jpg",

        tours: [
            {
                id: 401,
                tourImage: "../../assets/keshgarh-sahib.webp",
                tourTitle: "Takht Sri Kesgarh Sahib Tour",
                tourDescription: "Experience the spiritual aura of Takht Sri Kesgarh Sahib, one of the five Takhts of Sikhism. Explore its rich history, sacred monuments, and the holy Gurdwara. Learn about the birth of Khalsa and its significance in Sikhism.",
                tourPrice: "₹3,000",
                tourReviews: "4.9 (1,300 reviews)",
                tourDuration: "2 days and 1 night",
                guideAvailability: "Available",
                allowedItems: ["Camera", "Comfortable Shoes but not inside Gurudwara", "Water Bottle"],
                notAllowedItems: ["Pets", "Alcohol"],
                activities: ["Spiritual Learning", "Sightseeing", "Photography"],
                partnerAgency: {
                    name: "Anandpur Sahib Spiritual Tours",
                    address: "Takht Sri Keshgarh Sahib, Anandpur Sahib, Punjab, India",
                    email: "contact@anandpurtours.com",
                    phone: "+91 12345 67890",
                    description: "Visit the sacred sites of Anandpur Sahib with knowledgeable guides."
                }
            },
            {
                id: 402,
                tourImage: "../../assets/hola-mahala.webp",
                tourTitle: "Hola Mohalla Festival Tour",
                tourDescription: "Witness the vibrant festival of Hola Mohalla with traditional martial arts and Sikh heritage. Enjoy the exhilarating performances, including horse riding and sword fights, while experiencing the true essence of the festival.",
                tourPrice: "₹3,800",
                tourReviews: "4.8 (1,100 reviews)",
                tourDuration: "1 day",
                guideAvailability: "Available",
                allowedItems: ["Camera", "Comfortable Shoes", "Snacks"],
                notAllowedItems: ["Pets", "Loud Music"],
                activities: ["Festival Experience", "Martial Arts", "Cultural Learning"],
                partnerAgency: {
                    name: "Anandpur Sahib Spiritual Tours",
                    address: "Takht Sri Keshgarh Sahib, Anandpur Sahib, Punjab, India",
                    email: "contact@anandpurtours.com",
                    phone: "+91 12345 67890",
                    description: "Visit the sacred sites of Anandpur Sahib with knowledgeable guides."
                }
            },
            {
                id: 403,
                tourImage: "../../assets/gurpurab.png",
                tourTitle: "Gurpurab Celebrations at Anandpur Sahib",
                tourDescription: "Participate in the annual Gurpurab celebrations at Anandpur Sahib, commemorating the birth of Guru Gobind Singh Ji. Experience the grandeur of the procession, the community prayers, and the vibrant atmosphere of the Gurdwara.",
                tourPrice: "₹3,500",
                tourReviews: "4.9 (1,400 reviews)",
                tourDuration: "2 days",
                guideAvailability: "Available",
                allowedItems: ["Camera", "Comfortable Shoes but not inside Gurudwara", "Water Bottle"],
                notAllowedItems: ["Pets", "Alcohol"],
                activities: ["Spiritual Learning", "Cultural Procession", "Photography"],
                partnerAgency: {
                    name: "Anandpur Sahib Spiritual Tours",
                    address: "Takht Sri Keshgarh Sahib, Anandpur Sahib, Punjab, India",
                    email: "contact@anandpurtours.com",
                    phone: "+91 12345 67890",
                    description: "Visit the sacred sites of Anandpur Sahib with knowledgeable guides."
                }
            }
        ]
    }
];

export default cityData;