import GallerySmallCardContainer from './GallerySmallCard.styled'

function GallerySmallCard(props) {
	return (
		<GallerySmallCardContainer color={props.color}>
			<img src={props.image} alt="collar" />
		</GallerySmallCardContainer>
	);
}

export default GallerySmallCard;