import React from 'react';
import classes from './styles.module.scss';
import Tooltip from '@mui/material/Tooltip';

interface Props {
	tooltipTitle: string;
	tooltipPosition?:
		| 'bottom-end'
		| 'bottom-start'
		| 'bottom'
		| 'left-end'
		| 'left-start'
		| 'left'
		| 'right-end'
		| 'right-start'
		| 'right'
		| 'top-end'
		| 'top-start'
		| 'top';
	actionType?: 'success' | 'danger';
	onClick?: () => void;
	disabled?: boolean;
}

const DrawerActionButton: React.FC<Props> = (props) => {
	const actionButtonTypeClass = props.actionType
		? props.actionType === 'success'
			? classes.successActionButton
			: classes.dangerActionButton
		: undefined;

	return (
		<>
			<Tooltip
				title={props.tooltipTitle}
				placement={props.tooltipPosition ? props.tooltipPosition : 'bottom'}
				arrow
			>
				<button
					className={`${classes.drawerActionButton} ${
						props.actionType && actionButtonTypeClass
					}`}
					onClick={props.onClick}
					disabled={props.disabled ? true : false}
				></button>
			</Tooltip>
		</>
	);
};

export default DrawerActionButton;
