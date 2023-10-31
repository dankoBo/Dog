import { Global, AppWrapper } from './App.styled'
import HeaderLayout from './layout/headerLayout/HeaderLayout'

function App() {
	return (
		<AppWrapper>
			<Global />
			<HeaderLayout />
		</AppWrapper>
	)
}

export default App