import { TitleAndActionContainer, BannerTitle, ActionsContainer } from './TitleAndAction.styled'
import Button from '../../../interface/button/Button'
import DetailsLink from '../../../interface/detailsLink/DetailsLink';
import rectangle from '../../../assets/images/header/Rectangle.png'

function TitleAndAction() {
	return ( 
			<TitleAndActionContainer>
				<BannerTitle>Dog is my Copilot</BannerTitle>
				<ActionsContainer>
					<Button name="Buy Now" />
					<DetailsLink name="See Details" />
				</ActionsContainer>
			</TitleAndActionContainer>
	);
}

export default TitleAndAction;