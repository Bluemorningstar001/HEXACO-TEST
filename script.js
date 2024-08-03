let questions = [];
const questionsPerPage = 5;
let currentPage = 0;
let scores = {
    "Honesty-Humility": 0,
    "Emotionality": 0,
    "Extraversion": 0,
    "Agreeableness": 0,
    "Conscientiousness": 0,
    "Openness to Experience": 0
};

// JSON 파일을 불러와서 questions 배열에 저장
fetch('questions.json')
    .then(response => response.json())
    .then(data => {
        questions = data;
        displayQuestions();
    })
    .catch(error => console.error('Error loading questions:', error));

function displayQuestions() {
    const form = document.getElementById('quiz-form');
    form.innerHTML = '';
    const start = currentPage * questionsPerPage;
    const end = start + questionsPerPage;
    const pageQuestions = questions.slice(start, end);

    pageQuestions.forEach((q, index) => {
        const div = document.createElement('div');
        div.className = 'question';
        div.innerHTML = `
            <p>${q.question}</p>
            <label><input type="radio" name="q${start + index}" value="5"> 매우 그렇다</label>
            <label><input type="radio" name="q${start + index}" value="4"> 그렇다</label>
            <label><input type="radio" name="q${start + index}" value="3"> 보통이다</label>
            <label><input type="radio" name="q${start + index}" value="2"> 그렇지 않다</label>
            <label><input type="radio" name="q${start + index}" value="1"> 전혀 그렇지 않다</label>
        `;
        form.appendChild(div);
    });
}

function nextPage() {
    const form = document.getElementById('quiz-form');
    const formData = new FormData(form);

    const start = currentPage * questionsPerPage;
    for (let i = start; i < start + questionsPerPage; i++) {
        const answer = formData.get(`q${i}`);
        if (answer) {
            const trait = questions[i].trait;
            scores[trait] += parseInt(answer);
        }
    }

    currentPage++;
    if (currentPage * questionsPerPage >= questions.length) {
        calculateResults();
    } else {
        displayQuestions();
    }
}

function calculateResults() {
    const totalQuestionsPerTrait = 10;
    for (let trait in scores) {
        scores[trait] = (scores[trait] / totalQuestionsPerTrait).toFixed(2);
    }

    localStorage.setItem('hexacoResults', JSON.stringify(scores));
    window.location.href = 'results.html';
}

document.addEventListener('DOMContentLoaded', displayQuestions);
