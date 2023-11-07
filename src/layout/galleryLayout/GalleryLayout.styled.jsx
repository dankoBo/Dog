import styled from 'styled-components'

const GalleryLayoutWrapper = styled.div`
	width: 1140px;
	height: 520px;
	margin: 110px auto 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const GalleryTitile = styled.h2`
	width: 554px;
	color: #170C04;
	text-align: center;
	font-size: 32.25px;
	font-style: normal;
	font-weight: 900;
	line-height: 45.15px;
`

const GallerySubtitle = styled.p`
	width: 554px;
	height: 65px;
	color: #170C04;
	text-align: center;
	font-family: Roboto;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 24px;
`

const GallerySmallCardsContainer = styled.div`
	width: 554px;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`

export { GalleryLayoutWrapper, GalleryTitile, GallerySubtitle, GallerySmallCardsContainer }