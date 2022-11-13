import React, { useState } from 'react'
import {Box, Image, Stack,Heading, Grid, Spacer, Input, Flex, Center, Select} from '@chakra-ui/react';
import Logoimg from '../media/revisedLogo.png';
import { Link } from 'react-router-dom';

function Navbar() {
   const [val, setVal] =useState('');
   const Valchange =()=>{
      if(val=='Logout'){
         
      }
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
            <Link to='/'> Gifts </Link>
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

    <Grid w={'20%'} templateColumns={['repeat(2,1fr)']} gap={4} alignItems={'center'} textAlign={'center'}>
        <Input placeholder={'Search'}></Input>
        {/* <Heading as='h6' size='xs' onClick={onOpen} _hover={{cursor:'Pointer'}}>
           Sign In
        </Heading> */}
       <Center>
       <Heading as='h6' size='xs' _hover={{cursor:'Pointer'}}>
            <Link to='/adminpanel'>
                  Admin
           </Link>
        </Heading>
        {/* <Select placeholder='Account' border={0} _focus={{outline:'none'}} w={'70%'} onChange={(e)=>{setVal(e.target.value)}}>
            <option value='option1'>Products</option>
            <option value='option2'>Admin Profile</option>
            <option value='option3'>

            <Link href='/'> 
              Logout
              </Link>
              </option>
              
         </Select> */}
        
        </Center>
    </Grid>
    
</Stack>
</Box>
      
</Flex>

  )
  
}

export default Navbar;