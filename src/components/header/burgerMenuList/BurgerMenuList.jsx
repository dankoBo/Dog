import BurgerMenuListItem from '../../../interface/burgerMenuListItem/BurgerMenuListItem'
import ListContainer from './BurgerMenuList.styled'

function BurgerMenuList() {
	return (
		<ListContainer>
			<BurgerMenuListItem name="Item 1"/>
			<BurgerMenuListItem name="Item 2"/>
			<BurgerMenuListItem name="Item 3"/>
			<BurgerMenuListItem name="Item 4"/>
		</ListContainer>
	);
}

export default BurgerMenuList;