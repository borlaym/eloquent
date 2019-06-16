import * as React from 'react';
import { Link } from 'react-router-dom';
import { State, Group } from '../types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import fetchGroups from '../actions/FetchGroupsAction';
import { ThunkDispatch } from 'redux-thunk';
import { useEffect } from 'react';

interface Props {
	groups: Group[],
	getGroups: () => void
};

function SelectGroupScreen(props: Props) {
	useEffect(() => props.getGroups(), [])
	return (
		<ul>
			{props.groups.map(group => (
				<li key={group.id}>
					<Link to={`/group/${group.id}`}>{group.name}</Link>
				</li>
			))}
		</ul>
	);
}

function mapStateToProps(state: State, ownProps: Props): Props {
	return {
		...ownProps,
		groups: state.groups,
		
	}
}

function matchDispatchToProps(dispatch: ThunkDispatch<{}, {}, any>, ownProps: Props) {
	return {
		...ownProps,
		getGroups: () => dispatch(fetchGroups())
	}
}

export default connect(mapStateToProps, matchDispatchToProps)(SelectGroupScreen);