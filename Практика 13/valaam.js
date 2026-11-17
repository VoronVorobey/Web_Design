document.addEventListener("DOMContentLoaded", () => {
    
    // === 1. Ролловер изображения (эффект при наведении мыши) ===
    const logo = document.getElementById("valaam-logo");
    if (logo) {
        logo.addEventListener("mouseover", () => {
            logo.src = "images/valaam.gif";
        });
        logo.addEventListener("mouseout", () => {
            logo.src = "images/valaam_gray.gif";
        });
    }

    // === 2. Показ и скрытие текстового блока ===
    const showTrigger = document.getElementById("show-more-trigger");
    const hideTrigger = document.getElementById("hide-content-trigger");
    const hiddenBlock = document.getElementById("hidden-content");

    if (showTrigger && hiddenBlock) {
        showTrigger.addEventListener("click", () => {
            hiddenBlock.style.display = "block";
        });
    }

    if (hideTrigger && hiddenBlock) {
        hideTrigger.addEventListener("click", (e) => {
            e.preventDefault(); // Отменяем переход по пустой ссылке
            hiddenBlock.style.display = "none";
        });
    }

    // === 3. Проверка ответа в форме ===
    const quizForm = document.getElementById("quiz-form");
    const answerInput = document.getElementById("answer-input");

    if (quizForm && answerInput) {
        quizForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Предотвращаем перезагрузку страницы
            
            // Очищаем ответ от лишних пробелов и приводим к нижнему регистру
            const userAnswer = answerInput.value.trim().toLowerCase();
            const correctAnswer = "сортавала";

            if (userAnswer === correctAnswer) {
                alert("Правильно");
            } else {
                alert("Неправильно");
            }
        });
    }
});
