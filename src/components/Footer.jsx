import React from 'react'
import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Input,
    Heading,
    Button,
    Image
  } from '@chakra-ui/react';
  import Logoimg from '../media/revisedLogo.png';
import {EmailIcon} from '@chakra-ui/icons';

function Footer() {
  return (
    <Box
      bg={'gray.100'}
      color={['black']}>
      <Container as={Stack} maxW={'80%'} py={12}>
        <SimpleGrid
          templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(5, 1fr)']}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
            <Image src={Logoimg} align={'center'} w={'100%'}></Image>
            </Box>
            <Text fontSize={'sm'}>
                © 2022 StarkApps
            </Text>
            <Stack direction={'row'} spacing={6}>
              <Link label={'Twitter'} href={'#'}>
                <EmailIcon/>
              </Link>
              <Link label={'YouTube'} href={'#'}>
                <EmailIcon/>
              </Link>
              <Link label={'Instagram'} href={'#'}>
                <EmailIcon/>
              </Link>
              <Link label={'Twitter'} href={'#'}>
                <EmailIcon/>
              </Link>
              <Link label={'YouTube'} href={'#'}>
                <EmailIcon/>
              </Link>
              <Link label={'Instagram'} href={'#'}>
                <EmailIcon/>
              </Link>
            </Stack>
            <Box>
                <Text>India</Text>
            </Box>
            <Box>
            <Image src={Logoimg} align={'center'} w={'100%'}></Image>
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <Heading size={'xs'}>Help</Heading>
            <Link href={'#'}>Customer Service</Link>
            <Link href={'#'}>Track Order</Link>
            <Link href={'#'}>Return Exchanges</Link>
            <Link href={'#'}>Shipping</Link>
            <Link href={'#'}>International Orders</Link>
            <Link href={'#'}>Contact Us</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Heading size={'xs'}>Quick Links</Heading>
            <Link href={'#'}>Find a Store</Link>
            <Link href={'#'}>Size Charts</Link>
            <Link href={'#'}>Offers & Promotions</Link>
            <Link href={'#'}>My favourites</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Heading size={'xs'}>About J.Crew</Heading>
            <Link href={'#'}>Our Story</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Social Responsibility</Link>
            <Link href={'#'}>California Transparency Act/Modern Slavery Act</Link>
            <Link href={'#'}>Investor Relations</Link>
            <Link href={'#'}>Terms of Use</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Diversity, Equity and Inclusion at J.Crew Group</Link>
          </Stack>
          <Stack align={'flex-start'}>
          <Heading size={'xs'}>Like Being First?</Heading>
          <Text fontSize={14}>Get can't-miss style news, before everybody else.</Text>

            <Stack direction={'row'}>
              <Input
                placeholder={'Your email address'}
                bg={'white'}
                borderRadius={0}
                _focus={{
                  bg: 'white',
                }}
              />
              <Button bg={'black'} color={'white'} borderRadius={0} p={[5,5,5,5]} fontSize={13} _hover={{ bg:'white', color:'black', transition:'0.4s'}}>Sign Up</Button>
            </Stack>

          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Footer;