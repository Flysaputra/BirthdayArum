let currentQuestion = 0;
const questions = [
    { question: "What is 5 + 7?", answer: "12" },
    { question: "What is the capital of France?", answer: "paris" },
    { question: "What is the color of the sky on a clear day?", answer: "blue" },
    { question: "What is 10 * 2?", answer: "20" }
];

const birthdayWish = `
    Happy birthday yaaa semoga di umur yang sekarang kamu bisa terus lebih sukses lebih pinter dan lebih tinggi lagi HAHA,
    bisa terus banggain bunda sama ayah kamuu juga. Ga lupa juga buat sukses skripsinya dan cepet lulus biar wisuda bareng WKWKW.
    I know you are so strong and capable of mostly everything except MAIN KARTU, so i doubt you will ask for my help in the future
    but seriously please include me in your problem or anything even small thing like 'should i eat with spoon or a fork, or maybe i shouldnt eat'.
    Lastly i wanna say thank you for live your life till this day may Allah protect your smile and your heart.
    I am a person who loves to see you well and go far in life.
`;

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    if (userAnswer === questions[currentQuestion].answer) {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            document.getElementById("question").innerText = questions[currentQuestion].question;
            document.getElementById("answer").value = "";
        } else {
            document.getElementById("game").style.display = "none";
            document.getElementById("result").innerText = "Congratulations! You've answered all questions correctly.\n\n" + birthdayWish;
        }
    } else {
        document.getElementById("result").innerText = "Incorrect! Try again.";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("question").innerText = questions[currentQuestion].question;
});
