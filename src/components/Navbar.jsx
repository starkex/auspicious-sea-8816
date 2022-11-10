import React from 'react'
import {Box, Image, Stack,Heading, Grid, Spacer, Input, Flex, Center} from '@chakra-ui/react';
import { StackDivider } from '@chakra-ui/react';
import Logoimg from '../media/revisedLogo.png';
import {EmailIcon} from '@chakra-ui/icons';

function Navbar() {
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
           Mens
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
        <Heading as='h6' size='xs'>
           Sign In
        </Heading>
       <Center>
        <EmailIcon size={'xl'}/>
        </Center>
    </Grid>
    
</Stack>
</Box>
</Flex>
  )
}

export default Navbar