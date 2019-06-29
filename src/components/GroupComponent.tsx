import * as React from 'react';
import { Group } from '../types';
import styled from 'styled-components';
import variables from '../style-variables';
import { Link } from 'react-router-dom';

const GroupName = styled.div`
	background: ${variables.green};
	background: linear-gradient(45deg, ${variables.green} 0%, ${variables.blue} 100%);
	border-radius: 5px;
	display: flex;
	margin: 1em;
	font-weight: bold;
	text-align: center;

	a {
		color: #fff;
		flex: 1 0 auto;
		padding: 1em;
		text-decoration: none;
	}
`

export default function GroupComponent(props: Group) {
	return (
		<GroupName>
			<Link to={`/group/${props.id}`}>{props.name}</Link>
		</GroupName>
	)
}
