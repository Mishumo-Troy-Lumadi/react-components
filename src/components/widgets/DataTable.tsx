import React, { FC, useState } from 'react';
import { Table } from '@library/components/utilities';
import Pagination from './Pagination';

interface props {
	data: any[];
	limit?: number;
	className?: string;
	onClick?: (e: any) => void;
}

const DataTable: FC<props> = ({ data, limit = 0 }) => {
	const [page, setPage] = useState(1);

	const length = data.length;
	const pages = limit != 0 ? Math.ceil(length / limit) : 0;
	const start = limit != 0 ? (page - 1) * limit : 0;
	const end = limit != 0 ? (page == pages ? length : page * limit) : 0;

	return (
		<Table {...{ data: limit ? data.slice(start, end) : data }}>
			{limit && (
				<Pagination
					{...{ page, pages, start, end, length }}
					onChange={setPage}
				/>
			)}
		</Table>
	);
};

export default DataTable;
