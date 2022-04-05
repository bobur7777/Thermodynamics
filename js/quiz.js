const option1 = document.querySelector(".option1"),
  option2 = document.querySelector(".option2"),
  option3 = document.querySelector(".option3"),
  option4 = document.querySelector(".option4");

const optionElements = document.querySelectorAll(".option");

const question = document.getElementById("question"),
  numberOfQuestion = document.getElementById("number__of__question"),
  numberOfAllQuestion = document.getElementById("number__of__all__question");

let indexOfQuestion,
  indexOfPage = 0;

const answersTracker = document.getElementById("answer__tracker");
const btnNext = document.getElementById("btn__next");

let score = 0;

const correctAnswer = document.getElementById("correct__answer"),
  numberOfAllQuestion2 = document.getElementById("number__of__all__question2"),
  btnTryAgain = document.getElementById("btn__try__again");

const questions = [
  {
    question: "Izotermik jaraenda kaysi parametr o'zgarmas (const) b'ladi?",
    options: ["harorat (t)", "yalangoyoq(р)", "bosing(v)", "tezlik ( V )"],
    rightAnswer: 0,
  },
  {
    question: "Isocharic jaraenda kaysi parametr o'zgarmas (const) bo'ladi?",
    options: ["bosing(v)", "yalangoyoq(p)", "harorat (t)", "yuza(s)"],
    rightAnswer: 0,
  },
  {
    question: "Issiqlik dvigatelining quvvati nimadan iborat.",
    options: [
      "bug'hosil kiladi.",
      "issyklik energyblue mechanic energyga ailantiraradi",
      "issiqlik energiyasi xosil kiladi.",
      "suuqlik energiyasi koʻk issiqlik energiyasi oq baliqning ai beradi.",
    ],
    rightAnswer: 1,
  },
  {
    question: "Issiqlik mashina va nima?",
    options: [
      "Issiqlik mashina va nima?",
      "suyuklik energetika blue electric energyga ailantirib beradi.",
      "transport vositasi",
      "elektr motor",
    ],
    rightAnswer: 0,
  },
  {
    question: "Issiqlik mikdorining o'lchov birligi nima?",
    options: ["kg", "j/s", "m/s", "j"],
    rightAnswer: 3,
  },
  {
    question: "Issiqlik nima?",
    options: [
      "molekulasi",
      "ichki yonuv dvigatellari",
      "atom wa moleculelarning murakkab harakatini payo buluvchi energiya",
      "harakat qiladigan kuch",
    ],
    rightAnswer: 2,
  },
  {
    question: "Issiqlik oqimining kuchi kaysi o'lchov birligida o'lchanadi?",
    options: ["J", "sek", "kg", "Vt"],
    rightAnswer: 3,
  },
  {
    question: "Ichki energiya tizimini fanga nechanchi yil kim taqdim qiladi?",
    options: [
      "1851 yil d.maksvell",
      "1850 yil joule",
      "1851 yil R. Mayer",
      "1850 yil w.tomson",
    ],
    rightAnswer: 3,
  },
  {
    question: "Carnot sikli thermodinamikasi nimani ifodalaidi?",
    options: [
      "termodinamika 2-konuni",
      "entropiya",
      "politron jaraenni",
      "termodinamika 1-konuni",
    ],
    rightAnswer: 0,
  },
  {
    question: "Moddaning issyklik sigimi nimani ifodalaidi?",
    options: [
      "moddaning sigimi",
      "moddaning kengayishi",
      "jisming torayishi",
      "moddaning birlik massasini isitish uchun zarur bulgan issiqlik mikdori.",
    ],
    rightAnswer: 3,
  },
  {
    question: "Moddaning miqdori kanday birlikda ulchanadi?	",
    options: ["N", "moddaning nisby atom beerligi", "kg", "mol"],
    rightAnswer: 3,
  },
  {
    question:
      "Systemaning  ichki energiyasi kaysi o'lchov birligida ifodalanadi?",
    options: ["j/kg", "m", "sm", "N"],
    rightAnswer: 0,
  },
  {
    question:
      "Suv bugʼi hosil boʼlishda kanday termodinamik jarayonlar vujudga keladi?",
    options: [
      "izoxarik, izobarik, adiabatik, izotermik ",
      "politron ",
      "Entalьpiya",
      "izobarik.",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Suv bugʼi hosil boʼlishda qanday fizik jarayonlar sodir boʼladi?",
    options: ["siyraklanish", "kengayish", "siqilish", "bugʼlanish, qaynash "],
    rightAnswer: 3,
  },
  {
    question: "Termodinamika Renkin sikli nimani ifodalaydi?",
    options: [
      "bugʼ kuch qurilmasining nazariy sikli.",
      "iyod sikli",
      "termodinamikaning 1-qonuni.",
      "termodinamikaning 2-qonuni. ",
    ],
    rightAnswer: 0,
  },
  {
    question: "Termodinamikada politrop jarayon nimani ifodalaydi?",
    options: [
      "issiqliq sigʼimi (c= const) oʼzgarmas bulishi.",
      "issiqlik sigʼimi oʼzgaruvchan bulishi.	",
      "p=const boʼlishi",
      "v=const",
    ],
    rightAnswer: 0,
  },
  {
    question: "Termodinamikaning birinchi qonuni nimani ifodalaydi?",
    options: [
      "issiqlik miqdori",
      "issiqlik sigʼimi",
      "moddaning hajmi.",
      "sistemaga uzatilgan issiqlik miqdorining sistemaning ichki energiyasini uzgarishiga va bajargan ishini ",
    ],
    rightAnswer: 3,
  },
  {
    question: "Termodinamikaning ikkinchi qonuni nimani taʼriflaydi.",
    options: [
      "energiyaning bir turdan ikkinchi turga aylanishi.",
      "sistemaning issiqlik sigʼimi",
      "issiqlik energiyasining tuliik ishga aylanmasligi va issiqlik sovuq sistemadan issiq sistemaga oʼz-oʼzidan oʼta olmasligi.",
      "energiyaning saqlanish qonuni.",
    ],
    rightAnswer: 2,
  },
  {
    question: "Harorat deganda nimani tushunaciz?",
    options: [
      "harorat jicmning kizitilganlik darajacini ifodalaydi",
      "harorat jicmning energiya zonacini koʼrcatadi",
      "harorat zapac imkoniyat, lekin xali bajarilmagan ishdir",
      "harorat jicmning kizish xicobiga ish bajarish darajacini koʼrcatadi",
    ],
    rightAnswer: 0,
  },
  {
    question: "Elektr energiyasining oʼlchov birligi nima?",
    options: ["Vt", "kg.", "kvt /soat", "j"],
    rightAnswer: 2,
  },
  {
    question: "Entalpiya soʼzining maʼnosi nima?",
    options: [
      "yunoncha «isitaman»",
      "yunoncha «oʼzgaraman».",
      "lotincha «sovitaman»",
      "grekcha «aylanaman»",
    ],
    rightAnswer: 0,
  },
  {
    question: "Entropiya soʼzining maʼnosi nima?",
    options: [
      "yunoncha «aylanish, oʼzgarish»",
      "yunoncha «isitaman»",
      "grekcha «aylanaman»",
      "lotincha «sovitaman»",
    ],
    rightAnswer: 0,
  },
  {
    question: "Entropiya tushunchasini fanga kim qachon kiritgan?",
    options: [
      "1886 yil Plank",
      "1987 yil Nernet",
      "1885 yil Paskal",
      "1865 yil Klauzis",
    ],
    rightAnswer: 3,
  },
  {
    question: "Issiklik - bu:",
    options: [
      "Energiya uzatilishining mikromolekulyar formasi",
      "Oʼtkazgichdan elektr toki utishidagi ajralgan energiya mikdori",
      "Energiya uzatilish formasi",
      "Jismning qiziganlik darajasi",
    ],
    rightAnswer: 0,
  },
  {
    question: "1 kg modda uchun holat tenglamasini koʼrsating:",
    options: [
      "Pv=RT",
      "PV=mRT",
      "P=RT/V",
      "P=F(T,V)",
    ],
    rightAnswer: 0,
  },
  {
    question: "Ish oʼlchov birligi",
    options: [
      "J, kJ",
      "mPa",
      "N",
      "m",
    ],
    rightAnswer: 0,
  },
  {
    question: "Qaysi ifoda izoxorik jarayonga mos keladi?",
    options: [
      "р = соnst",
      "Т= соnst",
      "v = соnst",
      "PV=const",
    ],
    rightAnswer: 2,
  },
  {
    question: "Qaysi ifoda izobarik jarayoniga mos keladi?",
    options: [
      "V = соnst",
      "pv= соnst",
      "py= соnst",
      "р = соnst",
    ],
    rightAnswer: 3,
  },
  {
    question: "Qaysi ifoda izotermik jarayonga mos keladi?",
    options: [
      "р = соnst",
      "Т= соnst",
      "v = соnst",
      "PV=const",
    ],
    rightAnswer: 1,
  },
  {
    question: "Qaysi jarayonda q = 0:",
    options: [
      "Аdiabatik",
      "Izotermik",
      "Izobarik",
      "Izoxor",
    ],
    rightAnswer: 0,
  },
  {
    question: "Termodinamika boʼlimi nimani oʼrganadi?:",
    options: [
      "Issiqlik uzatilishini oʼrganadi",
      "IYoD sikllarini oʼrganadi",
      "Issiqlik energiyasini mexanik energiyaga aylanishini oʼrganadi",
      "Issiqlik energiyasini mexanik energiya va aksincha oʼzgarishini oʼrganadi",
    ],
    rightAnswer: 3,
  },
  {
    question: "Termodinamikaning I qonuni diferintsial ifodasini koʼrsating:",
    options: [
      "dq = du + dl",
      "dq = dh",
      "dq=CdT",
      "d/C=dT/q",
    ],
    rightAnswer: 0,
  },
  {
    question: "Termodinamikaning II qonunining matematik ifodasini koʼrsating:",
    options: [
      "dS<dQ/T",
      "dS>dQ/T",
      "dS=0",
      "dS=dQ/T",
    ],
    rightAnswer: 3,
  },
  {
    question: "Karno sikli qanday jarayonlardan tashkil topgan:",
    options: [
      "2 ta izoterma va 2 ta adiabata jarayonlaridan",
      "2 ta izobara va 2 ta politropik jarayonlaridan",
      "2 ta izoxora va 2 ta izobara, jarayonlaridan",
      "2 ta izobara va 2 ta izoterma jarayonlaridan",
    ],
    rightAnswer: 0,
  },
  {
    question: "Issiqlik uzatilish boʼlimi nimani oʼrganadi?",
    options: [
      "Issiqlik berishni",
      "Issiqlik almashinish qonuniyatlarini",
      "Issiqlik oʼtkazuvchanlikni",
      "Issiqlik massa almashinuvini",
    ],
    rightAnswer: 1,
  },
  {
    question: "Nam havo nima?",
    options: [
      "Suv bugʼi",
      "Аtmosfera havosi",
      "Havo tarkibida suv bugʼi boʼlsa",
      "Аtmosfera havosi",
    ],
    rightAnswer: 2,
  },
  {
    question: "Izoxorik va izobarik jarayonlardan qaysi birida issiqlik katta",
    options: [
      "izobarik",
      "politropik",
      "gazning atomiga bogʼliq",
      "izoxorik",
    ],
    rightAnswer: 0,
  },
  {
    question: "T=const qanday jarayon hisoblanadi",
    options: [
      "izotermik",
      "izoxorik",
      "izobarik",
      "adiabatik",
    ],
    rightAnswer: 0,
  },
  {
    question: "P=const qanday jarayon hisoblanadi",
    options: [
      "izobarik",
      "izotermik",
      "izoxorik",
      "adiabatik",
    ],
    rightAnswer: 0,
  },
  {
    question: "V=cоnst qanday jarayon hisoblanadi",
    options: [
      "izoxorik",
      "izotermik",
      "izobarik",
      "adiabatik",
    ],
    rightAnswer: 0,
  },
  {
    question: "q=0 qanday jarayon hisoblanadi",
    options: [
      "adiabatik",
      "izoxorik",
      "izobarik",
      "izotermik",
    ],
    rightAnswer: 0,
  },
  {
    question: "Suyukli shishali termometrlarda kanday ishchi jism ishlatiladi?",
    options: [
      "suv, moy ",
      "simob, etil spirti ",
      "geliy, suv ",
      "atseton, suv",
    ],
    rightAnswer: 1,
  },
  {
    question: "Mikromanometr bilan qanday bosim oʼlchaniladi?  ",
    options: [
      "ortiqcha bosim",
      "kichik mutloq bosim ",
      "kichik barometrik bosim",
      "kichik ortiqcha bosim, siyraklanish va bosimlar farqi ",
    ],
    rightAnswer: 3,
  },
  {
    question: "Mutloq xarorat deb nimaga aytiladi?",
    options: [
      "berilgan mutloq bosimga mos keluvchi xarorat",
      "molekulalarning ilgarilanma aylanma xarakatining oʼrtacha kinetik energiyasiga proporsional boʼlgan xarorat ",
      "ga mos keluvchi xarorat",
      "jismning isiganlik darajasi",
    ],
    rightAnswer: 1,
  },
  {
    question: "Bir birlik moddaning 1 gradusdagi issiqligi",
    options: [
      "Issiqlik sigʼimi",
      "Issiqlik miqdori",
      "Issiqlik uzatilishi",
      "Issiqlik berish",
    ],
    rightAnswer: 0,
  },
  {
    question: "Issiqlik miqdori oʼlchov birligi",
    options: [
      "J, kJ",
      "MPa",
      "m",
      "kg",
    ],
    rightAnswer: 0,
  },
  {
    question: "Qaysi ifoda termodinamikaning izobarik jarayoniga mos keladi?",
    options: [
      "V = Const",
      "pV = Const",
      "PV = Const",
      "P = Const",
    ],
    rightAnswer: 3,
  },
  {
    question: "Qaysi termodinamik siklda issiqlik va sovutish manbalari izoxorada tasvirlangan?",
    options: [
      "P= const dagiIYoD sikli",
      "р= соnst dagi GTQ sikli",
      "v= соnst dagiIYoD sikli",
      "v= const dagiGTQ sikli",
    ],
    rightAnswer: 1,
  },
  {
    question: "Қайси термодинамик циклда совуткич изобарада тасвирланган?",
    options: [
      "v= const dagiGTQ sikli",
      "р= соnst dagi GTQ sikli",
      "v= соnst dagiIYoD sikli",
      "P= const dagiIYoD sikli",
    ],
    rightAnswer: 0,
  },
  {
    question: "Qaysi jarayon uchun isciqlik sigʼimi — Ср",
    options: [
      "Izobar",
      "Izotermik",
      "Izoxor",
      "Аdiabat",
    ],
    rightAnswer: 0,
  },
];

numberOfAllQuestion.innerHTML = questions.length;

const load = () => {
  question.innerHTML = questions[indexOfQuestion].question;

  option1.innerHTML = questions[indexOfQuestion].options[0];
  option2.innerHTML = questions[indexOfQuestion].options[1];
  option3.innerHTML = questions[indexOfQuestion].options[2];
  option4.innerHTML = questions[indexOfQuestion].options[3];

  numberOfQuestion.innerHTML = indexOfPage + 1;
  indexOfPage++;
};

let complatedAnswer = [];

const randomQuestion = () => {
  let randomNumber = Math.floor(Math.random() * questions.length);
  let hitdublicate = false;

  if (indexOfPage == questions.length) {
    quizOver();
  } else {
    if (complatedAnswer.length > 0) {
      complatedAnswer.forEach((item) => {
        if (item == randomNumber) {
          hitdublicate = true;
        }
      });
      if (hitdublicate) {
        randomQuestion();
      } else {
        indexOfQuestion = randomNumber;
        load();
      }
    }
    if (complatedAnswer == 0) {
      indexOfQuestion = randomNumber;
      load();
    }
  }
  complatedAnswer.push(indexOfQuestion);
};

const checkAnswer = (el) => {
  if (el.target.dataset.id == questions[indexOfQuestion].rightAnswer) {
    el.target.classList.add("correct");
    updateAnswerTracker("correct");
    score++;
  } else {
    el.target.classList.add("wrong");
    updateAnswerTracker("wrong");
  }
  disabledOptions();
};

const disabledOptions = () => {
  optionElements.forEach((item) => {
    item.classList.add("disabled");
    if (item.dataset.id == questions[indexOfQuestion].rightAnswer) {
      item.classList.add("correct");
    }
  });
};

const enableOptions = () => {
  optionElements.forEach((item) => {
    item.classList.remove("disabled", "correct", "wrong");
  });
};

const answerTracker = () => {
  questions.forEach(() => {
    const div = document.createElement("div");
    answersTracker.appendChild(div);
  });
};

const updateAnswerTracker = (status) => {
  console.log(answersTracker.children);
  answersTracker.children[indexOfPage - 1].classList.add(`${status}`);
};

for (option of optionElements) {
  option.addEventListener("click", (e) => checkAnswer(e));
}

const validate = () => {
  if (!optionElements[0].classList.contains("disabled")) {
    alert(
      "Siz savolga javob bermadinggiz keyingi savolni ko`rish uchun javoblardan birini belgilang"
    );
  } else {
    randomQuestion();
    enableOptions();
  }
};

btnNext.addEventListener("click", validate);

for (option of optionElements) {
  option.addEventListener("click", (e) => checkAnswer(e));
}

const quizOver = () => {
  if ((numberOfQuestion = numberOfAllQuestion))
    () => {
      document.querySelector(".quiz__over__modle").classList.add("active");
      correctAnswer.innerHTML = score;
      numberOfAllQuestion2.innerHTML = questions.length;
    };
};

const tryAgain = () => {
  window.location.reload();
};

btnTryAgain.addEventListener("click", tryAgain);

window.addEventListener("load", () => {
  randomQuestion();
  answerTracker();
});
