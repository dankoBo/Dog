import Logo from '../../components/header/logo/Logo';
import Navigation from '../../components/header/navigation/Navigation';
import { HeaderWrapper } from './HeaderLayout.styled'


function HeaderLayout() {
	return (
		<HeaderWrapper>
			<Logo />
			<Navigation />
		</HeaderWrapper>
	);
}

export default HeaderLayout;