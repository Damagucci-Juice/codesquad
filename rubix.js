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

cube.printFace = function(n) {
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
    bottom.innerHTML = this.printFace(0);
    left.innerHTML = this.printFace(1);
    front.innerHTML = this.printFace(2);
    upper.innerHTML = this.printFace(3);
    back.innerHTML = this.printFace(4);
    right.innerHTML = this.printFace(5);
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
            }
        }
    }
    if (isSame) {
        check.innerHTML = "축하합니다. 큐브를 모두 맞췄습니다.";
        count.innerHTML = "조작횟수 : " + this.current;
    } else if (!isSame) {
        check.innerHTML = "";
    }
};

cube.checkFin();

cube.startTime = Date.now();

cube.input = function() {
    const inputString = input.value;
    this.orders = inputString.toUpperCase().split('');
};
cube.input();


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
                console.log(this.orders[i]);
        }
    }
};
cube.orderArrange();



var shuffle = function() {
    console.log('random');
};

var execute = function() {
    console.log('execute');
};

var updateTime = function () {
    var now = Date.now() - cube.startTime;
    time.innerHTML = (now / 1000) + " s";
};

var x = setInterval(updateTime, 100);