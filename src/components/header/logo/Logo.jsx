import headerLogo from '../../../assets/images/header/Logo.png'
import { LogoContainer, LogoText } from './Logo.styled'

function Logo() {
	return (
		<LogoContainer>
			<img src={headerLogo} alt="header logo" />
			<LogoText>DOG</LogoText>
		</LogoContainer>
	);
}

export default Logo;