class InsertionSort
{
	constructor() { this.reset(); }
	step(arr)
	{
		let n = arr.length;
		if(this.i < n)
		{
			if(this.carry === -Infinity)
			{
				this.carry = arr[this.i];
				this.j = this.i-1;
			}
			else
			{
				if(this.j>=0 && arr[this.j]>this.carry)
				{
					arr[this.j+1] = arr[this.j];
					this.j--;
				}
				else
				{
					arr[this.j+1] = this.carry;
					this.carry = arr[this.i+1];
					this.j = this.i;
					this.i++;
				}
			}
		}
	}
	reset()
	{
		this.i=1;
		this.j=0;
		this.carry=-Infinity;
	}

}