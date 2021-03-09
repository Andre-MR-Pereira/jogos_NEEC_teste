var moves = 0;
var picks = [];
var pairs = 0;
initial_time = Date.now();


function increment_move(number) {
    console.log(number)
    moves += 1;
    document.getElementById("movimentos").innerHTML = moves;
    picks.push(number);
    if (picks.length == 2) {
        console.log("FAZ PAR")
        console.log(picks)
        if (picks[0] == picks[1]) {
            matched = true;
            pairs++;
        } else {
            matched = false;
        }
        board_state(matched, picks);
        picks = [];
    }
}

function board_state(matched) {

}

function start_card_game() {
    var cards = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11];
    shuffle(cards);
    var i = 0;
    for (var i = 0; i < cards.length / 3; i++) {
        document.getElementById('game').innerHTML += '<div class="row" name="row">';
        for (var j = 0; j < 3; j++) {
            var item = document.getElementsByName("row");
            item[item.length - 1].innerHTML += '<div class="column"><div class="flip-card"><div class="flip-card-inner" name="bloco">';
            var item = document.getElementsByName("bloco");
            item[item.length - 1].innerHTML += '<div class="card-front"><p>NEEC</p></div>';
            item[item.length - 1].innerHTML += '<div class="card-back"><img src="./assets/cards/0.png" alt="Avatar" style="width:100%" name="img"></div>';
            var item = document.getElementsByName("img");
            item[item.length - 1].src = "./assets/cards/" + cards[(i * 3) + j] + ".png";
            var item = document.getElementsByName("row");
            item[item.length - 1].innerHTML += '</div></div></div>';
        }
        document.getElementById('game').innerHTML += '</div>';
    }
    var cardx = document.getElementsByClassName("card-back");
    for (var i = 0; i < cards.length; i++) {
        cardx[i].addEventListener("onclick", displayCard);
        cardx[i].addEventListener("onclick", increment_move(cards[i]));
    }
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

setInterval(function printTime() {
    let elapsedTime = Date.now() - initial_time;
    document.getElementById("tempo").innerHTML = Math.floor(elapsedTime / 1000);
}, 1000);

var displayCard = function () {
    /*this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");*/
    console.log("Display");
};

document.getElementById("movimentos").innerHTML = moves;
