import * as React from 'react';
import { Link } from 'react-router-dom';
import { State, Group } from '../types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import fetchGroups from '../actions/FetchGroupsAction';
import { ThunkDispatch } from 'redux-thunk';
import { useEffect } from 'react';
import styled from 'styled-components';
import GroupComponent from '../components/GroupComponent';
import HeaderComponent from '../components/HeaderComponent';
import { ContentContainer } from '../components/LayoutComponents';

interface Props {
	groups: Group[],
	getGroups: () => void
};

function SelectGroupScreen(props: Props) {
	useEffect(() => props.getGroups(), [])
	return (
		<div>
			<HeaderComponent screenTitle='ELOQUENT'/>
			<ContentContainer>
				{props.groups.map(group => (
					<GroupComponent key={group.id} {...group} />
				))}
			</ContentContainer>
		</div>
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
