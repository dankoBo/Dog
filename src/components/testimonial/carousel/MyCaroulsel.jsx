import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { CarouselTitle, StyledCarousel } from './MyCarousel.styled';
import CarouselArrow from '../../../interface/carouselArrow/CarouselArrow';
import { BsArrowLeftSquare, BsArrowRightSquare } from 'react-icons/bs'
import CarouselItem from '../carouselItem/CarouselItem';

const MyCarousel = () => {
	return (
		<>
			<CarouselTitle>Products Testemonial</CarouselTitle>
			<StyledCarousel
				showThumbs={false}
				showStatus={false}
				showIndicators={false}
				renderArrowPrev={(onClickHandler, hasPrev) =>
					hasPrev && (
						<CarouselArrow direction="left" onClick={onClickHandler}><BsArrowLeftSquare /></CarouselArrow>
					)
				}
				renderArrowNext={(onClickHandler, hasNext) =>
					hasNext && (
						<CarouselArrow direction="right" onClick={onClickHandler}><BsArrowRightSquare /></CarouselArrow>
					)
				}
			>
				<CarouselItem />
				<CarouselItem />
			</StyledCarousel>
		</>
	);
};

export default MyCarousel;