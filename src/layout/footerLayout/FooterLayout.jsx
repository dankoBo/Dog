import { FooterLayoutWrapper } from './FooterLayout.styled'
import logo from '../../assets/images/header/Logo.png'
import facebook from '../../assets/icons/facebook.png'
import google from '../../assets/icons/google.png'
import twitter from '../../assets/icons/twitter.png'
import FooterLink from '../../interface/footerLink/FooterLink'

function FooterLayout() {
	return (
		<FooterLayoutWrapper>
			<ul>
				<li>
					<FooterLink name="Product & Policy" />
				</li>
				<li>
					<FooterLink name="Privacy & about" />
				</li>
				<li>
					Contact: <span>alaminhossen.75bd@gmail.com</span>
				</li>
			</ul>
			<div>
				<div>
					<img src={logo} alt="logo" />
					<h4>DOG-PRODUCT</h4>
				</div>
				<div>
					<img src={facebook} alt="facebook" />
					<img src={google} alt="google" />
					<img src={twitter} alt="twitter" />
				</div>
			</div>
			<ul>
				<li>
					<FooterLink name="Dog Care" />
				</li>
				<li>
					<FooterLink name="Privacy & Policy" />
				</li>
				<li>
					<FooterLink name="Popular Product" />
				</li>
			</ul>
		</FooterLayoutWrapper>
	);
}

export default FooterLayout;