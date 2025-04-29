const locationObject =  {


    LOCATION1:{
    id: 1,
    lat: 55.60888775381207,//55.60587,
    lon: 12.994727729769723,//13.00073,
    tolerance: 1000,
    title: "Kalkbrottet",
    description: "Limhamn, a charming district in Malmö, Sweden, blends coastal tranquility with urban vibrancy. Once an independent town, it retains a distinct character. Its harbor, bustling with sailboats and fishing vessels, offers scenic views of the Öresund strait. Limestone quarries, historically vital, now host recreational areas. Quaint streets are lined with diverse shops and restaurants, reflecting a mix of old-world charm and modern living. Limhamn's proximity to the sea encourages outdoor activities, from leisurely walks along the beach to kite surfing. The area boasts a relaxed atmosphere, attracting families and those seeking a peaceful yet connected lifestyle.",
    images: [
        "<img class='image1' src='./media/limhamn1.jpg' alt='Gata med hus på båda sidor, tre bilar parkerade på vänster sida brevid vägen, en bil parkerad på höger sida på vägen, bilden är daterad 1969'>",
        "<img class='image2' src='./media/limhamn2.jpg' alt='Bostadsområde. Gammal bil parkerad på vänster sida'>",
        "<img class='image3' src='./media/limhamn3.jpg' alt='Tre personer i finkläder står på ett hustak och blickar ut över Limhamns industriområde'>",
],
    audio: "./media/fi.mp3",
    quiz: [
        {
            question: "Vad var en av orsakerna till nedläggningen av kalk- och cementindustrin i Limhamn?",
            alternatives: [
                { answer: "Ökad turism i området.", value: 1 },
                { answer: "Förlusten av många arbetsmöjligheter.", value: 0 },
                { answer: "Förbättrad miljö och naturbevarande åtgärder.", value: 0 }
            ]
        },
        {
            question: "Vad är en av de hotade djurarter som finns i kalkbrottet?",
            alternatives: [
                { answer: "Berguven.", value: 1 },
                { answer: "Grönfläckig padda.", value: 0 },
                { answer: "Korpen.", value: 0 }
            ]
        },
        {
            question: "Vad är en av anledningarna till den grönfläckiga paddans minskning i antal?",
            alternatives: [
                { answer: "Förbättrad vattenkvalitet.", value: 1 },
                { answer: "Övergödning och försämrad livsmiljö.", value: 0 },
                { answer: "Ökad predation från andra djur.", value: 0 }
            ]
        }
    ]
    },

    LOCATION2: {
        id: 2,
        lat: 55.60170625333595,
        lon: 13.001817923103184,
        tolerance: 100,
        title: 'Sumphamnen',
        description: "Grattis på födelsedagen, Anton",
        images: [
            "<img class='image1' src='./media/finland.jpg' alt='grattis Anton'>",
            "<img class='image2' src='./media/finland.jpg' alt='grattis Anton'>",
            "<img class='image3' src='./media/finland.jpg' alt='grattis Anton'>",
        ],
        audio: "./media/fi.mp3",
        quiz: [
            {
                question: "Vilken var den vanligaste fiskarten som fiskades på Limhamn? ",
                alternatives: [
                    { answer: "Torsk", value: 1 },
                    { answer: "Sill", value: 0 },
                    { answer: "Lax", value: 0 }
                ]
            },
            {
                question: "Vilket var Johans Rischtoffs första jobb?",
                alternatives: [
                    { answer: "Fiskare", value: 1 },
                    { answer: "Rallare", value: 0 },
                    { answer: "Tunnbindare", value: 0 }
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
        lat:55.60890612475543,
        lon: 12.994687614177822,
        tolerance: 200,
        title: 'Linnégatan',
        description: 'Gott med kaffe',
        images: [
            "<img class='image1' src='./media/finland.jpg' alt='Japp'>",
            "<img class='image2' src='./media/finland.jpg' alt='Japp'>",
            "<img class='image3' src='./media/finland.jpg' alt='Japp'>",
        ],
        audio: "./media/fi.mp3",
        quiz: [
            {
                question: "Vad jobbade Herman Göring som under tiden han bodde på Limhamn?",
                alternatives: [
                    { answer: "Testpilot", value: 1 },
                    { answer: "Flygplansmekaniker", value: 0 },
                    { answer: "Flygtekniker", value: 0 }
                ]
            },
            {
                question: "Vilken färg hade spårvagnen nr 4 som gick till Sibbarp?",
                alternatives: [
                    { answer: "Mintgrön", value: 1 },
                    { answer: "Olivgrön", value: 0 },
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
        lat: 55.58611327405579,
        lon: 13.014027259123269,
        tolerance: 400,
        title: 'Öresunds hamen',
        description: 'Här är jag',
        images: ["<img class='image1' src='./media/finland.jpg' alt='Japp'>",
        "<img class='image2' src='./media/finland.jpg' alt='Japp'>",
        "<img class='image3' src='./media/finland.jpg' alt='Japp'>",
    ],
    audio: "./media/fi.mp3",
    quiz: [
        {
            question: "Hur mycket kostade tur- och returbiljetten på fartyget Dragör mellan Limhamn och Dragör året 1934?",
            alternatives: [
                { answer: "0.5 öre", value: 1 },
                { answer: "2 kr", value: 0 },
                { answer: "1.75 kr", value: 0 }
            ]
        },
        {
            question: "Vad var namnet på fartyget som gjorde den sista resan mellan Limhamn och Dragör året 1999.",
            alternatives: [
                { answer: "Dragör", value: 1 },
                { answer: "Scania", value: 0 },
                { answer: "Scandinavia", value: 0 }
            ]
        },
        {
            question: "Vilken typ av fartyg var det första passagerarfartyget mellan Limhamn och Dragör på 1930-talet?",
            alternatives: [
                { answer: "Motorfartyg", value: 1 },
                { answer: "Segelbåtsfartyg", value: 0 },
                { answer: "Ångfartyg", value: 0 }
            ]
        }
    ]
    },
    LOCATION5: {
        id:5,
        lat: 55.58611327405579,
        lon: 13.014027259123269,
        tolerance: 400,
        title: 'Cementfabriken',
        description: 'Här är jag',
        images: ["<img class='image1' src='./media/finland.jpg' alt='Japp'>",
        "<img class='image2' src='./media/finland.jpg' alt='Japp'>",
        "<img class='image3' src='./media/finland.jpg' alt='Japp'>",
    ],
    audio: "./media/fi.mp3",
    quiz: [
        {
            question: "Varför kallades Cristo Redento statyn i Rio de Janeiro 'Limhamns-Jesus' av Limhamns fiskare?",
            alternatives: [
                { answer: "Hela statyn är gjord av Limhamns cement.", value: 1 },
                { answer: "Statyns överkropp är gjord av Limhamns cement.", value: 0 },
                { answer: "Statyns fundament är gjord av Limhamns cement.", value: 0 }
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
                { answer: "Det var ett band där endast män arbetade.", value: 1 },
                { answer: "Det var ett band där endast kvinnor arbetade med sorteringen av kalk.", value: 0 },
                { answer: "Det var ett band som användes för att transportera cement till andra fabriker.", value: 0 }
            ]
        }
    ]
    },
    MALMO: {
        lat: 55.60587,
        lon: 13.00073,
        tolerance: 300,
        title: 'Malmo',
        description: "VÄLKOMMEN TILL MALMÖ",
        images: ["<img class='image1' src='./media/finland.jpg' alt='Japp'>",
        "<img class='image2' src='./media/finland.jpg' alt='Japp'>",
        "<img class='image3' src='./media/finland.jpg' alt='Japp'>",
    ],
    audio: "./media/fi.mp3",
    

    }

};
