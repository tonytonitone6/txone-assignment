import React, {PropsWithChildren, ReactNode} from 'react';
import { render as rtlRender, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TonicProvider } from '@tonic-ui/react';

import AvatarMenu from '../AvatarMenu';
import { mockOptions } from '../../../pages/lobby';

function render(ui: ReactNode) {
  const wrapper = ({ children }: PropsWithChildren) => <TonicProvider>{children}</TonicProvider>
  return rtlRender(ui, {wrapper})
}

describe('<AvatarMenu />', () => {
  test('render toggle button', () => {
    render(<AvatarMenu options={[]} />);
    expect(screen.getByRole('button', { name: /toggle-button/ })).toBeInTheDocument();
  });

  test('menuItem has three items', async () => {
    render(<AvatarMenu options={mockOptions} />);
    const button = screen.getByRole('button', { name: /toggle-button/ });
    await userEvent.click(button);
    
    mockOptions.forEach(option => {
      expect(screen.getByRole('menuitem', { name: option.text })).toBeInTheDocument();
    })

    expect(screen.getAllByRole('menuitem')).toHaveLength(mockOptions.length);
  })
})