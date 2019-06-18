import * as React from 'react';
import { Link, match } from 'react-router-dom';
import { State, Group } from '../types';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import fetchGroup from '../actions/FetchGroupAction';

interface Props {
	match: match<{ groupId: string }>,
	group?: Group,
	getGroup: () => void
};

function GameListScreen({ group, getGroup }: Props) {
	React.useEffect(() => getGroup(), [])
	if (!group) {
		return (<h1>Group not found</h1>);
	}
	return (
		<div>
			<h1>{group.name}</h1>
			<ul>
				{group.games.map(game => (
					<li key={game.id}>
						{game.players[0]}{game.winner === 0 && '(w)'} {game.score && game.score[0]} -
						{game.score && game.score[1]} {game.players[1]}{game.winner === 1 && '(w)'} 
						<Link to={`/group/${group.id}/games/${game.id}`}>Details</Link>
					</li>
				))}
			</ul>

			<Link to={`/group/${group.id}/add`}>Add new game</Link>

		</div>
	);
}

function mapStateToProps(state: State, ownProps: Props): Props {
	return {
		...ownProps,
		match: ownProps.match,
		group: state.groups.find(group => group.id === parseInt(ownProps.match.params.groupId, 10))
	}
}

function matchDispatchToProps(dispatch: ThunkDispatch<{}, {}, any>, ownProps: Props) {
	return {
		...ownProps,
		getGroup: () => dispatch(fetchGroup(ownProps.match.params.groupId))
	}
}

export default connect(mapStateToProps, matchDispatchToProps)(GameListScreen);