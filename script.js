
function startQuiz() {
    document.getElementById('quiz').classList.remove('hidden');
}

function checkAnswer(option) {
    let feedback = document.getElementById('feedback');
    if (option === 2) {
        feedback.textContent = "Isso mesmo! Nosso primeiro beijo foi em agosto de 2024!";
        feedback.style.color = "lightgreen";
    } else {
        feedback.textContent = "Não foi dessa vez! Tente de novo.";
        feedback.style.color = "red";
    }
}
