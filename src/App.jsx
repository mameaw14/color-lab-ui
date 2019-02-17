import React from 'react'
import { ThemeProvider } from 'styled-components'
import ColorPicker from './components/ColorPicker'
import StyledAlert from './components/Alert'
import Palette from './components/Palette'

class App extends React.Component {
	state = {
		colors: {
			900: '#1f2c6d',
			800: '#253586',
			700: '#3547a4',
			600: '#495dc6',
			500: '#6175de',
			400: '#758ce0',
			300: '#95aeed',
			200: '#d4def8',
			100: '#f0f4fe',
		},
		palette: [
			[
				{ color: '#1f2c6d', colorWeight: 900, colorName: 'Sodalite Blue' },
				{ color: '#253586', colorWeight: 800, colorName: 'Surf The Web' },
				{ color: '#3547a4', colorWeight: 700, colorName: 'Dazzling Blue' },
				{ color: '#495dc6', colorWeight: 600, colorName: 'Amparo Blue' },
				{ color: '#6175de', colorWeight: 500, colorName: 'Ultramarine' },
				{ color: '#758ce0', colorWeight: 400, colorName: 'Cornflower Blue' },
				{ color: '#95aeed', colorWeight: 300, colorName: 'Serenity' },
				{ color: '#d4def8', colorWeight: 200, colorName: 'Halogen Blue' },
				{ color: '#f0f4fe', colorWeight: 100, colorName: 'Brilliant White' },
			],
		],
	}

	setColor = colorName => (color) => {
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
		const { colors, palette } = this.state
		return (
			<>
				<ColorPicker color={colors[900]} callback={this.setColor('900')} />
				<ThemeProvider theme={colors}>
					<StyledAlert />
				</ThemeProvider>
				<Palette shades={palette[0]} />
			</>
		)
	}
}

export default App
