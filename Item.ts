class Item {
	private name : string;
	private price : number;

	constructor( theName : string, thePrice : number ) {
		this.name = theName;
		this.price = thePrice;
	}

	public getName() : string {
		return this.name;
	}
	public getPrice() : number {
		return this.price;
	}
}

export { Item };