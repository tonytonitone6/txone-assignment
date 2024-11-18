import React, {ReactNode, PropsWithChildren} from 'react';
import { MenuToggle, Button } from '@tonic-ui/react';


type MenuButtonProps = {
  icon?: ReactNode;
} & PropsWithChildren;

const AvatarMenuButton = ({ icon, children }: MenuButtonProps) => {
  const defaultStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: '1x',
  };


  return (
    <MenuToggle aria-label="toggle-button">
      {/* <Button {...defaultStyles}> */}
        {children}
      {/* </Button> */}
      {icon ? icon : ''}
    </MenuToggle>
  )
}


export default AvatarMenuButton;