import React from 'react';
import { TonicProvider } from '@tonic-ui/react';
import { SettingsIcon, UserTeamIcon, LockIcon } from '@tonic-ui/react-icons';

import CenterLayout from './layout/CenterLayout';
import AvatarMenu, {type Option} from './components/AvatarMenu/AvatarMenu';

const mockOptions: Option[] = [
  {
    icon: <SettingsIcon />,
    text: 'Setting'
  },
  {
    icon: <UserTeamIcon />,
    text: 'Account'
  },
  {
    icon: <LockIcon />,
    text: 'Privacy Account'
  }
]

const App = () => {
  return (
    <TonicProvider>
      <CenterLayout>
        <AvatarMenu options={mockOptions} />
      </CenterLayout>
    </TonicProvider>
  );
};

export default App;