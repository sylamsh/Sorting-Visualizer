var numOfBars = 40;


const shuffledArrayInRange = (bottom = 1, top = numOfBars) => {
    const arr = [];
    for (let i = bottom; i < top; i++) 
        arr.push(i);
    return arr.sort(() => (Math.random() > 0.5 ? 1 : -1));
};

const bubbleSort = (array, onAction) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
        }
    }
    return array;
};

function ArrayMember(x, y, width, height, color = "gray") {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;

    this.draw = () => {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };
    this.resetColor = () => this.setColor("gray");

    this.setColor = (color) => {
        if (!this.isSorted()) {
        this.color = color;
        }
    };
    this.isSorted = () => this.color === "green";
    this.sorted = () => (this.color = "green");

    this.setValue = (v, color) => {
        if (!this.isSorted()) {
            this.height = v;
            this.setColor(color);
        }
    };
    this.getValue = (v) => this.height;
}

const resetBars = () => {
    canvas.height = '170';
    canvas.width = thumbnail.offsetWidth - '50';

    var barWidth = (canvas.width - numOfBars) / numOfBars;
    var posConst = (canvas.width - numOfBars * 0.69) / numOfBars;
    var barMaxHeight = canvas.height/numOfBars;
    
    const randomArray = shuffledArrayInRange();
    const arrayMembers = randomArray.map((v, i) => {
        return new ArrayMember(posConst * i + i, 0, barWidth, v * barMaxHeight);
    });
    
    const drawAll = () => arrayMembers.forEach((m) => m.draw());
    drawAll()
}
    
const canvas = document.querySelector('canvas');
const thumbnail = document.querySelector('.containThumbnail');
const ctx = canvas.getContext("2d");

window.addEventListener('resize', resetBars);
window.addEventListener('load', resetBars);



