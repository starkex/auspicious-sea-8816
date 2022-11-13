import React from 'react'
import {Grid, Box, Button, Heading} from '@chakra-ui/react';


function Topbanner() {
  return (
    <div>
            <Box backgroundImage={'https://www.jcrew.com/brand_creative/2021/202112-Gift/cashmere/2021gift_1116_cashmere_wccbaby_img0.jpg'} backgroundSize={'contain'} h={"400px"} w={'90%'} m={'auto'} mb={'5%'} mt={8} >
            <Grid w={'100%'} templateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(1,1fr)"]} marginTop={'5%'} marginBottom={'2%'} >
                <Box w={'100%'} textAlign={'center'} marginTop={'7%'}>
                    <Heading fontFamily={'freight-big-pro,Times,serif'} color={'white'} fontSize={'45px'} fontWeight={500}>The Cashere Collection</Heading>
                </Box>
            </Grid>

            <Box m={'auto'} w={'70%'} marginBottom={'2%'} alignItems={'center'}>
            <Grid w={['95%','100%','100%']} templateColumns={["repeat(4,1fr)","repeat(4,1fr)","repeat(5,1fr)"]} marginTop={'3%'} marginBottom={'2%'}>
                <Box w={'100%'} m={'auto'}>
                    <Button 
                    w={'90%'} 
                    fontSize={'sm'} 
                    borderRadius={0} 
                    border={'1px solid black'} 
                    bg={'white'} color={'black'} 
                    _hover={
                        { 
                            bg:'black',
                            color:'white', 
                            transition:'0.4s'
                        }}>
                            Womens
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
                            bg:'black',
                            color:'white', 
                            transition:'0.4s'
                        }}>
                            Mens
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
                            bg:'black',
                            color:'white', 
                            transition:'0.4s'
                        }}>
                            Boys
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
                            bg:'black',
                            color:'white', 
                            transition:'0.4s'
                        }}>
                            Girls
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
                            bg:'black',
                            color:'white', 
                            transition:'0.4s'
                        }}>
                            Baby
                    </Button>
                </Box>
              
            </Grid>
            </Box>
            </Box>
    </div>
  )
}

export default Topbanner