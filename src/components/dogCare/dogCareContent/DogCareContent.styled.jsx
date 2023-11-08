import styled from 'styled-components'

const DogCareContentContainer = styled.div`
	width: 490px;
`
const DogCareChapter = styled.h4`
	color: #E27B3A;
	font-family: Roboto;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	letter-spacing: 3.2px;
	text-transform: uppercase;
	opacity: 0.8;
`

const DogCareTitle = styled.h2`
	width: 450px;
	margin: 5px 0 20px;
	color: #170C04;
	font-family: Poppins;
	font-size: 32.25px;
	font-style: normal;
	font-weight: 900;
	line-height: 45.15px;
`

const DogCareSubtitle = styled.p`
	color: #170C04;
	font-family: Roboto;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 24px;
	opacity: 0.6;
`

const DogCareActions = styled.div`
	width: 300px;
	margin-top: 40px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export { DogCareContentContainer, DogCareChapter, DogCareTitle, DogCareSubtitle, DogCareActions }