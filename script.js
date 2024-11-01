var questionBank= [
    {
        question : 'Apa planet terbesar di tata surya?',
        option : ['Mars','Jupiter','Saturnus','Bumi'],
        answer : 'Jupiter'
    },
    {
        question : 'Planet mana yang dikenal sebagai "Planet Merah"?',
        option : ['Venus','Neptunus','Jupiter','Mars'],
        answer : 'Mars'
    },
    {
        question : 'Apa nama satelit alami Bumi?',
        option : ['Phobos','Deimos','Bulan','Titan'],
        answer : 'Bulan'
    },
    {
        question : 'Berapa banyak planet yang ada di tata surya kita?',
        option : ['8','7','9','10'],
        answer : '8'
    },
    {
        question : 'Planet mana yang paling dekat dengan Matahari?',
        option : ['Venus', 'Merkurius','Bumi','Neptunus'],
        answer : 'Merkurius'
    },
    {

        question :'Apa nama rasi bintang yang bentuknya menyerupai seekor kalajengking?',
        option : ['Orion', 'Ursa Major','Scorpio', 'Ursa Minor'],
        answer : 'Scorpio'
        
    },
    {
        question : 'Apa nama planet yang memiliki suhu permukaan paling tinggi?',
        option : ['Bumi','Mars','Venus','Merkurius'],
        answer : 'Venus'
    },
    {
        question : 'Apa yang membuat planet Bumi unik dibandingkan dengan planet lain di tata surya?',
        option : ['memiliki cincin','memiliki kehidupan','merupakan planet terdekat dengan matahari','memiliki suhu yang sangat panas'],
        answer : 'memiliki kehidupan'
    },
    {
        question : 'Apa nama planet terdingin di tata surya?',
        option : ['Uranus','Bumi','Jupiter','Neptunus'],
        answer : 'Neptunus'
    },
    {
        question : 'Apa nama galaksi tempat tata surya kita berada?',
        option : ['Galaksi Andromeda','Galaksi Bima Sakti','Galaksi Sombrero','Galaksi Triangulum'],
        answer : 'Galaksi Bima Sakti'
    }
]

var question = document.getElementById('question');
var quizContainer = document.getElementById('quiz-container');
var scoreboard = document.getElementById('scoreboard');
var points = document.getElementById('score');
var option0 = document.getElementById('option0');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var stat = document.getElementById('stat');
var i = 0;
var score = 0;

function displayQuestion() {
    question.innerHTML = (i + 1) + '. ' + questionBank[i].question;
    option0.innerHTML = questionBank[i].option[0];
    option1.innerHTML = questionBank[i].option[1];
    option2.innerHTML = questionBank[i].option[2];
    option3.innerHTML = questionBank[i].option[3];
    stat.innerHTML = "Question " + (i + 1) + " of " + questionBank.length;

    // Reset classes for each option
    option0.parentElement.classList.remove("correct", "incorrect");
    option1.parentElement.classList.remove("correct", "incorrect");
    option2.parentElement.classList.remove("correct", "incorrect");
    option3.parentElement.classList.remove("correct", "incorrect");
}

function calcScore(e) {
    console.log("Option clicked: " + e.innerHTML); // Menampilkan opsi yang diklik
    if (e.innerHTML === questionBank[i].answer) {
        score += 1;
        e.parentElement.classList.add("correct");
    } else {
        e.parentElement.classList.add("incorrect");
    }
    setTimeout(nextQuestion, 300);
}

function nextQuestion() {
    console.log("Current score: " + score);
    console.log("Current question index: " + i);
    if (i < questionBank.length - 1) {
        i += 1;
        displayQuestion();
    } else {
        points.innerHTML = score + '/' + questionBank.length;
        quizContainer.style.display = 'none';
        scoreboard.style.display = 'block';
    }
}

function backToQuiz() {
    location.reload();
}

function checkAnswer() {
    var answerBank = document.getElementById('answerBank');
    var answers = document.getElementById('answers');
    answerBank.style.display = 'block';
    scoreboard.style.display = 'none';
    for (var a = 0; a < questionBank.length; a++) {
        var list = document.createElement('li');
        list.innerHTML = questionBank[a].answer;
        answers.appendChild(list);
    }
}

displayQuestion();
