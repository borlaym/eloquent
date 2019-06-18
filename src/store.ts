import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { State } from './types';
import { SaveGameAction, SAVE_GAME } from './actions/SaveGameAction';
import { FETCH_GROUPS, FetchGroupsAction, GROUPS_URL } from './actions/FetchGroupsAction';
import { FetchStartAction, FETCH_START } from './actions/FetchStartAction';

const dummyData: State = {
	groups: [],
	isLoading: false,
	loadingResource: null
}

type ActionTypes = SaveGameAction | FetchGroupsAction | FetchStartAction;
	

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
				groups: action.payload,
				isLoading: state.loadingResource === GROUPS_URL ? false : state.isLoading,
				loadingResource: state.loadingResource === GROUPS_URL ? null : state.loadingResource
			}
		case FETCH_START:
			return {
				...state,
				isLoading: true,
				loadingResource: action.payload
			}
		default:
			return state;
	}
}

const store = createStore(reducer, applyMiddleware(thunk));
export default store;