import DetailsLink from '../../interface/detailsLink/DetailsLink'
import { CardContainer, ProductImage, CardTitle, CardSubtitle } from './BestProductCard.styled'

function BestProductCard(props) {
	return (
		<CardContainer>
			<ProductImage>
				<img src={props.image} alt="product image" />
			</ProductImage>
			<CardTitle>Best Quality Products Pen Food</CardTitle>
			<CardSubtitle>
				Dogs leave paw prints forever on our hearts. A dog shade the.
			</CardSubtitle>
			<DetailsLink name="See Details" />
		</CardContainer>
	);
}

export default BestProductCard;