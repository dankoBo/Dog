import styled from 'styled-components'

const GallerySmallCardContainer = styled.div`
	width: 262px;
	height: 170px;
	margin-top: 30px;
	border-radius: 5px;
	background-color: ${props => props.color};
	display: flex;
	justify-content: center;
	align-items: center;
`

export default GallerySmallCardContainer