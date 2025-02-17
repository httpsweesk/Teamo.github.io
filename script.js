function startQuiz() {
    let quiz = document.getElementById('quiz');
    quiz.classList.remove('hidden');
    quiz.style.opacity = "0";
    setTimeout(() => {
        quiz.style.opacity = "1";
    }, 100);
}

function checkAnswer(option) {
    let feedback = document.getElementById('feedback');
    let buttons = document.querySelectorAll('#quiz button');

    if (option === 2) {
        feedback.textContent = "Isso mesmo! Eu te amo muito meu amor ❤️";
        feedback.style.color = "lightgreen";
        buttons[1].style.background = "#4CAF50"; // Destaca a resposta certa
    } else {
        feedback.textContent = "Não foi dessa vez! Tente de novo. 😢";
        feedback.style.color = "red";
    }

    // Desativa os botões após responder
    buttons.forEach(button => button.disabled = true);
}