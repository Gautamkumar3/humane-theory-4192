import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Input,
    Heading,
} from '@chakra-ui/react'

export default function OTPverifier() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Heading >Hello</Heading>

            <Input onClick={onOpen} type="submit" value="Get OTP" w="50%" margin="auto" bg="green.600" color="white" my={5} display="block" />

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay bg='blackAlpha.700' />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}