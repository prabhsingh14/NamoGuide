export const state = [
    {
        name: 'New Delhi, NCR',
        tagline: 'Where Heritage Meets Modernity in the Heart of India!',
        image: '/assets/DELHI-TOUR.png',
        list: [
            "Explore India Gate and its rich history.",
            "Visit Qutub Minar, a UNESCO World Heritage Site.",
            "Shop at Chandni Chowk and enjoy street food.",
            "Discover the architecture of Humayun's Tomb.",
            "Attend the sound and light show at Red Fort.",
            "Experience the vibrant nightlife of Connaught Place."
        ],
        tours: [
            {
                id: 1,
                name: 'Red Fort Fast Track Sightseeing in Delhi 2 hours Tour',
                description: 'Lal Qila or Red Fort name found its roots during the British era! This former residence of the Mughal emperor has now become a remarkable landmark in India.',
                image: '/assets/red-fort.png',
                price: 1000,
                rating: 4.5,
                reviews: 100,
                images: [
                    '/assets/red-fort.png',
                    '/assets/india-gate.jpg',
                    '/assets/bangla-sahib-gurudwara.png',
                    '/assets/connaught-palace.png'
                ],
                about: 'The Red Fort, a UNESCO World Heritage Site, is an architectural marvel showcasing Mughal grandeur. With our fast-track 2-hour sightseeing tour, explore the fort’s magnificent gates, palaces, and museums while learning about the Mughal dynasty and its fascinating history. Enjoy a skip-the-line experience that allows you to dive straight into the rich cultural heritage of India.',
                duration: '2 hours',
                impInfo: {
                    canBring: [
                        "Comfortable walking shoes",
                        "Camera for photography",
                        "Sunscreen"
                    ],
                    cannotBring: [
                        "Large bags",
                        "Food or drinks",
                        "Sharp objects, Kirpan is allowed only for Sikhs visitors."
                    ]
                },
                aboutAgency: {
                    name: 'Delhi Tours & Travels',
                    about: 'Delhi Tours & Travels is a leading tour operator in Delhi, offering a wide range of sightseeing tours, cultural experiences, and travel services. With a team of experienced guides and a passion for showcasing the best of Delhi, we strive to provide memorable and enriching experiences to our guests. Whether you are a history buff, a foodie, or an adventure seeker, we have something for everyone. Join us on a journey through the vibrant streets, historical monuments, and hidden gems of Delhi, and discover the city’s rich heritage and diverse culture.',
                    contact: {
                        email: 'support@delhitours.com',
                        phone: '(+91)9995999132',
                        website: 'delhitours.com',
                        address: '12, Connaught Place, New Delhi, India',
                    }
                },
            },
            {
                id: 2,
                name: 'Gurudwara Bangla Sahib and other pilgrimages places in Delhi 3 hours Tour',
                description: 'Delhi’s Gurudwara Bangla Sahib is one of the most important Sikh sites of worship in the Indian capital.',
                image: '/assets/bangla-sahib-gurudwara.png',
                price: 800,
                rating: 5.0,
                reviews: 150,
                images: [
                    '/assets/bangla-sahib-gurudwara.png',
                    '/assets/lotus-temple.png',
                    '/assets/jama-masjid.png',
                    '/assets/delhi-tour-1.jpg'
                ],
                about: 'This tour will take you to some of the most sacred pilgrimage sites in Delhi, starting with the Gurudwara Bangla Sahib. It is a peaceful place of worship where you can experience Sikh traditions and learn about the significance of these sacred places. The tour will also include a visit to other important pilgrimage sites in the city, offering a glimpse of the spiritual side of Delhi.',
                duration: '3 hours',
                impInfo: {
                    canBring: [
                        "Modest clothing",
                        "Prayer offerings (optional)",
                        "Water bottle"
                    ],
                    cannotBring: [
                        "Short clothes and cap are not allowed inside the Gurudwara",
                        "Alcohol",
                        "Food (unless permitted)"
                    ]
                },
                aboutAgency: {
                    name: 'Delhi Pilgrimages Tours',
                    about: 'Delhi Pilgrimages Tours is a specialized tour operator that offers spiritual and religious tours to various pilgrimage sites in Delhi. Our tours are designed to provide visitors with an authentic and immersive experience of the city’s diverse religious traditions and practices. Whether you are interested in Sikhism, Hinduism, Islam, or other faiths, our knowledgeable guides will help you explore the spiritual heritage of Delhi and gain a deeper understanding of its religious significance.',
                    contact: {
                        email: 'support@delhipilgtours.com',
                        phone: '(+91)9365996112',
                        website: 'delhipilgtours.com',
                        address: '23, Paharganj, New Delhi, India',
                    }
                },
            },
            {
                id: 3,
                name: 'Lotus Temple Fast Track Sightseeing in Delhi 4 hours Tour',
                description: 'Whether you are a spiritual seeker or an admirer of modern architecture, a visit to the Lotus Temple promises an experience of peace, unity, and inner harmony.',
                image: '/assets/lotus-temple.png',
                price: 1500,
                rating: 4.5,
                reviews: 100,
                images: [
                    '/assets/lotus-temple.png',
                    '/assets/lotus-1.jpg',
                    '/assets/lotus-2.jpg',
                    '/assets/lotus-3.jpg'
                ],
                about: 'The Lotus Temple is a symbol of unity and peace. Its unique flower-like structure and serene ambiance make it a must-visit place for those interested in architecture, spirituality, and tranquility. This fast-track tour ensures you spend less time in queues and more time experiencing the beauty and serenity of the temple.',
                duration: '4 hours',
                impInfo: {
                    canBring: [
                        "Comfortable walking shoes",
                        "Water bottle",
                        "Camera"
                    ],
                    cannotBring: [
                        "Sharp objects, except Kirpan only for Sikhs",
                        "Food or drinks",
                        "Large bags"
                    ]
                },
                aboutAgency: {
                    name: 'Delhi Spiritual Tours',
                    about: 'Delhi Spiritual Tours offers guided tours to the Lotus Temple and other spiritual landmarks in Delhi. Our tours are designed to provide visitors with a deeper understanding of the spiritual traditions and practices of India. Whether you are interested in meditation, yoga, or simply seeking inner peace, our experienced guides will help you explore the spiritual side of Delhi and discover the beauty of its sacred sites.',
                    contact: {
                        email: 'support@spiritualdelhi.com',
                        phone: '(+91)8995666172',
                        website: 'spiritualdelhi.com',
                        address: '45, Lajpat Nagar, New Delhi, India',
                    }
                },
            },
            {
                id: 4,
                name: 'Qutub Minar Fast Track Sightseeing in Delhi 3 hours Tour',
                description: 'A visit to Qutub Minar is a must for anyone looking to explore the cultural and architectural grandeur of ancient Delhi.',
                image: '/assets/qutab-minar.png',
                price: 1100,
                rating: 4.5,
                reviews: 100,
                images: [
                    '/assets/qutab-minar.png',
                    '/assets/qutab-2.png',
                    '/assets/qutab-3.png',
                    '/assets/qutab-4.png'
                ],
                about: 'The Qutub Minar, the tallest brick minaret in the world, stands as a symbol of the architectural mastery of the Delhi Sultanate. This 3-hour fast-track tour will help you skip the lines and go straight into exploring the intricacies of this UNESCO World Heritage Site, learning about the history behind the tower and the fascinating stories it holds.',
                duration: '3 hours',
                impInfo: {
                    canBring: [
                        "Comfortable walking shoes",
                        "Camera for photography",
                        "Sunscreen"
                    ],
                    cannotBring: [
                        "Large bags",
                        "Food or drinks",
                        "Sharp objects, Kirpan is allowed only for Sikhs visitors."
                    ]
                },
                aboutAgency: {
                    name: 'Delhi Heritage Tours',
                    about: 'Delhi Heritage Tours offers guided tours to the historical landmarks of Delhi, including the Qutub Minar. Our tours are designed to provide visitors with an in-depth understanding of the city’s rich heritage and cultural legacy. Whether you are a history enthusiast, an architecture buff, or simply curious about the past, our experienced guides will help you explore the hidden gems and iconic sites of Delhi.',
                    contact: {
                        email: 'support@heritagedelhi.com',
                        phone: '(+91)8991555132',
                        website: 'heritagedelhi.com',
                        address: '321, Karol Bagh, New Delhi, India',
                    }
                },
            },
        ]
    },
    {
        name: 'Amritsar, Panjab',
        tagline: 'The Golden City of Spirituality and Timeless Flavor!',
        image: '/assets/AMRITSAR-TOUR.png',
        list: [
            "Visit Sri Harmandar Sahib for spiritual solace.",
            "Experience the Wagah Border ceremony.",
            "Taste authentic Punjabi cuisine.",
            "Visit Jallianwala Bagh to reflect on history.",
            "Shop for traditional Phulkari fabrics and Punjabi juttis.",
            "Explore Gobindgarh Fort, a historic symbol of Punjab."
        ],
        tours: [
            {
                id: 5,
                name: 'Sri Harmandar Sahib Sightseeing in Amritsar 4 hours Tour',
                description: 'Visitors come here to seek blessings, enjoy the soulful hymns, and witness the daily rituals that have been followed for centuries.',
                image: '/assets/harmandar-sahib-tour-card.png',
                price: 1500,
                rating: 4.9,
                reviews: 270,
                images: [
                    '/assets/harmandar-sahib.png',
                    '/assets/harmandar-sahib-tour-card.png',
                    '/assets/amritsar-tour-1.jpg',
                    '/assets/amritsar-tour-2.png'
                ],
                about: 'Sri Harmandar Sahib, also known as the Sri Darbar Sahib, is one of the holiest sites for Sikhs. Our 4-hour tour will immerse you in its tranquil ambiance, exploring its rich history, spiritual significance, and beautiful architecture. You will also experience the daily rituals and visit the Langar (community kitchen) where free meals are served to lakhs of people every day.',
                duration: '4 hours',
                impInfo: {
                    canBring: [
                        "Head covering (scarf or turban)",
                        "Modest clothing",
                        "Camera for photography"
                    ],
                    cannotBring: [
                        "Footwear inside the temple",
                        "Alcohol or tobacco",
                        "Food or drinks"
                    ]
                },
                aboutAgency: {
                    name: 'Amritsar Spiritual Tours',
                    about: 'Amritsar Spiritual Tours offers guided tours to Sri Harmandar Sahib and other spiritual sites in Amritsar. Our tours are designed to provide visitors with an authentic and immersive experience of Sikhism and the rich cultural heritage of Punjab. Whether you are a spiritual seeker, a history enthusiast, or simply curious about the traditions of the Sikh faith, our experienced guides will help you explore the spiritual side of Amritsar and discover the beauty of its sacred sites.',
                    contact: {
                        email: 'support@amritsartours.com',
                        phone: '(+91)6712967823',
                        website: 'amritsartours.com',
                        address: '13, Darbar Sahib Road, Amritsar, India',
                    }
                },
            },
            {
                id: 6,
                name: 'Dera Baba Jaimal Singh Blessings and Sightseeing Full-day Tour',
                description: 'The serene landscapes, combined with the teachings of Saint Jaimal Singh, make it an ideal spot for spiritual seekers and those looking to connect with their inner selves.',
                image: '/assets/dera.jpg',
                price: 8000,
                rating: 4.6,
                reviews: 200,
                images: [
                    '/assets/dera.jpg',
                    '/assets/dera-1.jpg',
                    '/assets/dera-2.jpg',
                    '/assets/dera-3.jpg'
                ],
                about: 'This full-day tour to Dera Baba Jaimal Singh will allow you to explore the teachings of Saint Jaimal Singh and experience the calm and peaceful surroundings of this spiritual center. The tour also includes visits to surrounding attractions, providing a balanced experience of spirituality and culture.',
                duration: 'Full-day',
                impInfo: {
                    canBring: [
                        "Comfortable clothing",
                        "Water bottle",
                        "Camera for photography"
                    ],
                    cannotBring: [
                        "Footwear inside the temple",
                        "Alcohol or tobacco",
                        "Food or drinks"
                    ]
                },
                aboutAgency: {
                    name: 'Amritsar Spiritual Tours',
                    about: 'Amritsar Spiritual Tours offers guided tours to Dera Baba Jaimal Singh and other spiritual sites in Amritsar. Our tours are designed to provide visitors with an authentic and immersive experience of Sikhism and the rich cultural heritage of Punjab. Whether you are a spiritual seeker, a history enthusiast, or simply curious about the traditions of the Sikh faith, our experienced guides will help you explore the spiritual side of Amritsar and discover the beauty of its sacred sites.',
                    contact: {
                        email: 'support@amritsarspiritual.com',
                        phone: '(+91)6513962732',
                        website: 'amritsarspiritual.com',
                        address: '1313, Jaimal Singh Road, Amritsar, India',
                    }
                },
            },
            {
                id: 7,
                name: 'Jallianwala Bagh Fast Track Sightseeing 1 hour Tour',
                description: 'Visitors can walk through the garden, explore the memorial, and pay respects to the martyrs who changed the course of history.',
                image: '/assets/jalliawallah-bagh.png',
                price: 500,
                rating: 4.5,
                reviews: 100,
                images: [
                    '/assets/jalliawallah-bagh.png',
                    '/assets/jb-1.jpg',
                    '/assets/jb-2.jpg',
                    '/assets/jb-3.jpg'
                ],
                about: 'Jallianwala Bagh is a historical site where the tragic massacre of hundreds of Indians took place in 1919. This fast-track tour takes you to the memorial, where you will learn about the struggle for independence and pay homage to the martyrs. The experience is poignant and offers deep historical insights.',
                duration: '1 hour',
                impInfo: {
                    canBring: [
                        "Comfortable walking shoes",
                        "Camera for photography",
                        "Water bottle"
                    ],
                    cannotBring: [
                        "Food or drinks",
                        "Sharp objects, except Kirpan only for Sikhs",
                        "Large bags"
                    ]
                },
                aboutAgency: {
                    name: 'Amritsar Heritage Tours',
                    about: 'Amritsar Heritage Tours offers guided tours to the historical landmarks of Amritsar, including Jallianwala Bagh. Our tours are designed to provide visitors with an in-depth understanding of the city’s rich heritage and cultural legacy. Whether you are a history enthusiast, an architecture buff, or simply curious about the past, our experienced guides will help you explore the hidden gems and iconic sites of Amritsar.',
                    contact: {
                        email: 'support@heritageamritsar.com',
                        phone: '(+91)9314578732',
                        website: 'heritageamritsar.com',
                        address: '42, Jallianwala Bagh Road, Amritsar, India',
                    }
                },
            },
            {
                id: 8,
                name: 'The Partition Museum Fast Track Half-day Tour',
                description: 'The museum is a must-visit for anyone seeking to understand the human side of India’s history, as it sheds light on the stories of pain, resilience, and hope.',
                image: '/assets/partition-museum.jpg',
                price: 4000,
                rating: 4.8,
                reviews: 300,
                images: [
                    '/assets/partition-museum.jpg',
                    '/assets/pm-1.jpg',
                    '/assets/pm-2.jpg',
                    '/assets/pm-3.png'
                ],
                about: 'The Partition Museum in Amritsar is dedicated to telling the stories of the traumatic partition of India in 1947. This half-day fast-track tour allows you to delve into the deep history and human experiences of the period, with powerful exhibits and survivor accounts that paint a vivid picture of the partition’s impact.',
                duration: 'Half-day',
                impInfo: {
                    canBring: [
                        "Comfortable walking shoes",
                        "Camera for photography",
                        "Water bottle"
                    ],
                    cannotBring: [
                        "Food or drinks",
                        "Sharp objects, except Kirpan only for Sikhs",
                        "Large bags"
                    ]
                },
                aboutAgency: {
                    name: 'Amritsar Heritage Tours',
                    about: 'Amritsar Heritage Tours offers guided tours to the historical landmarks of Amritsar, including the Partition Museum. Our tours are designed to provide visitors with an in-depth understanding of the city’s rich heritage and cultural legacy. Whether you are a history enthusiast, an architecture buff, or simply curious about the past, our experienced guides will help you explore the hidden gems and iconic sites of Amritsar.',
                    contact: {
                        email: 'support@heritageamritsar.com',
                        phone: '(+91)9314578732',
                        website: 'heritageamritsar.com',
                        address: '42, Jallianwala Bagh Road, Amritsar, India',
                    }
                },
            },
        ]
    },
    {
        name: 'Dharamshala, Himachal Pradesh',
        tagline: 'A Serene Escape Where Tranquility Meets the Himalayas!',
        image: '/assets/HIMACHAL-TOUR.png',
        list: [
            "Visit the Dalai Lama Temple Complex.",
            "Hike to Triund for breathtaking views.",
            "Explore the tea gardens of Dharamshala.",
            "Learn Tibetan culture at the Norbulingka Institute.",
            "Stroll through the serene Bhagsu Waterfall.",
            "Shop for local handicrafts at Mcleodganj."
        ],
        tours: [
            {
                id: 9,
                name: 'Dalai Lama Temple Sightseeing in Dharamshala 4 hours Tour',
                description: 'Whether you are seeking spiritual solace or simply a peaceful retreat, the Dalai Lama Temple is an unforgettable stop on your Himachal Pradesh journey.',
                image: '/assets/dharamshala.png',
                price: 1500,
                rating: 4.5,
                reviews: 100,
                images: [
                    '/assets/dharamshala.png',
                    '/assets/dalai-lama-temple-.png',
                    '/assets/dharamshala-1.jpg',
                    '/assets/dharamshala-3.jpg'
                ],
                about: 'This tour offers a peaceful experience at the Dalai Lama Temple Complex, a place of spiritual tranquility where visitors can connect with Tibetan culture and Buddhism.',
                duration: '4 hours',
                impInfo: {
                    canBring: ['Comfortable walking shoes', 'Camera', 'Water bottle'],
                    cannotBring: ['Large bags', 'Food or drinks', 'Pets']
                },
                aboutAgency: {
                    name: 'Dharamshala Tours & Travels',
                    about: 'Dharamshala Tours & Travels is a leading tour operator in Dharamshala, offering a wide range of sightseeing tours, cultural experiences, and travel services. With a team of experienced guides and a passion for showcasing the best of Dharamshala, we strive to provide memorable and enriching experiences to our guests. Whether you are a history buff, a foodie, or an adventure seeker, we have something for everyone. Join us on a journey through the vibrant streets, historical monuments, and hidden gems of Dharamshala, and discover the city’s rich heritage and diverse culture.',
                    contact: {
                        email: 'support@dharamshalatravels.com',
                        phone: '(+91)9995999132',
                        website: 'dharashalatravels.com',
                        address: '65, McLeod Ganj, Dharamshala, India',
                    }
                },
            },
            {
                id: 10,
                name: 'Himachal Pradesh Cricket Association Stadium 2 hours Tour',
                description: 'Whether you are a die-hard cricket fan or just in awe of its stunning setting, the HPCA Stadium offers a unique experience that blends sports and nature in perfect harmony.',
                image: '/assets/HP-2.png',
                price: 1200,
                rating: 5.0,
                reviews: 150,
                images: [
                    '/assets/HP-2.png',
                    '/assets/HP-5.png',
                    '/assets/HP-6.png',
                    '/assets/HP-7.jpg'
                ],
                about: 'Explore the Himachal Pradesh Cricket Association Stadium, a world-class facility known for hosting international cricket matches with a scenic backdrop of the Himalayan range.',
                duration: '2 hours',
                impInfo: {
                    canBring: ['Sportswear', 'Comfortable shoes', 'Sunglasses'],
                    cannotBring: ['Food or drinks', 'Large bags', 'Sharp objects']
                },
                aboutAgency: {
                    name: 'HPCA Tours & Travels',
                    about: 'HPCA Tours & Travels offers guided tours to the Himachal Pradesh Cricket Association Stadium and other sports venues in Dharamshala. Our tours are designed to provide visitors with an insider’s view of the stadium’s facilities, history, and significance in the world of cricket. Whether you are a sports enthusiast, a cricket fan, or simply curious about the game, our experienced guides will help you explore the stadium and its surroundings, offering a unique blend of sports and nature.',
                    contact: {
                        email: 'support@hpcatravels.com',
                        phone: '(+91)8493987432',
                        website: 'hpcatravels.com',
                        address: '89, Dharamshala, Himachal Pradesh, India',
                    }
                },
            },
            {
                id: 11,
                name: 'McLeod Ganj Sightseeing and Two-day Tour',
                description: 'From scenic hikes to cultural exploration, McLeod Ganj invites visitors to experience its peaceful vibe and warm hospitality.',
                image: '/assets/HP-3.jpg',
                price: 5000,
                rating: 4.5,
                reviews: 100,
                images: [
                    '/assets/HP-3.jpg',
                    '/assets/HP-4.png',
                    '/assets/H-P.png',
                    '/assets/H-P-1.png'
                ],
                about: 'McLeod Ganj, also known as Little Lhasa, is a hub for Tibetan culture, offering scenic hikes, monasteries, and a peaceful retreat in the Himalayan foothills.',
                duration: '2 days',
                impInfo: {
                    canBring: ['Backpack', 'Walking shoes', 'Camera', 'Water bottle'],
                    cannotBring: ['Expensive jewelry', 'Large bags', 'Alcohol']
                },
                aboutAgency: {
                    name: 'McLeod Ganj Tours & Travels',
                    about: 'McLeod Ganj Tours & Travels offers guided tours to McLeod Ganj and other scenic spots in Himachal Pradesh. Our tours are designed to provide visitors with an authentic experience of the region’s natural beauty, cultural heritage, and spiritual traditions. Whether you are a nature lover, a history buff, or simply seeking a peaceful retreat, our experienced guides will help you explore the hidden gems and scenic landscapes of McLeod Ganj, offering a memorable journey through the Himalayan foothills.',
                    contact: {
                        email: 'support@mcleodganjtravels.com',
                        phone: '(+91)6789567232',
                        website: 'mcleodganjtravels.com',
                        address: '22, McLeod Ganj, Himachal Pradesh, India',
                    }
                },
            },
            {
                id: 12,
                name: 'Church of St. John Fast Track Sightseeing Half-day Tour',
                description: 'Situated in the peaceful town of Dharamshala, the Church of St. John in the Wilderness is a hidden gem that combines history, tranquility, and natural beauty.',
                image: '/assets/HP-4.png',
                price: 4000,
                rating: 4.5,
                reviews: 100,
                images: [
                    '/assets/HP-4.png',
                    '/assets/church.png',
                    '/assets/church-1.png',
                    '/assets/church-2.png'
                ],
                about: 'The Church of St. John in the Wilderness is a quaint and serene spot, set amidst the pine forest, offering a tranquil retreat from the bustle of city life.',
                duration: 'Half-day',
                impInfo: {
                    canBring: ['Comfortable footwear', 'Hat or sunglasses', 'Camera'],
                    cannotBring: ['Pets', 'Food', 'Loud music or noise']
                },
                aboutAgency: {
                    name: 'Dharamshala Heritage Tours',
                    about: 'Dharamshala Heritage Tours offers guided tours to the historical landmarks of Dharamshala, including the Church of St. John in the Wilderness. Our tours are designed to provide visitors with an in-depth understanding of the city’s rich heritage and cultural legacy. Whether you are a history enthusiast, an architecture buff, or simply curious about the past, our experienced guides will help you explore the hidden gems and iconic sites of Dharamshala.',
                    contact: {
                        email: 'support@heritagedharamshala.com',
                        phone: '(+91)8812374732',
                        website: 'heritagedharamshala.com',
                        address: '34, McLeod Ganj, Dharamshala, India',
                    }
                },
            },
        ]
    },
    {
        name: 'Kashmir, Jammu & Kashmir',
        tagline: 'The Heaven on Earth with Mesmerizing Landscapes!',
        image: '/assets/KASH-1.png',
        list: [
            "Enjoy a shikara ride on Dal Lake.",
            "Explore the gardens of Mughal emperors.",
            "Ski in Gulmarg, a winter paradise.",
            "Experience the beauty of Pahalgam and Betaab Valley.",
            "Taste authentic Kashmiri Wazwan cuisine.",
            "Visit the spiritual shrine of Amarnath Cave."
        ],
        tours: [
            {
                id: 13,
                name: 'Shikara Ride on Dal Lake 2 hours Tour',
                description: 'Experience the serenity of Dal Lake with a peaceful shikara ride, offering breathtaking views of the surrounding mountains and floating gardens.',
                image: '/assets/JK-1.png',
                price: 1200,
                rating: 4.8,
                reviews: 180,
                images: [
                    '/assets/JK-1.png',
                    '/assets/kashmir.png',
                    '/assets/manali.png',
                    '/assets/dal-lake.png'
                ],
                about: 'The shikara ride on Dal Lake is a calm and scenic experience, offering views of the floating gardens and surrounding mountain ranges, making it a must-do when visiting Srinagar.',
                duration: '2 hours',
                impInfo: {
                    canBring: ['Warm clothing', 'Camera', 'Waterproof bags for electronics'],
                    cannotBring: ['Large bags', 'Alcohol', 'Pets']
                },
                aboutAgency: {
                    name: 'Kashmir Tours & Travels',
                    about: 'Kashmir Tours & Travels offers guided tours to the scenic spots of Kashmir, including the shikara ride on Dal Lake. Our tours are designed to provide visitors with an authentic experience of the region’s natural beauty, cultural heritage, and spiritual traditions. Whether you are a nature lover, a history buff, or simply seeking a peaceful retreat, our experienced guides will help you explore the hidden gems and scenic landscapes of Kashmir, offering a memorable journey through the “Paradise on Earth.”',
                    contact: {
                        email: 'support@kashmirtours.com',
                        phone: '(+91)9995999132',
                        website: 'kashmirtours.com',
                        address: '45, Dal Lake, Srinagar, India',
                    }
                },
            },
            {
                id: 14,
                name: 'Gulmarg Skiing Experience Full-day Tour',
                description: 'Explore the winter paradise of Gulmarg and indulge in skiing on some of India’s finest slopes, surrounded by snow-capped peaks.',
                image: '/assets/JK-2.png',
                price: 6000,
                rating: 4.9,
                reviews: 250,
                images: [
                    '/assets/JK-2.png',
                    '/assets/gulmarg.png',
                    '/assets/gulmarg-1.png',
                    '/assets/JK-4.png'
                ],
                about: 'Gulmarg is a top destination for skiing enthusiasts, offering excellent slopes and snow-covered landscapes. Enjoy an exhilarating skiing experience in the heart of the Himalayas.',
                duration: 'Full-day',
                impInfo: {
                    canBring: ['Warm clothing', 'Gloves', 'Skiing equipment (if not provided)', 'Sunglasses'],
                    cannotBring: ['Food', 'Alcohol', 'Pets']
                },
                aboutAgency: {
                    name: 'Kashmir Adventure Tours',
                    about: 'Kashmir Adventure Tours offers guided tours to the adventure spots of Kashmir, including Gulmarg for skiing. Our tours are designed to provide visitors with an adrenaline-pumping experience in the snow-covered landscapes of the region. Whether you are a skiing enthusiast, a nature lover, or simply seeking an adventure, our experienced guides will help you explore the thrill of skiing in the Himalayas, offering a memorable journey through the winter paradise of Gulmarg.',
                    contact: {
                        email: 'support@kashmiradvtours.com',
                        phone: '(+91)7965969432',
                        website: 'kashmiradvtours.com',
                        address: '78, Gulmarg, Jammu & Kashmir, India',
                    }
                },
            },
            {
                id: 15,
                name: 'Mughal Gardens and Srinagar City Half-day Tour',
                description: 'Stroll through the enchanting Mughal Gardens of Shalimar Bagh and Nishat Bagh, and explore the cultural heritage of Srinagar.',
                image: '/assets/JK-3.png',
                price: 2500,
                rating: 4.7,
                reviews: 120,
                images: [
                    '/assets/JK-3.png',
                    '/assets/garden.png',
                    '/assets/garden-1.png',
                    '/assets/garden-2.png'
                ],
                about: 'Explore the Mughal Gardens, a testament to the architectural brilliance of the Mughal Empire, and enjoy a leisurely walk through Srinagar’s historical sites.',
                duration: 'Half-day',
                impInfo: {
                    canBring: ['Comfortable shoes', 'Hat', 'Camera'],
                    cannotBring: ['Pets', 'Food', 'Heavy backpacks']
                },
                aboutAgency: {
                    name: 'Kashmir Heritage Tours',
                    about: 'Kashmir Heritage Tours offers guided tours to the historical landmarks of Kashmir, including the Mughal Gardens and Srinagar City. Our tours are designed to provide visitors with an in-depth understanding of the region’s rich heritage and cultural legacy. Whether you are a history enthusiast, an architecture buff, or simply curious about the past, our experienced guides will help you explore the hidden gems and iconic sites of Kashmir.',
                    contact: {
                        email: 'support@heritagekashmir.com',
                        phone: '(+91)8991555132',
                        website: 'heritagekashmir.com',
                        address: '34, Srinagar, Jammu & Kashmir, India',
                    }
                },
            },
            {
                id: 16,
                name: 'Pahalgam and Betaab Valley Sightseeing Full-day Tour',
                description: 'Visit the pristine landscapes of Pahalgam and the cinematic beauty of Betaab Valley, perfect for nature lovers and photographers.',
                image: '/assets/JK-4.png',
                price: 5000,
                rating: 4.8,
                reviews: 200,
                images: [
                    '/assets/K-1.png',
                    '/assets/K-2.webp',
                    '/assets/K-3.webp',
                    '/assets/K-4.webp'
                ],
                about: 'The stunning beauty of Pahalgam and Betaab Valley is perfect for nature lovers. Capture scenic landscapes and explore lush valleys surrounded by towering mountains.',
                duration: 'Full-day',
                impInfo: {
                    canBring: ['Comfortable footwear', 'Camera', 'Hat or sunglasses'],
                    cannotBring: ['Pets', 'Loud music', 'Alcohol']
                },
                aboutAgency: {
                    name: 'Kashmir Nature Tours',
                    about: 'Kashmir Nature Tours offers guided tours to the natural wonders of Kashmir, including Pahalgam and Betaab Valley. Our tours are designed to provide visitors with an authentic experience of the region’s natural beauty, cultural heritage, and spiritual traditions. Whether you are a nature lover, a history buff, or simply seeking a peaceful retreat, our experienced guides will help you explore the hidden gems and scenic landscapes of Kashmir, offering a memorable journey through the “Paradise on Earth.”',
                    contact: {
                        email: 'support@naturekashmir.com',
                        phone: '(+91)9392796532',
                        website: 'naturekashmir.com',
                        address: '89, Pahalgam, Jammu & Kashmir, India',
                    }
                },
            },
        ]
    }
];