import styled from 'styled-components'

const SubscribeCardContainer = styled.div`
	width: 360px;
	height: 485px;
	margin: 36px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
`

const SubscribeCardTitle = styled.h2`
	width: 360px;
	height: 49px;
	margin: 50px 0 22px;
	flex-shrink: 0;
	color: #170C04;
	text-align: center;
	font-size: 20px;
	font-style: normal;
	font-weight: 900;
	line-height: 28px;
`

const SubscribeCardSubtitle = styled.p`
	width: 359px;
	height: 65px;
	flex-shrink: 0;
	color: #170C04;
	text-align: center;
	font-family: Roboto;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	opacity: 0.6;
`

export { SubscribeCardContainer, SubscribeCardTitle, SubscribeCardSubtitle }