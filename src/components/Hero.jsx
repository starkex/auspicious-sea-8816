import React from 'react'
import {Box, Image, Heading, Button} from '@chakra-ui/react';

function Hero() {
  return (
    <Box w={['99%','100%','90%']} m={'auto'}>
        <Image src={'https://www.incimages.com/uploaded_files/image/1920x1080/getty_602420388_2000133520009280106_224556.jpg'} w={['100%','100%','100%']} h={['250px','350px','840px']} />
        <Box position={'absolute'} marginTop={['-46%','-48%','-32%']} bg={'rgba(0,0,0,0.5)'} padding={['3.5%','3%','3.5%']} marginLeft={['12%','11%','25%']}>
            <Heading color={'white'} textAlign={'center'} fontSize={['28px','40px','70px']} fontFamily={'freight-big-pro,Times,serif'} fontWeight={'500'} mb={[2,3,5]}>The <i> Holiday</i> sale is here</Heading>
            <Heading textAlign={'center'} fontSize={['12px','14px','18px']} color={'white'} fontWeight={400} letterSpacing={'1px'} mb={[4,4,8]}>No one does festive like Starkapps...</Heading>
            <Button fontSize={['13px','15px','18px']} borderRadius={0} w={['35%','35%','30%']} color={'white'} padding={['2%','3%','4%']} bg={'black'} _hover={{bg:'white',color:'black' }} marginLeft={['33%','35%','36%']} >Shop Now</Button>
        </Box>
    </Box>
  )
}

export default Hero