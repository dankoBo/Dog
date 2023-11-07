import StyledLink from './FooterLink.styled'

function FooterLink(props) {
	return <StyledLink href="#">{props.name}</StyledLink>;
}

export default FooterLink;