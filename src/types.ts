export interface State {
	groups: Group[],
	isLoading: boolean,
	loadingResource: null | string
};

export interface Group {
	name: string,
	id: number,
	players: string[],
	games: Game[]
}

export interface NewGame {
	players: string[],
	score: null | number[],
	winner: 0 | 1
}

export interface Game extends NewGame {
	id: number
}