import React from 'react'
import styled from 'styled-components'

const Alert = (props) => {
	const { className } = props
	return (
		<div className={className}>
			<div className="title">Out privacy policy has change</div>
			<div className="des">Make sure you know how these changes affect you.</div>
		</div>
	)
}

const StyledAlert = styled(Alert)`
	width: max-content;
	padding: 25px;
	border-radius: 4px;
	background-color: #ddd;
	border: 0.8px solid #333;
	.title {
		font-size: 21px;
		font-weight: 600;
	}
	.des {
		color: #888;
	}
`

export default StyledAlert
