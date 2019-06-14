import * as React from 'react';
import { Link, match } from 'react-router-dom';
import { State, Group, Game } from '../types';
import { connect } from 'react-redux';

interface Props {
	match: match<{ groupId: string, matchId: string }>,
	group?: Group,
	game?: Game
};

function MatchListScreen({ group, match }: Props) {
	console.log(match)
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

		</div>
	);
}

function mapStateToProps(state: State, ownProps: Props): Props {
	console.log(ownProps)
	return {
		match: ownProps.match,
		group: state.groups.find(group => group.id === ownProps.match.params.groupId)
	}
}

export default connect(mapStateToProps)(MatchListScreen);