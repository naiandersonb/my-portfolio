/* eslint-disable react/no-children-prop */
import {
  Anchor, Badge,
  Card,
  Container,
  Group,
  SimpleGrid,
  Text,
  Title,
  Tooltip
} from '@mantine/core';
import type { NextPage } from 'next';
import Head from 'next/head';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { FiArrowUpRight } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import {
  SiCss3,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTypescript
} from 'react-icons/si';
import { Footer } from '../src/components/Footer';
import { Navbar } from '../src/components/Navbar';
import { ProjectCard } from '../src/components/ProjectCard';
import { projects } from '../src/data/projects';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  const whatsappLink =
    'https://wa.me/5599999358798?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20sobre%20um%20projeto';

  const skillsLinks = [
    {
      name: 'React JS',
      url: 'https://reactjs.org/',
      icon: <SiReact />,
    },
    {
      name: 'Typescript',
      url: 'https://www.typescriptlang.org/',
      icon: <SiTypescript />,
    },
    {
      name: 'Javascript',
      url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
      icon: <SiJavascript />,
    },
    {
      name: 'Html 5',
      url: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML',
      icon: <SiHtml5 />,
    },
    {
      name: 'Css 3',
      url: 'https://developer.mozilla.org/pt-BR/docs/Learn/CSS',
      icon: <SiCss3 />,
    },
    {
      name: 'Figma',
      url: 'https://www.figma.com/',
      icon: <SiFigma />,
    },
  ];

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Naianderson Bruno</title>
      </Head>

      <Navbar />
      <Container size="lg" px="md">
        <section className={styles.hero}>
          <Badge color="indigo" >
            Seja bem vindo(a)
          </Badge>
          <Title order={1} className={styles.hero__title}>
            Eu sou o Naianderson Bruno
          </Title>
          <Text className={styles.hero__subtitle}>
            Desenvolvedor Web Front End & UI Design desde de 2020
          </Text>
        </section>

        <section className={styles.projects}>
          <Title order={3} className={styles.project__title}>
            Meus Projetos
          </Title>

          <SimpleGrid
            cols={3} breakpoints={[{ maxWidth: 793, cols: 1 }]} spacing="xl">
            {projects.map((item) => (
              <ProjectCard key={item.id} project={item} />
            ))}
          </SimpleGrid>
        </section>

        <section className={styles.skills}>
          <Title order={2} style={{ color: '#f8f9fa' }}>
            Skills
          </Title>
          <Group position="center">
            {skillsLinks.map((item, index) => (
              <Anchor
                href={item.url}
                target="_blank"
                key={index}
                className={styles.skill__icon}
              >
                <Tooltip label={item.name} color='indigo'>
                  {item.icon}
                </Tooltip>
              </Anchor>
            ))}
          </Group>
        </section>

        <section className={styles.contacts} id='contacts'>
          <Group direction='column'>
            <Title order={3} style={{ color: '#f8f9fa' }}>
              Entre em contato
            </Title>
            <Card className={styles.card}>
              <Anchor
                href='mailto:nayanderson2014@gmail.com'
                target='_blank'
                className={styles.content__text}
                color='indigo'
              >
                <HiOutlineMail />
                <Text>Me envie um e-mail</Text>
              </Anchor>
              <FiArrowUpRight className={styles.icon__hover} />
            </Card>
          </Group>

          <Card className={styles.card}>
            <Anchor
              href={whatsappLink}
              target='_blank'
              className={styles.content__text}
              color='teal'
            >
              <AiOutlineWhatsApp />
              <Text>Fale comigo pelo whatsapp</Text>
            </Anchor>
            <FiArrowUpRight className={styles.icon__hover} />
          </Card>
        </section>

        <Footer />
      </Container>

    </>
  );
};

export default Home;
