import styled from 'styled-components'

const ColorBox = styled.div.attrs(props => ({
	style: {
		'background-color': props.bgColor,
	},
}))`
	width: 100%;
	height: 100%;
	border-radius: 4px;
	box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.2);
`

export default ColorBox
