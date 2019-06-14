export interface State {
	groups: Group[]
};

export interface Group {
	name: string,
	id: string,
	players: string[],
	matches: Match[]
}

export interface Match {
	players: string[],
	score: null | number[],
	winner: 0 | 1
}