import DetailsLink from '../../interface/detailsLink/DetailsLink'
import { BigCardContainer, BigCardImage, BigCardDescription, BigCardTitle} from './PopularProductsBigCard.styled'

function PopularProductsBigCard(props) {
	return (
		<BigCardContainer>
			<BigCardImage>
				<img src={props.image} alt="product" />
			</BigCardImage>
			<BigCardDescription>
				<BigCardTitle>Mauris blandit aliquet</BigCardTitle>
				<DetailsLink name="View Details" />
			</BigCardDescription>
		</BigCardContainer>
	);
}

export default PopularProductsBigCard;