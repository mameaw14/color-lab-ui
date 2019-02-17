import React from 'react'
import { ThemeProvider } from 'styled-components'
import ColorPicker from './components/ColorPicker'
import StyledAlert from './components/Alert'

class App extends React.Component {
	state = {
		colors: {
			a900: '#1f2c6d',
			a800: '#253586',
			a700: '#3547a4',
			a600: '#495dc6',
			a500: '#6175de',
			a400: '#758ce0',
			a300: '#95aeed',
			a200: '#d4def8',
			a100: '#f0f4fe',
		},
	}

	setColor = colorName => (color) => {
		console.log(color)
		const { colors } = this.state
		const newColor = color
		this.setState({
			colors: {
				...colors,
				[colorName]: newColor,
			},
		})
	}

	render() {
		const { colors } = this.state
		return (
			<>
				<ColorPicker color={colors.a900} callback={this.setColor('a900')} />
				<ThemeProvider theme={colors}>
					<StyledAlert />
				</ThemeProvider>
			</>
		)
	}
}

export default App
