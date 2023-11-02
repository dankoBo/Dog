import styled from 'styled-components'

const ListItem = styled.li`
	text-align: center;
	padding: 10px;
	border-bottom: 1px solid gray;
`

const ListLink = styled.a`
	text-transform: uppercase;
	text-decoration: none;
	color: #000000;

	&:hover {
		color: #E27B3A;
	}
`

export { ListItem, ListLink }