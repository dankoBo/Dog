import styled from 'styled-components'

const FooterLayoutWrapper = styled.div`
	width: 1500px;
	height: 300px;
	margin-top: 110px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: #140A03;
`

const FooterContentContainer = styled.div`
	width: 1140px;
	height: 130px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: end;
`

const LogoContainer = styled.div`
	width: fit-content;
	text-align: center;
	margin: 0 auto;
`

const FooterTitle = styled.h4`
	color: #FFF;
	font-family: Roboto;
	font-size: 26px;
	font-style: normal;
	font-weight: 500;
`

export { FooterLayoutWrapper, FooterContentContainer, LogoContainer, FooterTitle }