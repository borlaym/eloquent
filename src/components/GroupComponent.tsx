import * as React from 'react';
import { Group } from '../types';
import styled from 'styled-components';
import variables from '../style-variables';
import { Link } from 'react-router-dom';

const Container = styled.li`
	border: 1px solid ${variables.orange};
`

export default function GroupComponent(props: Group) {
	return (
		<Container>
			<Link to={`/group/${props.id}`}>{props.name}</Link>
		</Container>
	)
}