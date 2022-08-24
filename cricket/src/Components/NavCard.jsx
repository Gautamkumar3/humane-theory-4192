import { Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'





const NavCard = ({ logo, title }) => {
    return (
        <VStack padding="0.5rem" w="10%" _hover={{
            background: "gray.700",
        }}>
            <Image
                borderRadius='full'
                marginBottom="-5%"
                boxSize='20px'
                src={logo}
                alt={title}
            />
            <Text height="2rem" fontSize="xs">{title}</Text>
        </VStack >
    )
}

export default NavCard
