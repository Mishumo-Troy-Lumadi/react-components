import React, { FC, ReactNode } from 'react';

interface props {
	className?: string;
	children?: ReactNode;
	onClick?: (e: any) => void;
}

const Row: FC<props> = ({ className, onClick, children }) => {
	return (
		<div className={`flex flex-row ${className}`} {...{ onClick }}>
			{children}
		</div>
	);
};

export default Row;
