const locationObject =  {
    
    LOCATION1:{
    id: 1,
    lat: 55.586085319092035,
    lon: 13.013902538397984,
    tolerance: 50,
    title: "Kalkbrottet",
    adress: "Kalbrottets utsiktsplats",
    description: "Lorem kalkum dolor sit amet, quarry consectetur limhamborum. Sed do eiusmod tempor incididunt ut labore et dolore magna karst aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex calx commodo.",
    images: [
        'https://pontus-karlsson96.github.io/ProjectME140B/media/limhamn3.jpg',
        'https://pontus-karlsson96.github.io/ProjectME140B/media/kalkbrottet2.png',
        'https://pontus-karlsson96.github.io/ProjectME140B/media/kalkbrottet3.png',
],
    alt: [
        "'Okänd fotograf / Bild ur boken “Limhamn - Från stenåldern till nutid”",
        "'Sista resan för kalktåget samlade tusentalks åskådare. Foto: Okänd fotograf/ Sydsvenskan 1967'",
        "'Handbrytning i kalkbrottet. Fotot: Okänd fotograf / Bild ur boken “Limhamn - Från stenåldern till nutid”."
    ],
    audio: "https://pontus-karlsson96.github.io/ProjectME140B/media/audio/kalkbrottet.wav",
    quiz: [
        {
            question: "Vad var en av orsakerna till nedläggningen av kalk- och cementindustrin i Limhamn?",
            alternatives: [
                { answer: "Ökad turism i området.", value: 0 },
                { answer: "Minskad efterfrågan på cement.", value: 1 },
                { answer: "Förbättrad miljö och naturbevarande åtgärder.", value: 0 }
            ]
        },
        {
            question: "Vad är en av de hotade djurarter som finns i kalkbrottet?",
            alternatives: [
                { answer: "Berguven.", value: 0 },
                { answer: "Grönfläckig padda.", value: 1 },
                { answer: "Korpen.", value: 0 }
            ]
        },
        {
            question: "Vad är en av anledningarna till den grönfläckiga paddans minskning i antal?",
            alternatives: [
                { answer: "Förbättrad vattenkvalitet.", value: 0 },
                { answer: "Övergödning och försämrad livsmiljö.", value: 1 },
                { answer: "Ökad predation från andra djur.", value: 0 }
            ]
        }
    ]
    },

    LOCATION2: {
        id: 2,
        lat: 55.57170023617143, //55.57170023617143, 12.9006683751294
        lon: 12.9006683751294,
        tolerance: 50,
        title: 'Sumphamnen',
        adress: 'Sibbarps småbåtshamn',
        description: "Nu står vi på en historisk plats i Limhamn där man länge kunde skåda silla båtarna guppa i vattenbrynet. Fisket har varit en stor del för Limhamn och många livnärde sig på yrkesfisket i Limhamn.",
        images: [
            "https://pontus-karlsson96.github.io/ProjectME140B/media/limhamn1.jpg",
            "https://pontus-karlsson96.github.io/ProjectME140B/media/sumphamnen2.png",
            "https://pontus-karlsson96.github.io/ProjectME140B/media/sumphamnen3.png",
            "https://pontus-karlsson96.github.io/ProjectME140B/media/sumphamnen4.png",
            "https://pontus-karlsson96.github.io/ProjectME140B/media/limhamn2.jpg",
        ],
        alt: [
            "Bildtext referens",
            "Johan Richthoff hoppar längd på Limhamns idrottsplats år 1926. Med på bilden är bland annat Tage Jeppsson, bror till Eric Jeppsson. Foto: Eric Jeppsson / Malmö museum",
            "Sumphamnen. Foto: okänd fotograf/ Sydsvenskans bildarkiv 1942.",
            "Johan Richthoff hoppar längd på Limhamns idrottsplats år 1926. Med på bilden är bland annat Tage Jeppsson, bror till Eric Jeppsson. Foto: Eric Jeppsson / Malmö museum",
            "Johan Richthoff hoppar längd på Limhamns idrottsplats år 1926. Med på bilden är bland annat Tage Jeppsson, bror till Eric Jeppsson. Foto: Eric Jeppsson / Malmö museum",
        ],
        audio: "https://pontus-karlsson96.github.io/ProjectME140B/media/audio/fisket.wav",
        quiz: [
            {
                question: "Vilken var den vanligaste fiskarten som fiskades på Limhamn? ",
                alternatives: [
                    { answer: "Torsk", value: 0 },
                    { answer: "Sill", value: 1 },
                    { answer: "Lax", value: 0 }
                ]
            },
            {
                question: "Vilket var Johans Rischtoffs första jobb?",
                alternatives: [
                    { answer: "Fiskare", value: 0 },
                    { answer: "Rallare", value: 0 },
                    { answer: "Tunnbindare", value: 1 }
                ]
            },
            {
                question: "1967 var ett tufft år för fiskarna, varför det? ",
                alternatives: [
                    { answer: "Malmö stad ville bygga badplatser för barn.", value: 1 },
                    { answer: "Det var ont om sill. ", value: 0 },
                    { answer: "En storm har förstört fiskarnas hoddor.", value: 0 }
                ]
            }
        ]
    },

    LOCATION3: {
        id:3,
        lat: 55.5823352070059, 
        lon: 12.927463053379727,
        tolerance: 50,
        title: 'Limhamns torg',
        adress: 'Linnégatan 15',
        description: 'Gott med kaffe',
        images: [
            "https://pontus-karlsson96.github.io/ProjectME140B/media/linnegatan1.png",
            "https://pontus-karlsson96.github.io/ProjectME140B/media/linnegatan2.png",
            "https://pontus-karlsson96.github.io/ProjectME140B/media/limhamn3.jpg",
        ],
        alt: [
            "Bildtext referens",
            "Limhamns Torg, vykort, 1940. Foto: Okänd fotograf / facebook",
            "Bildtext referens",
    ],
        audio: "https://pontus-karlsson96.github.io/ProjectME140B/media/audio/linnegatan.wav",
        quiz: [
            {
                question: "Vad jobbade Hermann Göring som under tiden han bodde på Limhamn?",
                alternatives: [
                    { answer: "Testpilot", value: 1 },
                    { answer: "Flygplansmekaniker", value: 0 },
                    { answer: "Flygtekniker", value: 0 }
                ]
            },
            {
                question: "Vilken färg hade spårvagnen nr 4 som gick till Sibbarp?",
                alternatives: [
                    { answer: "Mintgrön", value: 0 },
                    { answer: "Olivgrön", value: 1 },
                    { answer: "Limegrön", value: 0 }
                ]
            },
            {
                question: "Vad hette den nasistiska partiledaren som talade på Limhamnstorget den 1933. ",
                alternatives: [
                    { answer: "Sven Olof Lindholm", value: 1 },
                    { answer: "Sven Olof Lindfors", value: 0 },
                    { answer: "Sven Olof Lindström", value: 0 }
                ]
            }
        ]
    },
    LOCATION4: {
        id:4,
        lat:55.58742425290773, 
        lon: 12.924839556735098,
        tolerance: 50,
        title: 'Öresunds hamen',
        adress: 'Norra Fiskehamnen',
        description: 'Här är jag',
        images: [
            "https://pontus-karlsson96.github.io/ProjectME140B/media/oresundshamnen1.png",
            "https://pontus-karlsson96.github.io/ProjectME140B/media/oresundshamnen2.png",
            "https://pontus-karlsson96.github.io/ProjectME140B/media/oresundshamnen3.png",
            "https://pontus-karlsson96.github.io/ProjectME140B/media/oresundshamnen4.jpg",
    ],
    alt: [
        "Bildtext referens",
        "Bildtext referens",
        "Bildtext referens",],
    audio: "https://pontus-karlsson96.github.io/ProjectME140B/media/audio/oresund.wav",
    quiz: [
        {
            question: "Hur mycket kostade tur- och returbiljetten på fartyget Dragör mellan Limhamn och Dragör året 1934?",
            alternatives: [
                { answer: "0.5 öre", value: 0 },
                { answer: "2 kr", value: 0 },
                { answer: "1.75 kr", value: 1 }
            ]
        },
        {
            question: "Vad var namnet på fartyget som gjorde den sista resan mellan Limhamn och Dragör året 1999.",
            alternatives: [
                { answer: "Dragör", value: 0 },
                { answer: "Scania", value: 1 },
                { answer: "Scandinavia", value: 0 }
            ]
        },
        {
            question: "Vilken typ av fartyg var det första passagerarfartyget mellan Limhamn och Dragör på 1930-talet?",
            alternatives: [
                { answer: "Motorfartyg", value: 0 },
                { answer: "Segelbåtsfartyg", value: 0 },
                { answer: "Ångfartyg", value: 1 }
            ]
        }
    ]
    },
    LOCATION5: {
        id:5,
        lat:55.58873061916144, 
        lon: 12.926327755570668,
        tolerance: 50,
        title: 'Cementfabriken',
        adress: 'Övägen 6A',
        description: 'Här är jag',
        images: [
            "https://pontus-karlsson96.github.io/ProjectME140B/media/cementfabriken1.png",

    ],
    alt: ["Bildtext referens",],
    audio: "https://pontus-karlsson96.github.io/ProjectME140B/media/audio/cementfabriken.wav",
    quiz: [
        {
            question: "Varför kallades Cristo Redento statyn i Rio de Janeiro 'Limhamns-Jesus' av Limhamns fiskare?",
            alternatives: [
                { answer: "Hela statyn är gjord av Limhamns cement.", value: 0 },
                { answer: "Statyns överkropp är gjord av Limhamns cement.", value: 0 },
                { answer: "Statyns fundament är gjord av Limhamns cement.", value: 1 }
            ]
        },
        {
            question: "Vad var en av de största förändringarna som cementfabriken bidrog till i Limhamn?",
            alternatives: [
                { answer: "Det byggdes en hamn som kopplade Limhamn till resten av världen.", value: 1 },
                { answer: "Limhamn blev ett populärt turistmål.", value: 0 },
                { answer: "Cementfabriken ersatte fisket som den primära sysslan i området.", value: 0 }
            ]
        },
        {
            question: "Vad var speciellt med 'dambandet' på cementfabriken?",
            alternatives: [
                { answer: "Det var ett band där endast män arbetade.", value: 0 },
                { answer: "Det var ett band där endast kvinnor arbetade med sorteringen av kalk.", value: 1 },
                { answer: "Det var ett band som användes för att transportera cement till andra fabriker.", value: 0 }
            ]
        }
    ]
    },
};
