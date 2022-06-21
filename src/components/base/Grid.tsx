import React, { FC, ReactNode } from 'react';

interface props {
	className?: string;
	children?: ReactNode;
	onClick?: (e: any) => void;
}

const Grid: FC<props> = ({ className, onClick, children }) => {
	return (
		<div className={`grid ${className}`} {...{ onClick }}>
			{children}
		</div>
	);
};

export default Grid;
