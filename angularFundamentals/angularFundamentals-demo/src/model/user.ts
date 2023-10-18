export interface User {
	id: number;
	name: string;
	address?: Address
}

export interface Address {
	street: string;
	city: string;
	province?: string;
	zip: string;
}
