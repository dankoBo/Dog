import LogoImage from '../../../interface/logoImage/LogoImage';
import { LogoContainer, LogoText } from './Logo.styled'

function Logo() {
	return (
		<LogoContainer>
			<LogoImage />
			<LogoText>DOG</LogoText>
		</LogoContainer>
	);
}

export default Logo;