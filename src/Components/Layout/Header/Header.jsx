import {
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { RiMenu5Fill, RiTeamLine, RiRegisteredLine } from 'react-icons/ri';
import { GiSmartphone } from 'react-icons/gi';
import { GrDocumentConfig, GrGallery } from 'react-icons/gr';
import { AiOutlineHome } from 'react-icons/ai';
import { BsCardChecklist } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaRegHandshake } from 'react-icons/fa';
import logo from '../../../Assets/Logos/munGreyLogo.png';
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        colorScheme={'green'}
        position="fixed"
        top={'6'}
        left="6"
        width="12"
        height="12"
        rounded="full"
        onClick={onOpen}
        zIndex="1000"
      >
        <RiMenu5Fill />
      </Button>
      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay backdropFilter={'blur(10px)'} />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={'2px'} >
            <Container justifyContent="center" alignItems={'center'}>
              <Image src={logo} width={'150px'} alt="Dan Abramov" />
            </Container>
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={'4'} alignItems="flex-start">
              <Link onClick={onClose} to="/">
                <Button
                  variant="ghost"
                  leftIcon={<AiOutlineHome fontSize={'18px'} />}
                >
                  {' '}
                  Home
                </Button>
              </Link>
              <Menu>
                <MenuButton
                  variant="ghost"
                  as={Button}
                  rightIcon={<FaChevronDown />}
                  leftIcon={<GrDocumentConfig />}
                >
                  About
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <Link onClick={onClose} to="/MUNConference">
                      <Button variant="ghost">MUN Conference</Button>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link onClick={onClose} to="/ZeroHourSummit">
                      <Button variant="ghost">Zero Hour Summit</Button>
                    </Link>
                  </MenuItem>
                </MenuList>
              </Menu>
              <Link onClick={onClose} to="/request">
                <Button
                  variant="ghost"
                  leftIcon={<RiRegisteredLine fontSize="18px" />}
                >
                  Registrations
                </Button>
              </Link>
              <Link onClick={onClose} to="/contact">
                <Button
                  variant="ghost"
                  leftIcon={<BsCardChecklist fontSize="18px" />}
                >
                  Agendas
                </Button>
              </Link>
              <Link onClick={onClose} to="/about">
                <Button
                  variant="ghost"
                  leftIcon={<GrGallery fontSize="18px" />}
                >
                  Gallery
                </Button>
              </Link>
              <Link onClick={onClose} to="/about">
                <Button
                  variant="ghost"
                  leftIcon={<FaRegHandshake fontSize="18px" />}
                >
                  Sponsers
                </Button>
              </Link>
              <Link onClick={onClose} to="/about">
                <Button
                  variant="ghost"
                  leftIcon={<GiSmartphone fontSize="18px" />}
                >
                  Contact Us
                </Button>
              </Link>
              <Link onClick={onClose} to="/about">
                <Button
                  variant="ghost"
                  leftIcon={<RiTeamLine fontSize={'18px'} />}
                >
                  Team
                </Button>
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
