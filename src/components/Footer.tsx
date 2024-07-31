import { Box, Flex, Icon, IconButton } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiZenn } from 'react-icons/si';

function Footer() {
  return (
    <Box as="footer" position="fixed" bottom={0} padding="30px">
      <Flex as="ul" listStyleType="none" gap="10px">
        <Box as="li">
          <IconButton
            as="a"
            href="https://x.com/suu_u522"
            target="_blank"
            aria-label="X Link"
            color={'primary'}
            icon={<Icon as={FaXTwitter} />}
            _hover={{ color: 'primary' }}
            variant="text"
          />
        </Box>
        <Box as="li">
          <IconButton
            as="a"
            href="https://github.com/shuuuu10-01"
            target="_blank"
            aria-label="Github Link"
            color="primary"
            icon={<Icon as={FaGithub} />}
            _hover={{ color: 'primary' }}
            variant="text"
          />
        </Box>
        <Box as="li">
          <IconButton
            as="a"
            href="https://zenn.dev/u_10"
            target="_blank"
            aria-label="Zenn Link"
            color="primary"
            icon={<Icon as={SiZenn} />}
            _hover={{ color: 'primary' }}
            variant="text"
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default Footer;
