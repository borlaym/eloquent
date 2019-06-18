export const FETCH_START = 'FETCH_START';

export interface FetchStartAction {
	type: typeof FETCH_START,
	payload: string
}

export default function fetchStart(url: string) {
	return {
		type: 'FETCH_START',
		payload: url
	}
}