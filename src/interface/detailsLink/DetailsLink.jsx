import StyledLink from './DetailsLink.styled'

function DetailsLink(props) {
	return <StyledLink href="#">{props.name}</StyledLink>;
}

export default DetailsLink;