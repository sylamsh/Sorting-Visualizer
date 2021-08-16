const shuffledArrayInRange = (bottom = 1, top = numOfBars) => {
    const arr = [];
    for (let i = bottom; i < top; i++) 
        arr.push(i);
    return arr.sort(() => (Math.random() > 0.5 ? 1 : -1));
};

class DataRepresentation
{
	constructor(x=0, y=0, width=100, height=100, ctx)
	{
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.ctx = ctx;
		this.resetData();
	}

	resetData()
	{
		this.data  = shuffledArrayInRange();
		this.dataMaximum = numOfBars;
		
	}
	draw()
	{
		var barWidth = (canvas[0].width - numOfBars) / numOfBars;
		var posConst = (canvas[0].width - numOfBars * 0.75) / numOfBars;
		var barMaxHeight = canvas[0].height/numOfBars;
		for (let i = 0; i < this.data.length; i++) {
			this.ctx.fillStyle = hslStr(Math.round(this.data[i] / this.dataMaximum * 60));
			this.ctx.fillRect(posConst * i + i,
                        0, 
                        barWidth, 
                        this.data[i] *  barMaxHeight);
		}
	}
}