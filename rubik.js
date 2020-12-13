var left = document.getElementById('left');
var bottom = document.getElementById('bottom');
var front = document.getElementById('front');
var back = document.getElementById('back');
var upper = document.getElementById('upper');
var right = document.getElementById('right');
var input = document.getElementById('input');
var check = document.getElementById('check');
var count = document.getElementById('count');
var time = document.getElementById('time');


var cube = {
    'faces': [bottom, left, front, upper, back, right],
    'colors': ['W', 'B', 'G', 'Y', 'O', 'R'],
    'orders': [],
    'current': 0
};

cube.startTime = Date.now();

cube.makeFace = function() {
    for (let i = 0; i < this.faces.length; i++){
       this.faces[i] = new Array(3)
       for (let j = 0; j < this.faces[i].length; j++) {
           this.faces[i][j] = new Array(this.colors[i], 
            this.colors[i], this.colors[i]);
       }
    }
};
cube.makeFace();

cube.printInitFace = function(n) {
    const line = this.faces[n];
    let table = "";
    for (let i = 0; i < 3; i ++) {
        for (let j = 0; j < 3; j++) {
            table += line[i][j];
            table += ' ';
        }
        table += '<br>';
    }
    return table;
};

cube.fill = function() {
    bottom.innerHTML = this.printInitFace(0);
    left.innerHTML = this.printInitFace(1);
    front.innerHTML = this.printInitFace(2);
    upper.innerHTML = this.printInitFace(3);
    back.innerHTML = this.printInitFace(4);
    right.innerHTML = this.printInitFace(5);
};
cube.fill();

cube.checkFin = function() {
    var isSame = true;
    for(let n = 0; n < this.faces.length; n++) {
        const face = this.faces[n];
        const strFace = face.join();
        const arrFace = strFace.split(',');
        for (let i = 0; i < arrFace.length - 1; i++) {
            if (arrFace[i] !== arrFace[i+1]) {
                isSame = false;
                return isSame;
            }
        }
    }
    return isSame;
};
cube.orderArrange = function () {
    for (let i = 0; i < this.orders.length; i++) {
        switch (this.orders[i]) {
            case '\'':
                this.orders[i-1] += '\'';
                let x = this.orders.splice(i,1);
                i -= 1;
                break;
            case '2':
                this.orders[i] = this.orders[i-1];
                break;
            default:
                break;
        }
    }
};
cube.orderInit = function () {
    this.orders = [];
};

cube.input = function() {
    const inputString = input.value;
    this.orders = inputString.toUpperCase().split('');
    this.orderArrange();
};
cube.exit = function () {
    check.innerHTML = "프로그램을 종료합니다.";
    count.innerHTML = "조작횟수 : " + this.current;
    clearInterval(x);
};
cube.progress = function() {
    if (cube.checkFin() === true) {
        check.innerHTML = "축하합니다. 큐브를 모두 맞췄습니다.";
        clearInterval(x);
        count.innerHTML = "조작횟수 : " + this.current;
    }
    if (cube.checkFin() === false) {
        cube.current++;
        cube.orderInit();
    }
};
cube.calculate = function() {
    cube.input();
    for (let i = 0; i < this.orders.length; i++) {
        switch (this.orders[i]) {
            case "F":
                console.log('F');
                break;
            case "F'":
                console.log('F\'');
                break;
            case "R":
                console.log('R');
                break;
            case "R'":
                console.log('R\'');
                break;
            case "U":
                console.log('U');
                break;
            case "U'":
                console.log('U\'');
                break;
            case "L":
                console.log('L');
                break;
            case "L'":
                console.log('L\'');
                break;
            case "Q":
                this.exit();
                break;
            default:
                alert("F,F',U,U',R,R',L,L' 만을 입력하세요")
        }
    }
};


//move cubes

/*
    'faces': [bottom, left, front, upper, back, right],
               0        1      2    3       4     5
*/

var upMove = function() {
    let temp = [];
    temp = this.faces[2].shift();
};
var upReverseMove = function() {};
var frontMove = function() {};
var frontReverseMove = function() {};
var leftMove = function() {};
var leftReverseMove = function() {};
var rightMove = function() {};
var rightReverseMove = function() {};




//event handler 
var shuffle = function() {
    console.log('random');
};

var execute = function() {
    cube.calculate();
    cube.progress();
};

var updateTime = function () {
    var now = Date.now() - cube.startTime;
    time.innerHTML = (now / 1000) + " s";
};

var x = setInterval(updateTime, 100);