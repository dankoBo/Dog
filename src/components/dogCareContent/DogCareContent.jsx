import Button from '../../interface/button/Button'
import DetailsLink from '../../interface/detailsLink/DetailsLink'
import { DogCareContentContainer, DogCareChapter, DogCareTitle, DogCareSubtitle, DogCareActions } from './DogCareContent.styled'

function DogCareContent() {
	return (
		<DogCareContentContainer>
			<DogCareChapter>DOG CARE</DogCareChapter>
			<DogCareTitle>Start your adoption journey with us</DogCareTitle>
			<DogCareSubtitle>
				A dog in heat needs more than shade The more people I meet the more I like my dog.The more people I meet the more I like my Dogs leave paw prints forever on our hearts.
			</DogCareSubtitle>
			<DogCareActions>
				<Button name="Appointment Now" />
				<DetailsLink name="See Details" />
			</DogCareActions>
		</DogCareContentContainer>
	);
}

export default DogCareContent;