import { ActionIcon, Anchor, Group } from '@mantine/core';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

type Props = {
  direction: 'row' | 'column';
}
export const SocialLinks = ({ direction }: Props) => {
  return (
    <Group direction={direction} >
      <Anchor href='https://www.instagram.com/naiandersonbruno_/' rel="noreferrer" target='_blank' >
        <ActionIcon color="dark" size="lg" variant="filled" >
          <BsGithub />
        </ActionIcon>
      </Anchor>
      <Anchor href='https://github.com/naiandersonb' rel="noreferrer" target='_blank'>
        <ActionIcon color="dark" size="lg" variant="filled">
          <BsInstagram />
        </ActionIcon>
      </Anchor>
      <Anchor href='https://www.linkedin.com/in/naianderson-bruno-franca/' rel="noreferrer" target='_blank'>
        <ActionIcon color="dark" size="lg" variant="filled">
          <BsLinkedin />
        </ActionIcon>
      </Anchor>
    </Group>
  )
}
