import { Global, AppWrapper, StyledRectangleImage } from './App.styled'
import BannerLayout from './layout/bannerLayout/BannerLayout'
import HeaderLayout from './layout/headerLayout/HeaderLayout'
import BestProductsLayout from './layout/bestProductsLayout/BestProductsLayout'
import PopularProductsLayout from './layout/popularProductsLayout/PopularProductsLayout'

function App() {
	return (
		<AppWrapper>
			<StyledRectangleImage src={rectangle} />
			<Global />
			<HeaderLayout />
			<BannerLayout />
			<BestProductsLayout />
			<PopularProductsLayout />
		</AppWrapper>
	)
}

export default App