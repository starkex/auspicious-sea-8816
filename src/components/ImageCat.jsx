import { Box,SimpleGrid, Flex,Grid, Stack, Image, HStack, Button, Heading, Spacer} from '@chakra-ui/react'
import React from 'react'

function ImageCat() {
  return (
    <div>
        <Stack w={['100%','80%','70%']} m={'auto'} mt={10} mb={10}>
            
            <Grid templateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(2,1fr)"]}>
                <Box>
                    <Image src={'https://i.pinimg.com/originals/c5/3c/ba/c53cbae483bcb21ffddfba259ff40a03.jpg'} w={'100%'}/>
                </Box>
                <Box>
                    <Image src={'https://i.pinimg.com/originals/c5/3c/ba/c53cbae483bcb21ffddfba259ff40a03.jpg'} w={'100%'}/>
                </Box>
            </Grid>

            <Grid templateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(2,1fr)"]}>
                <Box>
                    <Image src={'https://i.pinimg.com/originals/c5/3c/ba/c53cbae483bcb21ffddfba259ff40a03.jpg'} w={'100%'}/>
                </Box>
                <Box>
                    <Image src={'https://i.pinimg.com/originals/c5/3c/ba/c53cbae483bcb21ffddfba259ff40a03.jpg'} w={'100%'}/>
                </Box>
            </Grid>

        </Stack>

        <HStack w={['100%','80%','60%']} m={'auto'} mt={10} mb={10}>
            <Grid w={'35%'} templateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(1,1fr)"]}>
                <Box w={'100%'} textAlign={'center'}>
                    <Heading>Shop New Arrivals</Heading>
                </Box>
            </Grid>
            <Grid w={'70%'} templateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(4,20%)"]} gap={10}>
                <Box w={'100%'}>
                    <Button w={'90%'}>Shop Womens</Button>
                </Box>
                <Box w={'100%'}>
                    <Button w={'90%'}>Shop Mens</Button>
                </Box>
                <Box w={'100%'}>
                    <Button w={'90%'}>Shop Girls</Button>
                </Box>
                <Box w={'100%'}>
                    <Button w={'90%'}>Shop Boys</Button>
                </Box>
            </Grid>
        </HStack>
    </div>
  )
}

export default ImageCat