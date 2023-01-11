const model = {
  // app ↓
  currentPage: "main",

  selectedUser: undefined,

  users: [
    { ansattNummer: 101, name: `kåre med liten "K"` },
    { ansattNummer: 102, name: "Arnt" },
    { ansattNummer: 103, name: "Kåre" },
    { ansattNummer: 104, name: "Bob" },
    { ansattNummer: 404, name: "admin", isAdmin: true, password: "admin" },
  ],

  // inputs ↓

  selectedSurvey: undefined,
  currentQuestion: undefined,
  surveysCreateText: undefined, // lages av kontroller for å lagre dataen som er i serveien når den lages av admin

  // data ↓
  surveys: [
    {
      id: 1,
      title: "Kake",
      startDate: "12.11.4040",
      endDate: "12.12.4040",
      finishedParticipants: 0,
      totalParticipants: 25,
      questions: [
        { question: "Liker du kake", radioAlternatives: ["Ja", "Nei"] },
        {
          question: "Hvorfor det?",
          customAnwser: true,
        },
        {
          question: "Hva er favoritt typen din?",
          radioAlternatives: ["Sjokolade", "Is"],
          customAnwser: true,
        },
      ],
      answers: [
        {
          ansattNummer: 101,
          userAnswers: [0, "jeg liker det bare", 1],
        },
        {
          ansattNummer: 102,
          userAnswers: [1, "Gud bestemte", "Kake"],
        },
        {
          ansattNummer: 103,
          userAnswers: [0, "Vet ikke ", 0],
        },
        {
          ansattNummer: 104,
          userAnswers: [0, "Føtt feil", "Banana"],
        },
      ],
    },
    {
      id: 2,
      title: "Bake",
      startDate: "12.11.1997",
      endDate: "12.11.2001",
      finishedParticipants: 0,
      totalParticipants: 25,
      questions: [
        { question: "Liker du å bake", radioAlternatives: ["Ja", "Nei"] },
        {
          question: "Hvorfor det?",
          customAnswer: true,
        },
        {
          question: "Hva er favoritt tingen din å bake?",
          radioAlternatives: ["Brød", "Bolle"],
          customAnswer: true,
        },
      ],
      answers: [
        {
          ansattNummer: 101,
          userAnswers: [0, "Det er gøy", "Is brød"],
        },
      ],
      isFinished: true,
    },
  ],
};
