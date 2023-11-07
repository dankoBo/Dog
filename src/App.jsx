import { Global, AppWrapper, StyledRectangleImage } from './App.styled'
import rectangle from '../src/assets/images/header/Rectangle.png'
import BannerLayout from './layout/bannerLayout/BannerLayout'
import HeaderLayout from './layout/headerLayout/HeaderLayout'
import BestProductsLayout from './layout/bestProductsLayout/BestProductsLayout'
import PopularProductsLayout from './layout/popularProductsLayout/PopularProductsLayout'
import DogCareLayout from './layout/dogCareLayout/DogCareLayout'
import SubscriptionLayout from './layout/subscriptionLayout/SubscriptionLayout'
import GalleryLayout from './layout/galleryLayout/GalleryLayout'
import TestimonialLayout from './layout/testimonialLayout/TestimonialLayout'
import MessageLayout from './layout/messageLayout/MessageLayout'
import FooterLayout from './layout/footerLayout/FooterLayout'

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
			<GalleryLayout />
			<TestimonialLayout />
			<MessageLayout />
			<FooterLayout />
		</AppWrapper>
	)
}

export default App