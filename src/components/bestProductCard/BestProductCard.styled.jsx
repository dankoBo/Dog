import styled from 'styled-components'

const CardContainer = styled.div`
	position: relative;
	width: 360px;
	height: 240px;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	box-shadow: -1px 3px 18px 6px rgba(0,0,0,0.25);
	-webkit-box-shadow: -1px 3px 18px 6px rgba(0,0,0,0.25);
	-moz-box-shadow: -1px 3px 18px 6px rgba(0,0,0,0.25);

	&:hover {
		border: 3px solid rgba(0, 0, 0, 0.10);
	}
`

const ProductImage = styled.div`
	position: absolute;
	top: -20px;
	left: 50%;
`

const CardTitle = styled.h2`
	width: 310px;
	margin-top: 40px;
	color: #170C04;
	text-align: center;
	font-size: 25px;
	font-style: normal;
	font-weight: 900;
	line-height: normal;
`

const CardSubtitle = styled.p`
	width: 298px;
	color: #170C04;
	text-align: center;
	font-family: Roboto;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 24px;
`

export { CardContainer, ProductImage, CardTitle, CardSubtitle }