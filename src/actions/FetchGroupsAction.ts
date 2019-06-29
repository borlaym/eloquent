import { Dispatch } from "redux";
import { Group } from "../types";
import fetchStart from "./FetchStartAction";
import getUrl from "../getUrl";

export const FETCH_GROUPS = 'FETCH_GROUPS';
export const GROUPS_URL = getUrl('/groups');

export interface FetchGroupsAction {
	type: typeof FETCH_GROUPS,
	payload: {
		url: string,
		groups: Group[]
	}
}

export default function fetchGroups() {
	return (dispatch: Dispatch) => {
		dispatch(fetchStart(GROUPS_URL))
		fetch(GROUPS_URL)
			.then(response => response.json())
			.then(response => {
				dispatch({
					type: 'FETCH_GROUPS',
					payload: {
						url: GROUPS_URL,
						groups: response
					}
				})	
			})
	};
}