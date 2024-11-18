import { Table, TableHeader, TableBody, TableRow, TableCell, Truncate, useColorStyle } from '@tonic-ui/react';
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';

import { columns, type ExtendColumnDef, Event } from './spec';

const data = [
  { id: 1, eventType: 'Virus/Malware', affectedDevices: 20, detections: 634 },
  { id: 2, eventType: 'Spyware/Grayware', affectedDevices: 20, detections: 634 },
  { id: 3, eventType: 'URL Filtering', affectedDevices: 15, detections: 598 },
  { id: 4, eventType: 'Web Reputation', affectedDevices: 15, detections: 598 },
  { id: 5, eventType: 'Network Virus', affectedDevices: 15, detections: 497 },
  { id: 6, eventType: 'Application Control', affectedDevices: 0, detections: 0 }
]

const DataTable = () => {
  const [colorStyle] = useColorStyle({ colorMode: 'dark' });
  
  const table = useReactTable({
    data,
    columns,
    defaultColumn: {
      minSize: 80
    },
    getCoreRowModel: getCoreRowModel(),
    getRowId: (originalRow) => {
      return originalRow.id.toString();
    }
  });


  return (
    <Table layout="flexbox">
      <TableHeader>
        {table.getHeaderGroups().map(headerGroup => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map(header => {
              const styleProps = {
                minWidth: header.column.columnDef.minSize,
                width: header.getSize(),
                ...header.column.columnDef.meta
              }
              return (
                <TableCell key={header.id} {...styleProps}>
                  {header.isPlaceholder ? null : (
                    <Truncate position='relative'>
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </Truncate>
                  )}
                </TableCell>
              )
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map(row => (
          <TableRow key={row.id} _hover={{
            backgroundColor: colorStyle.background.primary
          }}>
            {row.getVisibleCells().map(cell => {
              const columnDef = cell.column.columnDef as ExtendColumnDef<Event>
              const styleProps = {
                minWidth: cell.column.columnDef.minSize,
                width: cell.column.getSize(),
                ...cell.column.columnDef.meta
              }

              return (
                <TableCell key={cell.id} {...styleProps}>
                  <Truncate>
                    {columnDef.columnHelper ? columnDef.columnHelper() : flexRender(columnDef.cell, cell.getContext())}
                  </Truncate>
                </TableCell>
              )
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}


export default DataTable;