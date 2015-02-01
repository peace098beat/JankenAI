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

    // log ankle
    logger.index ++;
    logger.chg_move.push(chg_move);
    logger.cmp_move.push(cmp_move);
    logger.setResult(result);
    logger.debuglog(true);

    // html draw 
    draw(chg_move, cmp_move, result);

}

/***************************************************
 *
 * junkenAI
 *
 ****************************************************/
function junkenAI(chg_move) {

    // reutn variable
    var cmp_move;

    // Algorizm is "Random"
    function randomAI() {
        rnd = Math.floor(Math.random() * 10);
        move = rnd % 3 + 1;
        return move;
    }

    cmp_move = randomAI()
    return cmp_move;
}


/***************************************************
 *
 * judge
 *
 ****************************************************/
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
 * draw
 *
 ****************************************************/
function draw(chg_move, cmp_move, result) {
    //alert("draw "+cmp_move);
    var n = cmp_move;
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
    var n = chg_move;
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

    var j = result;
    if (j == 1) {
        document.getElementById('result-window').textContent = "勝ち";
    } else if (j == -1) {
        document.getElementById('result-window').textContent = "負け";
    } else if (j == 0) {
        document.getElementById('result-window').textContent = "あいこ";
    }

    document.getElementById('champion-count').innerText = logger.lose_num;
    document.getElementById('challenger-count').innerText = logger.win_num;
}


/***************************************************
 *
 * analyser
 *
 ****************************************************/



/***************************************************
/*
*   logAnkle()
*   ログおじさん。対戦結果の保存する。
*
*   @index:     int     試行回数(初手=1)
*   @chg_move:  array:  挑戦者の手
*   @cmp_move:  array:  チャンピョンAIの手
*   @result:    array:  勝敗。(勝ち:1, 負け:-1, あいこ:0)
*   @win_num:   int:  挑戦者の勝ち数
*   @lose_num:   int:  挑戦者の負け数
*   @draw_num:   int:  挑戦者のあいこ数
*
 ****************************************************/
function logAnkle(){
    console.log('No LOG, No Life');
    self.index = 0;
    self.chg_move=[0];
    self.cmp_move= [0];
    self.result=[0];
    self.win_num = 0;
    self.lose_num = 0;
    self.draw_num = 0;

    self.setResult = function(result){

        self.result.push=result;
        
        if(result == 1){
            self.win_num ++;
        }else if(result == -1){
            self.lose_num ++;
        }else if(result == 0){
            self.draw_num ++;
        }
    }

    self.debuglog = function(flg){
        if (flg == true){
            console.log('_index_')
            console.log(self.index);
            // console.log('_challenger move_');
            // console.log(self.chg_move[self.index-1]);
            console.log('__win num__');
            console.log(self.win_num);
            console.log('__lose num__');
            console.log(self.lose_num);
            console.log('__draw num__');
            console.log(self.draw_num);        
        }
    }

    return self;
}

/***************************************************
 *
 *  Get any DOMs
 *
 ****************************************************/
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

// save log data
var logger = logAnkle();
