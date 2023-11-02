import { Global, AppWrapper, StyledRectangleImage } from './App.styled'
import BannerLayout from './layout/bannerLayout/BannerLayout'
import HeaderLayout from './layout/headerLayout/HeaderLayout'
import rectangle from '../src/assets/images/header/Rectangle.png'

function App() {
	return (
		<AppWrapper>
			<StyledRectangleImage src={rectangle} />
			<Global />
			<HeaderLayout />
			<BannerLayout />
		</AppWrapper>
	)
}

export default App