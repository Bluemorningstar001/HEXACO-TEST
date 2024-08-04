let questions = [];
const questionsPerPage = 5;
let currentPage = 0;
let scores = {
    "정직-겸손": 0,
    "감정성": 0,
    "외향성": 0,
    "우호성": 0,
    "성실성": 0,
    "경험에 대한 개방성": 0
};

document.addEventListener('DOMContentLoaded', () => {
    fetch('questions.json')
        .then(response => response.json())
        .then(data => {
            questions = data;
            displayQuestions();
        })
        .catch(error => console.error('질문을 불러오는 중 오류 발생:', error));
    
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

    addRadioListeners();
}

function addRadioListeners() {
    const form = document.getElementById('quiz-form');
    form.addEventListener('change', (event) => {
        if (event.target.type === 'radio') {
            const radioButtons = form.querySelectorAll('.radio-buttons input[type="radio"]');
            radioButtons.forEach(radio => {
                const circle = radio.nextElementSibling;
                if (radio.checked) {
                    const color = window.getComputedStyle(radio.closest('label').querySelector('.circle')).borderColor;
                    circle.style.backgroundColor = color;
                    circle.style.borderColor = color;
                } else {
                    circle.style.backgroundColor = '';
                    circle.style.borderColor = '';
                }
            });
        }
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
            console.log(`Question ${i + 1} answered: ${answer}, Trait: ${trait}, Current Score: ${scores[trait]}`);
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
    const traitCounts = {
        "정직-겸손": 0,
        "감정성": 0,
        "외향성": 0,
        "우호성": 0,
        "성실성": 0,
        "경험에 대한 개방성": 0
    };

    questions.forEach(question => {
        traitCounts[question.trait]++;
    });

    console.log("Trait Counts: ", traitCounts);

    for (let trait in scores) {
        if (traitCounts[trait] > 0) {
            scores[trait] = (scores[trait] / traitCounts[trait]).toFixed(2);
        } else {
            scores[trait] = 0;
        }
        console.log(`Trait: ${trait}, Total Score: ${scores[trait]}, Number of Questions: ${traitCounts[trait]}`);
    }

    localStorage.setItem('hexacoResults', JSON.stringify(scores));
    window.location.href = 'results.html';
}
