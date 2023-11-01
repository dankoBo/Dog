import { ActionContainer, ActionList} from './Action.styled'
import { BsSearch, BsCart } from 'react-icons/bs'
// import { RxHamburgerMenu } from 'react-icons/rx'
import BurgerMenu from '../burgerMenu/BurgerMenu'

function Action() {
	return (
		<ActionContainer>
			<ActionList>
				<li><BsSearch /></li>
				<li><BsCart /></li>
				<li><BurgerMenu /></li>
			</ActionList>
		</ActionContainer>
	);
}

export default Action;