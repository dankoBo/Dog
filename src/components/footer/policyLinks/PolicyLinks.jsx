import { PolicyContainer, PolicyItem, StyledEmail } from './PolicyLinks.styled'
import FooterLink from '../../../interface/footerLink/FooterLink'

function PolicyLinks() {
	return (
		<PolicyContainer>
			<PolicyItem>
				<FooterLink name="Product & Policy" />
			</PolicyItem>
			<PolicyItem>
				<FooterLink name="Privacy & about" />
			</PolicyItem>
			<PolicyItem>
				Contact: <StyledEmail>alaminhossen.75bd@gmail.com</StyledEmail>
			</PolicyItem>
		</PolicyContainer>
	);
}

export default PolicyLinks;