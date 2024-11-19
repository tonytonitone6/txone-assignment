import React, { PropsWithChildren, ReactNode } from 'react';
import { render as rtlRender, screen } from '@testing-library/react';
import { TonicProvider } from '@tonic-ui/react';

import DataTable from '../DataTable';
import { mockData } from '../spec';

function render(ui: ReactNode) {
  const wrapper = ({ children }: PropsWithChildren) => <TonicProvider>{children}</TonicProvider>
  return rtlRender(ui, { wrapper })
}

describe('<DataTable />', () => {
  test('render dataTable', () => {
    render(<DataTable />);
    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  test('table has six records on the row', async () => {
    render(<DataTable />);
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(7); // head 1 + rows 6 = 7
  });

  test('render first record on the table', () => {
    const [firstRecord] = mockData;
    render(<DataTable data={[firstRecord]} />);

    (Object.keys(firstRecord) as Array<keyof typeof firstRecord>).map((key) => {
      if (key !== 'id') {
        expect(screen.getByText(firstRecord[key])).toBeInTheDocument();
      }
    })
  });

  test('have menu button on every record', () => {
    render(<DataTable />);
    expect(screen.getAllByRole('button', { name: /toggle-button/ })).toHaveLength(6)
  });
})