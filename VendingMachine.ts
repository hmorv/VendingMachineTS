interface VendingMachine {
	public selectItemAndGetPrice( item : Item ): number;
	public insertCoin( coin: Coin ): void;
	public refund(): []Coin;
	//public Bucket 
	public reset(): void
}

class Coin {}

class Item {}

class VendingMachineImpl implements VendingMachine {
	private cashInventory : Array<Coin>;//[]Coin;
	private itemInventory : Array<Item>;//[]Item;
	private totalSales : number;
	private CurrentItem : Item;
	private currentBalance : number;

	public constructor() {
		this.initialize();
	}

	private initialize() : void {
		for( let i : Coin) {
			this.cashInventory.push(i);
		}
	}
}