import GallerySmallCard from '../../components/gallerySmallCard/GallerySmallCard';
import { GalleryLayoutWrapper, GalleryTitile, GallerySubtitle, GallerySmallCardsContainer } from './GalleryLayout.styled'
import redCollar from '../../assets/images/gallery/Red_collar.png'
import blueCollar from '../../assets/images/gallery/Blue_collar.png'
import flowerCollar from '../../assets/images/gallery/Flower_collar.png'
import pinkCollar from '../../assets/images/gallery/Pink_collar.png'
import GalleryBigCard from '../../components/galleryBigCard/GalleryBigCard';

function GalleryLayout() {
	return (
		<GalleryLayoutWrapper>
			<div>
				<GalleryTitile>Popular Products Gallery</GalleryTitile>
				<GallerySubtitle>
					A dog in heat needs more than shade The more people I meet the more I like my dog.Dogs leave paw prints forever on our hearts.
				</GallerySubtitle>
				<GallerySmallCardsContainer>
					<GallerySmallCard image={redCollar} color="#900a0860" />
					<GallerySmallCard image={blueCollar} color="#243e7e61" />
					<GallerySmallCard image={flowerCollar} color="#80012553" />
					<GallerySmallCard image={pinkCollar} color="#c48caeb3" />
				</GallerySmallCardsContainer>
			</div>
			<GalleryBigCard />
		</GalleryLayoutWrapper>
	);
}

export default GalleryLayout;