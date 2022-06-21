import { FC, ReactNode } from 'react';
interface props {
    className?: string;
    children?: ReactNode;
    as?: 'column' | 'row' | 'grid';
}
declare const Page: FC<props>;
export default Page;
