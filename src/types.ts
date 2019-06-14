export interface State {
	groups: Group[]
};

export interface Group {
	name: string,
	id: string,
	players: string[],
	games: Game[]
}

export interface Game {
	id: string,
	players: string[],
	score: null | number[],
	winner: 0 | 1
}