import { NewGame } from "../types";

export const SAVE_GAME = 'SAVE_GAME';

export interface SaveGameAction {
	type: typeof SAVE_GAME
	payload: {
		game: NewGame,
		groupId: string
	}
}

export default function saveGame(game: NewGame, groupId: string): SaveGameAction {
	return {
		type: 'SAVE_GAME',
		payload: {
			game,
			groupId
		}
	}
}