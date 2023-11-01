import { useState } from 'react';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';

function BurgerMenu() {
	const [isOpen, setIsOpen] = useState(false);

	function closeMenu() {
		setIsOpen(false)
	}
	function toggleMenu() {
		setIsOpen(!isOpen)
	}
	console.log(isOpen);
	return (
		<div>
			<div>
				<RxHamburgerMenu onClick={toggleMenu} />
			</div>
			<ul>
				<li>
					<a onClick={closeMenu} href="/">Item</a>
				</li>
				<li>
					<a onClick={closeMenu} href="/products">Item</a>
				</li>
				<li>
					<a onClick={closeMenu} href="/info">Item</a>
				</li>
				<li>
					<a onClick={closeMenu} href="/about">Item</a>
				</li>
			</ul>
		</div>
	)
}

export default BurgerMenu;