import { CustomPicker } from 'react-color'
import React from 'react'
import styled from 'styled-components'

import ColorBox from './ColorBox'

const convertHSL = hsl => `hsl(${hsl.h}, ${hsl.s * 100}%, ${hsl.l * 100}%)`
const sum = (a, b) => {
	const extra = (0.3 - (Math.abs(a - 0.5) ** 2)) / 0.3
	const result = a + extra * b
	if (result > 1) return 1
	if (result < 0) return 0
	return result
}
const rotateHue = (hue, diff) => (hue + diff) % 360
const StyledColorBox = styled(ColorBox)`
	grid-area: ${props => props.area};
`
const ColorPickerContainer = styled.div`
	display: grid;
	grid-template-columns: 1.5em 4em 4em 4em 1.5em;
	grid-template-rows: 4em 4em 4em;
	grid-gap: 0.5em;
	grid-template-areas:
		"rotate-left dark-rich rich light-rich rotate-right"
		"rotate-left dark original light rotate-right"
		"rotate-left dark-pastel pastel light-pastel rotate-right"
`
const ColorPicker = (props) => {
	const c = 0.04
	const { hsl, callback } = props
	const { h, s, l } = hsl
	const colors = [
		[{ h: rotateHue(h, -1), s, l }, 'rotate-left'],
		[{ h, s: sum(s, c), l: sum(l, -c) }, 'dark-rich'],
		[{ h, s: sum(s, c), l }, 'rich'],
		[{ h, s: sum(s, c), l: sum(l, c) }, 'light-rich'],
		[{ h, s, l: sum(l, -c) }, 'dark'],
		[{ h, s, l }, 'original'],
		[{ h, s, l: sum(l, c) }, 'light'],
		[{ h, s: sum(s, -c), l: sum(l, -c) }, 'dark-pastel'],
		[{ h, s: sum(s, -c), l }, 'pastel'],
		[{ h, s: sum(s, -c), l: sum(l, c) }, 'light-pastel'],
		[{ h: rotateHue(h, 1), s, l }, 'rotate-right'],
	]
	return (
		<ColorPickerContainer>
			{colors.map(([color, area]) => (
				<StyledColorBox
					onClick={() => {
						const scopedColor = color
						callback(convertHSL(scopedColor))
					}}
					bgColor={convertHSL(color)}
					area={area}
				/>))}
		</ColorPickerContainer>
	)
}

export default CustomPicker(ColorPicker)
