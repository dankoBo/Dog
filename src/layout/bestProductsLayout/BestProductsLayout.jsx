import BestProductsWrapper from './BestProductsLayout.style'
import BestProductCard from '../../components/bestProductCard/BestProductCard'
import whiteBowl from '../../assets/images/best_products/White_bowl.png'

function BestProductsLayout() {
	return (
		<BestProductsWrapper>
			<BestProductCard image={whiteBowl} />
			<BestProductCard image={whiteBowl} />
			<BestProductCard image={whiteBowl} />
		</BestProductsWrapper>
	);
}

export default BestProductsLayout;