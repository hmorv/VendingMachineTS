import { Item } from "./Item";

class Inventory {

	private inventory : Array<Item>;

	constructor() {}

	public add( item : Item ) : void {
		this.inventory.push(item);
	}
	public clear() : void {
		this.inventory = Array<Item>;
	}
	public deduct() : void {}
	
	public getQuantity( item : Item ) : number {
		let value : number = 0;

		for( let index = 0; index < this.inventory.length; index++ ) {
			if ( this.inventory[index].getName()  == item.getName() ) {
				value++;
			}
		}
		return value;
	}

	public hasItem( item : Item ) : boolean {
		return this.getQuantity(item) > 0;
	}
	public put() : void {}
}

export { Inventory };