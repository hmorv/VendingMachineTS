import { Item } from "./Item";

class Inventory {

	private inventory : Array<Item>;

	constructor() {}

	public add() : void {}
	public clear() : void {}
	public deduct() : void {}
	public getQuantity() : number {}
	public hasItem() : boolean {}
	public put() : void {}
}

export { Inventory };