const cityData = [
    {
        id: 1,
        cityName: "Amritsar",
        tagline: "The Golden City of Spirituality and Timeless Flavor!",
        mainImage: "../../assets/amritsar-main.webp",
        
        tours: [
            {
                id: 101,
                tourImage: "../../assets/harmandar-sahib.png",
                tourTitle: "Sri Harmandar Sahib Experience",
                tourDescription: "Step into the divine serenity of Sri Harmandar Sahib, where history, faith, and architecture blend seamlessly. Founded in 1581 by Guru Arjan Dev Ji, this sacred Gurudwara stands as a beacon of peace and unity. Experience the soothing kirtan, partake in the world’s largest langar, and witness the mesmerizing gold-plated sanctum reflecting in the Amrit Sarovar.",
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
                tourDescription: "Walk through Jallianwala Bagh, a poignant symbol of India’s struggle for independence. On April 13, 1919, hundreds of innocent Indians were massacred here, leaving behind bullet-riddled walls as a testament to their sacrifice. Visit the martyrs’ memorial, hear untold stories of courage, and pay homage to those who shaped India's freedom.",
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
                tourImage: "../../assets/amritsar-market.jpg",
                tourTitle: "Amritsar City and Market Tour",
                tourDescription: "Stroll through the bustling lanes of Katra Jaimal Singh, where history meets craftsmanship. Dating back to Maharaja Ranjit Singh’s reign, Amritsar’s markets have thrived as hubs of Phulkari embroidery, Punjabi Juttis, and traditional spices. Immerse yourself in the city’s lively energy, savor Amritsari Kulcha, and take home authentic Punjabi treasures.",
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
        "id": 2,
        "cityName": "Patiala",
        "tagline": "Royal Heritage of the Punjab Kingdom",
        "mainImage": "../../assets/moti-bagh-palace.webp",
        "tours": [
            {
                "id": 201,
                "tourImage": "../../assets/qila-mubarak.webp",
                "tourTitle": "Qila Mubarak Fort Tour",
                "tourDescription": "Step into the grandeur of Qila Mubarak, the magnificent 18th-century fort built by Baba Ala Singh, the founder of Patiala. Witness its splendid Indo-Islamic and Rajput architecture, intricate frescoes, and historic artifacts. Explore the inner palaces, including the Rang Mahal and Sheesh Mahal, showcasing the lavish lifestyle of Patiala's royal family. A journey through this fortress is a walk through the pages of Punjab’s regal history.",
                "tourPrice": "₹3,500",
                "tourReviews": "4.7 (900 reviews)",
                "tourDuration": "2 days and 1 night",
                "guideAvailability": "Available",
                "allowedItems": ["Camera", "Comfortable Shoes", "Water Bottle"],
                "notAllowedItems": ["Pets", "Alcohol", "Food"],
                "activities": ["Historical Learning", "Photography", "Sightseeing"],
                "partnerAgency": {
                    "name": "Patiala Heritage Tours",
                    "address": "Qila Mubarak Complex, Patiala, Punjab, India",
                    "email": "info@patialaheritage.com",
                    "phone": "+91 87654 32100",
                    "description": "Experience the regal history of Patiala with expert heritage tours."
                }
            },
            {
                "id": 202,
                "tourImage": "../../assets/moti-bagh-gurudwara-patiala.jpg",
                "tourTitle": "Moti Bagh Gurudwara Tour",
                "tourDescription": "Visit the serene Moti Bagh Gurudwara, built by Maharaja Narinder Singh as part of his grand palace complex. Discover its historical significance as a center of Sikh spirituality and community service. Admire its splendid domes and artistic carvings while learning about the Sikh gurus' teachings. After the visit, explore nearby heritage sites and enjoy Patiala’s rich cuisine.",
                "tourPrice": "₹2,000",
                "tourReviews": "4.6 (800 reviews)",
                "tourDuration": "1 day",
                "guideAvailability": "Available",
                "allowedItems": ["Camera", "Comfortable Shoes to be kept in 'Jora Ghar'", "Head Covering"],
                "notAllowedItems": ["Pets", "Non-Vegetarian Food", "Photography inside Gurudwara"],
                "activities": ["Spiritual Experience", "Historical Learning", "Local Exploration"],
                "partnerAgency": {
                    "name": "Patiala Heritage Tours",
                    "address": "Qila Mubarak Complex, Patiala, Punjab, India",
                    "email": "info@patialaheritage.com",
                    "phone": "+91 87654 32100",
                    "description": "Experience the spiritual and regal history of Patiala with expert heritage tours."
                }
            },
            {
                "id": 203,
                "tourImage": "../../assets/dukhniwaran-sahib.jpg",
                "tourTitle": "Dukhniwaran Sahib Gurudwara Tour",
                "tourDescription": "Experience spiritual bliss at Gurudwara Dukhniwaran Sahib, a revered Sikh shrine known for its healing waters. Learn about its deep connection to Guru Tegh Bahadur Ji, who blessed this place and alleviated the suffering of the locals. Witness the peaceful ambiance, participate in kirtan, and enjoy the langar, a hallmark of Sikh hospitality and service.",
                "tourPrice": "₹2,000",
                "tourReviews": "4.6 (800 reviews)",
                "tourDuration": "1 day",
                "guideAvailability": "Available",
                "allowedItems": ["Camera", "Comfortable Shoes to be kept in 'Jora Ghar'", "Head Covering"],
                "notAllowedItems": ["Pets", "Non-Vegetarian Food", "Photography inside Gurudwara"],
                "activities": ["Spiritual Experience", "Historical Learning", "Local Exploration"],
                "partnerAgency": {
                    "name": "Patiala Heritage Tours",
                    "address": "Qila Mubarak Complex, Patiala, Punjab, India",
                    "email": "info@patialaheritage.com",
                    "phone": "+91 87654 32100",
                    "description": "Experience the spiritual and regal history of Patiala with expert heritage tours."
                }
            },
            {
                "id": 204,
                "tourImage": "../../assets/patiala-royal-gardens.png",
                "tourTitle": "Patiala Royal Gardens Tour",
                "tourDescription": "Discover the breathtaking Baradari Gardens, a lush retreat built by Maharaja Rajinder Singh. Once a royal pleasure garden, it now serves as a historical and botanical wonder. Stroll through pathways lined with rare trees, admire the elegant fountains, and visit the colonial-era structures within. The tour also includes a visit to Gurudwara Dukhniwaran Sahib, blending spirituality with nature.",
                "tourPrice": "₹2,800",
                "tourReviews": "4.7 (1,100 reviews)",
                "tourDuration": "Half-day",
                "guideAvailability": "Available",
                "allowedItems": ["Camera", "Comfortable Shoes"],
                "notAllowedItems": ["Pets", "Food"],
                "activities": ["Nature Walk", "Photography", "Spiritual Learning"],
                "partnerAgency": {
                    "name": "Patiala Heritage Tours",
                    "address": "Qila Mubarak Complex, Patiala, Punjab, India",
                    "email": "info@patialaheritage.com",
                    "phone": "+91 87654 32100",
                    "description": "Experience the regal history of Patiala with expert heritage tours."
                }
            }
        ]
    },
    {
        id: 3,
        cityName: "Jalandhar",
        tagline: "Vibrant City with a Blend of Culture",
        mainImage: "../../assets/devi-talab-mandir.webp",

        tours: [
            {
                id: 301,
                tourImage: "../../assets/devi-talab-mandir.webp",
                tourTitle: "Devi Talab Mandir Visit",
                tourDescription: "Step into the sacred realm of Devi Talab Mandir, an ancient Hindu temple that has stood the test of time for over 200 years. Dedicated to Goddess Durga, this revered pilgrimage site is renowned for its striking architecture, a golden-domed sanctum, and a sacred pond (talab) believed to have miraculous powers.",
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
                tourImage: "../../assets/sports.webp",
                tourTitle: "Sports Industry Heritage Tour",
                tourDescription: "Did you know that Jalandhar is one of the world’s largest producers of sports equipment? For decades, this city has supplied top-notch cricket bats, footballs, and hockey sticks to professional players and international tournaments. On this tour, go behind the scenes of Jalandhar’s iconic sports goods factories, meet the artisans who handcraft these pieces, and get a chance to shop for high-quality equipment.",
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
                tourImage: "../../assets/jalandhar.jpg",
                tourTitle: "Jalandhar Cultural Heritage Tour",
                tourDescription: "Punjab’s soul lies in its music, art, and folklore, and Jalandhar is no exception. This tour takes you through the bustling bazaars, traditional art galleries, and folk music performances that keep the spirit of Punjab alive. Experience the vibrant energy of Punjabi culture, watch artisans at work, and indulge in the rhythmic beats of the dhol and melodious tunes of traditional instruments.",
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
                tourImage: "../../assets/anandpur-sahib-card1.jpg",
                tourTitle: "Takht Sri Kesgarh Sahib Tour",
                tourDescription: "Takht Sri Kesgarh Sahib, one of the five Takhts of Sikhism, stands as a beacon of faith and valor. This sacred Gurdwara houses historical relics, including Guru Gobind Singh Ji’s weapons. Witness the stunning Sikh architecture and immerse yourself in spiritual learning as you walk the path where Khalsa was born. Feel the devotion in the air as you explore the serene surroundings and learn about Sikh traditions and teachings.",
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
                tourDescription: "Step into a battlefield of colors, courage, and culture during the grand festival of Hola Mohalla, celebrated every year after Holi. Witness skilled Nihang warriors displaying awe-inspiring martial arts, horseback stunts, and sword-fighting techniques. This festival, established by Guru Gobind Singh Ji, is a true testament to the valor and discipline of Sikh warriors. Experience the pulsating energy, join in the vibrant community spirit, and savor the traditional Langar served to thousands of devotees.",
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
                tourDescription: "Join thousands of devotees in celebrating Gurpurab, the birth anniversary of Guru Gobind Singh Ji, in the sacred land of Anandpur Sahib. Participate in the grand Nagar Kirtan (procession), listen to soulful Kirtan (hymns), and witness the glowing devotion of Sikhs from around the world. The atmosphere is electric with spiritual energy as Anandpur Sahib transforms into a divine sanctuary of faith, devotion, and unity.",
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