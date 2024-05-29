import {
  IconButton, Menu, MenuButton, MenuItem, MenuList,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
} from '@chakra-ui/icons';
import ModalComponent from './modals/modal.component.tsx';
import { ModalProps } from '../types/UtilTypes.ts';

interface Props {
  menuItems: ModalProps[],
}

const MenuComponent = ({ menuItems }: Props) => (
  <Menu>
    <MenuButton
      as={IconButton}
      aria-label="Options"
      icon={<HamburgerIcon />}
      variant="outline"
    />
    <MenuList>
      {menuItems.map((item) => (
        <MenuItem>
          <ModalComponent modalProps={item} />
        </MenuItem>
      ))}
    </MenuList>
  </Menu>
);

export default MenuComponent;
