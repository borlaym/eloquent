import { NewGame } from "../types";
import fetchStart from "./FetchStartAction";
import { Dispatch } from "redux";

export const SAVE_GAME = 'SAVE_GAME';

export interface SaveGameAction {
	type: typeof SAVE_GAME
	payload: {
		game: NewGame,
		groupId: number
	}
}

export default function saveGame(game: NewGame, groupId: number) {
	const url = `/groups/${groupId}/add`;
	return (dispatch: Dispatch) => {
		dispatch(fetchStart(url))
		fetch(url, {
			method: 'POST',
			body: JSON.stringify({
				...game,
				id: 3
			})
		})
			.then(response => {
				console.log('hello')
			})
			.catch(message => alert(message))
	};
}