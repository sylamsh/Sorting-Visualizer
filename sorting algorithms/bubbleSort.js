class BubbleSort
{
	constructor() { this.reset(); }
	step(arr)
	{
		let n = arr.length;
		if(this.i != n - 1)
		{	
			if(this.j == n - this.i - 1)
			{
				this.i++;
				this.j = 0;
			}
			this.j++;
			if(arr[this.j-1]  > arr[this.j])
				[arr[this.j], arr[this.j-1]] = [arr[this.j-1], arr[this.j]];
		}
	}

	reset()
	{
		this.i=0;
		this.j=0;
	}

}