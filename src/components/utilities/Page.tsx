import React, { FC, ReactNode } from 'react';
import Layout from './Layout';

interface props {
	className?: string;
	children?: ReactNode;
	as?: 'column' | 'row' | 'grid';
}

const Page: FC<props> = ({ as, className, children }) => {
	return (
		<Layout {...{ as }} className={`w-screen h-screen ${className}`}>
			{children}
		</Layout>
	);
};

export default Page;
