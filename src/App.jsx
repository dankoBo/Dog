import { Global, AppWrapper, StyledRectangleImage } from './App.styled'
import rectangle from '../src/assets/images/header/Rectangle.png'
import BannerLayout from './layout/bannerLayout/BannerLayout'
import HeaderLayout from './layout/headerLayout/HeaderLayout'
import BestProductsLayout from './layout/bestProductsLayout/BestProductsLayout'
import PopularProductsLayout from './layout/popularProductsLayout/PopularProductsLayout'
import DogCareLayout from './layout/dogCareLayout/DogCareLayout'
import SubscriptionLayout from './layout/subscriptionLayout/SubscriptionLayout'

function App() {
	return (
		<AppWrapper>
			<StyledRectangleImage src={rectangle} />
			<Global />
			<HeaderLayout />
			<BannerLayout />
			<BestProductsLayout />
			<PopularProductsLayout />
			<DogCareLayout />
			<SubscriptionLayout />
		</AppWrapper>
	)
}

export default App