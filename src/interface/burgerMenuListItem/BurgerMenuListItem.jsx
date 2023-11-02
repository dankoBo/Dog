import { ListItem, ListLink } from './BurgerMenuListItem.styled'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../../store/burgerSlice';

function BurgerMenuListItem({ name }) {
	const dispatch = useDispatch();

	return (
			<ListItem>
				<ListLink onClick={() => dispatch(closeMenu())}  href="/">{name}</ListLink>
			</ListItem>
	);
}

export default BurgerMenuListItem;