import { createStore } from 'redux'
import { State } from './types';

const dummyData: State = {
	groups: [
		{
			name: 'Chess',
			id: 'nc130nclkdac13oncas',
			players: ['Viktor', 'Marci'],
			matches: [{
				players: ['Viktor', 'Marci'],
				score: null,
				winner: 0
			}, {
				players: ['Viktor', 'Marci'],
				score: null,
				winner: 1
			}, {
				players: ['Viktor', 'Marci'],
				score: null,
				winner: 1
			}]
		}, {
			name: 'Go',
			id: 'asasca2csalmcsac13noiubc',
			players: ['Ed', 'Viktor'],
			matches: [{
				players: ['Ed', 'Viktor'],
				score: [15, 3],
				winner: 0
			}, {
				players: ['Ed', 'Viktor'],
				score: [6, 18],
				winner: 1
			}, {
				players: ['Viktor', 'Ed'],
				score: [9, 11],
				winner: 1
			}]
		}
	]
}

function reducer(state: State = dummyData) {
	return state;
}

const store = createStore(reducer);
export default store;