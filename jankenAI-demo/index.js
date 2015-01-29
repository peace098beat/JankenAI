/***************************************************
 *
 * gameStart
 *
 ****************************************************/
function gameStart(challenger_no) {
    //alert("gamestart");

    // challenger move
    var chg_move = challenger_no;

    // champion move
    var cmp_move = junkenAI(chg_move);

    // result of challenger
    var result = judge(chg_move, cmp_move);
    //var result =1;

    draw(chg_move, cmp_move, result);

}

/***************************************************
 *
 * junkenAI
 *
 ****************************************************/
function junkenAI(chg_move) {

    // Algorizm is "Random"
    function randomAI() {
        rnd = Math.floor(Math.random() * 10);
        move = rnd % 3 + 1;
        console.log(move);
        return move;
    }

    function neverLoose(chg_move) {
        //var move = 1;
        switch (chg_move) {
            case 1:
                move = 3;
                break;
            case 2:
                move = 1;
                break;
            case 3:
                move = 2;
                break;
        }
        return move;
    }

    //return randomAI();
    return neverLoose(chg_move);
}

/***************************************************
 *
 * draw
 *
 ****************************************************/
function draw(chg_move, cmp_move, result) {
    //alert("draw "+cmp_move);
    n = cmp_move;
    if (n == 1) {
        //document.getElementById('champion-move').textContent="ぐー";
        document.getElementById('champion-move').innerHTML = '<img class="move-icon" src="http://jsrun.it/assets/n/e/E/S/neESG.png">';

    } else if (n == 2) {
        //document.getElementById('champion-move').textContent="ちょき";
        document.getElementById('champion-move').innerHTML = '<img class="move-icon" src="http://jsrun.it/assets/2/o/w/F/2owF2.png">';

    } else if (n == 3) {
        //document.getElementById('champion-move').textContent="ぱー";
        document.getElementById('champion-move').innerHTML = '<img class="move-icon" src="http://jsrun.it/assets/p/a/O/Y/paOYD.png">';

    }

    //alert("draw "+cmp_move);
    n = chg_move;
    if (n == 1) {
        //document.getElementById('challenger-move').textContent="ぐー";
        document.getElementById('challenger-move').innerHTML = '<img class="move-icon" src="http://jsrun.it/assets/n/e/E/S/neESG.png">';

    } else if (n == 2) {
        //document.getElementById('challenger-move').textContent="ちょき";
        document.getElementById('challenger-move').innerHTML = '<img class="move-icon" src="http://jsrun.it/assets/2/o/w/F/2owF2.png">';

    } else if (n == 3) {
        //document.getElementById('challenger-move').textContent="ぱー";
        document.getElementById('challenger-move').innerHTML = '<img class="move-icon" src="http://jsrun.it/assets/p/a/O/Y/paOYD.png">';

    }

    j = result;
    if (j == 1) {
        document.getElementById('result-window').textContent = "勝ち";
    } else if (j == -1) {
        document.getElementById('result-window').textContent = "負け";
    } else if (j == 0) {
        document.getElementById('result-window').textContent = "あいこ";
    }


}


function judge(chg_move, cmp_move) {

    jcal = cmp_move - chg_move;
    // jcal==0:draw
    // jcal==1:win
    // jcal==2:lose
    var result = -1;

    if (jcal == 0) {
        // draw
        result = 0;
    } else if (jcal == 1) {
        // win
        result = 1;
    } else if (jcal == 2) {
        // lose
        result = -1;
    }
    return result;
}


/***************************************************
 *
 *  Get any DOMs
 *
 ****************************************************/
// HTML内に<div id='janken-area'></div>を創る。
var champion_move = [];
if (document.getElementById('champion-move')) {
    champion_move = document.getElementById('champion-move');
} else {
    alert("Notting id champion-move");
}

var challenger_move = [];
if (document.getElementById('challenger-move')) {
    champion_move = document.getElementById('challenger-move');
} else {
    alert("Notting id challenger-move");
}


// challenger selecte button
var gButton = document.getElementById('junken-g');
var cButton = document.getElementById('junken-c');
var pButton = document.getElementById('junken-p');

// Event call back Challenger sellected button Num
gButton.addEventListener('click', function() {
    gameStart(1);
}, false);
cButton.addEventListener('click', function() {
    gameStart(2);
}, false);
pButton.addEventListener('click', function() {
    gameStart(3);
}, false);
