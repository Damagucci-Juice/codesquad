var face = document.getElementsByTagName('td');
var input = document.getElementById('order');
var check = document.getElementById('check');
var count = document.getElementById('count');
var time = document.getElementById('time');

var cube = {
    'faces': [left, bottom, front, back, upper, right],
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
       console.log(this.faces[i]);
    }
};
cube.makeFace();


cube.startTime = Date.now();

cube.input = function() {
    const inputString = input.value;
    this.orders = inputString.toUpperCase().split('');
};
cube.input();

cube.checkGood = function(){
    // for (let i = 0; i < this.faces.length; i++) {
    //     if (this.faces[i].innerHTML ===  
    // }
};

cube.switch = function () {
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
cube.switch();



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

var x = setInterval(updateTime, 50);