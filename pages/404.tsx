import { Container } from "@mantine/core";
import { Footer } from "../src/components/Footer";
import { Navbar } from "../src/components/Navbar";
import styles from '../styles/Page404.module.scss';

const Custom404 = () => {
  return (
    <>
      <Navbar />
      <main className={styles.page_404__container}>
        <Container size="lg" px="md">
          <h1>404</h1>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default Custom404;
