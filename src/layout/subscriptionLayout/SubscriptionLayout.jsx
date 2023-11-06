import SubscribeDogCard from '../../components/subscribeDogCard/SubscribeDogCard';
import Button from '../../interface/button/Button';
import { SubscriptionWrapper, SubscriptionTitle, SubscriptionCardContainer, SubscriptionButton } from './SubscriptionLayout.styled'
import corgi from '../../assets/images/subscribtion/Corgi.png'
import bigl from '../../assets/images/subscribtion/Bigl.png'
import retriever from '../../assets/images/subscribtion/Golden_retriever.png'

function SubscriptionLayout() {
	return (
		<SubscriptionWrapper>
			<SubscriptionTitle>How the Monthly Subscription Work?</SubscriptionTitle>
			<SubscriptionCardContainer>
				<SubscribeDogCard image={corgi} />
				<SubscribeDogCard image={bigl} />
				<SubscribeDogCard image={retriever} />
			</SubscriptionCardContainer>
			<SubscriptionButton>
				<Button name="Subscribe" />
			</SubscriptionButton>
		</SubscriptionWrapper>
	);
}

export default SubscriptionLayout;