import { Anchor, Burger, Button, Container, Image } from '@mantine/core';
import cn from 'classnames';
import FileSaver from 'file-saver';
import { useState } from 'react';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { SocialLinks } from '../SocialLinks';
import styles from './Navbar.module.scss';

export const Navbar = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? 'Close navigation' : 'Open navigation';

  const handleDownload = async () => {
    FileSaver.saveAs(
      'https://github.com/naiandersonb/my-portfolio/raw/master/public/cv.pdf',
    );
  };

  const handleSetOpened = () => setOpened(!opened);

  return (
    <header className={styles.header}>
      <Container size="lg" px="md" className={styles.container}>
        <Anchor href="/" className="logo">
          <Image
            src="/images/logo.svg"
            alt="Naianderson Bruno - Ddesenvolvedor front end e UI Design"
          />
        </Anchor>
        <Burger
          className={styles.burger}
          opened={opened}
          title={title}
          onClick={handleSetOpened}
          aria-label={title}
          color="#fff"
          size="md"
        />
        <nav className={cn(styles.nav, `${opened ? styles.active : ''}`)}>
          <Anchor href="/#contacts" className={styles.nav__link}>
            Contatos
          </Anchor>

          <SocialLinks direction='row' />
          <div className={styles.button__container}>
            <Button
              color="indigo"
              variant="filled"
              fullWidth
              leftIcon={<AiOutlineCloudDownload />}
              onClick={handleDownload}
            >
              Baixar CV
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  );
};
function async() {
  throw new Error('Function not implemented.');
}
