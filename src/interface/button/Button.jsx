import StyledButton from './Button.styled'

function Button(props) {
	return <StyledButton>{props.name}</StyledButton>;
}

export default Button;