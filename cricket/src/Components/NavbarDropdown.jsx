import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,

} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

const NavbarDropdown = () => {
    return (
        <Menu>
            <MenuButton as={Text} >
                More <ChevronDownIcon />
            </MenuButton>
            <MenuList background="#172132" border="none">
                <MenuItem _hover={{ background: "gray" }} gap={4}>
                    <Image src='https://www.cricket.com/svgs/icons/stadium-icon.svg' />
                    <Text>Stadiums</Text>
                </MenuItem>
                <MenuItem _hover={{ background: "gray" }} gap={4}>
                    <Image src='https://www.cricket.com/svgs/icons/rankings-icon.svg' />
                    <Text>Rankings</Text>
                </MenuItem>
                <MenuItem _hover={{ background: "gray" }} gap={4}>
                    <Image src='https://www.cricket.com/svgs/GroupArchive.svg' />
                    <Text>Arcives</Text>
                </MenuItem>
                <MenuItem _hover={{ background: "gray" }} gap={4}>
                    <Image src='https://www.cricket.com/svgs/icons/records-icon.svg' />
                    <Text>Records</Text>
                </MenuItem>
                <MenuItem _hover={{ background: "gray" }} gap={4}>
                    <Image src='https://www.cricket.com/svgs/fantasynav.svg' />
                    <Text>Season Fantasy</Text>
                </MenuItem>
                <MenuItem _hover={{ background: "gray" }} gap={4}>
                    <Image src='https://www.cricket.com/svgs/icons/profile.svg' />
                    <Text>Profile</Text>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}

export default NavbarDropdown

