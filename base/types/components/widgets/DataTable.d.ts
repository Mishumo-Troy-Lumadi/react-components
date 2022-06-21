import { FC } from 'react';
interface props {
    data: any[];
    limit?: number;
    className?: string;
    onClick?: (e: any) => void;
}
declare const DataTable: FC<props>;
export default DataTable;
