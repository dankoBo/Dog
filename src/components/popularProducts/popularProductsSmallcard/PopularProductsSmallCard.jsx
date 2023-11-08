import { SmallCardContainer, SmallCardImage, SmallCardDescription, SmallCardTitle } from './PopularProductsSmallCard.styled'
import DetailsLink from '../../../interface/detailsLink/DetailsLink'

function PopularProductsSmallCard(props) {
	return (
		<SmallCardContainer>
			<SmallCardImage>
				<img src={props.image} alt="product" />
			</SmallCardImage>
			<SmallCardDescription>
				<SmallCardTitle>Mauris blandit aliquet</SmallCardTitle>
				<DetailsLink name="View Details" />
			</SmallCardDescription>
		</SmallCardContainer>
	);
}

export default PopularProductsSmallCard;