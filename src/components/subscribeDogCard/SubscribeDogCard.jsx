import { SubscribeCardContainer, SubscribeCardTitle, SubscribeCardSubtitle } from './SubscribeDogCard.styled'
import DetailsLink from '../../interface/detailsLink/DetailsLink'

function SubscribeDogCard(props) {
	return (
		<SubscribeCardContainer>
			<img src={props.image} alt="dog" />
			<SubscribeCardTitle>Dogs leave paw prints forever on our hearts</SubscribeCardTitle>
			<SubscribeCardSubtitle>
				Dogs never bite me. Just humans.Happiness is a warm puppy. My little dog a heartbeat at my feet.Necessity has the face of a dog.
			</SubscribeCardSubtitle>
			<DetailsLink name="View Details" />
		</SubscribeCardContainer>
	);
}

export default SubscribeDogCard;