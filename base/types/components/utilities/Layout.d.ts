import { FC, ReactNode } from 'react';
interface props {
    className?: string;
    children?: ReactNode;
    onClick?: (e: any) => void;
    as?: 'column' | 'row' | 'grid';
}
declare const Layout: FC<props>;
export default Layout;
