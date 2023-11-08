import DogCareContent from '../../components/dogCare/dogCareContent/DogCareContent';
import DogCareImage from '../../components/dogCare/dogCareImage/DogCareImage';
import DogCareWrapper from './DogCareLayout.styled'

function DogCareLayout() {
	return (
		<DogCareWrapper>
			<DogCareImage />
			<DogCareContent />
		</DogCareWrapper>
	);
}

export default DogCareLayout;