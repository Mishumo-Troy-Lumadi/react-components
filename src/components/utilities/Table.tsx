import React, { FC, ReactNode } from 'react';
import { Table as Generator } from '@library/helpers';

interface props {
	data: any[];
	onClick?: (e: any) => void;
	className?: string;
	children?: ReactNode;
	indexed?: boolean;
}

const Table: FC<props> = ({ data, indexed, className, onClick, children }) => {
	let [columns, rows] = Generator.getTable(data);

	return (
		<table>
			<thead>
				<tr {...{ className }}>
					{indexed && <th>#</th>}
					{columns.map((column, i) => (
						<th key={i}>{column}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{rows.map((row, i: number) => (
					<tr {...{ className }} onClick={() => onClick?.(data[i])} key={i}>
						{indexed && <td>{i}</td>}
						{row.map((value, i) => (
							<td key={i}>{value}</td>
						))}
					</tr>
				))}
			</tbody>
			<tfoot>
				{children && (
					<tr>
						<td>{children}</td>
					</tr>
				)}
			</tfoot>
		</table>
	);
};

export default Table;
