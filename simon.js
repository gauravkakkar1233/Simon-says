let gameseq = [];
let userseq = [];
let btns = ["yellow", "red", "green", "blue"];
let started = false;
let level = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");
        started = true;
        levelup();
    }
});

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 1000);
}
function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 500);
}
function checkans(idx) {
    console.log("the current level is ", level);
    // let idx=level-1;
    if (gameseq[idx] === userseq[idx]) {
        // console.log("same value");
        if (userseq.length == gameseq.length) {
            // levelup();
            setTimeout(levelup, 1000);
        }
    }
    else {
        h3.innerHTML= `Game is over!Your score was <b>${level}</b>  Press any key to start the game`;
    document.querySelector("body").style.backgroundColor='red';
    setTimeout(function()
    {
        document.querySelector("body").style.backgroundColor='white';

    },200);
        reset();
    }
}
function levelup() {
    userseq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let rnd = Math.floor(Math.random() * 4);  // Corrected
    let randc = btns[rnd];
    let rndbtn = document.querySelector(`.${randc}`); // Corrected
    gameseq.push(randc);
    console.log(gameseq);
    console.log(rnd);
    console.log(randc);
    console.log(rndbtn);
    btnflash(rndbtn);
}
function btnpress() {
    // console.log("btn was pressed");
    console.log(this);
    let btn = this;
    userflash(btn);
    usercolor = btn.getAttribute("id");
    // console.log(userflash);
    userseq.push(usercolor);
    console.log(userseq);
    checkans(userseq.length - 1);
}
let allbtns = document.querySelectorAll(".btn")
for (btn of allbtns) {
    btn.addEventListener("click", btnpress);
}
function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}