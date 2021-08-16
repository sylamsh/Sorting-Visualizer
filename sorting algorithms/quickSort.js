class QuickSort
{
	constructor() { this.reset(); }
	reset()
	{
		this.i=0;
		this.j=-1;
		this.ranges = [[0,-1]];
		this.pivot = -1;
	}
	step(arr)
	{
		if(this.ranges.length!=0)
		{
			if(this.ranges[0][1]==-1)
				this.ranges[0][1]= arr.length-1;
			else
			{
				this.partition(arr, this.ranges[this.ranges.length-1]);
			}
		}

	}
	partition(arr, range)
	{
		if(this.j==-1)
		{
			this.pivot = range[1];
			this.i = this.j = range[0];
		}
		if(this.j<this.pivot)
		{
			if (arr[this.j]<=arr[this.pivot])
			{
				[arr[this.j],arr[this.i]] = [arr[this.i],arr[this.j]];
				this.i++;
			}

			this.j++;
		}
		if(this.j==this.pivot)
		{
				[arr[this.j],arr[this.i]] = [arr[this.i],arr[this.j]];
				this.ranges.pop();
				if(this.i+1<range[1])
					this.ranges.push([this.i+1,range[1]]);
				if(range[0]<this.i-1)
					this.ranges.push([range[0],this.i-1]);
				this.j=-1;
				this.i=-1;
		}
	}

}