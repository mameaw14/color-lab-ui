import React from 'react'
import styled from 'styled-components'

import ColorBox from './ColorBox'

const PaletteContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	text-align: center;
	& > * {
		width: 4em;
		margin: 0 0.25em;
	}
	.shade {
		width: 4em;
		height: 4em;
	}
	.color-name {
		font-size: 12px;
	}
`
const Palette = (props) => {
	const { shades } = props
	return (
		<PaletteContainer>
			{shades.map(shade => (
				<div>
					<ColorBox bgColor={shade.color} className="shade" />
					<div className="color-code">{shade.colorWeight}</div>
					<div className="color-name">{shade.colorName}</div>
				</div>
			))}
		</PaletteContainer>
	)
}

export default Palette
