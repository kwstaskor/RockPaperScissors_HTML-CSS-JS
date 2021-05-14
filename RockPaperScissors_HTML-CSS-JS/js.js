var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function main() {
    rock_div.addEventListener("click", () => game("r"));

    paper_div.addEventListener("click", () => game("p"));

    scissors_div.addEventListener("click", () => game("s"));
}

main();


function getComputerChoise() {
    const choises = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choises[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoise, computerChoise) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const userChoise_div = document.getElementById(userChoise);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoise)}${smallUserWord} beats ${convertToWord(computerChoise)}${smallCompWord}. You win!! <i style="color:#2eae1a" class="fa fa-check-circle"></i> `;
    userChoise_div.classList.add('green-glow');
    setTimeout(() => userChoise_div.classList.remove('green-glow'), 400);  
}

function lose(userChoise, computerChoise) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const userChoise_div = document.getElementById(userChoise);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoise)}${smallUserWord} looses to ${convertToWord(computerChoise)}${smallCompWord}. You Lost.. <i style="color:#980909" class="fa fa-times-circle"></i> `;
    userChoise_div.classList.add('red-glow');
    setTimeout(() => userChoise_div.classList.remove('red-glow'), 400);  
}

function draw(userChoise , computerChoise) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const userChoise_div = document.getElementById(userChoise);
    result_p.innerHTML = `${convertToWord(userChoise)}${smallUserWord} equals ${convertToWord(computerChoise)}${smallCompWord}. It's a Draw!!`;
    userChoise_div.classList.add('gray-glow');
    setTimeout(() => userChoise_div.classList.remove('gray-glow'), 400); 
}
 
function game(userChoise) {
    const computerChoise = getComputerChoise();
    switch (userChoise + computerChoise) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoise , computerChoise);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoise , computerChoise);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw();
            break;
        default: break;
    }
}



