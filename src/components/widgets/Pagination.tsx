import React, { FC, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { Row } from '../base';

interface props {
	page: number;
	length: number;
	start: number;
	end: number;
	pages: number;
	className?: string;
	onChange?: (e: number) => void;
}

const Pagination: FC<props> = ({
	length,
	page,
	pages,
	start,
	end,
	className: style,
	onChange,
}) => {
	let className = 'flex justify-center items-center p-4 text-inherit';

	function paginate(i: number) {
		i > 0 && i <= pages && onChange?.(i);
	}

	return (
		<Row className='space-x-2'>
			<Row className={`border divide-x rounded overflow-hidden ${style}`}>
				<div onClick={() => paginate(page - 1)} {...{ className }}>
					<ChevronLeftIcon className='stroke-1 text-inherit' />
				</div>
				{Array(pages)
					.fill('')
					.map((_, i) => (
						<div onClick={() => paginate(i + 1)} key={i} {...{ className }}>
							{i + 1}
						</div>
					))}
				<div onClick={() => paginate(page + 1)} {...{ className }}>
					<ChevronRightIcon className='stroke-1 text-inherit' />
				</div>
			</Row>
			<p>
				{start} - {end} of {length}
			</p>
		</Row>
	);
};

export default Pagination;
