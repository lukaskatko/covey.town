import React, { useState } from 'react';

import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast
} from '@chakra-ui/react';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import useCoveyAppState from '../../hooks/useCoveyAppState';
import useMaybeVideo from '../../hooks/useMaybeVideo';

const LoginPopUp: React.FunctionComponent = () => {
  const {isOpen, onOpen, onClose} = useDisclosure()

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [loginUserName, setLoginUserName] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');


  const [modal, setModal] = useState(false);


  const toast = useToast()


  const openLoginMenu = async ()=>{
    onOpen();
  };

  const closeLoginMenu = async ()=>{
    onClose();
  };

  const loginUserAccount = async () =>{
    try {
    if(loginUserAccount.length === 0){
        toast({
          title: 'Unable to login',
          description: 'Please enter a username ',
          status: 'error',
        });
        return;
      }
    
    if (userPassword.length === 0) {
      toast({
        title: 'Unable to login',
        description: 'Please enter a password ',
        status: 'error',
      });
      return;
      }
    } catch (err) {
      toast({
        title: 'Unable to login with account',
        description: err.toString(),
        status: 'error'
      })
    }
  };

  return <>

<Button data-testid='loginMenuButton' style={{float: 'right', marginLeft: '20px'}} onClick={openLoginMenu}>Login </Button>
    <Modal isOpen={isOpen} onClose={closeLoginMenu}>
      <ModalOverlay/>
      <ModalContent>
        <ModalHeader>Log In</ModalHeader>
        <ModalCloseButton/>
        <form onSubmit={(ev)=>{ev.preventDefault(); loginUserAccount()}}>
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel htmlFor='loginAccount'>Enter your username</FormLabel>
              <Input id='loginAccount' placeholder="Enter Username" name="loginAccount" value={loginUserName} onChange={(ev)=>setLoginUserName(ev.target.value)} />
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor='loginPassword'>Enter your password</FormLabel>
              <Input id='loginPassword' placeholder="Enter Password" name="loginPassword" type="password" value={userPassword} onChange={(ev)=>setUserPassword(ev.target.value)} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button data-testid='loginbutton' colorScheme="blue" mr={3} value="login" name='action1' onClick={()=>loginUserAccount()}>
              Log In
            </Button>
            <Button onClick={closeLoginMenu}>Cancel</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>


  </>
}

export default LoginPopUp;
