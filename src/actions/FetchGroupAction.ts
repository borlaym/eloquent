import { Dispatch } from "redux";
import { Group } from "../types";
import fetchStart from "./FetchStartAction";
import getUrl from "../getUrl";

export const FETCH_GROUP = 'FETCH_GROUP';

export interface FetchGroupAction {
	type: typeof FETCH_GROUP,
	payload: {
		url: string,
		group: Group
	}
}

export default function fetchGroup(id: string) {
	const url = `/groups/${id}`
	return (dispatch: Dispatch) => {
		dispatch(fetchStart(getUrl(url)))
		fetch(url)
			.then(response => response.json())
			.then(response => {
				dispatch({
					type: 'FETCH_GROUP',
					payload: {
						url,
						group: response
					}
				})	
			})
	};
}