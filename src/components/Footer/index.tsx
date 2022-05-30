import { Anchor, Container, Image, Text, useMantineTheme } from '@mantine/core';
import styles from './Footer.module.scss';

export const Footer = () => {
  const theme = useMantineTheme();

  return (
    <footer className={styles.footer__container}>
      <Container
        size="lg"
        px="md"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Anchor href="/" className="logo">
          <Image
            src="/images/logo.svg"
            alt="Naianderson Bruno - Ddesenvolvedor front end e UI Design"
          />
        </Anchor>
        <Text color="gray">&copy; 2022</Text>
      </Container>
    </footer>
  );
};
