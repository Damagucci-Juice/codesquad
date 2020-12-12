var face = document.getElementsByTagName('td');
var input = document.getElementById('order');
var check = document.getElementById('check');
var count = document.getElementById('count');
var time = document.getElementById('time');








var cube = {
    'faces': [left, bottom, front, back, top, right],
    'colors': ['W', 'B', 'G', 'Y', 'O', 'R'],
    'orders': [],
    'current': 0
};

cube.input = function() {
    const inputString = input.value;
    this.orders = inputString.toUpperCase().split('');
};
cube.input();

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
