import styled from 'styled-components'

const StyledButton = styled.button`
	position: absolute;
	bottom: 0;
	${props => props.direction === 'left' ? 'left: 20px;' : 'right: 20px;'};
	border: none;
	background-color: transparent;  
	cursor: pointer; 
	font-size: 24px; 
	z-index: 1;
`

export default StyledButton