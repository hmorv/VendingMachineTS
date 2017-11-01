class Coin {
	private denomination : number;

	constructor( theDenomination : number ) {
		this.denomination = theDenomination;
	}

	public getDenomination() {
		return this.denomination;
	}
}

export { Coin };