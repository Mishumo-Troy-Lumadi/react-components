import { FC, ReactNode } from 'react';
interface props {
    className?: string;
    children?: ReactNode;
    onClick?: (e: any) => void;
}
declare const Column: FC<props>;
export default Column;
