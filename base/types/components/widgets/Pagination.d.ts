import { FC } from 'react';
interface props {
    page: number;
    length: number;
    start: number;
    end: number;
    pages: number;
    className?: string;
    onChange?: (e: number) => void;
}
declare const Pagination: FC<props>;
export default Pagination;
