import styled from 'styled-components'

const StyledButton = styled.button`
	width: fit-content;
	padding: 0 30px;
	height: 48px;
	border: none;
	border-radius: 24px;
	background-color: #E27B3A;
	cursor: pointer;

	font-family: Roboto;
	color: #FFFFFF;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;

	&:hover {
		background-color: #DA5300;
	}
`
export default StyledButton