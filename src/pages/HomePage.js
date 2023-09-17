import { ChakraProvider, Flex, Container, Heading, Stack, Text, Button, Icon, IconProps } from '@chakra-ui/react';
import dashboard from '../assets/dashboard.png';

const Illustration = (props) => {
  return (
    <img
      src={dashboard}
      alt="Dashboard"
      style={{
        height: props.height,
        border: '4px solid #eaeaea',
        borderRadius: '10px',

        objectFit: 'contain',
      }}
    />
  );
};

export default function HomePage() {
  return (
    <ChakraProvider>
      <Container maxW={'5xl'}>
        <Stack textAlign={'center'} align={'center'} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
          <Heading fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }} lineHeight={'110%'}>
            Enhance hospital efficiency.{' '}
            <Text as={'span'} color={'blue.400'}>
              Elevate patient care.
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'} fontSize={{ base: 'md', lg: 'lg' }}>
            Streamline OR communication and efficiency for faster patient care. The Velox digital platform optimizes
            workflows, reduces case downtime, and enhances hospital operations, ultimately helping more patients.
          </Text>
          <Stack spacing={6} direction={'row'}>
            <Button
              rounded={'full'}
              px={6}
              colorScheme={'blue'}
              bg={'blue.400'}
              _hover={{ bg: 'blue.500' }}
              onClick={() => {
                window.location.href = '/login';
              }}
            >
              Get started
            </Button>
            <Button rounded={'full'} px={6}>
              Learn more
            </Button>
          </Stack>
          <Flex w={'full'}>
            <Illustration height={{ sm: '24rem', lg: '28rem' }} mt={{ base: 12, sm: 16 }} />
          </Flex>
        </Stack>
      </Container>
    </ChakraProvider>
  );
}
