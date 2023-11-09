import { CarouselItemContainer, UserImage, UserTestimonial, UserName, UserPosition } from './CarouselItem.styled'
import profileImage from '../../../assets/images/testimonial/Profile_image.png'

function CarouselItem() {
	return (
		<CarouselItemContainer>
			<UserImage>
				<img src={profileImage} alt="profile image" />
			</UserImage>
			<UserTestimonial>
				A dog in heat needs more than shade The more people paw prints forever on our hearts. I meet the more I like my dog.Dogs leave paw prints forever on our hearts.
			</UserTestimonial>
			<UserName>Margaret Street</UserName>
			<UserPosition>UI&UX Designer</UserPosition>
		</CarouselItemContainer>
	);
}

export default CarouselItem;