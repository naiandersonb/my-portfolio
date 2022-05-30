import { Anchor, Button, Group, Image, Modal, Text, Title, useMantineTheme } from "@mantine/core";
import { Dispatch, SetStateAction } from "react";
import { BsGithub } from "react-icons/bs";
import { HiLightningBolt } from "react-icons/hi";
import { Project } from "../../types/Project";
import styles from './Modal.module.scss';

type Props = {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
  item: Project;
}

export const MyModal = ({ opened, setOpened, item }: Props) => {
  const theme = useMantineTheme();
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayBlur={10}
      // centered
      size='xl'
    >
      <div className={styles.modal__container}>
        <Image
          src={item.img}
          alt={item.name}
          radius={6}
        />
        <div className={styles.modal__content}>
          <Title order={4}>{item.name}</Title>
          {item.about?.map((text, index) => (
            <Text key={index}>{text}</Text>
          ))}

          <Group style={{ marginTop: 32 }}>
            <Button
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href={item.demo}
              leftIcon={<HiLightningBolt color={theme.colors.dark[0]} />}
              color="indigo"
            >
              Acessar a página
            </Button>
            {item.repo && (
              <Button
                component="a"
                target="_blank"
                rel="noopener noreferrer"
                href={item.repo}
                leftIcon={<BsGithub color={theme.colors.dark[0]} />}
                color="gray"
                style={{ color: theme.colors.dark[0] }}
              >
                Repositório
              </Button>
            )}
          </Group>
          <Group direction="column" style={{ marginTop: '2em' }}>
            {item.links && <Title order={4}>Links úteis</Title>}
            {item.links &&
              item.links.map((item, index) => (
                <Anchor key={index} href={item.link}>
                  {item.name}
                </Anchor>
              ))}
          </Group>
        </div>
      </div>
    </Modal>
  )
}
