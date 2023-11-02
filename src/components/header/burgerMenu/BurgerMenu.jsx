import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import BurgerMenuList from '../burgerMenuList/BurgerMenuList'
import { BurgerMenuContainer, BurgerMenuIcon} from './BurgerMenu.styled'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu, closeMenu } from '../../../store/burgerSlice';

function BurgerMenu() {
	const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.burger.isOpen);
	
	return (
		<BurgerMenuContainer>
			<BurgerMenuIcon>
				{
					isOpen ? <RxCross1 onClick={() => dispatch(toggleMenu())} /> : <RxHamburgerMenu onClick={() => dispatch(toggleMenu())} />
				}
			</BurgerMenuIcon>
			{
				isOpen ? <BurgerMenuList closeMenu={closeMenu} /> : ''
			}
		</BurgerMenuContainer>
	)
}

export default BurgerMenu;