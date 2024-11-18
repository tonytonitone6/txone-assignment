import { CSSProperties } from 'react';

export type Column = {
	header: string;
	accessorKey: string;
	size: number;
	style?: CSSProperties;
};