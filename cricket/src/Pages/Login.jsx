import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import PhoneInput from "react-phone-number-input";
import Styles from "../Styles/Login.module.css";
import { auth } from "../Utils/Firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Input,
  Link,
  Heading,
  Box,
  PinInputField,
  HStack,
  PinInput,
  useToast,
} from "@chakra-ui/react";
import OTPverifier from "./OTP";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { isOpen, onOpen, onClose } = useContext(AppContext);
  const [number, setNumber] = useState("");
  const [error, setError] = useState(false);
  const [otpPage, setOtpPage] = useState(false);
  const [confirmObj, setConfirmObj] = useState("");
  const [otp, setOtp] = useState("");
  const toast = useToast();
  const position = ["top"];

  const navigate = useNavigate();

  function setUpReCaptch(number) {
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth
    );
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, number, recaptchaVerifier);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    if (number === "" || number === undefined || number.length < 10) {
      toast({
        title: "Something went wrong",
        position: position,
        description: `Please enter a valid Phone number`,
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
    }

    try {
      const response = await setUpReCaptch(number);
      toast({
        title: "Account created.",
        position: position,
        description: `We've created account for you and send OTP for your mobile number ${number}`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setConfirmObj(response);
      setOtpPage(true);
    } catch (er) {
      setError(er.message);
    }
  };

  //############## input logic #################

  const verifyOtp = async () => {
    if (otp === "" || otp === null || otp.length > 6) {
      toast({
        title: "Wrong OTP",
        position: position,
        description: `Your OTP is incorrect`,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return;
    }

    await confirmObj
      .confirm(otp)
      .then((result) => {
        toast({
          title: "Login Successful",
          position: position,
          description: `You have logged in successfully`,
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        onClose();
        setOtpPage(false);
        navigate("/");
      })
      .catch((er) => {
        toast({
          title: "Wrong OTP",
          position: position,
          description: `Your OTP is incorrect`,
          status: "error",
          duration: 6000,
          isClosable: true,
        });
      });
  };

  return (
    <>
      <Text onClick={onOpen}>Profile</Text>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="blackAlpha.700" />
        <ModalContent mt={"10%"}>
          <ModalCloseButton />
          {otpPage ? (
            <Box h="300px" w="30%">
              <Text mt={"80%"} ml={10}>
                ENTER OTP
              </Text>
              <HStack w="300%" ml={10} mt={5}>
                <PinInput
                  size="lg"
                  otp
                  type="numeric"
                  placeholder=""
                  _focus={{ boxShadow: "none !important" }}
                  onChange={(e) => setOtp(e)}
                >
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
              <Button
                bg="green.300"
                w={40}
                ml={40}
                mt={5}
                color="white"
                onClick={verifyOtp}
              >
                CONFIRM
              </Button>
            </Box>
          ) : (
            <ModalBody my={20}>
              <Text fontSize="xs" mb={4}>
                Login/Register to Cricket.com
              </Text>
              <form onSubmit={handleSubmit}>
                <PhoneInput
                  className={Styles.inputTag}
                  defaultCountry="IN"
                  placeholder="Enter phone number"
                  value={number}
                  onChange={setNumber}
                />
                <div style={{ margin: "20px" }} id="recaptcha-container"></div>

                <Input
                  type="submit"
                  value="Get OTP"
                  w="50%"
                  margin="auto"
                  bg="green.600"
                  color="white"
                  my={5}
                  display="block"
                />

                <Text w="5%" m="auto" mt={-5}>
                  or
                </Text>
                <Text w="70%" m="auto" mt={7} mb={-12}>
                  Go back to home Page?
                  <Link to="/">
                    <span style={{ marginLeft: "10px", color: "tomato" }}>
                      Click here
                    </span>
                  </Link>
                </Text>
              </form>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
