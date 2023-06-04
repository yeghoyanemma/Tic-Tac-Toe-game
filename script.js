let start = document.getElementById("startgame");
let count = 0;
let startCount = 0;
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let text = document.getElementById("text");
let countX = document.getElementById("count1");
let countO = document.getElementById("count2");

start.onclick = function () {
    if (startCount == 0) {
        start.style.backgroundColor = "red";
        start.innerHTML = "Play again";
        let table = document.createElement("table");
        if (player1.value == "") {
            player1.value = "Player X";
        }
        if (player2.value == "") {
            player2.value = "Player O";
        }
        text.innerText = player1.value + " your turn";
        for (let i = 0; i < 3; i++) {
            let tr = document.createElement("tr");
            for (let j = 0; j < 3; j++) {
                let td = document.createElement("td");
                td.setAttribute("class", "block");
                td.style.border = "5px solid green";
                td.style.width = "130px";
                td.style.height = "130px";
                td.style.fontSize = "100px";
                td.style.textAlign = "center";
                td.onclick = function () {
                    if (td.innerText == "") {
                        if (count % 2 == 0) {
                            text.innerText = player2.value + " your turn";
                            td.innerText = "X";
                        } else {
                            text.innerText = player1.value + " your turn";
                            td.innerText = "O";
                        }
                        count++;
                        win();
                    }
                }
                tr.append(td);
            }
            table.append(tr);
        }
        document.getElementById("row2").append(table);
        startCount++;
    }
    else {
        restart();
    }
}

function restart() {
    count = 0;
    let block = document.getElementsByClassName("block");
    for (let i = 0; i < block.length; i++) {
        block[i].innerHTML = "";
        text.innerText = player1.value + " your turn";
    }

}




let scoreX = 0;
let scoreO = 0;

function win() {
    const comb = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    let b = false;
    let block = document.getElementsByClassName("block");
    for (let i = 0; i < comb.length; i++) {
        if (block[comb[i][0]].innerHTML == "X" && block[comb[i][1]].innerHTML == "X" && block[comb[i][2]].innerHTML == "X") {
            text.innerText = player1.value + " wins";
            scoreX += 1;
            countX.innerText = scoreX;
            b = true;
            setTimeout(() => {
                return restart();
            }, 1000);
        }
        if (block[comb[i][0]].innerHTML == "O" && block[comb[i][1]].innerHTML == "O" && block[comb[i][2]].innerHTML == "O") {
            text.innerText = player2.value + " wins";
            scoreO += 1;
            countO.innerText = scoreO;
            b = true;
            setTimeout(() => {
                return restart();
            }, 1000);
        }
    }

    if (b == false && count == 9) {
        text.innerText = "Draw!!!";
        setTimeout(() => {
            return restart();
        }, 1000);
    }
}