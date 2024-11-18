import React, {ReactNode} from 'react';
import { Menu, MenuList, MenuItem, Flex, Text } from '@tonic-ui/react';
import { UserTeamIcon, MoreIcon } from '@tonic-ui/react-icons';

import AvatarMenuButton from '../AvatarMenuButton/AvatarMenuButton';

export type Option = {
  icon?: ReactNode;
  text: string;
}

type AvatarMenuProps = {
  icon?: ReactNode;
  options: Option[];
}

const defaultIcon = <MoreIcon />;

const AvatarMenu = ({options}: AvatarMenuProps ) => {
  return (
    <Menu>
      <AvatarMenuButton>
        <UserTeamIcon />
      </AvatarMenuButton>
      <MenuList width="max-content">
        {options.map(option => {
          return (
            <MenuItem key={option.text}>
              <Flex flex="none" mr="3x">
                {option.icon ?? defaultIcon}
              </Flex>
              <Flex flex="auto">
                <Text>{option.text}</Text>
              </Flex>
            </MenuItem>
          )
        })}
      </MenuList>
    </Menu>
  )
}

export default AvatarMenu;