const canvas = document.querySelectorAll('canvas');
const thumbnail = document.querySelector('.containThumbnail');

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

function ArrayMember(x, y, width, height, ctx, color = "gray") {
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

    for(var i=0; i<canvas.length; i++)
    {
        canvas[i].height = '170';
        canvas[i].width = thumbnail.offsetWidth - '50';
    }
   
    const ctxArray = [...canvas].map(cvs => cvs.getContext('2d'));

    var barWidth = (canvas[0].width - numOfBars) / numOfBars;
    var posConst = (canvas[0].width - numOfBars * 0.75) / numOfBars;
    var barMaxHeight = canvas[0].height/numOfBars;
    
    const randomArray = shuffledArrayInRange();
    for(var j=0; j<canvas.length; j++){
        const arrayMembers = randomArray.map((v, i) => {
            return new ArrayMember(posConst * i + i, 0, barWidth, v * barMaxHeight, ctxArray[j]);
        });
        const drawAllBars = () => arrayMembers.forEach((m) => m.draw());
        drawAllBars()
    }
    
}

window.addEventListener('resize', resetBars);
window.addEventListener('load', resetBars);



// const ACTIONS = {
//     SORT: "SORT",
//     COMPARE: "COMPARE",
//     SWAP: "SWAP",
// };

// // ---- what to do on each action ----

// const actionsMap = {
//   [ACTIONS.SORT]: (action, members) => members[action.data].sorted(),
//   [ACTIONS.SWAP]: (action, members) => {
//     const [i, j] = action.data;
//     let tmp = members[i].getValue();
//     members[i].setValue(members[j].getValue(), "red");
//     members[j].setValue(tmp, "yellow");
//   },
//   [ACTIONS.COMPARE]: (action, members) => {
//     const [i, j] = action.data;
//     members[i].setColor("blue");
//     members[j].setColor("blue");
//   },
// };

// bubbleSort(randomArray, (action) => {
//   actionsMap[action.type](action, arrayMembers);
//   ctx.clearRect(0, 0, innerWidth, innerHeight);
//   drawAll();
// })


// let ticks = 0;
// const speed = 50;

// bubbleSort(randomArray, (action) => {
//   ticks++;
//   setTimeout(() => {
//     actionsMap[action.type](action, arrayMembers);
//     ctx.clearRect(0, 0, innerWidth, innerHeight);
//     drawAll(arrayMembers);
//     arrayMembers.forEach((m) => m.resetColor());
//   }, ticks * speed);
// });