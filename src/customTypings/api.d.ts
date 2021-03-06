declare namespace VendingMachine.API {
	interface Item {
		itemName: string;
		price: number;
		count: number;
		imageUrl: string;
	}

	interface Config {
		slotsCount: number;
		items: Array<Item>;
	}
}