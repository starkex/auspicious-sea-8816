import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    Select,
    useColorModeValue,
    Grid,
  } from '@chakra-ui/react';
import axios from 'axios';


function Newaccount() {
    const [pname, setPname] =useState();
    const [pprice, setPprice] =useState();
    const [pimage, setPimage] =useState();
    const [newdata, setNewdata] = useState({
        p_name:'',
        p_price:'',
        category:'',
        size:'',
        currency:'',
        image:''
    })
    const sendData = ()=>{
        return axios.post('http://localhost:3000/products',newdata);
    }
    console.log(newdata)
    useEffect(()=>{
        setNewdata({
            p_name:pname,
            p_price:pprice,
            image:pimage
        })
    },[])

    // const {p_name,p_price,category,currency,size,image} =newdata;
  
    return (
    <div>
        <Navbar/>

      <Flex
      minH={'60vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} w={['95%','90%','50%']} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Register Now</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <Grid templateColumns={['repeat(1,1fr)','repeat(2,1fr)','repeat(2,1fr)']} gap={6}>
                <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input type="text" placeholder='Enter your name' onChange={(e)=>{setPname(e.target.value)}} />
                </FormControl>
                <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder='Enter your email' onChange={(e)=>{setPprice(e.target.value)}} />
                </FormControl>
                <FormControl id="address-1">
                <FormLabel>Address Line1</FormLabel>
                <Input type="text" placeholder='Enter your Address' onChange={(e)=>{setPimage(e.target.value)}} />
                </FormControl>
                <FormControl id="address-2">
                <FormLabel>Address Line 2</FormLabel>
                <Input type="text" placeholder='Enter your Address' onChange={(e)=>{setPimage(e.target.value)}} />
                </FormControl>
                <FormControl id="state">
                <FormLabel>State</FormLabel>
                <Input type="text" placeholder='Enter your Address' onChange={(e)=>{setPimage(e.target.value)}} />
                </FormControl>
                <FormControl id="pincode">
                <FormLabel>Pincode</FormLabel>
                <Input type="text" placeholder='Enter your Address' onChange={(e)=>{setPimage(e.target.value)}} />
                </FormControl>
                <FormControl id="contact">
                <FormLabel>Contact</FormLabel>
                <Input type="number" placeholder='Enter your contact' onChange={(e)=>{setPname(e.target.value)}} />
                </FormControl>
                <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder='Enter password' onChange={(e)=>{setPprice(e.target.value)}} />
                </FormControl>
                <FormControl id="reconfirm">
                <FormLabel>Confirm Password</FormLabel>
                <Input type="password"  placeholder='Re-enter password' onChange={(e)=>{setPimage(e.target.value)}} />
            </FormControl>
            </Grid>

            {/* <Grid templateColumns={['repeat(1,1fr)','repeat(3,1fr)','repeat(3,1fr)']} gap={6}>
            <FormControl id="email">
                <FormLabel>Contact</FormLabel>
                <Input type="number" placeholder='Enter your contact' onChange={(e)=>{setPname(e.target.value)}} />
                </FormControl>
                <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" placeholder='Enter password' onChange={(e)=>{setPprice(e.target.value)}} />
                </FormControl>
                <FormControl id="email">
                <FormLabel>Confirm Password</FormLabel>
                <Input type="password"  placeholder='Re-enter password' onChange={(e)=>{setPimage(e.target.value)}} />
            </FormControl>
            </Grid> */}
            <Stack spacing={10}>
              <Button
                m={'auto'}
                bg={'black'}
                color={'white'}
                w={'25%'}
                borderRadius={0}
                marginTop={'3%'}
                marginBottom={'2%'}
                onClick={sendData}
                _hover={{
                  bg: 'gray.700',
                  color:'white'
                }}>
                Create Account 
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>

        <Footer/>
    </div>
  )
}

export default Newaccount;