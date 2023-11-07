import styled from 'styled-components'

const InputContainer = styled.div`
	display: flex;
	align-items: center;
`

const StyledInput = styled.input`
	width: 487px;
	padding: 16px;
	border-radius: 10px 0 0 10px;
	border: none;
	background-color: #FFFFFF;

	color: #170C04;
	font-family: Roboto;
	font-size: 16px;
	font-weight: 400;
`

const StyledButton = styled.button`
	width: 70px;
	padding: 16px;
	border: none;
	border-radius: 0px 10px 10px 0px;
	background-color: #E27B3A;
	color: #FFFFFF;
	font-family: Roboto;
	font-size: 18px;
	font-weight: 500;
`

export { InputContainer, StyledButton, StyledInput }