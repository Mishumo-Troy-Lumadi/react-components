import { FC, ReactNode } from 'react';
interface props {
    data: any[];
    onClick?: (e: any) => void;
    className?: string;
    children?: ReactNode;
    indexed?: boolean;
}
declare const Table: FC<props>;
export default Table;
