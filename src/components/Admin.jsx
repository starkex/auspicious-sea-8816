import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Select,
    useColorModeValue,
    Grid,
  } from '@chakra-ui/react';
import axios from 'axios';


function Admin() {
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
      <Stack spacing={8} mx={'auto'} w={['95%','90%','80%']} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Add New Products</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <Grid templateColumns={['repeat(1,1fr)','repeat(3,1fr)','repeat(3,1fr)']} gap={6}>
                <FormControl id="email">
                <FormLabel>Product Name</FormLabel>
                <Input type="text" onChange={(e)=>{setPname(e.target.value)}} />
                </FormControl>
                <FormControl id="password">
                <FormLabel>Product Price</FormLabel>
                <Input type="text" onChange={(e)=>{setPprice(e.target.value)}}/>
                </FormControl>
                <FormControl id="email">
                <FormLabel>Product Image</FormLabel>
                <Input type="text" onChange={(e)=>{setPimage(e.target.value)}}/>
                </FormControl>
            </Grid>

            <Grid templateColumns={['repeat(1,1fr)','repeat(3,1fr)','repeat(3,1fr)']} gap={6}>
            <FormControl>
            <FormLabel>Select Product Size</FormLabel>
            <Select placeholder='Select size' value={newdata.size}>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>X</option>
                <option>XL</option>
                <option>XXL</option>
            </Select>
            </FormControl>
            <FormControl>
            <FormLabel>Select Currency</FormLabel>
            <Select placeholder='Select currency' value={newdata.currency}>
                <option>INR</option>
                <option>DOLLAR</option>
                <option>POUND</option>
            </Select>
            </FormControl>
            <FormControl>
            <FormLabel>Select Category</FormLabel>
            <Select placeholder='Select category' value={newdata.category}>
                <option>Best Seller</option>
                <option>Latest Collection</option>
                <option>ONLY A FEW LEFT</option>
            </Select>
            </FormControl>
            </Grid>
            <Stack spacing={10}>
              <Button
                m={'auto'}
                bg={'blue.400'}
                color={'white'}
                w={'30%'}
                marginTop={'3%'}
                marginBottom={'2%'}
                onClick={sendData}
                _hover={{
                  bg: 'blue.500',
                }}>
                Add Now
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

export default Admin