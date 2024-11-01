// GET /api/users/:id
export interface GetUser {
	id: number;
	name: string;
}

// GET /api/birthdays/:id
export interface Birthdays {
	id: number;
	birthday: string;
}
