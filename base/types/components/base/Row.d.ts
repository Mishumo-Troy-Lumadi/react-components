import { FC, ReactNode } from 'react';
interface props {
    className?: string;
    children?: ReactNode;
    onClick?: (e: any) => void;
}
declare const Row: FC<props>;
export default Row;
