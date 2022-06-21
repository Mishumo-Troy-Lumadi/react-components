import React, { FC, ReactNode } from 'react';

interface props {
	className?: string;
	children?: ReactNode;
	onClick?: (e:any)=>void;
}

const Column: FC<props> = ({ className, onClick, children }) => {
	return (
		<div className={`flex flex-col ${className}`} {...{ onClick }}>
			{children}
		</div>
	);
};

export default Column;
