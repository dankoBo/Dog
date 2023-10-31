import StyledNavLink from './NavLink.styled'

function NavLink(props) {
	return <StyledNavLink href="#">{props.name}</StyledNavLink>
}

export default NavLink;