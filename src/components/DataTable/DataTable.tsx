import { Table, TableHeader, TableBody, TableRow, TableCell, Truncate, useColorStyle } from '@tonic-ui/react';
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';

import { columns, mockData, type ExtendColumnDef, Event } from './spec';

type DataTableProps = {
  data?: Event[]
}

const DataTable = ({ data = mockData }: DataTableProps) => {
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