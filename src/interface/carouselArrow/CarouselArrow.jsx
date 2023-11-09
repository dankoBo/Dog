import StyledButton from './CarouselArrow.styled'

function CarouselArrow(props) {
	return <StyledButton direction={props.direction} onClick={props.onClick}>{props.children}</StyledButton>;
}

export default CarouselArrow;