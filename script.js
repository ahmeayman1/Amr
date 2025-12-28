const questions = [

/* ========= MCQ (25) ========= */

{ type:"mcq", q:"Primary cause of Nephrotic Syndrome is:", options:["Bladder infection","↑ GBM permeability to albumin","Ureter obstruction","↓ Renal artery flow"], a:1 },
{ type:"mcq", q:"Characteristic urine finding in Nephrotic Syndrome:", options:["Gross hematuria","Low specific gravity","Frothy urine","Glucosuria"], a:2 },
{ type:"mcq", q:"Smoky urine in AGN is due to:", options:["Lipids","Proteinuria","Hematuria","Bile pigments"], a:2 },
{ type:"mcq", q:"KDIGO: AKI if creatinine ↑ by ___ in 48 hrs:", options:["0.1","0.3","1.0","1.5"], a:1 },
{ type:"mcq", q:"Post-renal cause of AKI:", options:["Renal artery stenosis","Sepsis","Ureteral calculi","Hypovolemia"], a:2 },
{ type:"mcq", q:"CKD defined as GFR <60 for at least:", options:["1 month","2 months","3 months","6 months"], a:2 },
{ type:"mcq", q:"Most common infectious cause of AGN:", options:["Staph aureus","GABHS","E.coli","HBV"], a:1 },
{ type:"mcq", q:"Hypoalbuminemia in Nephrotic Syndrome causes:", options:["HTN","Generalized edema","Hypercalcemia","Hematuria"], a:1 },
{ type:"mcq", q:"Diet advice in AKI with hyperkalemia:", options:["More bananas","Limit tomatoes & potatoes","High protein","Increase fluids"], a:1 },
{ type:"mcq", q:"Urgent indication for dialysis:", options:["Fatigue","Pericarditis","1 kg weight gain","Loss of appetite"], a:1 },
{ type:"mcq", q:"Why bed rest in AGN acute phase?", options:["Prevent skin breakdown","↓ glomerular inflammation","Weight gain","Prevent infection"], a:1 },
{ type:"mcq", q:"Lab value ↑ in Nephrotic Syndrome:", options:["Albumin","Calcium","Cholesterol","Hemoglobin"], a:2 },
{ type:"mcq", q:"Hallmark of glomerular hematuria:", options:["Red urine","Clots","Dysmorphic RBCs & casts","Low protein"], a:2 },
{ type:"mcq", q:"Pre-renal AKI is due to:", options:["Tubular damage","Obstruction","↓ Renal perfusion","Chronic HTN"], a:2 },
{ type:"mcq", q:"BP monitoring in AGN is important because:", options:["Hypotension risk","HTN due to fluid overload","Protein loss","Identify bacteria"], a:1 },
{ type:"mcq", q:"Anasarca means:", options:["Azotemia","Periorbital edema","Generalized edema","Oliguria"], a:2 },
{ type:"mcq", q:"Protein loss causes which complication in NS?", options:["Hypercoagulability","Hypovolemia","Bone disease","Sepsis"], a:0 },
{ type:"mcq", q:"Fluid overload refractory to diuretics →", options:["More fluids","Dialysis","High sodium","Discharge"], a:1 },
{ type:"mcq", q:"Most common cause of ATN:", options:["Stones","Ischemia & nephrotoxins","Bladder tumor","Dehydration"], a:1 },
{ type:"mcq", q:"Test for 3+ or 4+ proteinuria:", options:["Serum albumin","Ultrasound","Urine dipstick","ASOT"], a:2 },
{ type:"mcq", q:"Effective treatment of Nephrotic Syndrome indicated by:", options:["Weight gain","↓ edema & ↑ urine","↑ lipids","4+ proteinuria"], a:1 },
{ type:"mcq", q:"AGN with headache & convulsions → check:", options:["Temperature","Blood pressure","Weight","Urine color"], a:1 },
{ type:"mcq", q:"Why pre-renal AKI progresses to intrinsic?", options:["Urethral block","Prolonged hypoperfusion","High protein diet","Immune response"], a:1 },
{ type:"mcq", q:"Why anxiety is a nursing diagnosis in CKD?", options:["Cost only","Chronic disease & dialysis fear","Hormones","Not valid"], a:1 },
{ type:"mcq", q:"Urine output 0.2 mL/kg/hr for 12 hrs is:", options:["Normal","Polyuria","Oliguria","Hematuria"], a:2 },

/* ========= TRUE / FALSE (15) ========= */

{ type:"tf", q:"Nephrotic syndrome is a tubular inflammatory disease.", a:false },
{ type:"tf", q:"Hypocalcemia can occur in Nephrotic Syndrome.", a:true },
{ type:"tf", q:"Antibiotics prevent AGN development.", a:false },
{ type:"tf", q:"Post-renal AKI can be caused by BPH.", a:true },
{ type:"tf", q:"GFR 75 for 4 months = CKD.", a:false },
{ type:"tf", q:"Protein must always be restricted in AGN.", a:false },
{ type:"tf", q:"Periorbital edema occurs in AGN & NS.", a:true },
{ type:"tf", q:"Loop diuretics reduce edema in AGN.", a:true },
{ type:"tf", q:"Dyspnea in renal failure suggests fluid overload.", a:true },
{ type:"tf", q:"Azotemia means blood in urine.", a:false },
{ type:"tf", q:"ASOT detects recent streptococcal infection.", a:true },
{ type:"tf", q:"Hyperlipidemia is common in NS.", a:true },
{ type:"tf", q:"AKI patient should stay flat in bed.", a:false },
{ type:"tf", q:"Uremic encephalopathy is an urgent dialysis indication.", a:true },
{ type:"tf", q:"Weight gain in renal patients is muscle mass.", a:false },

/* ========= ADVANCED (10) ========= */

{ type:"mcq", q:"Edema of gut in NS → monitor for:", options:["Good appetite","Malnutrition","HTN","Fast healing"], a:1 },
{ type:"mcq", q:"Finding suggesting GN not UTI:", options:["Bacteria","RBC casts","Low pH","WBC only"], a:1 },
{ type:"tf", q:"AKI waste buildup may cause confusion.", a:true },
{ type:"mcq", q:"Pre-renal AKI history:", options:["IV contrast","Severe dehydration","Stones","PKD family hx"], a:1 },
{ type:"tf", q:"GFR is standard measure of kidney function.", a:true },
{ type:"mcq", q:"Cause of hyperlipidemia in NS:", options:["High fat intake","↑ liver lipid production","Fat not excreted","Antibiotics"], a:1 },
{ type:"mcq", q:"Purpose of Foley catheter in AKI:", options:["Restrain patient","Monitor urine output","Treat infection","Prevent skin breakdown"], a:1 },
{ type:"tf", q:"HTN in AGN is due to fluid retention.", a:true },
{ type:"mcq", q:"Most relevant subjective data in CKD:", options:["Recent sore throat","Chronic fatigue","Dysuria","Salt craving"], a:1 },
{ type:"tf", q:"Renal biopsy helps identify type of kidney damage.", a:true }

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
