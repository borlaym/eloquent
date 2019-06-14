import { createStore, Action } from 'redux'
import { State } from './types';
import { SaveGameAction, SAVE_GAME } from './actions/SaveGameAction';

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

type ActionTypes = SaveGameAction;
	

function reducer(state: State = dummyData, action: ActionTypes): State {
	switch (action.type) {
		case SAVE_GAME:
			const group = state.groups.find(group => group.id === action.payload.groupId);
			if (!group) {
				throw new Error('Didn\'t find group in reducer');
			}
			return {
				...state,
				groups: [
					...state.groups.slice(0, state.groups.indexOf(group)),
					{
						...group,
						games: [...group.games, {
							...action.payload.game,
							id: String(Date.now())
						}]
					},
					...state.groups.slice(state.groups.indexOf(group) + 1)
				]
			};
		default:
			return state;
	}
}

const store = createStore(reducer);
export default store;