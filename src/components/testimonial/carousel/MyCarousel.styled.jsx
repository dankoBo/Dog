import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel';


const StyledCarousel = styled(Carousel)`
	width: 555px;
	height: 272px;
	border-radius: 10px;
	box-shadow: -1px 3px 18px 6px rgba(0,0,0,0.25);
	-webkit-box-shadow: -1px 3px 18px 6px rgba(0,0,0,0.25);
	-moz-box-shadow: -1px 3px 18px 6px rgba(0,0,0,0.25);
`

const CarouselTitle = styled.h2`
	color: #170C04;
	text-align: center;
	font-size: 32.25px;
	font-style: normal;
	font-weight: 900;
`

export { CarouselTitle, StyledCarousel }