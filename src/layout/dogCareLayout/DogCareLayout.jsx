import DogCareContent from '../../components/dogCareContent/DogCareContent';
import DogCareImage from '../../components/dogCareImage/DogCareImage';
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