import { Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'





const NavCard = ({ logo, title, to }) => {

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

            <Link to={to}>
                <Text height="2rem" fontSize="xs">{title}</Text>
            </Link>
        </VStack >
    )
}

export default NavCard
