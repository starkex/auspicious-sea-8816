import { Box, Grid, Stack, Image, HStack, Button, Heading} from '@chakra-ui/react'
import React from 'react'

function ImageCat() {
  return (
    <div>
        <Stack w={['100%','80%','70%']} m={'auto'} mt={10} mb={10}>
            
            <Grid templateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(2,1fr)"]}>
                <Box>
                    <Image src={'https://cdn.shopify.com/s/files/1/0432/6427/8679/t/10/assets/description_image_coloured_mineral_dye_denim_photos.jpg?v=1599781291'} w={'100%'}/>
                </Box>
                <Box>
                    <Image src={'https://www.orendtstudios.com/files/upload/portfolio/photo/photo-fashion-pr-produktionen-03.jpg'} w={'100%'}/>
                </Box>
            </Grid>

            <Grid templateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(2,1fr)"]} marginTop={'-2%'}>
                <Box>
                    <Image src={'https://www.orendtstudios.com/files/upload/portfolio/photo/photo-fashion-pr-produktionen-04.jpg'} w={'100%'}/>
                </Box>
                <Box>
                    <Image src={'https://pbs.twimg.com/media/FbFbFbxXkAEt1JZ.png'} w={'100%'}/>
                </Box>
            </Grid>

        </Stack>

        <HStack w={['100%','80%','60%']} m={'auto'} mt={10} mb={10}>
            <Grid w={'35%'} templateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(1,1fr)"]}>
                <Box w={'100%'} textAlign={'center'}>
                    <Heading fontFamily={'freight-big-pro,Times,serif'} fontWeight={400}>Shop New Arrivals</Heading>
                </Box>
            </Grid>

            <Grid w={'70%'} templateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(4,20%)"]} gap={10}>
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
                            Shop Womens
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
                            Shop Mens
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
                            Shop Girls
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
                            Shop Boys
                    </Button>
                </Box>
            </Grid>
        </HStack>
    </div>
  )
}

export default ImageCat;