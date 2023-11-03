import styled from 'styled-components'

const SmallCardContainer = styled.div`
	margin-top: 60px;
`

const SmallCardImage = styled.div`
	width: 360px;
	height: 273px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	background-color: #FCF2EB;
`

const SmallCardDescription = styled.div`
	text-align: center;
`

const SmallCardTitle = styled.h2`
	color: #170C04;
	text-align: center;
	font-size: 25px;
	font-style: normal;
	font-weight: 900;
	line-height: normal;
	margin: 13px 0 6px;
`

export { SmallCardContainer, SmallCardImage, SmallCardDescription, SmallCardTitle}