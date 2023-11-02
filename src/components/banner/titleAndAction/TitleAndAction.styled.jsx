import styled from 'styled-components'

const TitleAndActionContainer = styled.div`
	width: 610px;
	height: 340px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

const BannerTitle = styled.h1`
	color: #170C04;
	font-size: 100px;
	font-style: normal;
	font-weight: 700;
`

const ActionsContainer = styled.div`
	width: 240px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export { TitleAndActionContainer, BannerTitle, ActionsContainer }