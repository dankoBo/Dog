import { ChapterContainer, ChapterItem } from './ChapterLinks.styled'
import FooterLink from '../../../interface/footerLink/FooterLink'

function ChapterLinks() {
	return (
		<ChapterContainer>
			<ChapterItem>
				<FooterLink name="Testemonial" />
			</ChapterItem>
			<ChapterItem>
				<FooterLink name="Gallery" />
			</ChapterItem>
			<ChapterItem>
				<FooterLink name="Popular Product" />
			</ChapterItem>
		</ChapterContainer>
	);
}

export default ChapterLinks;