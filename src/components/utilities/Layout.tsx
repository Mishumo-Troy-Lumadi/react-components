import React, { FC, ReactNode } from 'react';
import { Column, Grid, Row } from '@library/components/base';

interface props {
    className?: string;
	children?: ReactNode;
	onClick?: (e: any) => void;
	as?: 'column' | 'row' | 'grid';
}

const Layout: FC<props> = ({ as, className, onClick, children }) => {
	switch (as?.toLowerCase()) {
		case 'column':
			return <Column {...{ className, onClick }}>{children}</Column>;
		case 'grid':
			return <Grid {...{ className, onClick }}>{children}</Grid>;
		case 'row':
			return <Row {...{ className, onClick }}>{children}</Row>;
	}

	return <div {...{ className, onClick }}>{children}</div>;
};

export default Layout;
