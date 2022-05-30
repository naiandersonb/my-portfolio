import { ActionIcon, Anchor, Button, Card, Group, Image, Text, Tooltip, useMantineTheme } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { useState } from 'react';
import { FiEye } from 'react-icons/fi';
import { Project } from '../../types/Project';
import { MyModal } from '../Modal';
import styles from './ProjectCard.module.scss';

type Props = {
  project: Project;
};

export const ProjectCard = ({ project }: Props) => {
  const [openModal, setOpenModal] = useState(false);
  const theme = useMantineTheme();
  const { hovered, ref } = useHover();

  return (
    <div className={styles.card__container}>
      <Card.Section>
        <Image src={project.img} alt={project.name} radius="md" height={300} />
      </Card.Section>

      <div ref={ref} className={styles.card__info}>
        {
          hovered &&
          <div className={styles.card__content
          }>
            <Text weight={600} style={{ color: '#fff', fontSize: 20 }}>
              {project.name}
            </Text>
            <Group position="apart" style={{ width: '100%' }}>
              <Tooltip
                label='Ver página'
                position='right'
              >
                <Anchor
                  variant='link'
                  href={project.demo}
                  target='_blank'
                >

                  <ActionIcon color='indigo' size='lg' variant='filled' radius='xl'>
                    <FiEye />
                  </ActionIcon>
                </Anchor>

              </Tooltip>
              <Button
                color='dark'
                variant='filled'
                onClick={() => setOpenModal(true)}
              >
                Ver mais
              </Button>
              {/* <Button
                color='dark'
                component='a'
                href={`/projects/${project.id}`}
                variant='filled'
              >
                Ver mais
              </Button> */}
            </Group>
          </div>
        }

      </div>

      <MyModal opened={openModal} setOpened={setOpenModal} item={project} />
    </div>
  );
};
