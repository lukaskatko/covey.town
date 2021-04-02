import React, { useCallback, useState } from 'react';

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
import useCoveyAppState from '../../hooks/useCoveyAppState';
import useMaybeVideo from '../../hooks/useMaybeVideo';

const CreateAccountPopUp: React.FunctionComponent = () => {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const video = useMaybeVideo()
  const {apiClient, currentTownID, currentTownFriendlyName, currentTownIsPubliclyListed} = useCoveyAppState();


  const [newLoginUserName, setNewLoginUserName] = useState<string>('');
  const [newUserPassword, setNewUserPassword] = useState<string>('');

  const [modal, setModal] = useState(false);


  const toast = useToast()


  const openCreateMenu = async ()=>{
    onOpen();
  };

  const closeCreateMenu = async ()=>{
    onClose();
  };

  
    const createNewUserAccount = async () =>{
      try {
      if(newLoginUserName.length === 0){
          toast({
            title: 'Unable to create new account',
            description: 'Please enter a username ',
            status: 'error',
          });
          return;
        }
      
      if (newUserPassword.length === 0) {
        toast({
          title: 'Unable to create new account',
          description: 'Please enter a password ',
          status: 'error',
        });
        return;
        }
      } catch (err) {
        toast({
          title: 'Unable to create account with entered info',
          description: err.toString(),
          status: 'error'
        })
      }
  };

  return <>


    <Button data-testid='createMenuButton' style={{float: 'right', marginLeft: '10px', marginRight: '5px'}} onClick={openCreateMenu}>Create Account </Button>
    <Modal isOpen={isOpen} onClose={closeCreateMenu}>
      <ModalOverlay/>
      <ModalContent>
        <ModalHeader>Create Account</ModalHeader>
        <ModalCloseButton/>
        <form onSubmit={(ev)=>{ev.preventDefault(); createNewUserAccount()}}>
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel htmlFor='newAccountUsername'>Enter a new username</FormLabel>
              <Input id='newAccount' placeholder="Enter New Username" name="newAccount" value={newLoginUserName} onChange={(ev)=>setNewLoginUserName(ev.target.value)} />
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor='newAccountPassword'>Enter your password</FormLabel>
              <Input id='newPassword' placeholder="Enter New Password" name="newPassword" type="password" value={newUserPassword} onChange={(ev)=>setNewUserPassword(ev.target.value)} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button data-testid='createbutton' colorScheme="blue" mr={3} value="delete" name='create' onClick={()=>createNewUserAccount()}>
              Create
            </Button>
            <Button onClick={closeCreateMenu}>Cancel</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>

  </>
}


export default CreateAccountPopUp;
