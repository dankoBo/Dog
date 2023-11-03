import { 
	PopularPorductsWrapper, 
	TitleSubtitleContainer, 
	PopularProductsTitle, 
	PopularProductsSubTitle,
	PopularProductsBigCardContainer,
	PopularProductsSmallCardContainer,
	PopularProductsDetails
} from './PopularProductsLayout.styled'
import DetailsLink from '../../interface/detailsLink/DetailsLink'
import PopularProductsBigCard from '../../components/popularProductsBigCard/PopularProductsBigCard';
import PopularProductsSmallCard from '../../components/popularProductsSmallcard/PopularProductsSmallCard'
import blueLeash from '../../assets/images/popular_products/Blue_leash.png'
import reflectiveCollar from '../../assets/images/popular_products/Reflective_collar.png'
import brownCollar from '../../assets/images/popular_products/Brown_collar.png'
import blackCollar from '../../assets/images/popular_products/Black_collar.png'
import pinkCollar from '../../assets/images/popular_products/Pink_collar.png'


function PopularProductsLayout() {
	return (
		<PopularPorductsWrapper>
			<TitleSubtitleContainer>
				<PopularProductsTitle>Popular Products</PopularProductsTitle>
				<PopularProductsSubTitle>
					A dog in heat needs more than shade The more people I meet the more I like my dog.Dogs leave paw prints forever on our hearts.
				</PopularProductsSubTitle>
			</TitleSubtitleContainer>
			<PopularProductsBigCardContainer>
				<PopularProductsBigCard image={blueLeash} />
				<PopularProductsBigCard image={reflectiveCollar} />
			</PopularProductsBigCardContainer>
			<PopularProductsSmallCardContainer>
				<PopularProductsSmallCard image={brownCollar} />
				<PopularProductsSmallCard image={blackCollar} />
				<PopularProductsSmallCard image={pinkCollar} />
			</PopularProductsSmallCardContainer>
			<PopularProductsDetails>
				<DetailsLink name="View All Products" />
			</PopularProductsDetails>
		</PopularPorductsWrapper>
	);
}

export default PopularProductsLayout;