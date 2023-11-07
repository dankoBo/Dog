import { InputContainer, StyledButton, StyledInput } from './MessageInput.styled'

function MessageInput() {
	return (
		<InputContainer>
			<StyledInput type="text" />
			<StyledButton>Send</StyledButton>
		</InputContainer>
	);
}

export default MessageInput;