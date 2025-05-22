(function(){
  function quizz(){
    const output = [];
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
        const answers = [];
        for(letter in currentQuestion.answers){
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );
    quizContainer.innerHTML = output.join('');
  }
  function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    myQuestions.forEach( (currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      if(userAnswer === currentQuestion.correctAnswer){
        numCorrect++;
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      else{
        answerContainers[questionNumber].style.color = 'red';
      }
    });
    resultsContainer.innerHTML = `${numCorrect} de ${myQuestions.length}`;
  }
  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }
  function showNextSlide() {
    showSlide(currentSlide + 1);
  }
  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "𝑄𝑢𝑎𝑛𝑑𝑜 𝑓𝑜𝑖 𝑙𝑎𝑛𝑐̧𝑎𝑑𝑜 𝐼𝐶𝐴𝑅𝑈𝑆?",
      answers: {
        a: "2021",
        b: "2019",
        c: "2022"
      },
      correctAnswer: "c"
    },
    {
      question: "𝑄𝑢𝑎𝑙 𝑓𝑜𝑖 𝑜 𝑢𝑙𝑡𝑖𝑚𝑜 𝑎́𝑙𝑏𝑢𝑚 𝑙𝑎𝑛𝑐̧𝑎𝑑𝑜 𝑑𝑜 𝐾𝑎𝑛𝑦𝑒 𝑊𝑒𝑠𝑡?",
      answers: {
        a: "𝑗𝑒𝑠𝑢𝑠 𝑖𝑠 𝑘𝑖𝑛𝑔",
        b: "𝑔𝑟𝑎𝑑𝑢𝑎𝑡𝑖𝑜𝑛",
        c: "𝑑𝑜𝑛𝑑𝑎 "
      },
      correctAnswer: "c"
    },
    {
      question: "𝑇ℎ𝑒 𝑠𝑚𝑖𝑡ℎ𝑠 𝑒𝑟𝑎:",
      answers: {
        a: "𝑈𝑚𝑎 𝑏𝑎𝑛𝑑𝑎",
        b: "𝑈𝑚𝑎 𝑑𝑢𝑝𝑙𝑎",
        c: "𝑈𝑚 𝑠𝑜𝑙𝑖𝑠𝑡𝑎",
        d: "𝑈𝑚𝑎 𝑓𝑎𝑚𝑖́𝑙𝑖𝑎"
      },
      correctAnswer: "a"
    }
  ];
  quizz();
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;
  showSlide(currentSlide);
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();