import { Item } from "./Item";

class Inventory {

	private inventory : Array<Item>;

	constructor() {}

	public add() : void {}
	public clear() : void {}
	public deduct() : void {}
	public getQuantity( item : Item ) : number {
		let value : number = this.inventory.find(item);
		return value == null ? 0 : value;
	}
	public hasItem() : boolean { return true }
	public put() : void {}
}

export { Inventory };