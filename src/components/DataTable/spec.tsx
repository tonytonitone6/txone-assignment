import type { ColumnDef } from '@tanstack/react-table';
import { Box } from '@tonic-ui/react';

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
        <Box position="absolute" right={0}>
          <AvatarMenu options={mockOptions} />
        </Box>
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

export const mockData: Event[] = [
  { id: 1, eventType: 'Virus/Malware', affectedDevices: 20, detections: 634 },
  { id: 2, eventType: 'Spyware/Grayware', affectedDevices: 20, detections: 634 },
  { id: 3, eventType: 'URL Filtering', affectedDevices: 15, detections: 598 },
  { id: 4, eventType: 'Web Reputation', affectedDevices: 15, detections: 598 },
  { id: 5, eventType: 'Network Virus', affectedDevices: 15, detections: 497 },
  { id: 6, eventType: 'Application Control', affectedDevices: 0, detections: 0 }
]