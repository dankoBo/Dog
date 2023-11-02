import styled, { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	ul {
		list-style-type: none;
	}
`

const StyledRectangleImage = styled.img`
	position: absolute;
	right: 0;
	top: 0;
	z-index: -1;
`

const AppWrapper = styled.div`
	position: relative;
	width: 1500px;
	height: 100vh;
	margin: 0 auto;
	border: 1px solid blue;
`

export { Global, AppWrapper, StyledRectangleImage }