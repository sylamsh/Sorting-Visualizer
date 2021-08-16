class SelectionSort
{
	constructor() { this.reset(); }
	step(arr)
	{
		if(this.i != arr.length - 1)
		{	
			if(this.j == arr.length - 1)
			{
				this.i++;
				this.j = this.i;
			}
			this.j++;
			if(arr[this.i] > arr[this.j])
				[arr[this.i], arr[this.j]] = [arr[this.j], arr[this.i]];
		}
	}
	reset()
	{
		this.i=0;
		this.j=0;
	}
}