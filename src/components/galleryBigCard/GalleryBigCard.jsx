import GalleryBigCardWrapper from './GalleryBigCard.styled'
import pinappleCollar from '../../assets/images/gallery/Pinapple_collar.png'

function GalleryBigCard() {
	return (
		<GalleryBigCardWrapper>
			<img src={pinappleCollar} alt="collar" />
		</GalleryBigCardWrapper>
	);
}

export default GalleryBigCard;