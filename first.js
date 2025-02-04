let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userno = document.querySelector("#user-score");
const compno = document.querySelector("#comp-score");

const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const idx = Math.floor(Math.random() * 3);
    return options[idx];
};

const showwinner = (userwin, choiceid, compchoice) => {
    if (userwin) {
        console.log("user won!");
        userscore++;
        userno.textContent = userscore;
        msg.textContent = `You Won! ${choiceid} beats ${compchoice}`;
        msg.style.backgroundColor = "Green";
    } else {
        console.log("user lost");
        compscore++;
        if (compno) compno.textContent = compscore;
        msg.textContent = `You Lost! ${compchoice} beats ${choiceid}`;
        msg.style.backgroundColor = "Red";
    }
};

const playgame = (choiceid) => {
    console.log("user choice =", choiceid);
    const compchoice = gencompchoice();
    console.log("comp choice =", compchoice);

    if (choiceid === compchoice) {
        console.log("draw");
        msg.textContent = "Draw";
        msg.style.backgroundColor = "gray"; // Reset styling for a draw
        return;
    } else {
        let userwin = true;
        if (choiceid === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (choiceid === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        } else if (choiceid === "scissors") {
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin, choiceid, compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let choiceid = choice.getAttribute("id");
        playgame(choiceid);
    });
});
