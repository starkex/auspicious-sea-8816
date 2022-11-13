import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Grid, Stack, Box, Image,Badge, Button, Heading } from '@chakra-ui/react';


function CashProducts() {
    const [data, setData] = useState([]);
    const getData=()=>{
        return axios.get('http://localhost:8088/cashproducts');
    }
    useEffect(()=>{
        getData().then((res)=>setData(res.data));

    },[]);
  return (

    <div>
            <Grid w={'100%'} templateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(1,1fr)"]} marginTop={'3%'} marginBottom={'2%'}>
                <Box w={'100%'} textAlign={'center'}>
                    <Heading fontFamily={'freight-big-pro,Times,serif'} fontWeight={400}>Shop All Cashere Collection</Heading>
                </Box>
            </Grid>
            <Box m={'auto'} w={'40%'} marginBottom={'2%'}>
            <Grid w={['95%','100%','100%']} templateColumns={["repeat(4,1fr)","repeat(4,1fr)","repeat(8,1fr)"]} marginTop={'3%'} marginBottom={'2%'}>
                <Box w={'100%'}>
                    <Button 
                    w={'90%'} 
                    fontSize={'sm'} 
                    borderRadius={0} 
                    border={'1px solid black'} 
                    bg={'white'} color={'black'} 
                    _hover={
                        { 
                            bg:'gray.600',
                            color:'white', 
                            transition:'0.4s'
                        }}>
                            XS
                    </Button>
                </Box>

                <Box w={'100%'}>
                    <Button 
                    w={'90%'} 
                    fontSize={'sm'} 
                    borderRadius={0} 
                    border={'1px solid black'} 
                    bg={'white'} color={'black'} 
                    _hover={
                        { 
                            bg:'gray.600',
                            color:'white', 
                            transition:'0.4s'
                        }}>
                            S
                    </Button>
                </Box>

                <Box w={'100%'}>
                    <Button 
                    w={'90%'} 
                    fontSize={'sm'} 
                    borderRadius={0} 
                    border={'1px solid black'} 
                    bg={'white'} color={'black'} 
                    _hover={
                        { 
                            bg:'gray.600',
                            color:'white', 
                            transition:'0.4s'
                        }}>
                            M
                    </Button>
                </Box>

                <Box w={'100%'}>
                    <Button 
                    w={'90%'} 
                    fontSize={'sm'} 
                    borderRadius={0} 
                    border={'1px solid black'} 
                    bg={'white'} color={'black'} 
                    _hover={
                        { 
                            bg:'gray.600',
                            color:'white', 
                            transition:'0.4s'
                        }}>
                            L
                    </Button>
                </Box>
                <Box w={'100%'}>
                    <Button 
                    w={'90%'} 
                    fontSize={'sm'} 
                    borderRadius={0} 
                    border={'1px solid black'} 
                    bg={'white'} color={'black'} 
                    _hover={
                        { 
                            bg:'gray.600',
                            color:'white', 
                            transition:'0.4s'
                        }}>
                            XL
                    </Button>
                </Box>
                <Box w={'100%'}>
                    <Button 
                    w={'90%'} 
                    fontSize={'sm'} 
                    borderRadius={0} 
                    border={'1px solid black'} 
                    bg={'white'} color={'black'} 
                    _hover={
                        { 
                            bg:'gray.600',
                            color:'white', 
                            transition:'0.4s'
                        }}>
                            XXL
                    </Button>
                </Box>
                <Box w={'100%'}>
                    <Button 
                    w={'90%'} 
                    fontSize={'sm'} 
                    borderRadius={0} 
                    border={'1px solid black'} 
                    bg={'white'} color={'black'} 
                    _hover={
                        { 
                            bg:'gray.600',
                            color:'white', 
                            transition:'0.4s'
                        }}>
                            SLIM
                    </Button>
                </Box>
                <Box w={'100%'}>
                    <Button 
                    w={'90%'} 
                    fontSize={'sm'} 
                    borderRadius={0} 
                    border={'1px solid black'} 
                    bg={'white'} color={'black'} 
                    _hover={
                        { 
                            bg:'gray.600',
                            color:'white', 
                            transition:'0.4s'
                        }}>
                            TALL
                    </Button>
                </Box>
            </Grid>
            </Box>


          <Box w={['90%','90%','70%']} m={'auto'} marginBottom={'5%'}>
                <Grid templateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)"]} gap={5}>
                {data.map((e)=>(
                    <Box maxW='sm' borderWidth='1px' borderRadius='lg' key={e.id} >
                        <Image src={e.image} alt={e.p_name} />

                        <Box p='6'>
                            <Box display='flex' alignItems='baseline'>
                                <Badge borderRadius='full' px='2' colorScheme='teal'> New</Badge>
                            <Box
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='xs'
                                textTransform='uppercase'
                                ml='2'
                            >
                                {e.category}
                            </Box>

                        </Box>
                        
                            <Box
                                mt='1'
                                fontWeight='semibold'
                                as='h4'
                                lineHeight='tight'
                                noOfLines={1}
                                >
                                {e.p_name}
                            </Box>
                            <Box>
                            {e.currency} {e.p_price}
                            </Box>
                            <Box display='flex' mt='2' alignItems='center'>
                                <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                                    Size: {e.size}
                                </Box>
                            </Box>
                            <Box mt={5}>
                                <Button w={'100%'}>Add to Cart</Button>
                            </Box>
                        </Box>

                    </Box>  
                ))}
           </Grid>
        </Box>
    </div>
  )
}

export default CashProducts;