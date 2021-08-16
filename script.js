const canvas = document.querySelectorAll('canvas');
const ctxArray = [...canvas].map(cvs => cvs.getContext('2d'));
const thumbnail = document.querySelectorAll('.containThumbnail');
const start = document.querySelector('#start-stop');

var numOfBars = 69;
let lastFrameTime = 0;
let stepTimer = 0;
let stepSpeed = 1;
var sorter = [];
let datagram = [];
let looping =  false;

document.querySelector('#new-data-btn').addEventListener('click', () => reset(true));
window.addEventListener('load', () => reset(true));
window.addEventListener('resize', () => reset(false));
start.addEventListener('click', ()=> {
	looping = !looping;
	if(looping)
		start.innerHTML = '<a>Stop</a>';
	else
		start.innerHTML = '<a>Start</a>';
	loop();
});

function reset(newData) {
	
	for(var i=0; i<canvas.length; i++)
	{
		var vheight = (window.innerHeight - document.querySelector('.navbar').style.height)/3 - 20;
		var vwidth = (window.innerWidth - 60) / 2;
		thumbnail[i].style.offsetWidth = vwidth;
		canvas[i].height = vheight.toString() ;
		canvas[i].width = thumbnail[i].offsetWidth - '50';
	}
	if(newData){
		sorter[0] = new BubbleSort();
		sorter[1] = new SelectionSort();
		sorter[2] = new InsertionSort();
		sorter[3] = new QuickSort();
	
		datagram = [];
		randomData = shuffledArrayInRange();
		for (var i = 0; i < sorter.length; i++){
			datagram.push(new DataRepresentation(0,
												100 + canvas[i].height * i
												,canvas[i].width,
												canvas[i].height,
												ctxArray[i]));
		}
	}
	loop();
};

function loop(frameTime = 16) {
	update();

	for(let i=0; i < ctxArray.length; i++){
		ctxArray[i].fillStyle = '#fff';
		ctxArray[i].fillRect(0, 0, canvas[i].width, canvas[i].height);
	}
	draw();

	lastFrameTime = frameTime;
	if(looping)
		requestAnimationFrame(loop);
}

function update() {
	stepSpeed = 23;
	if(lastFrameTime - stepTimer > stepSpeed)
	{
		for(let j = 0; j < Math.floor(1000 / 60 / stepSpeed) + 1; j++)
			for(let i = 0; i < sorter.length ; i++)
				sorter[i].step(datagram[i].data);
		stepTimer = lastFrameTime;
	}
}

function draw() {
	for(let i=0; i<datagram.length; i++)
		datagram[i].draw(i);
}

function hslStr(val=0)
{
	return "hsl("+val+", 90%, 50%)";
}