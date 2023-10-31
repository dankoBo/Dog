import NavigationContainer from './Navigation.styled'
import NavLink from '../../../interface/navLink/NavLink'

function Navigation() {
	return (
		<NavigationContainer>
			<NavLink name="Products" />
			<NavLink name="Dog Care" />
			<NavLink name="About" />
			<NavLink name="Popular" />
		</NavigationContainer>
	);
}

export default Navigation;