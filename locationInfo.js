const locationObject =  {
    
    LOCATION1:{
    id: 1,
    lat: 55.57035821109426, 
    lon: 12.941780949728019,
    tolerance: 50,
    title: "Kalkbrottet",
    adress: "Kalkbrottets utsiktsplats",
    description: "Välkommen till kalkbrottet! En dammig och bullrig plats men en stor möjlighet för Limhamnsborna. Idag en lugn plats för olika djurarter.",
    images: [
        './media/kalkbrottet1.png',
        './media/kalkbrottet2.png',
        './media/kalkbrottet3.png',
],
    alt: [
        "'Okänd fotograf / Bild ur boken “Limhamn - Från stenåldern till nutid”",
        "'Sista resan för kalktåget samlade tusentalks åskådare. Foto: Okänd fotograf/ Sydsvenskan 1967'",
        "'Handbrytning i kalkbrottet. Fotot: Okänd fotograf / Bild ur boken “Limhamn - Från stenåldern till nutid”."
    ],
    audio: "./media/audio/kalkbrottet.wav",
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
        lat: 55.57170689301456, 
        lon: 12.900686310149116,
        tolerance: 50,
        title: 'Sumphamnen',
        adress: 'Sibbarps småbåtshamn',
        description: "Nu står vi på en historisk plats i Limhamn där man länge kunde skåda silla båtarna guppa i vattenbrynet. Fisket har varit en stor del för Limhamn och många livnärde sig på yrkesfisket i Limhamn.",
        images: [
            "./media/sumphamnen1.png",
            "./media/sumphamnen2.png",
            "./media/sumphamnen3.png",
            "./media/sumphamnen4.png",
            "./media/sumphamnen5.png",
        ],
        alt: [
            "Bildtext referens",
            "Johan Richthoff hoppar längd på Limhamns idrottsplats år 1926. Med på bilden är bland annat Tage Jeppsson, bror till Eric Jeppsson. Foto: Eric Jeppsson / Malmö museum",
            "Sumphamnen. Foto: okänd fotograf/ Sydsvenskans bildarkiv 1942.",
            "Johan Richthoff hoppar längd på Limhamns idrottsplats år 1926. Med på bilden är bland annat Tage Jeppsson, bror till Eric Jeppsson. Foto: Eric Jeppsson / Malmö museum",
            "Johan Richthoff hoppar längd på Limhamns idrottsplats år 1926. Med på bilden är bland annat Tage Jeppsson, bror till Eric Jeppsson. Foto: Eric Jeppsson / Malmö museum",
        ],
        audio: "./media/audio/fisket.wav",
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
        lat: 55.58244926064056, 
        lon: 12.92742508757873,
        tolerance: 50,
        title: 'Limhamns torg',
        adress: 'Linnégatan 15',
        description: 'Nu har du kommit till Linnégatan, en lång gata med rik historia. Här kommer du ta del av den oroliga tiden och spår av nasistiska ledare i Limhamn.',
        images: [
            "./media/linnegatan1.png",
            "./media/linnegatan2.png",
            "./media/limhamn2.jpg",
            
        ],
        alt: [
            "Bildtext referens",
            "Limhamns Torg, vykort, 1940. Foto: Okänd fotograf / facebook",
            "Bildtext referens",
    ],
        audio: "./media/audio/linnegatan.wav",
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
                question: "Vilket årtal avgick spårvagn 4 från limhamn sista gången?",
                alternatives: [
                    { answer: "1973", value: 1 },
                    { answer: "1922", value: 0 },
                    { answer: "1975", value: 0 }
                ]
            }
        ]
    },
    LOCATION4: {
        id:4,
        lat: 55.58744103751432, 
        lon: 12.92478843712304,
        tolerance: 50,
        title: 'Öresundshamen',
        adress: 'Norra Fiskehamnen',
        description: 'Britta minns hur hennes mormor berättade om den första ångfärjan Alexandra som sedan 1930-talet påbörjade ett nytt kapitel för passagerarfartyg mellan Limhamn och Dragör. Hennes mormor är dansk och då fick hon äntligen åka ut för att se sina släktingar. Britta nämner att hon hittade gamla biljetter från ångfartygen Dragör 1934 hos sin mormor som, gillade att samla på gamla minnen. Britta blir då förvånad eftersom tur- och returbiljetten kostade 1,75 kr. Under den tyska ockupationen i Danmark upphörde färjetrafiken mellan Limhamn och Dragör som hennes mormor mindes väl.',
        images: [
            "./media/oresundshamnen1.png",
            "./media/oresundshamnen2.png",
            "./media/oresundshamnen3.png",
            "./media/oresundshamnen4.jpg",
            "./media/oresundshamnen1.png",
    ],
    alt: [
        "Bildtext referens",
        "Bildtext referens",
        "Bildtext referens",],
    audio: "./media/audio/oresund.wav",
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
        lat: 55.58875130828082, 
        lon: 12.926325183171926,
        tolerance: 50,
        title: 'Cementfabriken',
        adress: 'Övägen 6A',
        description: 'Rudolf Fredrik Berg utan dig hade inte Limhamn expanderat och blivit den stadsdelen det är idag. Cementfabriken erbjöd ytterligare arbeten här och en massa ny underhållning. Varför inte ta ett dopp i badhuset? ',
        images: [
            "./media/cementfabriken1.png",

    ],
    alt: ["Bildtext referens",],
    audio: "./media/audio/cementfabriken.wav",
    quiz: [
        {
            question: "Vem var Limhamnskungen?",
            alternatives: [
                { answer: "Rudolf Fredrik Beijer.", value: 0 },
                { answer: "Rudolf Fredrik Börjesson.", value: 0 },
                { answer: "Rudolf Fredrik Berg.", value: 1 }
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
