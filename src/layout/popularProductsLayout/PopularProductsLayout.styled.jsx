import styled from 'styled-components'

const PopularPorductsWrapper = styled.div`
	width: 1140px;
	height: 1150px;
	margin: 110px auto 0;
	border: 1px solid red;
`

const TitleSubtitleContainer = styled.div`
	width: 505px;
	margin: 0 auto;
`

const PopularProductsTitle = styled.h4`
	color: #170C04;
	text-align: center;
	font-size: 32.25px;
	font-style: normal;
	font-weight: 900;
	line-height: normal;
`

const PopularProductsSubTitle = styled.p`
	margin-top: 20px;
	color: #170C04;
	text-align: center;
	font-family: Roboto;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 24px;
`

const PopularProductsBigCardContainer = styled.div`
	display: flex;
	justify-content: space-between;
`

const PopularProductsSmallCardContainer = styled.div`
	display: flex;
	justify-content: space-between;
`
const PopularProductsDetails = styled.div`
	width: fit-content;
	margin: 60px auto;
`

export { 
	PopularPorductsWrapper, 
	TitleSubtitleContainer, 
	PopularProductsTitle, 
	PopularProductsSubTitle,
	PopularProductsBigCardContainer,
	PopularProductsSmallCardContainer,
	PopularProductsDetails
}