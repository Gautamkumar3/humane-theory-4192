import { useDisclosure } from "@chakra-ui/react";
import { createContext } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <AppContext.Provider value={{ isOpen, onOpen, onClose }}>
            {children}
        </AppContext.Provider>
    )
}