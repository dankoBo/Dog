import styled from 'styled-components'

const MessageLayoutWrapper = styled.div`
	width: 1140px;
	height: 346px;
	margin: 110px auto 0;
	position: relative;
	display: flex;
	justify-content: space-around;
	align-items: center;
	z-index: 1;
`

const StyledBlueContainer = styled.div`
	width: 1140px;
	height: 346px;
	position: absolute;
	top: 0;
	right: 0;
	background-color: #2E96FF;
	border-radius: 10px;
	transform: skewY(-2.5deg);
	z-index: -1;
`

const TitleSubtitleContainer = styled.div`
	width: 400px;
	height: 140px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

const MessageLayoutTitle = styled.h2`
	color: #FFF;
	font-family: Poppins;
	font-size: 31.25px;
	font-style: normal;
	font-weight: 900;
	line-height: 40.6px;
`

const MessageLayoutSubtitle = styled.p`
	color: #FFF;
	font-family: Roboto;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 24px;
	opacity: 0.7;
`

export { MessageLayoutWrapper, StyledBlueContainer, TitleSubtitleContainer, MessageLayoutTitle, MessageLayoutSubtitle }