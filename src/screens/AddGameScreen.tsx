import * as React from 'react';
import { State, Group, NewGame } from '../types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import saveGame from '../actions/SaveGameAction';
import { RouteChildrenProps } from 'react-router';

interface Props extends RouteChildrenProps<{ groupId: string }> {
	group?: Group,
	onSave: (game: NewGame) => void 
};

function AddGameScreen({ group, onSave, history }: Props) {
	const [player1, setPlayer1] = React.useState('');
	const [player2, setPlayer2] = React.useState('');
	const [score1, setScore1] = React.useState(0);
	const [score2, setScore2] = React.useState(0);
	const [winner, setWinner] = React.useState<0 | 1>(0);
	if (!group) {
		return (<h1>Group not found</h1>);
	}
	return (
		<div>
			<h1>{group.name} - Add a new game</h1>
			<p>Player 1</p>
			<input type="text" value={player1} onChange={event => setPlayer1(event.target.value)} />
			<input type="radio" name="winner" value="0" checked={winner === 0} onChange={event => event.target.value === '0' && setWinner(0)} />
			<p>Player 2</p>
			<input type="text" value={player2} onChange={event => setPlayer2(event.target.value)} />
			<input type="radio" name="winner" value="1" checked={winner === 1} onChange={event => event.target.value === '1' && setWinner(1)} />
			<p>Score</p>
			<input type="number" value={score1} onChange={event => setScore1(parseInt(event.target.value, 10))} /> - 
			<input type="number" value={score2} onChange={event => setScore2(parseInt(event.target.value, 10))} />
			<button onClick={() => {
				onSave({
					players: [player1, player2],
					winner,
					score: [score1, score2]
				})
				history.push(`/group/${group.id}`);
			}}>Save</button>
		</div>
	);
}

function mapStateToProps(state: State, ownProps: Props): Props {
	return {
		...ownProps,
		group: state.groups.find(group => ownProps.match && group.id === parseInt(ownProps.match.params.groupId, 10)),
		onSave: ownProps.onSave
	}
}

function matchDispatchToProps(dispatch: Dispatch, ownProps: Props) {
	return {
		onSave: (game: NewGame) => dispatch(saveGame(game, ownProps.match && parseInt(ownProps.match.params.groupId) || 0))
	}
}

export default connect(mapStateToProps, matchDispatchToProps)(AddGameScreen);