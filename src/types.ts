export interface State {
	groups: Group[]
};

export interface Group {
	name: string,
	id: string,
	players: string[],
	games: Game[]
}

export interface NewGame {
	players: string[],
	score: null | number[],
	winner: 0 | 1
}

export interface Game extends NewGame {
	id: string
}