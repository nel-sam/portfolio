const verbosRegulares = [
  {
    label: "hablar",
    presente: {
      yo: "hablo",
      tu: "hablas",
      el: "habla",
      nosotros: "hablamos",
      vosotros: "habláis",
      ellos: "hablan",
    },
  },
  {
    label: "comer",
    presente: {
      yo: "como",
      tu: "comes",
      el: "come",
      nosotros: "comemos",
      vosotros: "coméis",
      ellos: "comen",
    },
  },
  {
    label: "vivir",
    presente: {
      yo: "vivo",
      tu: "vives",
      el: "vive",
      nosotros: "vivimos",
      vosotros: "vivís",
      ellos: "viven",
    },
  },
  {
    label: "beber",
    presente: {
      yo: "bebo",
      tu: "bebes",
      el: "bebe",
      nosotros: "bebemos",
      vosotros: "bebéis",
      ellos: "beben",
    },
  },
];

const verbosIrregulares = [
  {
    label: "ser",
    presente: {
      yo: "soy",
      tu: "eres",
      el: "es",
      nosotros: "somos",
      vosotros: "sois",
      ellos: "son",
    },
  },
  {
    label: "estar",
    presente: {
      yo: "estoy",
      tu: "estás",
      el: "está",
      nosotros: "estamos",
      vosotros: "estáis",
      ellos: "están",
    },
  },
  {
    label: "tener",
    presente: {
      yo: "tengo",
      tu: "tienes",
      el: "tiene",
      nosotros: "tenemos",
      vosotros: "tenéis",
      ellos: "tienen",
    },
  },
  {
    label: "ir",
    presente: {
      yo: "voy",
      tu: "vas",
      el: "va",
      nosotros: "vamos",
      vosotros: "vais",
      ellos: "van",
    },
  },
  {
    label: "hacer",
    presente: {
      yo: "hago",
      tu: "haces",
      el: "hace",
      nosotros: "hacemos",
      vosotros: "hacéis",
      ellos: "hacen",
    },
  },
  {
    label: "venir",
    presente: {
      yo: "vengo",
      tu: "vienes",
      el: "viene",
      nosotros: "venimos",
      vosotros: "venís",
      ellos: "vienen",
    },
  },
];

const select = document.getElementById("verbo-select");
// TODO: add irregulares verbs if user wants them
// in alphabetical order
const verbos = verbosRegulares.sort((a, b) => {
  return a.label.localeCompare(b.label);
});

verbos.forEach((verbo, index) => {
  const option = document.createElement("option");
  option.value = verbo;
  option.text = verbo.label;

  if (index === 0) {
    option.selected = true;
  }

  select.appendChild(option);
});

let selectedVerb = verbos[0];
// When a user selects a verb, update the selectedVerb
select.addEventListener("change", (event) => {
  selectedVerb = verbos.find((verb) => verb.label === event.target.value);
});

// as user types into each input, check if it matches the correct answer
const inputs = document.getElementsByClassName("answer-input");

for (let i = 0; i < inputs.length; i++) {
  const input = inputs[i];

  input.addEventListener("input", function() {
    const person = input.id;
    const correctAnswer = selectedVerb.presente[person]; // TODO: eventually add more tenses
    const userAnswer = input.value;

    const isCorrect = userAnswer.toLowerCase() === correctAnswer.toLowerCase();

    if (isCorrect) {
      input.classList.add("correct");
      input.classList.remove("incorrect");
    } else {
      input.classList.add("incorrect");
      input.classList.remove("correct");
    }
  });
}


// on click of button with id "next-verbo", select a random verb that is not the one currently selected
const nextVerboButton = document.getElementById("next-verbo");
nextVerboButton.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * verbos.length);
  while (verbos[randomIndex].label === selectedVerb.label) {
    randomIndex = Math.floor(Math.random() * verbos.length);
  }

  selectedVerb = verbos[randomIndex];
  const select = document.getElementById("verbo-select");
  select.selectedIndex = randomIndex;
  console.log(randomIndex); // TODO: remove 

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
    inputs[i].classList.remove("correct");
    inputs[i].classList.remove("incorrect");
  }
});
