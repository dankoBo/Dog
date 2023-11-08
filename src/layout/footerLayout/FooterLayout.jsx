import { FooterLayoutWrapper, FooterContentContainer, LogoContainer, FooterTitle } from './FooterLayout.styled'
import LogoImage from '../../interface/logoImage/LogoImage'
import SocialLinks from '../../components/footer/socialLinks/SocialLinks'
import PolicyLinks from '../../components/footer/policyLinks/PolicyLinks';
import ChapterLinks from '../../components/footer/chapterLinks/ChapterLinks';

function FooterLayout() {
	return (
		<FooterLayoutWrapper>
			<LogoContainer>
				<LogoImage />
				<FooterTitle>DOG-PRODUCT</FooterTitle>
			</LogoContainer>
			<FooterContentContainer>
				<PolicyLinks />
				<SocialLinks />
				<ChapterLinks />
			</FooterContentContainer>
		</FooterLayoutWrapper>
	);
}

export default FooterLayout;