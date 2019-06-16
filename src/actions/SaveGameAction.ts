import { NewGame } from "../types";

export const SAVE_GAME = 'SAVE_GAME';

export interface SaveGameAction {
	type: typeof SAVE_GAME
	payload: {
		game: NewGame,
		groupId: number
	}
}

export default function saveGame(game: NewGame, groupId: number): SaveGameAction {
	return {
		type: 'SAVE_GAME',
		payload: {
			game,
			groupId
		}
	}
}