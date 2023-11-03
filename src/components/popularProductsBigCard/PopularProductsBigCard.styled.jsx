import styled from 'styled-components'

const BigCardContainer = styled.div`
	margin-top: 50px;
`

const BigCardImage = styled.div`
	width: 555px;
	height: 420px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	background-color: #FCF2EB;
`

const BigCardDescription = styled.div`
	text-align: center;
`

const BigCardTitle = styled.h2`
	color: #170C04;
	text-align: center;
	font-size: 25px;
	font-style: normal;
	font-weight: 900;
	line-height: normal;
	margin: 25px 0 10px;
`

export { BigCardContainer, BigCardImage, BigCardDescription, BigCardTitle}