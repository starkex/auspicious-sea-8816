// import './App.css';
import React from 'react';
import {Box, Image, Stack,Heading, Grid} from '@chakra-ui/react';
function App() {
  return ( 
    <Stack direction={['row']} p={4} w={'80%'} position={'fixed'} top={0} bg={'whiteAlpha.300'}>
        <Grid w={'100%'} templateColumns={['repeat(8,1fr)']} p={4}>
        <Image src=''></Image>
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

        </Grid>
    </Stack>
  );
}

export default App;
