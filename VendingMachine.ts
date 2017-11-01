interface VendingMachine {
	public selectItemAndGetPrice( item : Item ): number;
	public insertCoin( coin: Coin ): void;
	public refund(): []Coin;
	//public Bucket 
	public reset(): void
}