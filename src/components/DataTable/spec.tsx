import type { ColumnDef } from '@tanstack/react-table';
import AvatarMenu from '../AvatarMenu/AvatarMenu';
import { mockOptions } from '../../pages/lobby';

export type Event = {
  id: number;
  eventType: string;
  affectedDevices: number;
  detections: number;
};

export type ExtendColumnDef<TData extends object> = {
  columnHelper?: (rawData?: TData) => React.ReactNode
} & ColumnDef<TData>;

export const columns: ExtendColumnDef<Event>[] = [
  {
    header: 'Event Type',
    accessorKey: 'eventType',
    size: 150,
  },
  {
    header: 'Affected Devices',
    accessorKey: 'affectedDevices',
    size: 120,
    meta: {
      style: {
        textAlign: 'right',
      },
    },
  },
  {
    header: 'Detections',
    accessorKey: 'detections',
    size: 50,
    meta: {
      style: {
        textAlign: 'right',
      },
    },
  },
  {
    header: 'Action',
    accessorKey: 'action',
    size: 100,
		columnHelper: (_) => {
      return (
        <div style={{position: 'absolute', right: 0}}>
          <AvatarMenu options={mockOptions} />
        </div>
      )
		},
		meta: {
      style: {
        position: 'relative',
				textAlign: 'right'
			}
		}
  },
];