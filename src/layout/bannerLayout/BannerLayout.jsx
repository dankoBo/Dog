import TitleAndAction from '../../components/banner/titleAndAction/TitleAndAction';
import BannerDogImage from '../../interface/bannerDogImage/BannerDogImage';
import BannerWrapper from './BannerLayout.styled'

function BannerLayout() {
	return (
		<BannerWrapper>
			<TitleAndAction />
			<BannerDogImage />
		</BannerWrapper>
	);
}

export default BannerLayout;