import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'

const Alert = (props) => {
	const { className } = props
	return (
		<div className={className}>
			<div className="icon">
				<FontAwesomeIcon icon={faExclamation} />
			</div>
			<div>
				<div className="title">Our privacy policy has change</div>
				<div className="des">Make sure you know how these changes affect you.</div>
			</div>
		</div>
	)
}

const StyledAlert = styled(Alert)`
	display: flex;
	align-items: center;
	padding: 25px;
	border-radius: 4px;
	background-color: ${props => props.theme.a100};
	border: 0.8px solid ${props => props.theme.a300};
	.icon {
		margin-right: 25px;
		color: ${props => props.theme.a700};
		background-color: white;
		border-radius: 50%;
		border: 3px solid ${props => props.theme.a500};
		box-shadow: 0 0 0 10px ${props => props.theme.a300}
		width: 1.75em;
		height: 1.75em;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.title {
		font-size: 21px;
		font-weight: 600;
		color: ${props => props.theme.a900};
	}
	.des {
		color: ${props => props.theme.a700};
	}
`

export default StyledAlert
