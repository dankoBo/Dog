import styled from 'styled-components'

const SubscriptionWrapper = styled.div`
	width: 1140px;
	height: 710px;
	margin: 110px auto 0;
	border: 1px solid red;
`

const SubscriptionTitle = styled.h2`
	width: 400px;
	margin: 0 auto;
	flex-shrink: 0;
	color: #170C04;
	text-align: center;
	font-size: 32.25px;
	font-style: normal;
	font-weight: 900;
	line-height: 45.15px;
`

const SubscriptionCardContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const SubscriptionButton = styled.div`
	width: fit-content;
	margin: 0 auto;
`

export { SubscriptionWrapper, SubscriptionTitle, SubscriptionCardContainer, SubscriptionButton }