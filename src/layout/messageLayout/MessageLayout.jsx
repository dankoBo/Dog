import MessageInput from '../../interface/messageInput/MessageInput';
import { MessageLayoutWrapper, StyledBlueContainer, TitleSubtitleContainer, MessageLayoutTitle, MessageLayoutSubtitle } from './MessageLayout.styled'

function MessageLayout() {
	return (
		<MessageLayoutWrapper>
			<StyledBlueContainer />
			<TitleSubtitleContainer>
				<MessageLayoutTitle>Dogs leave paw prints forever.</MessageLayoutTitle>
				<MessageLayoutSubtitle>
					A dog in heat needs more than shade The more people I meet the more I like my dog.
				</MessageLayoutSubtitle>
			</TitleSubtitleContainer>
			<MessageInput />
		</MessageLayoutWrapper>
	);
}

export default MessageLayout;