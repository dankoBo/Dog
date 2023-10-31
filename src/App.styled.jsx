import styled, { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
`

const AppWrapper = styled.div`
	width: 1500px;
	height: 100vh;
	margin: 0 auto;
	border: 1px solid blue;
`

export { Global, AppWrapper }