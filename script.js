const questions = [

/* ========= MCQs ========= */

{
  type: "mcq",
  q: "Which group of organisms causes about 70% of gastroenteritis cases?",
  options: ["Bacteria", "Protozoa", "Viruses", "Fungi"],
  a: 2
},
{
  type: "mcq",
  q: "Rotaviruses belong to which group?",
  options: ["Bacteria", "Viruses", "Protozoa", "Parasites"],
  a: 1
},
{
  type: "mcq",
  q: "Protozoa are responsible for approximately:",
  options: ["10–20%", "~70%", "<10%", "30–40%"],
  a: 2
},
{
  type: "mcq",
  q: "Bacteria cause approximately:",
  options: ["<5%", "10–20%", "~70%", ">50%"],
  a: 1
},
{
  type: "mcq",
  q: "Which organism is written in a larger font on the slide?",
  options: ["Noroviruses", "Astroviruses", "Enteroviruses", "Rotaviruses"],
  a: 3
},
{
  type: "mcq",
  q: "Norwalk-like viruses are also known as:",
  options: ["Astroviruses", "Enteroviruses", "Noroviruses", "Rotaviruses"],
  a: 2
},
{
  type: "mcq",
  q: "Which of the following is NOT a viral agent?",
  options: ["Caliciviruses", "Astroviruses", "Vibrio cholerae", "Enteric adenoviruses"],
  a: 2
},
{
  type: "mcq",
  q: "Which of the following is a protozoan organism?",
  options: ["Shigella spp", "Giardia lamblia", "Campylobacter jejuni", "Enteroviruses"],
  a: 1
},
{
  type: "mcq",
  q: "Which bacterium produces Shiga toxin?",
  options: ["Vibrio cholerae", "Yersinia enterocolitica", "Shiga toxin producing E. coli", "Salmonella typhi"],
  a: 2
},
{
  type: "mcq",
  q: "Vibrio cholerae is classified as:",
  options: ["Virus", "Protozoa", "Bacteria", "Fungus"],
  a: 2
},

/* ========= TRUE / FALSE ========= */

{ type: "tf", q: "Viruses are the most common cause of gastroenteritis.", a: true },
{ type: "tf", q: "Protozoa cause less than 10% of cases.", a: true },
{ type: "tf", q: "Bacteria cause about 10–20% of gastroenteritis cases.", a: true },
{ type: "tf", q: "Rotaviruses are viral organisms.", a: true },
{ type: "tf", q: "Noroviruses are also called Norwalk-like viruses.", a: true },
{ type: "tf", q: "Enteric adenoviruses are bacterial pathogens.", a: false },
{ type: "tf", q: "Cryptosporidium is a protozoan organism.", a: true },
{ type: "tf", q: "Giardia lamblia belongs to protozoa.", a: true },
{ type: "tf", q: "Campylobacter jejuni is a virus.", a: false },
{ type: "tf", q: "Shigella spp are classified as bacteria.", a: true },
{ type: "tf", q: "Yersinia enterocolitica is a bacterium.", a: true },
{ type: "tf", q: "Shiga toxin producing E. coli is a bacterial organism.", a: true },
{ type: "tf", q: "Salmonella typhi is a viral pathogen.", a: false },
{ type: "tf", q: "Vibrio cholerae is listed under bacteria.", a: true },
{ type: "tf", q: "Entamoeba histolytica is a protozoan parasite.", a: true },
{ type: "tf", q: "Astroviruses belong to the virus group.", a: true },
{ type: "tf", q: "Caliciviruses are protozoa.", a: false },
{ type: "tf", q: "Enteroviruses are viral agents.", a: true },
{ type: "tf", q: "Protozoa cause more cases than viruses.", a: false },
{ type: "tf", q: "Rotaviruses are a cause of gastroenteritis.", a: true }

];
let index = 0;
let answers = Array(questions.length).fill(null);
let reviewMode = false;
/* ========= ELEMENTS ========= */

const qText = document.getElementById("questionText");
const optionsDiv = document.getElementById("options");
const counter = document.getElementById("counter");
const progress = document.getElementById("progressBar");
const nextBtn = document.getElementById("nextBtn");
const resultBox = document.getElementById("result");
const resultScore = document.getElementById("resultScore");
const resultPercent = document.getElementById("resultPercent");
/* ========= OPTIONS ========= */
function shuffleOptions(arr) {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
function createOption(text, isCorrect) {
  const b = document.createElement("button");
  b.innerText = text;
  b.onclick = () => select(isCorrect, b);
  optionsDiv.appendChild(b);
}
function select(isCorrect, btn) {
  if (answers[index] !== null) return;

  answers[index] = isCorrect;

  const q = questions[index];

  [...optionsDiv.children].forEach(b => {
    b.disabled = true;

    // لو MCQ
    if (q.type === "mcq") {
      const correctText = q.options[q.a];

      if (b.innerText === correctText) {
        b.style.background = "#27ae60"; // الصح أخضر
      } else if (b === btn) {
        b.style.background = "#e74c3c"; // الغلط أحمر
      }
    }

    // لو True / False
    if (q.type === "tf") {
      if (
        (b.innerText === "True" && q.a === true) ||
        (b.innerText === "False" && q.a === false)
      ) {
        b.style.background = "#27ae60";
      } else if (b === btn) {
        b.style.background = "#e74c3c";
      }
    }
  });

  nextBtn.style.display = "inline-block";
}
/* ========= QUIZ ========= */
  
function startQuiz() {
  index = 0;
  answers = Array(questions.length).fill(null);
  reviewMode = false;

  // ⭐ خلط الأسئلة كل مرة
  questions.sort(() => Math.random() - 0.5);

  document.getElementById("result").classList.remove("show");
  document.getElementById("home").style.display = "none";
  document.getElementById("quiz").style.display = "block";

  loadQuestion();
}
function loadQuestion() {
  optionsDiv.innerHTML = "";
  nextBtn.style.display = "none";

  const q = questions[index];
  qText.innerText = q.q;
  counter.innerText = `Question ${index + 1} / ${questions.length}`;
  progress.style.width = ((index + 1) / questions.length) * 100 + "%";

  if (q.type === "tf") {
    createOption("True", true);
    createOption("False", false);
  } else {
    const options = q.options.map((text, i) => ({
  text,
  correct: i === q.a
}));

shuffleOptions(options).forEach(opt => {
  createOption(opt.text, opt.correct);
});
  }
}

function nextQuestion() {
  if (index < questions.length - 1) {
    index++;
    loadQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  const score = answers.filter(a => a === true).length;
  const percent = Math.round((score / questions.length) * 100);

  // اخفي الكويز
  document.getElementById("quiz").style.display = "none";

  // النصوص
  resultScore.innerText = `Score: ${score} / ${questions.length}`;
  resultPercent.innerText = `Percentage: ${percent}%`;

  let title = "";
  if (percent >= 85) {
    title = "اول دفعععهه يعمممم";
  } else if (percent >= 70) {
    title = "شد شويه يعممم";
  } else {
    title = "انت اخرك تخش كليه البهاييييمممم";
  }

  document.getElementById("resultTitle").innerText = title;

  // أظهر النتيجة بالأنيميشن
  resultBox.classList.add("show");
}
function restartQuiz() {
  document.getElementById("result").classList.remove("show");
  startQuiz();
}
function toggleQuestions() {
  const list = document.getElementById("questionsList");
  list.classList.toggle("show");
  renderQuestionsList();
  if (i === index) {
  b.style.outline = "3px solid #3498db";
}
}

function renderQuestionsList() {
  const list = document.getElementById("questionsList");
  list.innerHTML = "";

  questions.forEach((q, i) => {
    const b = document.createElement("button");
    b.innerText = i + 1;

    if (answers[i] === null) {
      b.className = "q-unanswered";
    } else if (answers[i] === true) {
      b.className = "q-correct";
    } else {
      b.className = "q-wrong";
    }

    // ⭐ السؤال الحالي
    if (i === index) {
      b.style.outline = "3px solid #3498db";
    }

    b.onclick = () => {
      index = i;
      loadQuestion();
      renderQuestionsList();

      document.querySelector(".card").scrollIntoView({
        behavior: "smooth"
      });
    };

    list.appendChild(b);
  });
}
/* ========= MENU ========= */

const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

function toggleMenu() {
  sideMenu.classList.toggle("show");
  overlay.classList.toggle("show");
}

function closeMenu() {
  sideMenu.classList.remove("show");
  overlay.classList.remove("show");
}

/* ========= DARK MODE ========= */

function toggleDark() {
  document.body.classList.toggle("dark");
}
