import styled from 'styled-components'

const CarouselItemContainer = styled.div`
	padding: 30px;
	position: relative;
`

const UserImage = styled.div`
	height: 30px;
	width: 30px;
	margin: 0 auto;
`
const UserTestimonial = styled.p`
	margin: 20px 0;
	color: #170C04;
	text-align: center;
	font-family: Roboto;
	font-size: 20px;
	font-style: normal;
	font-weight: 400;
	line-height: 24px;
	opacity: 0.7;
`

const UserName = styled.h4`
	color: #170C04;
	text-align: center;
	font-size: 18px;
	font-style: normal;
	font-weight: 900;
	line-height: 24px;
`

const UserPosition = styled.p`
	color: #170C04;
	text-align: center;
	font-family: Roboto;
	font-size: 12px;
	font-style: normal;
	font-weight: 400;
	line-height: 24px;
	opacity: 0.6;
`

export { CarouselItemContainer, UserImage, UserTestimonial, UserName, UserPosition }