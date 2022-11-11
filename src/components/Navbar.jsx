import React from 'react'
import {Box, Image, Stack,Heading, Grid, Spacer, Input, Flex, Center, VStack} from '@chakra-ui/react';
import Logoimg from '../media/revisedLogo.png';
import {EmailIcon} from '@chakra-ui/icons';
import { useDisclosure } from '@chakra-ui/react';
import AllRoutes from '../Routes/AllRoutes';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Button,
  Text
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const handC = ()=>{

  }
  return (
    <Flex>
    <Box w={'100%'} m={'auto'} borderBottom={"1px"}  borderColor={"gray.200"} >
    <Stack direction={['row']} p={4} gap={4} w={['100%', '100%', '90%']} position={'relative'} top={0} bg={'white'} m={'auto'} mb={2} zIndex={3}>
    
    <Grid w={'15%'} templateColumns={['repeat(1,1fr)']} alignItems={'center'} textAlign={'center'}>
        <Image src={Logoimg} align={'center'} w={'100%'}>
        </Image>
    </Grid>

    <Grid w={'50%'} templateColumns={['repeat(11,1fr)']} alignItems={'center'} textAlign={'center'}>
        <Heading as='h2' size='xs'>
            Gifts
        </Heading>
        <Heading as='h2' size='xs'>
            New
        </Heading>
        <Heading as='h3' size='xs'>
           Womens
        </Heading>
        <Heading as='h4' size='xs'>
          <Link to='/Mens'>Mens</Link>
        </Heading>
        <Heading as='h5' size='xs'>
           Kids
        </Heading>
        <Heading as='h6' size='xs'>
           Cashmere
        </Heading>
        <Heading as='h4' size='xs'>
           Home
        </Heading>
        <Heading as='h5' size='xs'>
           Stories
        </Heading>
        <Heading as='h6' size='xs'>
           Sale
        </Heading>
    </Grid>

    <Spacer/>

    <Grid w={'20%'} templateColumns={['repeat(3,1fr)']} gap={4} alignItems={'center'} textAlign={'center'}>
        <Input placeholder={'Search'}></Input>
        <Heading as='h6' size='xs' onClick={onOpen} _hover={{cursor:'Pointer'}}>
           Sign In
        </Heading>
       <Center>
        <Link to='/Cart'>
            {/* <EmailIcon size={'xl'}/> */}
            Cart
        </Link>
        </Center>
    </Grid>
    
</Stack>
</Box>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset='slideInBottom'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={'center'}>Sign In</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Email Address</FormLabel>
              <Input ref={initialRef} placeholder='Email Address' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input placeholder='Password'/>
            </FormControl>
           
          </ModalBody>

          <ModalFooter>
            <VStack w={'100%'}>
            <Button 
            w={'100%'}
            bg={'black'}
            color={'white'}
            fontSize={'md'}
            onClick={()=>(handC)}
            _hover={{color:'black', border:'1px solid black', bg:'white', transition:'0.4s'}}
            >
              Sign In Now
            </Button>
            {/* <Button w={'100%'} >Cancel</Button> */}
            <Box mt={7} mb={5}>
                <Text color={'gray.500'} fontSize={'xs'}>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</Text>
            </Box>
            </VStack>
          </ModalFooter>
        </ModalContent>
      </Modal>

</Flex>


  )
}

export default Navbar