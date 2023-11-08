import SocialContainer from './SocialLinks.styled'
import facebook from '../../../assets/icons/facebook.png'
import google from '../../../assets/icons/google.png'
import twitter from '../../../assets/icons/twitter.png'

function SocialLinks() {
	return (
		<SocialContainer>
			<img src={facebook} alt="facebook" />
			<img src={google} alt="google" />
			<img src={twitter} alt="twitter" />
		</SocialContainer>
	);
}

export default SocialLinks;