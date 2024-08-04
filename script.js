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

document.addEventListener('DOMContentLoaded', () => {
    fetch('questions.json')
        .then(response => response.json())
        .then(data => {
            questions = data;
            displayQuestions();
        })
        .catch(error => console.error('Error loading questions:', error));
    
    document.getElementById('next-button').addEventListener('click', nextPage);
});

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
            <div class="radio-buttons">
                <div class="label-text">
                    <span>그렇다</span>
                    <span>그렇지 않다</span>
                </div>
                <div class="button-container">
                    <label><input type="radio" name="q${start + index}" value="7"><div class="circle"></div></label>
                    <label><input type="radio" name="q${start + index}" value="6"><div class="circle"></div></label>
                    <label><input type="radio" name="q${start + index}" value="5"><div class="circle"></div></label>
                    <label><input type="radio" name="q${start + index}" value="4"><div class="circle"></div></label>
                    <label><input type="radio" name="q${start + index}" value="3"><div class="circle"></div></label>
                    <label><input type="radio" name="q${start + index}" value="2"><div class="circle"></div></label>
                    <label><input type="radio" name="q${start + index}" value="1"><div class="circle"></div></label>
                </div>
            </div>
        `;
        form.appendChild(div);
    });
}

function nextPage() {
    const form = document.getElementById('quiz-form');
    const formData = new FormData(form);

    const start = currentPage * questionsPerPage;
    let allAnswered = true;
    for (let i = start; i < start + questionsPerPage; i++) {
        const answer = formData.get(`q${i}`);
        const questionElement = form.querySelector(`[name="q${i}"]`).closest('.question');
        if (!answer) {
            allAnswered = false;
            questionElement.querySelector('p').style.color = 'red';
        } else {
            questionElement.querySelector('p').style.color = 'black';
            const trait = questions[i].trait;
            scores[trait] += parseInt(answer);
        }
    }

    if (allAnswered) {
        currentPage++;
        if (currentPage * questionsPerPage >= questions.length) {
            calculateResults();
        } else {
            displayQuestions();
        }
    } else {
        alert("모든 질문에 답변해 주세요.");
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