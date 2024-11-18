import { SettingsIcon, UserTeamIcon, LockIcon } from '@tonic-ui/react-icons';

import AvatarMenu, { type Option } from '../../components/AvatarMenu/AvatarMenu';

export const mockOptions: Option[] = [
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

const Lobby = () => {
  return (
    <>
      <AvatarMenu options={mockOptions} />
    </>
  )
}

export default Lobby;