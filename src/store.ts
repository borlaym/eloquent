import { createStore } from 'redux'
import { State } from './types';

const dummyData: State = {
	groups: [
		{
			name: 'Chess',
			id: 'nc130nclkdac13oncas',
			players: ['Viktor', 'Marci'],
			games: [{
				players: ['Viktor', 'Marci'],
				score: null,
				winner: 0,
				id: 'dacas'
			}, {
				players: ['Viktor', 'Marci'],
				score: null,
				winner: 1,
				id: 'xacxxz'
			}, {
				players: ['Viktor', 'Marci'],
				score: null,
				winner: 1,
				id: 'cascz'
			}]
		}, {
			name: 'Go',
			id: 'asasca2csalmcsac13noiubc',
			players: ['Ed', 'Viktor'],
			games: [{
				players: ['Ed', 'Viktor'],
				score: [15, 3],
				winner: 0,
				id: 'cazazcac'
			}, {
				players: ['Ed', 'Viktor'],
				score: [6, 18],
				winner: 1,
				id: 'ascascivavs'
			}, {
				players: ['Viktor', 'Ed'],
				score: [9, 11],
				winner: 1,
				id: 'casvdv3fd'
			}]
		}
	]
}

function reducer(state: State = dummyData) {
	return state;
}

const store = createStore(reducer);
export default store;