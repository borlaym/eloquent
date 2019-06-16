import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { State } from './types';
import { SaveGameAction, SAVE_GAME } from './actions/SaveGameAction';
import { FETCH_GROUPS, FetchGroupsAction } from './actions/FetchGroupsAction';

const dummyData: State = {
	groups: []
}

type ActionTypes = SaveGameAction | FetchGroupsAction;
	

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
							id: Date.now()
						}]
					},
					...state.groups.slice(state.groups.indexOf(group) + 1)
				]
			};
		case FETCH_GROUPS:
			return {
				...state,
				groups: action.payload
			}
		default:
			return state;
	}
}

const store = createStore(reducer, applyMiddleware(thunk));
export default store;